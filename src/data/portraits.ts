import type { Portrait } from './types';

export const portraits: Record<string, Portrait | null> = {
  dewey: { src: 'portraits/john-dewey.jpg', alt: '1902년 존 듀이 초상 사진', credit: 'Eva Watson-Schütze; John Dewey Photograph Collection, Morris Library', license: 'Public domain', sourceUrl: 'https://commons.wikimedia.org/wiki/File:John_Dewey_in_1902.jpg' },
  thorndike: { src: 'portraits/edward-thorndike.png', alt: '에드워드 리 손다이크 흑백 초상', credit: 'Unknown author; Popular Science Monthly, vol. 80', license: 'Public domain', sourceUrl: 'https://commons.wikimedia.org/wiki/File:PSM_V80_D211_Edward_Lee_Thorndike.png' },
  vygotsky: { src: 'portraits/lev-vygotsky.jpg', alt: '레프 비고츠키 흑백 초상', credit: 'Unknown author', license: 'Public domain', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lev-Semyonovich-Vygotsky-1896-1934.jpg' },
  skinner: { src: 'portraits/bf-skinner.jpg', alt: '1950년경 하버드의 B. F. 스키너', credit: 'Silly rabbit', license: 'CC BY 3.0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:B.F._Skinner_at_Harvard_circa_1950_(cropped).jpg' },
  bloom: { src: 'portraits/benjamin-bloom.jpg', alt: '벤저민 블룸 사진', credit: 'Mattbuck', license: 'CC BY-SA 3.0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nottinghamshire_Pride_2011_MMB_29_Benjamin_Bloom.jpg' },
  gagne: null,
  bruner: { src: 'portraits/jerome-bruner.png', alt: '1936년의 젊은 제롬 브루너', credit: 'Unknown author; The Chanticleer 1936', license: 'Public domain', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jerome_Bruner_1936.png' },
  bandura: { src: 'portraits/albert-bandura.jpg', alt: '앨버트 반두라 공식 초상', credit: 'Albert Bandura', license: 'CC BY-SA 4.0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Albert_Bandura_Psychologist_(headshot).jpg' },
  merrill: { src: 'portraits/david-merrill.jpg', alt: 'M. 데이비드 메릴 사진', credit: 'Kristina D.C. Hoeppner', license: 'CC BY-SA 2.0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:M._David_Merrill_(3662310676)_(2).jpg' },
  keller: null,
  papert: { src: 'portraits/seymour-papert.jpg', alt: '시모어 파퍼트 초상', credit: 'Matematicamente.it', license: 'CC BY-SA 3.0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Seymour_Papert.jpg' },
  mayer: { src: 'portraits/richard-mayer.jpg', alt: '리처드 메이어 강연 사진', credit: '239MikeO', license: 'CC BY 3.0', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Prof._Richard_E._Mayer_-_On_the_role_and_design_of_video_for_learning._2011.jpg' }
};

export const portraitById = portraits;
