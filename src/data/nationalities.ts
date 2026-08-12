import type { Nationality } from './types';

export const nationalities: Record<string, Nationality> = {
  dewey: {
    flag: '🇺🇸', label: '미국',
    note: '미국 버몬트주 출생의 미국 철학자·교육사상가.',
    sourceUrl: 'https://deweycenter.siu.edu/about-dewey/'
  },
  thorndike: {
    flag: '🇺🇸', label: '미국',
    note: '미국 매사추세츠주 출생의 미국 심리학자.',
    sourceUrl: 'https://www.tc.columbia.edu/articles/2009/october/silhouettes-of-tc-today-cover/'
  },
  vygotsky: {
    flag: '🇷🇺', label: '러시아·소련',
    note: '러시아 제국에서 태어나 소련에서 연구한 러시아·소련 심리학자. 현재의 러시아 국기를 식별 표지로 사용한다.',
    sourceUrl: 'https://psy-msu.ru/en/about/history/scientist/8578/'
  },
  skinner: {
    flag: '🇺🇸', label: '미국',
    note: '미국 펜실베이니아주 출생의 미국 심리학자.',
    sourceUrl: 'https://www.britannica.com/biography/B-F-Skinner'
  },
  bloom: {
    flag: '🇺🇸', label: '미국',
    note: '미국 펜실베이니아주 출생의 미국 교육심리학자.',
    sourceUrl: 'https://chronicle.uchicago.edu/990923/bloom.shtml'
  },
  gagne: {
    flag: '🇺🇸', label: '미국',
    note: '미국 매사추세츠주 출생의 미국 교육심리학자.',
    sourceUrl: 'https://spark.fsu.edu/Project/2615'
  },
  bruner: {
    flag: '🇺🇸', label: '미국',
    note: '미국 뉴욕 출생의 미국 심리학자·교육학자.',
    sourceUrl: 'https://hollisarchives.lib.harvard.edu/catalog/hua39020'
  },
  bandura: {
    flag: '🇨🇦 🇺🇸', label: '캐나다·미국',
    note: '캐나다 앨버타주 출생으로 미국에서 활동한 캐나다계 미국 심리학자.',
    sourceUrl: 'https://news.stanford.edu/stories/2021/07/psychology-professor-albert-bandura-dead-95'
  },
  merrill: {
    flag: '🇺🇸', label: '미국',
    note: '미국 유타주 출생의 미국 교육공학 연구자.',
    sourceUrl: 'https://en.wikipedia.org/wiki/M._David_Merrill'
  },
  keller: {
    flag: '🇺🇸', label: '미국',
    note: '미국 교육심리학자이자 교수설계 연구자.',
    sourceUrl: 'https://en.wikipedia.org/wiki/John_M._Keller'
  },
  papert: {
    flag: '🇿🇦 🇺🇸', label: '남아공·미국',
    note: '남아프리카공화국 프리토리아 출생의 남아프리카계 미국 수학자·교육자.',
    sourceUrl: 'https://news.mit.edu/2016/seymour-papert-pioneer-of-constructionist-learning-dies-0801'
  },
  mayer: {
    flag: '🇺🇸', label: '미국',
    note: '미국 교육심리학자이자 멀티미디어 학습 연구자.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Richard_E._Mayer'
  }
};

export const nationalityById = nationalities;
export const nationalityCheckedOn = '2026-08-13';
