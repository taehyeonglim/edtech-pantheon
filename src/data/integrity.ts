import { biographies } from "./biographies";
import { nationalities } from "./nationalities";
import { pioneers } from "./pioneers";
import { portraits } from "./portraits";
import { relationships } from "./relationships";
import { sources } from "./sources";

const duplicateValues = (values: string[]) =>
  values.filter((value, index) => values.indexOf(value) !== index);

const validateArchive = () => {
  const errors: string[] = [];
  const sourceIds = new Set(sources.map((source) => source.id));
  const pioneerIds = new Set(pioneers.map((pioneer) => pioneer.id));

  for (const duplicate of duplicateValues(sources.map((source) => source.id))) {
    errors.push(`중복 출처 ID: ${duplicate}`);
  }
  for (const duplicate of duplicateValues(
    pioneers.map((pioneer) => pioneer.id),
  )) {
    errors.push(`중복 인물 ID: ${duplicate}`);
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
    if (!portraits[pioneer.id]) errors.push(`${pioneer.id}: 초상 없음`);
    if (!nationalities[pioneer.id])
      errors.push(`${pioneer.id}: 국적 정보 없음`);
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
    pioneer.timeline.forEach((event, index) =>
      checkSources(`${pioneer.id}.timeline[${index}]`, event.sourceIds),
    );
    biographies[pioneer.id]?.forEach((section, index) =>
      checkSources(`${pioneer.id}.biography[${index}]`, section.sourceIds),
    );
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
