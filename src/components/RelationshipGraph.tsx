import { useMemo, useState } from 'react';
import type { Pioneer, Relationship } from '../data/types';

type GraphPortrait = { src: string; nationality: { flag: string; label: string; note: string } };
type Props = {
  pioneers: Pioneer[];
  relationships: Relationship[];
  portraits: Record<string, GraphPortrait | null>;
  baseUrl: string;
};

const verticalPositions: Record<string, number> = {
  dewey: 27, thorndike: 69, vygotsky: 43, skinner: 77, bloom: 57, gagne: 18,
  bruner: 37, bandura: 79, merrill: 27, keller: 63, papert: 47, mayer: 78
};

const birthAxis = { start: 1850, end: 1950, left: 7.5, right: 92.5 };
const birthTicks = [1850, 1870, 1890, 1910, 1930, 1950];
const lifeYears = (life: string) => {
  const years = life.match(/\d{4}/g)?.map(Number) ?? [];
  return { birth: years[0], death: years[1] ?? null };
};
const yearToX = (year: number) => Number((birthAxis.left + ((year - birthAxis.start) / (birthAxis.end - birthAxis.start)) * (birthAxis.right - birthAxis.left)).toFixed(2));

const confidenceLabel: Record<Relationship['confidence'], string> = {
  documented: '직접 기록됨',
  'scholarly-consensus': '학술적 합의',
  contested: '해석적 연결'
};

