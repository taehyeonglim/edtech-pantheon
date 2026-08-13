export type SourceTier = "A" | "B" | "C";

export type Source = {
  id: string;
  tier: SourceTier;
  type: string;
  authors: string;
  title: string;
  year?: string;
  publisher?: string;
  details?: string;
  url: string;
  doi?: string;
};

export type TimelineEvent = {
  year: number;
  label: string;
  description: string;
  sourceIds: string[];
};

export type Pioneer = {
  id: string;
  slug: string;
  nameKo: string;
  nameEn: string;
  initials: string;
  birthYear: number | null;
  deathYear: number | null;
  life: string;
  role: string;
  era: string;
  domains: string[];
  school: string;
  accent: string;
  thesis: string;
  summary: string;
  quote: string;
  quoteSourceId?: string;
  concepts: string[];
  works: { title: string; year: string; note: string; sourceIds: string[] }[];
  sections: { title: string; body: string; sourceIds: string[] }[];
  timeline: TimelineEvent[];
  sourceIds: string[];
};

export type Portrait = {
  src: string;
  alt: string;
  objectPosition?: string;
  objectScale?: number;
  transformOrigin?: string;
  credit: string;
  license: string;
  sourceUrl: string;
  verification: {
    authority: string;
    url: string;
    basis: string;
    checkedOn: string;
  };
};

export type Nationality = {
  flag: string;
  label: string;
  note: string;
  sourceUrl: string;
};

export type Institution = {
  id: string;
  nameKo: string;
  nameEn: string;
  city: string;
  country: string;
  longitude: number;
  latitude: number;
  kind: "university" | "research" | "professional";
  coordinatePrecision: "building" | "campus" | "city";
  coordinateSourceUrl: string;
  websiteUrl?: string;
  imageUrl?: string;
  imageSourceUrl?: string;
  imageLicense?: string;
  imageKind?: "emblem" | "campus";
  imageNote?: string;
  markerImageUrl?: string;
  markerImageSourceUrl?: string;
  markerImageLicense?: string;
};

export type Affiliation = {
  id: string;
  pioneerId: string;
  institutionId: string;
  role: string;
  startYear?: number;
  endYear?: number;
  sourceIds: string[];
  featured?: boolean;
};

export type BiographySection = {
  title: string;
  body: string;
  sourceIds: string[];
};

export type Relationship = {
  id: string;
  source: string;
  target: string;
  type: string;
  label: string;
  description: string;
  layer: "lineage" | "comparison";
  confidence: "documented" | "scholarly-consensus" | "contested";
  sourceIds: string[];
};
