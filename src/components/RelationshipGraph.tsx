import { useMemo, useState } from 'react';
import type { Pioneer, Relationship } from '../data/types';

type Props = { pioneers: Pioneer[]; relationships: Relationship[]; baseUrl: string };

const positions: Record<string, { x: number; y: number }> = {
  dewey: { x: 12, y: 30 }, thorndike: { x: 28, y: 16 }, vygotsky: { x: 29, y: 56 }, skinner: { x: 44, y: 27 }, bloom: { x: 45, y: 72 }, gagne: { x: 60, y: 20 }, bruner: { x: 59, y: 52 }, bandura: { x: 60, y: 82 }, merrill: { x: 76, y: 28 }, keller: { x: 77, y: 64 }, papert: { x: 91, y: 20 }, mayer: { x: 91, y: 78 }
};

export default function RelationshipGraph({ pioneers, relationships, baseUrl }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [filter, setFilter] = useState('전체');
  const pioneerById = useMemo(() => Object.fromEntries(pioneers.map((p) => [p.id, p])), [pioneers]);
  const types = ['전체', ...Array.from(new Set(relationships.map((r) => r.type)))];
  const visible = filter === '전체' ? relationships : relationships.filter((r) => r.type === filter);
  const active = relationships.find((r) => r.id === activeId) ?? null;

  return <div className="graph-app">
    <div className="graph-toolbar">
      <div className="graph-filter-label">관계 유형</div>
      <div className="graph-filters" role="tablist" aria-label="관계 유형 필터">
        {types.map((type) => <button className={filter === type ? 'selected' : ''} onClick={() => { setFilter(type); setActiveId(null); }} role="tab" aria-selected={filter === type}>{type}</button>)}
      </div>
      <span className="graph-count">{visible.length} connections</span>
    </div>
    <div className="graph-canvas" aria-label="교육공학 선구자 관계도">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="graph-lines" aria-hidden="true">
        {visible.map((relationship) => {
          const a = positions[relationship.source]; const b = positions[relationship.target];
          return <line key={relationship.id} x1={a.x} y1={a.y} x2={b.x} y2={b.y} className={activeId === relationship.id ? 'active' : ''} />;
        })}
      </svg>
      {pioneers.map((pioneer) => {
        const pos = positions[pioneer.id];
        const connected = active && (active.source === pioneer.id || active.target === pioneer.id);
        return <button key={pioneer.id} className={`graph-node ${connected ? 'connected' : ''}`} style={{ left: `${pos.x}%`, top: `${pos.y}%`, '--node-accent': pioneer.accent } as React.CSSProperties} onClick={() => {
          const candidate = visible.find((r) => r.source === pioneer.id || r.target === pioneer.id);
          setActiveId(activeId && (active?.source === pioneer.id || active?.target === pioneer.id) ? null : candidate?.id ?? null);
        }} aria-label={`${pioneer.nameKo}, ${pioneer.nameEn}`}>
          <span className="graph-node-ring"><span>{pioneer.initials}</span></span><span className="graph-node-label">{pioneer.nameKo}</span>
        </button>;
      })}
      {!active && <div className="graph-hint">노드를 선택하면 연결된 사상과 근거가 나타납니다.</div>}
    </div>
    <div className="graph-detail" aria-live="polite">
      {active ? <>
        <div className="detail-kicker"><span className="relation-pill">{active.type}</span><span>{active.confidence === 'documented' ? '직접 기록됨' : active.confidence === 'scholarly-consensus' ? '학술적 합의' : '해석적 연결'}</span></div>
        <h3>{pioneerById[active.source].nameKo} <span>→</span> {pioneerById[active.target].nameKo}</h3>
        <p className="detail-label">{active.label}</p><p>{active.description}</p>
        <div className="detail-sources">근거 출처 {active.sourceIds.map((id) => <span key={id}>{id}</span>)}</div>
        <div className="detail-links"><a href={`${baseUrl}pioneers/${pioneerById[active.source].slug}/`}>{pioneerById[active.source].nameKo} 읽기 ↗</a><a href={`${baseUrl}pioneers/${pioneerById[active.target].slug}/`}>{pioneerById[active.target].nameKo} 읽기 ↗</a></div>
      </> : <div className="graph-detail-empty"><span>01</span><p>관계를 선택해 두 사상 사이의 계보와 차이를 확인하세요.</p></div>}
    </div>
    <div className="graph-table-wrap"><table className="graph-table"><caption className="sr-only">교육공학 선구자 관계 목록</caption><thead><tr><th>연결</th><th>유형</th><th>핵심 문장</th><th>근거</th></tr></thead><tbody>{visible.map((relationship) => <tr key={relationship.id}><td><button onClick={() => setActiveId(relationship.id)}>{pioneerById[relationship.source].nameKo} → {pioneerById[relationship.target].nameKo}</button></td><td><span className="relation-pill">{relationship.type}</span></td><td>{relationship.label}</td><td>{relationship.sourceIds.length} sources</td></tr>)}</tbody></table></div>
  </div>;
}
