import { biographies } from "./biographies";
import { affiliations, institutions } from "./affiliations";
import { nationalities } from "./nationalities";
import { countryFlagByName, getFlagIcons } from "./flag-icons";
import { pioneers } from "./pioneers";
import { portraits } from "./portraits";
import { relationships } from "./relationships";
import { sources } from "./sources";
import {
  getTimelineTrackId,
  pioneerTimelineTrack,
  timelineTracks,
} from "./timeline-tracks";

const duplicateValues = (values: string[]) =>
  values.filter((value, index) => values.indexOf(value) !== index);

const validateArchive = () => {
  const errors: string[] = [];
  const sourceIds = new Set(sources.map((source) => source.id));
  const pioneerIds = new Set(pioneers.map((pioneer) => pioneer.id));
  const timelineTrackIds = new Set(timelineTracks.map((track) => track.id));
  const institutionIds = new Set(institutions.map((institution) => institution.id));

  for (const duplicate of duplicateValues(sources.map((source) => source.id))) {
    errors.push(`중복 출처 ID: ${duplicate}`);
  }
  for (const duplicate of duplicateValues(
    pioneers.map((pioneer) => pioneer.id),
  )) {
    errors.push(`중복 인물 ID: ${duplicate}`);
  }
  for (const duplicate of duplicateValues(institutions.map((institution) => institution.id))) {
    errors.push(`중복 기관 ID: ${duplicate}`);
  }
  for (const duplicate of duplicateValues(
    pioneers.map((pioneer) => pioneer.slug),
  )) {
    errors.push(`중복 인물 slug: ${duplicate}`);
  }
  for (const duplicate of duplicateValues(
    relationships.map((relationship) => relationship.id),
  )) {
    errors.push(`중복 관계 ID: ${duplicate}`);
  }

  const checkSources = (owner: string, ids: string[]) => {
    for (const id of ids) {
      if (!sourceIds.has(id))
        errors.push(`${owner}가 존재하지 않는 출처 ${id}를 참조함`);
    }
  };

  for (const pioneer of pioneers) {
    if (!pioneerTimelineTrack[pioneer.id]) {
      errors.push(`${pioneer.id}: 연표 연구 계보 트랙 없음`);
    }
    if (!portraits[pioneer.id]) errors.push(`${pioneer.id}: 초상 없음`);
    if (!nationalities[pioneer.id])
      errors.push(`${pioneer.id}: 국적 정보 없음`);
    else if (getFlagIcons(nationalities[pioneer.id].flag).length === 0)
      errors.push(`${pioneer.id}: 국기 이미지 매핑 없음`);
    if ((biographies[pioneer.id]?.length ?? 0) < 3) {
      errors.push(`${pioneer.id}: 상세 생애가 3개 장보다 적음`);
    }
    if (pioneer.timeline.length < 3) {
      errors.push(`${pioneer.id}: 연표 사건이 3개보다 적음`);
    }
    if (
      pioneer.birthYear !== null &&
      pioneer.deathYear !== null &&
      pioneer.birthYear > pioneer.deathYear
    ) {
      errors.push(`${pioneer.id}: 생몰연도 역전`);
    }
    if (pioneer.birthYear === null && !pioneer.life.includes("미확인")) {
      errors.push(`${pioneer.id}: 생년 미확인 표시 누락`);
    }

    checkSources(`${pioneer.id}.sourceIds`, pioneer.sourceIds);
    pioneer.works.forEach((work, index) =>
      checkSources(`${pioneer.id}.works[${index}]`, work.sourceIds),
    );
    pioneer.sections.forEach((section, index) =>
      checkSources(`${pioneer.id}.sections[${index}]`, section.sourceIds),
    );
    pioneer.timeline.forEach((event, index) => {
      checkSources(`${pioneer.id}.timeline[${index}]`, event.sourceIds);
      const trackId = getTimelineTrackId(pioneer.id, event.year);
      if (!timelineTrackIds.has(trackId)) {
        errors.push(`${pioneer.id}.timeline[${index}]: 유효하지 않은 트랙 ${trackId}`);
      }
    });
    biographies[pioneer.id]?.forEach((section, index) =>
      checkSources(`${pioneer.id}.biography[${index}]`, section.sourceIds),
    );
  }

  for (const pioneerId of Object.keys(pioneerTimelineTrack)) {
    if (!pioneerIds.has(pioneerId)) {
      errors.push(`연표 트랙이 존재하지 않는 인물 ${pioneerId}를 참조함`);
    }
  }

  for (const relationship of relationships) {
    if (!pioneerIds.has(relationship.source)) {
      errors.push(`${relationship.id}: 출발 인물 ${relationship.source} 없음`);
    }
    if (!pioneerIds.has(relationship.target)) {
      errors.push(`${relationship.id}: 도착 인물 ${relationship.target} 없음`);
    }
    if (relationship.source === relationship.target) {
      errors.push(`${relationship.id}: 자기 자신과의 관계`);
    }
    checkSources(`${relationship.id}.sourceIds`, relationship.sourceIds);
  }

  for (const affiliation of affiliations) {
    if (!pioneerIds.has(affiliation.pioneerId)) errors.push(`${affiliation.id}: 인물 없음`);
    if (!institutionIds.has(affiliation.institutionId)) errors.push(`${affiliation.id}: 기관 없음`);
    if (affiliation.startYear && affiliation.endYear && affiliation.startYear > affiliation.endYear) {
      errors.push(`${affiliation.id}: 소속 기간 역전`);
    }
    checkSources(`${affiliation.id}.sourceIds`, affiliation.sourceIds);
  }

  for (const institution of institutions) {
    if (!countryFlagByName[institution.country]) {
      errors.push(`${institution.id}: 기관 국가 국기 이미지 매핑 없음`);
    }
    if (!Number.isFinite(institution.latitude) || institution.latitude < -90 || institution.latitude > 90) {
      errors.push(`${institution.id}: 유효하지 않은 위도`);
    }
    if (!Number.isFinite(institution.longitude) || institution.longitude < -180 || institution.longitude > 180) {
      errors.push(`${institution.id}: 유효하지 않은 경도`);
    }
    if (!institution.coordinateSourceUrl) {
      errors.push(`${institution.id}: 좌표 근거 없음`);
    }
    if (institution.imageUrl && (!institution.imageSourceUrl || !institution.imageLicense)) {
      errors.push(`${institution.id}: 기관 이미지 근거 또는 권리 정보 없음`);
    }
    if (institution.kind === "university" && (!institution.imageUrl || institution.imageKind !== "emblem")) {
      errors.push(`${institution.id}: 대학 엠블럼 이미지 없음`);
    }
  }

  const relationshipDegree = new Map(
    pioneers.map((pioneer) => [pioneer.id, 0]),
  );
  for (const relationship of relationships) {
    relationshipDegree.set(
      relationship.source,
      (relationshipDegree.get(relationship.source) ?? 0) + 1,
    );
    relationshipDegree.set(
      relationship.target,
      (relationshipDegree.get(relationship.target) ?? 0) + 1,
    );
  }
  for (const [pioneerId, degree] of relationshipDegree) {
    if (degree < 2) {
      errors.push(`${pioneerId}: 관계도 연결이 ${degree}개로 최소 2개 미만`);
    }
  }

  if (errors.length > 0) {
    throw new Error(
      `EdTech Pantheon 데이터 무결성 검사 실패:\n- ${errors.join("\n- ")}`,
    );
  }

  return {
    pioneers: pioneers.length,
    portraits: Object.values(portraits).filter(Boolean).length,
    biographies: Object.keys(biographies).length,
    relationships: relationships.length,
    sources: sources.length,
  };
};

export const archiveIntegrity = validateArchive();
