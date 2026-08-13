import { useEffect, useMemo, useRef, useState } from "react";
import type { Pioneer, Relationship } from "../data/types";

type GraphPortrait = {
  src: string;
  objectPosition?: string;
  objectScale?: number;
  transformOrigin?: string;
  nationality: { flag: string; label: string; note: string };
};

type Props = {
  pioneers: Pioneer[];
  relationships: Relationship[];
  portraits: Record<string, GraphPortrait | null>;
  baseUrl: string;
};

const currentYear = new Date().getFullYear();
const laneCount = 10;
const laneBounds = { start: 9.5, end: 95 };
const axisPadding = { top: 5.5, bottom: 5.5 };

const confidenceLabel: Record<Relationship["confidence"], string> = {
  documented: "직접 기록됨",
  "scholarly-consensus": "학술적 합의",
  contested: "해석적 연결",
};

const layerLabel: Record<Relationship["layer"] | "all", string> = {
  all: "전체 연결",
  lineage: "사상 계보",
  comparison: "개념 비교",
};

const getAnchorYear = (pioneer: Pioneer) =>
  pioneer.birthYear ?? Math.min(...pioneer.timeline.map((event) => event.year));

export default function RelationshipGraph({
  pioneers,
  relationships,
  portraits,
  baseUrl,
}: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [filter, setFilter] = useState<Relationship["layer"] | "all">("all");
  const [isCompact, setIsCompact] = useState(false);
  const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const syncCompactLayout = () => setIsCompact(media.matches);
    syncCompactLayout();
    media.addEventListener("change", syncCompactLayout);
    return () => media.removeEventListener("change", syncCompactLayout);
  }, []);

  const pioneerById = useMemo(
    () => Object.fromEntries(pioneers.map((pioneer) => [pioneer.id, pioneer])),
    [pioneers],
  );

  const axis = useMemo(() => {
    const knownBirths = pioneers
      .map((pioneer) => pioneer.birthYear)
      .filter((year): year is number => year !== null);
    const knownDeaths = pioneers
      .map((pioneer) => pioneer.deathYear)
      .filter((year): year is number => year !== null);
    const start = Math.floor((Math.min(...knownBirths) - 5) / 10) * 10;
    const end =
      Math.ceil((Math.max(currentYear, ...knownDeaths) + 4) / 10) * 10;
    const tickStep = end - start > 160 ? 20 : 10;
    const ticks = Array.from(
      { length: Math.floor((end - start) / tickStep) + 1 },
      (_, index) => start + index * tickStep,
    );
    return { start, end, ticks };
  }, [pioneers]);

  const yearToY = (year: number) =>
    axisPadding.top +
    ((year - axis.start) / (axis.end - axis.start)) *
      (100 - axisPadding.top - axisPadding.bottom);

  const activeLaneCount = isCompact ? 4 : laneCount;

  const positions = useMemo(() => {
    const laneLastYear = Array.from(
      { length: activeLaneCount },
      () => -Infinity,
    );
    const activeLaneBounds = isCompact ? { start: 23, end: 89 } : laneBounds;
    const ordered = [...pioneers].sort(
      (a, b) =>
        getAnchorYear(a) - getAnchorYear(b) || a.nameEn.localeCompare(b.nameEn),
    );

    return Object.fromEntries(
      ordered.map((pioneer) => {
        const anchorYear = getAnchorYear(pioneer);
        const lane = laneLastYear.indexOf(Math.min(...laneLastYear));
        laneLastYear[lane] = anchorYear;
        return [
          pioneer.id,
          {
            x:
              activeLaneBounds.start +
              (lane * (activeLaneBounds.end - activeLaneBounds.start)) /
                (activeLaneCount - 1),
            y: yearToY(anchorYear),
            anchorYear,
            estimatedAnchor: pioneer.birthYear === null,
          },
        ];
      }),
    ) as Record<
      string,
      { x: number; y: number; anchorYear: number; estimatedAnchor: boolean }
    >;
  }, [pioneers, axis.start, axis.end, activeLaneCount, isCompact]);

  const visible = useMemo(
    () =>
      filter === "all"
        ? relationships
        : relationships.filter((relationship) => relationship.layer === filter),
    [filter, relationships],
  );
  const active =
    visible.find((relationship) => relationship.id === activeId) ?? null;
  const selectedPioneer = selectedNodeId ? pioneerById[selectedNodeId] : null;
  const selectedRelationships = selectedNodeId
    ? visible.filter(
        (relationship) =>
          relationship.source === selectedNodeId ||
          relationship.target === selectedNodeId,
      )
    : [];
  const selectedNeighborIds = new Set(
    selectedRelationships.flatMap((relationship) => [
      relationship.source,
      relationship.target,
    ]),
  );
  const lifespanPioneer = pioneerById[hoveredNodeId ?? selectedNodeId ?? ""];
  const lifespanPosition = lifespanPioneer
    ? positions[lifespanPioneer.id]
    : null;

  const clearSelection = () => {
    setActiveId(null);
    setSelectedNodeId(null);
  };

  const selectNode = (pioneerId: string) => {
    const shouldClear = selectedNodeId === pioneerId && activeId === null;
    setActiveId(null);
    setSelectedNodeId(shouldClear ? null : pioneerId);
  };

  const focusNode = (pioneerId: string) => {
    setActiveId(null);
    setSelectedNodeId(pioneerId);
    requestAnimationFrame(() => {
      nodeRefs.current[pioneerId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    });
  };

  const selectRelationship = (relationshipId: string, keepNode = false) => {
    setActiveId(relationshipId);
    if (!keepNode) setSelectedNodeId(null);
  };

  return (
    <div className="graph-app">
      <div className="graph-toolbar">
        <div className="graph-filter-label">관계 레이어</div>
        <div
          className="graph-filters"
          role="tablist"
          aria-label="관계 레이어 필터"
        >
          {(["all", "lineage", "comparison"] as const).map((layer) => (
            <button
              key={layer}
              type="button"
              className={filter === layer ? "selected" : ""}
              onClick={() => {
                setFilter(layer);
                clearSelection();
              }}
              role="tab"
              aria-selected={filter === layer}
            >
              {layerLabel[layer]}
            </button>
          ))}
        </div>
        <label className="graph-person-finder">
          <span>인물 바로가기</span>
          <select
            value={selectedNodeId ?? ""}
            onChange={(event) => {
              if (event.target.value) focusNode(event.target.value);
              else clearSelection();
            }}
          >
            <option value="">{pioneers.length}명 중 선택</option>
            {[...pioneers]
              .sort(
                (a, b) =>
                  getAnchorYear(a) - getAnchorYear(b) ||
                  a.nameKo.localeCompare(b.nameKo, "ko"),
              )
              .map((pioneer) => (
                <option key={pioneer.id} value={pioneer.id}>
                  {pioneer.nameKo} · {pioneer.life}
                </option>
              ))}
          </select>
        </label>
        <span className="graph-legend">
          <i className="lineage" />
          계보 <i className="comparison" />
          비교
        </span>
        <span className="graph-count">{visible.length} connections</span>
      </div>

      <p className="graph-instruction">
        <strong>CLICK A PORTRAIT</strong>
        학자의 사진을 클릭하면 해당 학자의 사상계보와 개념비교 관계를
        명확하게 확인할 수 있습니다.
      </p>

      <div className="graph-scroll">
        <div className="graph-canvas" aria-label="교육공학 선구자 관계도">
          <div className="graph-time-axis" aria-hidden="true">
            <span className="graph-axis-title">
              YEAR ↓ / 초상은 출생연도 · 생년 미확인 인물은 첫 확인 경력 연도
            </span>
            {axis.ticks.map((year) => (
              <span
                key={year}
                className="graph-time-tick"
                style={{ top: `${yearToY(year)}%` }}
              >
                <b>{year}</b>
              </span>
            ))}
          </div>

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="graph-lines"
            aria-hidden="true"
          >
            {visible.map((relationship) => {
              const source = positions[relationship.source];
              const target = positions[relationship.target];
              const isActive = active?.id === relationship.id;
              const isRelated =
                !active &&
                Boolean(selectedNodeId) &&
                (relationship.source === selectedNodeId ||
                  relationship.target === selectedNodeId);
              const isDimmed =
                Boolean(active || selectedNodeId) && !isActive && !isRelated;
              return (
                <line
                  key={relationship.id}
                  x1={source.x}
                  y1={source.y}
                  x2={target.x}
                  y2={target.y}
                  className={`${relationship.layer} ${isActive ? "active" : ""} ${isRelated ? "related" : ""} ${isDimmed ? "dimmed" : ""}`}
                  style={
                    {
                      "--edge-accent":
                        selectedPioneer?.accent ??
                        pioneerById[relationship.source].accent,
                    } as React.CSSProperties
                  }
                />
              );
            })}
          </svg>

          {lifespanPioneer?.birthYear && lifespanPosition && (
            <div
              className="graph-life-range"
              style={
                {
                  left: `${lifespanPosition.x}%`,
                  top: `${yearToY(lifespanPioneer.birthYear)}%`,
                  height: `${Math.max(
                    1,
                    yearToY(lifespanPioneer.deathYear ?? currentYear) -
                      yearToY(lifespanPioneer.birthYear),
                  )}%`,
                  "--life-color": lifespanPioneer.accent,
                } as React.CSSProperties
              }
              aria-hidden="true"
            >
              <span>{lifespanPioneer.birthYear}</span>
              <i />
              <span>{lifespanPioneer.deathYear ?? currentYear}</span>
            </div>
          )}

          {pioneers.map((pioneer) => {
            const pos = positions[pioneer.id];
            const portrait = portraits[pioneer.id];
            const isSelected = !active && selectedNodeId === pioneer.id;
            const isConnected = active
              ? active.source === pioneer.id || active.target === pioneer.id
              : Boolean(selectedNodeId) &&
                selectedNeighborIds.has(pioneer.id) &&
                !isSelected;
            const isDimmed =
              Boolean(active || selectedNodeId) && !isSelected && !isConnected;
            const lifeText = pioneer.birthYear
              ? `${pioneer.birthYear}—${pioneer.deathYear ?? "현재"}`
              : "생몰연도 공개 전거 미확인";

            return (
              <button
                key={pioneer.id}
                ref={(node) => {
                  nodeRefs.current[pioneer.id] = node;
                }}
                type="button"
                className={`graph-node ${isSelected ? "selected" : ""} ${isConnected ? "connected" : ""} ${isDimmed ? "dimmed" : ""} ${pos.estimatedAnchor ? "estimated-anchor" : ""}`}
                style={
                  {
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    "--node-accent": pioneer.accent,
                  } as React.CSSProperties
                }
                onMouseEnter={() => setHoveredNodeId(pioneer.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                onFocus={() => setHoveredNodeId(pioneer.id)}
                onBlur={() => setHoveredNodeId(null)}
                onClick={() => selectNode(pioneer.id)}
                aria-label={`${pioneer.nameKo}, ${pioneer.nameEn}. ${lifeText}. 연결 관계 보기`}
                aria-pressed={isSelected}
              >
                <span className="graph-node-ring">
                  {portrait ? (
                    <img
                      src={`${baseUrl}${portrait.src}`}
                      alt=""
                      draggable={false}
                      style={{
                        objectPosition: portrait.objectPosition,
                        transform: portrait.objectScale
                          ? `scale(${portrait.objectScale})`
                          : undefined,
                        transformOrigin: portrait.transformOrigin,
                      }}
                    />
                  ) : (
                    <span>{pioneer.initials}</span>
                  )}
                </span>
                {portrait && (
                  <span
                    className="nationality-badge is-compact graph-nationality"
                    title={portrait.nationality.note}
                    aria-label={`국적: ${portrait.nationality.label}`}
                  >
                    <b aria-hidden="true">{portrait.nationality.flag}</b>
                  </span>
                )}
                <span className="graph-node-label">{pioneer.nameKo}</span>
                <span className="graph-node-years">{lifeText}</span>
                <span className="graph-lifespan" aria-hidden="true">
                  {pioneer.birthYear ? (
                    <>
                      <b>{pioneer.birthYear}</b>
                      <i />
                      <b>{pioneer.deathYear ?? "현재"}</b>
                    </>
                  ) : (
                    <b>생몰연도 공개 전거 미확인</b>
                  )}
                </span>
              </button>
            );
          })}
          {!active && !selectedPioneer && (
            <div className="graph-hint">
              {isCompact
                ? "초상 탭: 직접 연결 확인"
                : "마우스 오버: 반투명 생애 막대 · 클릭: 직접 연결"}
            </div>
          )}
        </div>
      </div>

      <div
        className={`graph-detail ${active || selectedPioneer ? "has-selection" : ""}`}
        aria-live="polite"
      >
        {active ? (
          <>
            <div className="detail-kicker">
              <span className="relation-pill">
                {layerLabel[active.layer]} · {active.type}
              </span>
              <span>{confidenceLabel[active.confidence]}</span>
            </div>
            <h3>
              {pioneerById[active.source].nameKo}{" "}
              <span>{active.layer === "lineage" ? "→" : "↔"}</span>{" "}
              {pioneerById[active.target].nameKo}
            </h3>
            <p className="detail-label">{active.label}</p>
            <p>{active.description}</p>
            <div className="detail-sources">
              근거 출처{" "}
              {active.sourceIds.map((id) => (
                <span key={id}>{id}</span>
              ))}
            </div>
            <div className="detail-links">
              <a
                href={`${baseUrl}pioneers/${pioneerById[active.source].slug}/`}
              >
                {pioneerById[active.source].nameKo} 읽기 ↗
              </a>
              <a
                href={`${baseUrl}pioneers/${pioneerById[active.target].slug}/`}
              >
                {pioneerById[active.target].nameKo} 읽기 ↗
              </a>
            </div>
            <div className="graph-detail-actions">
              {selectedPioneer && (
                <button type="button" onClick={() => setActiveId(null)}>
                  ← {selectedPioneer.nameKo}의 전체 연결
                </button>
              )}
              <button type="button" onClick={clearSelection}>
                선택 해제
              </button>
            </div>
          </>
        ) : selectedPioneer ? (
          <div className="graph-person-detail">
            <div className="graph-person-summary">
              <span className="graph-person-photo-wrap">
                <span
                  className="graph-person-photo"
                  style={
                    {
                      "--node-accent": selectedPioneer.accent,
                    } as React.CSSProperties
                  }
                >
                  {portraits[selectedPioneer.id] ? (
                    <img
                      src={`${baseUrl}${portraits[selectedPioneer.id]!.src}`}
                      alt=""
                      style={{
                        objectPosition:
                          portraits[selectedPioneer.id]!.objectPosition,
                        transform: portraits[selectedPioneer.id]!.objectScale
                          ? `scale(${portraits[selectedPioneer.id]!.objectScale})`
                          : undefined,
                        transformOrigin:
                          portraits[selectedPioneer.id]!.transformOrigin,
                      }}
                    />
                  ) : (
                    selectedPioneer.initials
                  )}
                </span>
                {portraits[selectedPioneer.id] && (
                  <span
                    className="nationality-badge graph-person-nationality"
                    title={portraits[selectedPioneer.id]!.nationality.note}
                    aria-label={`국적: ${portraits[selectedPioneer.id]!.nationality.label}`}
                  >
                    <b aria-hidden="true">
                      {portraits[selectedPioneer.id]!.nationality.flag}
                    </b>
                    <small>
                      {portraits[selectedPioneer.id]!.nationality.label}
                    </small>
                  </span>
                )}
              </span>
              <div>
                <div className="detail-kicker">
                  SELECTED PIONEER · {selectedRelationships.length} CONNECTIONS
                </div>
                <h3>{selectedPioneer.nameKo}</h3>
                <p className="detail-label">
                  {selectedPioneer.nameEn} · {selectedPioneer.life}
                </p>
                <p>{selectedPioneer.thesis}</p>
                <div className="detail-links">
                  <a href={`${baseUrl}pioneers/${selectedPioneer.slug}/`}>
                    인물 상세 읽기 ↗
                  </a>
                </div>
              </div>
            </div>
            <div
              className="graph-node-relations"
              aria-label={`${selectedPioneer.nameKo}의 직접 연결`}
            >
              {selectedRelationships.length > 0 ? (
                selectedRelationships.map((relationship) => {
                  const counterpartId =
                    relationship.source === selectedPioneer.id
                      ? relationship.target
                      : relationship.source;
                  return (
                    <button
                      key={relationship.id}
                      type="button"
                      onClick={() => selectRelationship(relationship.id, true)}
                    >
                      <span>{layerLabel[relationship.layer]}</span>
                      <strong>{pioneerById[counterpartId].nameKo}</strong>
                      <small>{relationship.label} →</small>
                    </button>
                  );
                })
              ) : (
                <p>선택한 레이어에 해당하는 직접 연결이 없습니다.</p>
              )}
            </div>
            <button
              className="graph-clear-selection"
              type="button"
              onClick={clearSelection}
            >
              선택 해제
            </button>
          </div>
        ) : (
          <div className="graph-detail-empty">
            <span>01</span>
            <p>
              초상을 선택하면 해당 인물과 직접 이어진 선·인물·관계 근거를 한
              번에 확인할 수 있습니다.
            </p>
          </div>
        )}
      </div>

      <div className="graph-table-wrap">
        <table className="graph-table">
          <caption className="sr-only">교육공학 선구자 관계 목록</caption>
          <thead>
            <tr>
              <th>연결</th>
              <th>레이어·유형</th>
              <th>핵심 문장</th>
              <th>근거</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((relationship) => (
              <tr
                key={relationship.id}
                className={active?.id === relationship.id ? "selected" : ""}
              >
                <td data-label="연결">
                  <button
                    type="button"
                    aria-pressed={active?.id === relationship.id}
                    onClick={() => selectRelationship(relationship.id)}
                  >
                    {pioneerById[relationship.source].nameKo}{" "}
                    {relationship.layer === "lineage" ? "→" : "↔"}{" "}
                    {pioneerById[relationship.target].nameKo}
                  </button>
                </td>
                <td data-label="레이어·유형">
                  <span className="relation-pill">
                    {layerLabel[relationship.layer]} · {relationship.type}
                  </span>
                </td>
                <td data-label="핵심 문장">{relationship.label}</td>
                <td data-label="근거">{relationship.sourceIds.length} sources</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
