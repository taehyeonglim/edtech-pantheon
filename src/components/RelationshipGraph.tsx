import { useMemo, useState } from 'react';
import type { Pioneer, Relationship } from '../data/types';

type GraphPortrait = { src: string };
type Props = {
  pioneers: Pioneer[];
  relationships: Relationship[];
  portraits: Record<string, GraphPortrait | null>;
  baseUrl: string;
};

const positions: Record<string, { x: number; y: number }> = {
  dewey: { x: 12, y: 30 }, thorndike: { x: 28, y: 16 }, vygotsky: { x: 29, y: 56 }, skinner: { x: 44, y: 27 }, bloom: { x: 45, y: 72 }, gagne: { x: 60, y: 20 }, bruner: { x: 59, y: 52 }, bandura: { x: 60, y: 82 }, merrill: { x: 76, y: 28 }, keller: { x: 77, y: 64 }, papert: { x: 91, y: 20 }, mayer: { x: 91, y: 78 }
};

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
  const types = useMemo(() => ['전체', ...Array.from(new Set(relationships.map((relationship) => relationship.type)))], [relationships]);
  const visible = useMemo(() => filter === '전체' ? relationships : relationships.filter((relationship) => relationship.type === filter), [filter, relationships]);
  const active = visible.find((relationship) => relationship.id === activeId) ?? null;
  const selectedPioneer = selectedNodeId ? pioneerById[selectedNodeId] : null;
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
          aria-label={`${pioneer.nameKo}, ${pioneer.nameEn}. 연결 관계 보기`}
          aria-pressed={isSelected}
        >
          <span className="graph-node-ring">
            {portrait
              ? <img src={`${baseUrl}${portrait.src}`} alt="" draggable={false} />
              : <span>{pioneer.initials}</span>}
          </span>
          <span className="graph-node-label">{pioneer.nameKo}</span>
        </button>;
      })}
      {!active && !selectedPioneer && <div className="graph-hint">초상을 선택하면 모든 직접 연결이 강조됩니다.</div>}
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
          <span className="graph-person-photo" style={{ '--node-accent': selectedPioneer.accent } as React.CSSProperties}>
            {portraits[selectedPioneer.id]
              ? <img src={`${baseUrl}${portraits[selectedPioneer.id]!.src}`} alt="" />
              : selectedPioneer.initials}
          </span>
          <div>
            <div className="detail-kicker">SELECTED PIONEER · {selectedRelationships.length} CONNECTIONS</div>
            <h3>{selectedPioneer.nameKo}</h3>
            <p className="detail-label">{selectedPioneer.nameEn}</p>
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
