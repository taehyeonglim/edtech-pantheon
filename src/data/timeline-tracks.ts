export type TimelineTrackId =
  | "learning"
  | "assessment"
  | "systems"
  | "media"
  | "social";

export type TimelineTrack = {
  id: TimelineTrackId;
  label: string;
  title: string;
  shortTitle: string;
  description: string;
  accent: string;
};

export const timelineTracks: TimelineTrack[] = [
  {
    id: "learning",
    label: "LEARNING & COGNITION",
    title: "학습·인지·발달 이론",
    shortTitle: "학습·인지",
    description:
      "행동, 발달, 인지, 사회적 매개와 전문성이 학습을 설명하는 언어가 된 흐름.",
    accent: "#9a8060",
  },
  {
    id: "assessment",
    label: "GOALS & ASSESSMENT",
    title: "목표·교육과정·평가",
    shortTitle: "목표·평가",
    description:
      "교육목표, 수행기준, 측정과 지식 표상이 수업의 방향을 명료화한 흐름.",
    accent: "#bd914b",
  },
  {
    id: "systems",
    label: "DESIGN & PERFORMANCE",
    title: "교수설계·체제·수행",
    shortTitle: "설계·체제",
    description:
      "학습 조건을 분석하고 교수체제·수행환경·복합과제를 설계하는 흐름.",
    accent: "#b76d54",
  },
  {
    id: "media",
    label: "MEDIA & DISTANCE",
    title: "매체·디지털·원격교육",
    shortTitle: "매체·디지털",
    description:
      "교수기계와 시청각 매체에서 컴퓨팅·멀티미디어·온라인 학습으로 이어진 흐름.",
    accent: "#5f8795",
  },
  {
    id: "social",
    label: "SOCIAL LEARNING",
    title: "사회학습·학습과학·지식구축",
    shortTitle: "사회학습",
    description:
      "참여, 공동체, 인지도제, 협력적 담화와 지식구축을 중심으로 한 흐름.",
    accent: "#847690",
  },
];

/** 각 인물의 주된 지적 전통. 사건별 이동은 아래 override에서 별도로 기록한다. */
export const pioneerTimelineTrack: Record<string, TimelineTrackId> = {
  dewey: "learning",
  thorndike: "learning",
  vygotsky: "learning",
  skinner: "learning",
  bloom: "assessment",
  gagne: "systems",
  bruner: "learning",
  bandura: "learning",
  merrill: "systems",
  keller: "systems",
  papert: "media",
  mayer: "media",
  piaget: "learning",
  pressey: "media",
  dale: "media",
  tyler: "assessment",
  mager: "assessment",
  dick: "systems",
  reigeluth: "systems",
  seels: "media",
  richey: "systems",
  jonassen: "social",
  sweller: "learning",
  lave: "social",
  heinich: "media",
  glaser: "learning",
  novak: "assessment",
  gilbert: "systems",
  brown: "social",
  collins: "social",
  clark: "media",
  kozma: "media",
  moore: "media",
  wenger: "social",
  scardamalia: "social",
  merrienboer: "systems",
};

/** 한 연구자의 작업이 주 트랙을 넘어간 사건을 편집적으로 명시한다. */
export const timelineTrackOverrides: Record<string, TimelineTrackId> = {
  "skinner:1954": "media",
  "brown:1992": "systems",
  "collins:2004": "systems",
  "jonassen:1994": "media",
};

export const getTimelineTrackId = (pioneerId: string, year: number) =>
  timelineTrackOverrides[`${pioneerId}:${year}`] ??
  pioneerTimelineTrack[pioneerId];