export default function RelationshipGraph({ pioneers, relationships, portraits, baseUrl }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [filter, setFilter] = useState('전체');
  const pioneerById = useMemo(() => Object.fromEntries(pioneers.map((pioneer) => [pioneer.id, pioneer])), [pioneers]);
  const positions = useMemo(() => Object.fromEntries(pioneers.map((pioneer) => {
    const { birth } = lifeYears(pioneer.life);
    return [pioneer.id, { x: yearToX(birth), y: verticalPositions[pioneer.id] ?? 50 }];
  })), [pioneers]);
  const types = useMemo(() => ['전체', ...Array.from(new Set(relationships.map((relationship) => relationship.type)))], [relationships]);
  const visible = useMemo(() => filter === '전체' ? relationships : relationships.filter((relationship) => relationship.type === filter), [filter, relationships]);
  const active = visible.find((relationship) => relationship.id === activeId) ?? null;
  const selectedPioneer = selectedNodeId ? pioneerById[selectedNodeId] : null;
  const selectedLifespan = selectedPioneer ? lifeYears(selectedPioneer.life) : null;
  const selectedRelationships = selectedNodeId
    ? visible.filter((relationship) => relationship.source === selectedNodeId || relationship.target === selectedNodeId)
    : [];
  const selectedNeighborIds = new Set(selectedRelationships.flatMap((relationship) => [relationship.source, relationship.target]));

  const clearSelection = () => {
    setActiveId(null);
    setSelectedNodeId(null);
  };

  const selectNode = (pioneerId: string) => {
    const shouldClear = selectedNodeId === pioneerId && activeId === null;
    setActiveId(null);
    setSelectedNodeId(shouldClear ? null : pioneerId);
  };

  const selectRelationship = (relationshipId: string, keepNode = false) => {
    setActiveId(relationshipId);
    if (!keepNode) setSelectedNodeId(null);
  };

  return <div className="graph-app">
    <div className="graph-toolbar">
      <div className="graph-filter-label">관계 유형</div>
      <div className="graph-filters" role="tablist" aria-label="관계 유형 필터">
        {types.map((type) => <button key={type} type="button" className={filter === type ? 'selected' : ''} onClick={() => { setFilter(type); clearSelection(); }} role="tab" aria-selected={filter === type}>{type}</button>)}
      </div>
      <span className="graph-count">{visible.length} connections</span>
    </div>
    <div className="graph-canvas" aria-label="교육공학 선구자 관계도">
      <div className="graph-time-axis" aria-hidden="true">
        <span className="graph-axis-title">BIRTH YEAR / 출생연도</span>
        {birthTicks.map((year) => <span key={year} className="graph-time-tick" style={{ left: `${yearToX(year)}%` }}><b>{year}</b></span>)}
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="graph-lines" aria-hidden="true">
        {visible.map((relationship) => {
          const source = positions[relationship.source];
          const target = positions[relationship.target];
          const isActive = active?.id === relationship.id;
          const isRelated = !active && Boolean(selectedNodeId) && (relationship.source === selectedNodeId || relationship.target === selectedNodeId);
          const isDimmed = Boolean(active || selectedNodeId) && !isActive && !isRelated;
          return <line
            key={relationship.id}
            x1={source.x}
            y1={source.y}
            x2={target.x}
            y2={target.y}
            className={`${isActive ? 'active' : ''} ${isRelated ? 'related' : ''} ${isDimmed ? 'dimmed' : ''}`}
            style={{ '--edge-accent': selectedPioneer?.accent ?? pioneerById[relationship.source].accent } as React.CSSProperties}
          />;
        })}
      </svg>
      {pioneers.map((pioneer) => {
        const pos = positions[pioneer.id];
        const portrait = portraits[pioneer.id];
        const lifespan = lifeYears(pioneer.life);
        const lifespanEnd = lifespan.death ?? '현재';
        const isSelected = !active && selectedNodeId === pioneer.id;
        const isConnected = active
          ? active.source === pioneer.id || active.target === pioneer.id
          : Boolean(selectedNodeId) && selectedNeighborIds.has(pioneer.id) && !isSelected;
        const isDimmed = Boolean(active || selectedNodeId) && !isSelected && !isConnected;
        return <button
          key={pioneer.id}
          type="button"
          className={`graph-node ${isSelected ? 'selected' : ''} ${isConnected ? 'connected' : ''} ${isDimmed ? 'dimmed' : ''}`}
          style={{ left: `${pos.x}%`, top: `${pos.y}%`, '--node-accent': pioneer.accent } as React.CSSProperties}
          onClick={() => selectNode(pioneer.id)}
          aria-label={`${pioneer.nameKo}, ${pioneer.nameEn}. 생애 ${lifespan.birth}년부터 ${lifespanEnd}${lifespan.death ? '년' : ''}까지. 연결 관계 보기`}
          aria-pressed={isSelected}
        >
          <span className="graph-node-ring">
            {portrait
              ? <img src={`${baseUrl}${portrait.src}`} alt="" draggable={false} />
              : <span>{pioneer.initials}</span>}
          </span>
          {portrait && <span className="nationality-badge is-compact graph-nationality" title={portrait.nationality.note} aria-label={`국적: ${portrait.nationality.label}`}><b aria-hidden="true">{portrait.nationality.flag}</b></span>}
          <span className="graph-node-label">{pioneer.nameKo}</span>
          <span className="graph-lifespan" aria-hidden="true"><b>{lifespan.birth}</b><i></i><b>{lifespanEnd}</b></span>
        </button>;
      })}
      {!active && !selectedPioneer && <div className="graph-hint">마우스 오버: 생애 · 클릭: 직접 연결</div>}
    </div>
    <div className={`graph-detail ${active || selectedPioneer ? 'has-selection' : ''}`} aria-live="polite">
      {active ? <>
        <div className="detail-kicker"><span className="relation-pill">{active.type}</span><span>{confidenceLabel[active.confidence]}</span></div>
        <h3>{pioneerById[active.source].nameKo} <span>→</span> {pioneerById[active.target].nameKo}</h3>
        <p className="detail-label">{active.label}</p><p>{active.description}</p>
        <div className="detail-sources">근거 출처 {active.sourceIds.map((id) => <span key={id}>{id}</span>)}</div>
        <div className="detail-links"><a href={`${baseUrl}pioneers/${pioneerById[active.source].slug}/`}>{pioneerById[active.source].nameKo} 읽기 ↗</a><a href={`${baseUrl}pioneers/${pioneerById[active.target].slug}/`}>{pioneerById[active.target].nameKo} 읽기 ↗</a></div>
        <div className="graph-detail-actions">
          {selectedPioneer && <button type="button" onClick={() => setActiveId(null)}>← {selectedPioneer.nameKo}의 전체 연결</button>}
          <button type="button" onClick={clearSelection}>선택 해제</button>
        </div>
      </> : selectedPioneer ? <div className="graph-person-detail">
        <div className="graph-person-summary">
          <span className="graph-person-photo-wrap">
            <span className="graph-person-photo" style={{ '--node-accent': selectedPioneer.accent } as React.CSSProperties}>
              {portraits[selectedPioneer.id]
                ? <img src={`${baseUrl}${portraits[selectedPioneer.id]!.src}`} alt="" />
                : selectedPioneer.initials}
            </span>
            {portraits[selectedPioneer.id] && <span className="nationality-badge graph-person-nationality" title={portraits[selectedPioneer.id]!.nationality.note} aria-label={`국적: ${portraits[selectedPioneer.id]!.nationality.label}`}><b aria-hidden="true">{portraits[selectedPioneer.id]!.nationality.flag}</b><small>{portraits[selectedPioneer.id]!.nationality.label}</small></span>}
          </span>
          <div>
            <div className="detail-kicker">SELECTED PIONEER · {selectedRelationships.length} CONNECTIONS</div>
            <h3>{selectedPioneer.nameKo}</h3>
            <p className="detail-label">{selectedPioneer.nameEn} · {selectedLifespan?.birth}—{selectedLifespan?.death ?? '현재'}</p>
            <p>{selectedPioneer.thesis}</p>
            <div className="detail-links"><a href={`${baseUrl}pioneers/${selectedPioneer.slug}/`}>인물 상세 읽기 ↗</a></div>
          </div>
        </div>
        <div className="graph-node-relations" aria-label={`${selectedPioneer.nameKo}의 직접 연결`}>
          {selectedRelationships.length > 0
            ? selectedRelationships.map((relationship) => {
              const counterpartId = relationship.source === selectedPioneer.id ? relationship.target : relationship.source;
              return <button key={relationship.id} type="button" onClick={() => selectRelationship(relationship.id, true)}>
                <span>{relationship.type}</span>
                <strong>{pioneerById[counterpartId].nameKo}</strong>
                <small>{relationship.label} →</small>
              </button>;
            })
            : <p>선택한 유형에 해당하는 직접 연결이 없습니다.</p>}
        </div>
        <button className="graph-clear-selection" type="button" onClick={clearSelection}>선택 해제</button>
      </div> : <div className="graph-detail-empty"><span>01</span><p>초상을 선택하면 해당 인물과 직접 이어진 선·인물·관계 근거를 한 번에 확인할 수 있습니다.</p></div>}
    </div>
    <div className="graph-table-wrap"><table className="graph-table"><caption className="sr-only">교육공학 선구자 관계 목록</caption><thead><tr><th>연결</th><th>유형</th><th>핵심 문장</th><th>근거</th></tr></thead><tbody>{visible.map((relationship) => <tr key={relationship.id} className={active?.id === relationship.id ? 'selected' : ''}><td><button type="button" aria-pressed={active?.id === relationship.id} onClick={() => selectRelationship(relationship.id)}>{pioneerById[relationship.source].nameKo} → {pioneerById[relationship.target].nameKo}</button></td><td><span className="relation-pill">{relationship.type}</span></td><td>{relationship.label}</td><td>{relationship.sourceIds.length} sources</td></tr>)}</tbody></table></div>
  </div>;
}
