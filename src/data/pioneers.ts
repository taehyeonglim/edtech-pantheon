import type { Pioneer } from "./types";
import { expandedPioneers } from "./pioneers-expansion";

export const pioneers: Pioneer[] = [
  {
    id: "dewey",
    slug: "john-dewey",
    nameKo: "존 듀이",
    nameEn: "John Dewey",
    initials: "JD",
    birthYear: 1859,
    deathYear: 1952,
    life: "1859—1952",
    role: "철학자 · 교육사상가",
    era: "근대 교육개혁",
    domains: ["경험학습", "교육철학"],
    school: "프래그머티즘",
    accent: "#c68b43",
    thesis:
      "교육은 미래를 위한 준비가 아니라, 경험을 더 의미 있게 재구성하는 현재의 삶이다.",
    summary:
      "듀이는 교육을 지식 전달이 아니라 경험의 재구성, 공동 탐구, 민주적 삶의 연습으로 보았다. 그의 문제중심적 관점은 학습자 중심 교육과 프로젝트 기반 학습의 중요한 철학적 배경이 되었다.",
    quote: "교육은 삶을 위한 준비가 아니라 삶 그 자체이다.",
    quoteSourceId: "dewey-1938",
    concepts: ["경험의 재구성", "민주주의와 교육", "탐구", "학습자 중심성"],
    works: [
      {
        title: "Democracy and Education",
        year: "1916",
        note: "교육·사회·민주주의의 관계를 체계적으로 논의한 저작.",
        sourceIds: ["dewey-1916"],
      },
      {
        title: "Experience and Education",
        year: "1938",
        note: "경험의 질과 교육적 성장의 관계를 압축적으로 재정리한 저작.",
        sourceIds: ["dewey-1938"],
      },
    ],
    sections: [
      {
        title: "경험을 설계한다는 것",
        body: "듀이에게 경험은 단순히 무언가를 겪는 일이 아니다. 현재의 경험이 다음 경험의 가능성을 넓히는지, 학습자가 상황의 관계를 탐구할 수 있게 하는지가 교육적 경험의 기준이 된다. 이 관점은 수업을 활동의 나열이 아니라 연속적인 탐구 환경으로 보게 한다.",
        sourceIds: ["dewey-1938"],
      },
      {
        title: "교육공학에 남긴 질문",
        body: "듀이의 유산은 특정한 매체 처방보다 설계의 출발점을 바꾼 데 있다. 기술을 도입하기 전에 학습자가 무엇을 실제로 해보고, 누구와 협력하며, 그 경험을 어떻게 다시 해석할지를 묻는다. 프로젝트 기반 학습과 스튜디오형 수업은 이 질문을 현대적으로 번역한 사례다.",
        sourceIds: ["dewey-1916", "dewey-1938"],
      },
    ],
    timeline: [
      {
        year: 1899,
        label: "The School and Society",
        description:
          "학교를 사회적 경험의 장으로 보는 초기 교육 실험을 정리했다.",
        sourceIds: ["dewey-1916"],
      },
      {
        year: 1916,
        label: "Democracy and Education",
        description: "교육과 민주적 공동체의 관계를 종합했다.",
        sourceIds: ["dewey-1916"],
      },
      {
        year: 1938,
        label: "Experience and Education",
        description: "경험 중심 교육의 조건과 한계를 다시 검토했다.",
        sourceIds: ["dewey-1938"],
      },
    ],
    sourceIds: ["dewey-1916", "dewey-1938", "reiser-2017"],
  },
  {
    id: "thorndike",
    slug: "edward-thorndike",
    nameKo: "에드워드 손다이크",
    nameEn: "Edward L. Thorndike",
    initials: "ET",
    birthYear: 1874,
    deathYear: 1949,
    life: "1874—1949",
    role: "심리학자 · 측정 연구자",
    era: "근대 학습과학",
    domains: ["학습과학", "측정"],
    school: "연결주의",
    accent: "#b77957",
    thesis:
      "학습은 자극과 반응 사이의 연결이 결과와 연습을 통해 선택되는 과정이다.",
    summary:
      "손다이크는 동물 실험과 교육 측정 연구를 통해 학습을 관찰 가능한 변화로 다루려 했다. 효과의 법칙과 연습의 법칙은 이후 행동주의와 교육 측정의 언어에 깊게 스며들었다.",
    quote: "만족스러운 결과를 따르는 반응은 상황과 연결될 가능성이 높다.",
    quoteSourceId: "thorndike-1913",
    concepts: ["효과의 법칙", "연결주의", "전이", "교육 측정"],
    works: [
      {
        title: "Educational Psychology",
        year: "1913",
        note: "학습 심리와 교육 측정을 연결한 대표 연구서.",
        sourceIds: ["thorndike-1913"],
      },
    ],
    sections: [
      {
        title: "연결을 측정 가능한 것으로",
        body: "손다이크의 연결주의는 학습을 마음속 표상만으로 설명하지 않고, 상황과 반응 사이의 연결 강도가 어떻게 달라지는지로 설명하려 했다. 이 접근은 수업 목표를 관찰 가능한 수행으로 번역하는 데 영향을 주었지만, 학습의 의미와 맥락을 충분히 설명하지 못한다는 비판도 받았다.",
        sourceIds: ["thorndike-1913", "schunk-2012"],
      },
      {
        title: "교육공학에 남긴 질문",
        body: "손다이크의 유산은 오늘날에도 평가 문항, 반복 연습, 피드백 설계에서 보인다. 다만 측정 가능한 수행이 학습 전체와 동일하지 않다는 점을 함께 기억해야 한다.",
        sourceIds: ["thorndike-1913", "reiser-2017"],
      },
    ],
    timeline: [
      {
        year: 1898,
        label: "Animal Intelligence",
        description: "문제상자 실험을 통해 학습의 연결 형성을 분석했다.",
        sourceIds: ["thorndike-1913"],
      },
      {
        year: 1903,
        label: "Educational Psychology",
        description: "심리학적 학습 연구를 교육 문제와 연결했다.",
        sourceIds: ["thorndike-1913"],
      },
      {
        year: 1913,
        label: "The Original Nature of Man",
        description: "학습과 인간 능력에 대한 체계적 논의를 확장했다.",
        sourceIds: ["thorndike-1913"],
      },
    ],
    sourceIds: ["thorndike-1913", "schunk-2012"],
  },
  {
    id: "vygotsky",
    slug: "lev-vygotsky",
    nameKo: "레프 비고츠키",
    nameEn: "Lev S. Vygotsky",
    initials: "LV",
    birthYear: 1896,
    deathYear: 1934,
    life: "1896—1934",
    role: "심리학자 · 문화역사학자",
    era: "문화역사적 전환",
    domains: ["사회문화학습", "발달심리"],
    school: "문화역사적 이론",
    accent: "#7b8f6a",
    thesis:
      "고등 정신 기능은 타인과 도구가 매개하는 사회적 활동 속에서 발달한다.",
    summary:
      "비고츠키는 학습과 발달을 개인 내부의 자연적 성숙만으로 설명하지 않고 언어·문화·협력의 역사적 맥락 속에서 보았다. 근접발달영역은 학습자가 혼자 할 수 있는 것과 지원을 받아 할 수 있는 것 사이의 공간을 가리킨다.",
    quote: "학습은 발달에 선행하며 발달을 이끈다.",
    quoteSourceId: "vygotsky-1978",
    concepts: ["근접발달영역", "사회적 매개", "언어와 사고", "내면화"],
    works: [
      {
        title: "Thought and Language",
        year: "1934",
        note: "언어와 사고가 형성되는 관계를 분석한 후기 저작.",
        sourceIds: ["vygotsky-1934"],
      },
      {
        title: "Mind in Society",
        year: "1978",
        note: "유고를 중심으로 문화역사적 심리학과 교육적 함의를 소개한 편집 번역서.",
        sourceIds: ["vygotsky-1978"],
      },
    ],
    sections: [
      {
        title: "혼자 할 수 없는 것을 설계한다",
        body: "근접발달영역은 학습자의 고정된 능력 목록이 아니라 지원과 상호작용에 따라 열리는 잠재적 수행의 영역이다. 좋은 스캐폴딩은 정답을 대신 수행하는 것이 아니라, 학습자가 점차 책임을 가져가도록 지원을 조절한다.",
        sourceIds: ["vygotsky-1978"],
      },
      {
        title: "번역과 수용의 주의점",
        body: "비고츠키의 개념은 여러 번역과 후대 연구를 거치며 교육 설계 언어로 널리 사용되었다. 따라서 원저작의 문맥과 후대의 교수전략 용례를 구분해 읽어야 하며, 모든 협동학습을 자동으로 비고츠키식이라고 부르는 것은 신중해야 한다.",
        sourceIds: ["vygotsky-1934", "vygotsky-1978", "schunk-2012"],
      },
    ],
    timeline: [
      {
        year: 1926,
        label: "Educational Psychology",
        description: "교육심리학의 문제를 문화역사적 관점에서 다루었다.",
        sourceIds: ["vygotsky-1978"],
      },
      {
        year: 1934,
        label: "Thought and Language",
        description: "언어와 사고의 관계에 대한 저작을 남겼다.",
        sourceIds: ["vygotsky-1934"],
      },
      {
        year: 1978,
        label: "Mind in Society",
        description: "영어권 교육 연구에 비고츠키의 핵심 논의를 널리 소개했다.",
        sourceIds: ["vygotsky-1978"],
      },
    ],
    sourceIds: ["vygotsky-1934", "vygotsky-1978", "schunk-2012"],
  },
  {
    id: "skinner",
    slug: "bf-skinner",
    nameKo: "B. F. 스키너",
    nameEn: "B. F. Skinner",
    initials: "BS",
    birthYear: 1904,
    deathYear: 1990,
    life: "1904—1990",
    role: "심리학자 · 행동분석가",
    era: "행동주의 전성기",
    domains: ["행동주의", "프로그램 학습"],
    school: "급진적 행동주의",
    accent: "#d66f59",
    thesis:
      "학습 환경의 결과 구조를 바꾸면 행동의 빈도와 형태를 체계적으로 바꿀 수 있다.",
    summary:
      "스키너는 조작적 조건형성과 강화의 원리를 인간 행동과 교육에 적용했다. 1954년 논문은 프로그램 학습과 교수기계 논의를 촉발했으며, 현대의 즉각적 피드백 설계에도 흔적을 남겼다.",
    quote: "가르치는 것은 학습이 일어나도록 조건을 배열하는 일이다.",
    quoteSourceId: "skinner-1954",
    concepts: ["조작적 조건형성", "강화", "프로그램 학습", "교수기계"],
    works: [
      {
        title: "The Science of Learning and the Art of Teaching",
        year: "1954",
        note: "학습과학을 수업 설계와 교수기계로 연결한 논문.",
        sourceIds: ["skinner-1954"],
      },
      {
        title: "Verbal Behavior",
        year: "1957",
        note: "언어 행동을 행동분석의 관점에서 설명한 저작.",
        sourceIds: ["skinner-1957"],
      },
    ],
    sections: [
      {
        title: "강화의 설계 언어",
        body: "스키너의 교수 설계는 복잡한 과제를 작은 수행 단위로 나누고, 학습자가 자신의 반응에 대해 빠른 피드백을 받도록 하는 데 주목한다. 이 아이디어는 컴퓨터 기반 학습의 초기 설계 원리와 연결되었지만, 학습자를 반응의 집합으로 환원할 위험도 함께 제기되었다.",
        sourceIds: ["skinner-1954"],
      },
      {
        title: "행동주의의 경계",
        body: "행동주의 설계는 관찰 가능한 목표와 피드백을 명료하게 만드는 강점이 있다. 반면 의미 구성, 전이, 맥락적 이해처럼 외부 행동만으로 포착하기 어려운 학습을 설명하려면 다른 이론과의 보완이 필요하다.",
        sourceIds: ["skinner-1954", "schunk-2012"],
      },
    ],
    timeline: [
      {
        year: 1938,
        label: "The Behavior of Organisms",
        description: "행동분석의 실험적 기반을 체계화했다.",
        sourceIds: ["skinner-1954"],
      },
      {
        year: 1954,
        label: "The Science of Learning",
        description: "교수기계와 프로그램 학습의 교육적 가능성을 제안했다.",
        sourceIds: ["skinner-1954"],
      },
      {
        year: 1957,
        label: "Verbal Behavior",
        description: "언어 행동을 행동분석의 틀에서 다루었다.",
        sourceIds: ["skinner-1957"],
      },
    ],
    sourceIds: ["skinner-1954", "skinner-1957", "reiser-2017"],
  },
  {
    id: "bloom",
    slug: "benjamin-bloom",
    nameKo: "벤저민 블룸",
    nameEn: "Benjamin S. Bloom",
    initials: "BB",
    birthYear: 1913,
    deathYear: 1999,
    life: "1913—1999",
    role: "교육심리학자 · 평가 연구자",
    era: "교육목표의 체계화",
    domains: ["교육목표", "완전학습"],
    school: "교육평가",
    accent: "#caa44b",
    thesis:
      "교육 목표를 명료하게 분류하면 학습·수업·평가의 정렬을 더 정교하게 설계할 수 있다.",
    summary:
      "블룸은 교육목표 분류학과 완전학습 연구로 목표-수업-평가의 정렬을 교육공학의 공용 언어로 만들었다. 분류학은 후대에 개정되고 다양한 맥락에서 재해석되었으므로 원래의 교육적 의도를 함께 읽어야 한다.",
    quote:
      "대부분의 학생은 적절한 시간과 지원이 주어지면 높은 수준에 도달할 수 있다.",
    quoteSourceId: "bloom-1968",
    concepts: ["교육목표 분류", "인지적 영역", "완전학습", "평가 정렬"],
    works: [
      {
        title: "Taxonomy of Educational Objectives",
        year: "1956",
        note: "인지적 교육목표를 지식·이해·적용·분석·종합·평가로 조직한 편집서.",
        sourceIds: ["bloom-1956"],
      },
      {
        title: "Learning for Mastery",
        year: "1968",
        note: "시간과 피드백을 조절해 학습자의 성취를 높이는 완전학습 관점을 제안했다.",
        sourceIds: ["bloom-1968"],
      },
    ],
    sections: [
      {
        title: "분류는 설계 언어다",
        body: "분류학의 핵심은 단어 목록을 외우는 데 있지 않다. 학습자가 무엇을 기억하는지, 어떤 개념을 설명하는지, 새로운 상황에 적용하는지 구분하면 평가와 활동의 정렬을 점검할 수 있다.",
        sourceIds: ["bloom-1956"],
      },
      {
        title: "완전학습의 조건",
        body: "블룸의 완전학습은 학습자의 능력을 고정된 분포로 가정하기보다, 필요한 시간과 피드백을 조절하면 더 많은 학습자가 목표에 도달할 수 있다고 보았다. 실제 설계에서는 목표의 난이도와 피드백의 질을 함께 검토해야 한다.",
        sourceIds: ["bloom-1968"],
      },
    ],
    timeline: [
      {
        year: 1956,
        label: "Taxonomy",
        description: "교육목표의 인지적 영역을 체계화했다.",
        sourceIds: ["bloom-1956"],
      },
      {
        year: 1968,
        label: "Learning for Mastery",
        description: "완전학습의 수업·평가 조건을 제시했다.",
        sourceIds: ["bloom-1968"],
      },
      {
        year: 2001,
        label: "Revised Taxonomy",
        description: "후대 연구자들이 분류학을 동사·지식 차원으로 재구성했다.",
        sourceIds: ["bloom-1956"],
      },
    ],
    sourceIds: ["bloom-1956", "bloom-1968", "reiser-2017"],
  },
  {
    id: "gagne",
    slug: "robert-gagne",
    nameKo: "로버트 가녜",
    nameEn: "Robert M. Gagné",
    initials: "RG",
    birthYear: 1916,
    deathYear: 2002,
    life: "1916—2002",
    role: "교육심리학자 · 교수설계 연구자",
    era: "교수설계의 형성기",
    domains: ["교수설계", "학습조건"],
    school: "절충적 교수설계",
    accent: "#e0a458",
    thesis:
      "학습 결과의 종류에 따라 필요한 내적 조건과 외적 수업사태가 달라진다.",
    summary:
      "가녜는 학습 결과를 언어정보·지적기능·인지전략·운동기능·태도로 구분하고, 학습을 지원하는 아홉 가지 수업사태를 제안했다. 그의 모델은 행동주의와 인지주의 사이를 연결하는 실천적 설계 언어로 작동했다.",
    quote: "수업의 목적은 학습을 위한 조건을 마련하는 것이다.",
    quoteSourceId: "gagne-1965",
    concepts: ["학습 결과", "아홉 가지 수업사태", "내적 조건", "외적 조건"],
    works: [
      {
        title: "The Conditions of Learning",
        year: "1965",
        note: "학습 결과 유형과 학습 조건을 체계화한 대표 저작.",
        sourceIds: ["gagne-1965"],
      },
      {
        title: "Principles of Instructional Design",
        year: "1985",
        note: "교수설계 실천을 위한 원리와 절차를 공동 저술로 정리했다.",
        sourceIds: ["gagne-1985"],
      },
    ],
    sections: [
      {
        title: "가녜를 읽는 핵심 축",
        body: "가녜의 질문은 “좋은 수업은 무엇인가”보다 “이 학습 결과가 일어나려면 어떤 조건이 필요한가”에 가깝다. 사실을 회상하는 학습, 규칙을 적용하는 학습, 문제를 해결하는 학습은 서로 다른 지원을 필요로 한다.",
        sourceIds: ["gagne-1965"],
      },
      {
        title: "아홉 가지 수업사태의 오늘",
        body: "주의 획득, 목표 제시, 선수학습 회상, 자극 제시, 학습 안내, 수행 유도, 피드백, 평가, 파지·전이를 촉진하는 수업사태는 화면 단위 체크리스트가 아니다. 학습자의 현재 상태와 과제의 성격에 따라 선택적으로 배열하는 설계 질문이다.",
        sourceIds: ["gagne-1985"],
      },
    ],
    timeline: [
      {
        year: 1965,
        label: "The Conditions of Learning",
        description: "학습 결과와 학습 조건의 관계를 체계화했다.",
        sourceIds: ["gagne-1965"],
      },
      {
        year: 1974,
        label: "Essentials of Learning",
        description: "학습의 내·외적 조건을 교육심리학의 언어로 정리했다.",
        sourceIds: ["gagne-1965"],
      },
      {
        year: 1985,
        label: "Principles of Instructional Design",
        description: "교수설계 원리를 실천적 체계로 확장했다.",
        sourceIds: ["gagne-1985"],
      },
    ],
    sourceIds: ["gagne-1965", "gagne-1985", "reiser-2017"],
  },
  {
    id: "bruner",
    slug: "jerome-bruner",
    nameKo: "제롬 브루너",
    nameEn: "Jerome S. Bruner",
    initials: "JB",
    birthYear: 1915,
    deathYear: 2016,
    life: "1915—2016",
    role: "인지심리학자 · 교육이론가",
    era: "인지혁명",
    domains: ["발견학습", "교육과정"],
    school: "인지주의",
    accent: "#a979b4",
    thesis:
      "어떤 교과도 학습자의 사고 수준에 맞는 구조와 표현으로 재구성할 수 있다.",
    summary:
      "브루너는 학습자의 능동적 의미 구성, 지식의 구조, 나선형 교육과정, 발견학습을 강조했다. 교육 내용을 단순화하되 구조를 잃지 않는 설계와 스캐폴딩의 언어는 디지털 학습에도 큰 영향을 주었다.",
    quote:
      "어떤 교과도 지적으로 정직한 형태라면 어떤 발달 단계의 아동에게도 가르칠 수 있다.",
    quoteSourceId: "bruner-1960",
    concepts: ["발견학습", "나선형 교육과정", "지식의 구조", "스캐폴딩"],
    works: [
      {
        title: "The Process of Education",
        year: "1960",
        note: "지식의 구조와 나선형 교육과정의 교육적 의미를 제시했다.",
        sourceIds: ["bruner-1960"],
      },
      {
        title: "Toward a Theory of Instruction",
        year: "1966",
        note: "학습자의 표현 양식과 수업 지원을 이론화했다.",
        sourceIds: ["bruner-1966"],
      },
    ],
    sections: [
      {
        title: "발견은 방임이 아니다",
        body: "브루너의 발견학습은 학습자를 아무 안내 없이 두는 것을 뜻하지 않는다. 핵심 개념의 구조를 탐구할 수 있도록 질문, 자료, 순서를 설계하고, 학습자가 규칙과 관계를 스스로 표현하도록 지원하는 방식이다.",
        sourceIds: ["bruner-1960", "bruner-1966"],
      },
      {
        title: "표상과 재표상",
        body: "행동적·영상적·상징적 표현은 고정된 연령 단계라기보다 지식을 다루는 서로 다른 방식으로 읽을 수 있다. 멀티미디어 설계에서는 한 표현을 다른 표현으로 번역할 때 무엇이 보존되고 무엇이 손실되는지 점검하게 한다.",
        sourceIds: ["bruner-1966", "mayer-2005"],
      },
    ],
    timeline: [
      {
        year: 1960,
        label: "The Process of Education",
        description: "지식의 구조와 나선형 교육과정을 제안했다.",
        sourceIds: ["bruner-1960"],
      },
      {
        year: 1966,
        label: "Toward a Theory of Instruction",
        description: "수업의 구조와 학습자 표현 양식을 확장했다.",
        sourceIds: ["bruner-1966"],
      },
      {
        year: 1990,
        label: "Acts of Meaning",
        description: "인지와 문화, 의미 구성의 관계를 다시 강조했다.",
        sourceIds: ["bruner-1966"],
      },
    ],
    sourceIds: ["bruner-1960", "bruner-1966", "schunk-2012"],
  },
  {
    id: "bandura",
    slug: "albert-bandura",
    nameKo: "앨버트 반두라",
    nameEn: "Albert Bandura",
    initials: "AB",
    birthYear: 1925,
    deathYear: 2021,
    life: "1925—2021",
    role: "심리학자 · 사회인지 연구자",
    era: "사회인지 전환",
    domains: ["사회학습", "동기"],
    school: "사회인지이론",
    accent: "#66959b",
    thesis:
      "사람은 타인의 행동과 그 결과를 관찰하고, 자신의 능력에 대한 믿음을 조절하며 학습한다.",
    summary:
      "반두라는 모방과 관찰학습을 행동주의의 단순한 자극-반응 틀보다 넓은 사회인지 체계로 설명했다. 자기효능감은 학습자가 과제를 시작하고 지속하며 실패를 해석하는 방식에 영향을 주는 핵심 개념이다.",
    quote:
      "사람은 자신의 삶에 영향을 미치는 능력을 지닌 자기 조직적·자기 반성적 존재다.",
    quoteSourceId: "bandura-1997",
    concepts: ["관찰학습", "자기효능감", "상호결정론", "대리강화"],
    works: [
      {
        title: "Social Learning Theory",
        year: "1977",
        note: "관찰과 모방, 사회적 강화의 관계를 체계화했다.",
        sourceIds: ["bandura-1977"],
      },
      {
        title: "Self-Efficacy",
        year: "1997",
        note: "자기효능감의 형성과 행동 조절을 종합했다.",
        sourceIds: ["bandura-1997"],
      },
    ],
    sections: [
      {
        title: "모델은 콘텐츠가 아니라 환경이다",
        body: "관찰학습에서 모델은 정답을 보여주는 영상만을 의미하지 않는다. 어떤 행동이 보상받는지, 실패가 어떻게 해석되는지, 동료가 어떤 언어로 도움을 요청하는지가 학습 환경의 모델이 된다.",
        sourceIds: ["bandura-1977"],
      },
      {
        title: "자기효능감의 설계",
        body: "자기효능감은 칭찬 문구 하나로 만들어지지 않는다. 성공 경험의 난이도 조절, 유사한 동료의 모델링, 구체적인 피드백, 정서적 각성의 해석이 함께 작동한다. 이 관점은 동기 설계와 학습 분석을 연결하는 다리가 된다.",
        sourceIds: ["bandura-1997", "keller-1987"],
      },
    ],
    timeline: [
      {
        year: 1961,
        label: "Bobo doll studies",
        description: "관찰된 공격 행동의 모방 가능성을 실험적으로 검토했다.",
        sourceIds: ["bandura-1977"],
      },
      {
        year: 1977,
        label: "Social Learning Theory",
        description: "관찰학습과 사회적 인지 과정을 종합했다.",
        sourceIds: ["bandura-1977"],
      },
      {
        year: 1997,
        label: "Self-Efficacy",
        description: "자기효능감의 이론과 적용을 체계화했다.",
        sourceIds: ["bandura-1997"],
      },
    ],
    sourceIds: ["bandura-1977", "bandura-1997", "schunk-2012"],
  },
  {
    id: "merrill",
    slug: "david-merrill",
    nameKo: "데이비드 메릴",
    nameEn: "M. David Merrill",
    initials: "DM",
    birthYear: 1937,
    deathYear: null,
    life: "1937—",
    role: "교수설계 연구자",
    era: "설계 원리의 정교화",
    domains: ["교수설계", "문제중심학습"],
    school: "처방적 교수설계",
    accent: "#7c86bd",
    thesis:
      "학습은 실제 문제를 중심으로 활성화·시연·적용·통합이 연결될 때 강해진다.",
    summary:
      "메릴의 제1원리는 좋은 교수의 공통 구조를 문제 중심, 기존 지식 활성화, 시연, 적용, 통합의 원리로 압축한다. 특정 매체보다 학습 과제의 구조와 수행 전이를 먼저 보게 한다.",
    quote: "학습은 학습자가 실제 문제를 해결할 때 촉진된다.",
    quoteSourceId: "merrill-2002",
    concepts: ["제1원리", "문제 중심", "시연", "적용과 통합"],
    works: [
      {
        title: "First Principles of Instruction",
        year: "2002",
        note: "교수설계 이론을 가로지르는 공통 원리를 제안한 논문.",
        sourceIds: ["merrill-2002"],
      },
    ],
    sections: [
      {
        title: "매체보다 과제",
        body: "메릴은 학습 효과를 매체의 새로움으로 설명하기보다 학습자가 어떤 문제를 해결하고, 그 해결 과정에서 무엇을 시연·적용·통합하는지로 설명한다. 이 관점은 “영상인가 게임인가”라는 선택보다 먼저 학습 과제를 설계하도록 요구한다.",
        sourceIds: ["merrill-2002"],
      },
      {
        title: "원리의 범위와 주의점",
        body: "제1원리는 여러 교수설계 전통을 통합하는 강한 휴리스틱이지만, 모든 학습 목표와 모든 학문에 동일한 처방을 제공하는 것은 아니다. 실제 설계에서는 내용의 성격, 학습자의 배경, 평가의 목적을 함께 검토해야 한다.",
        sourceIds: ["merrill-2002", "reiser-2017"],
      },
    ],
    timeline: [
      {
        year: 1994,
        label: "Instructional Transaction Theory",
        description: "교수 상호작용을 구성하는 설계 단위를 탐구했다.",
        sourceIds: ["reiser-2017"],
      },
      {
        year: 2002,
        label: "First Principles",
        description: "문제 중심 교수의 공통 원리를 제안했다.",
        sourceIds: ["merrill-2002"],
      },
      {
        year: 2013,
        label: "e3 Learning",
        description:
          "효율적·효과적·매력적인 학습 경험을 통합하려는 논의를 확장했다.",
        sourceIds: ["merrill-2002"],
      },
    ],
    sourceIds: ["merrill-2002", "reiser-2017"],
  },
  {
    id: "keller",
    slug: "john-keller",
    nameKo: "존 켈러",
    nameEn: "John M. Keller",
    initials: "JK",
    birthYear: 1938,
    deathYear: null,
    life: "1938—",
    role: "교육심리학자 · 동기설계 연구자",
    era: "동기설계의 체계화",
    domains: ["동기", "교수설계"],
    school: "ARCS 모델",
    accent: "#d7835b",
    thesis: "학습 동기는 학습자 특성과 과제 환경이 만나는 설계 변수다.",
    summary:
      "켈러는 동기를 주어진 성격 특성으로만 보지 않고 수업 환경에서 설계할 수 있는 조건으로 다루었다. ARCS 모델은 Attention, Relevance, Confidence, Satisfaction이라는 네 축으로 동기 전략을 정리한다.",
    quote:
      "동기 설계는 학습자의 주의를 얻고, 가치를 연결하고, 성공 기대를 만들고, 만족을 경험하게 하는 일이다.",
    quoteSourceId: "keller-1987",
    concepts: ["ARCS", "주의", "관련성", "자신감과 만족"],
    works: [
      {
        title: "Development and Use of the ARCS Model",
        year: "1987",
        note: "동기 설계의 네 요소와 적용 절차를 제시한 논문.",
        sourceIds: ["keller-1987"],
      },
    ],
    sections: [
      {
        title: "동기는 장식이 아니다",
        body: "ARCS의 네 요소는 학습 화면에 흥미로운 색을 더하는 체크리스트가 아니다. 왜 이 과제를 해야 하는지, 해낼 수 있는지, 수행 후 무엇을 경험하는지를 학습자 관점에서 진단하는 설계 프레임이다.",
        sourceIds: ["keller-1987"],
      },
      {
        title: "자신감의 정교한 의미",
        body: "자신감은 쉬운 문제만 제공해서 만들 수 없다. 성공 가능성을 예측할 수 있는 목표와 피드백, 적절히 도전적인 과제, 수행 기준의 명료성이 함께 필요하다. Bandura의 자기효능감과 연결되지만 동일한 개념으로 합쳐서는 안 된다.",
        sourceIds: ["keller-1987", "bandura-1997"],
      },
    ],
    timeline: [
      {
        year: 1983,
        label: "ARCS model",
        description: "동기 설계의 네 요소를 교수설계 언어로 정리했다.",
        sourceIds: ["keller-1987"],
      },
      {
        year: 1987,
        label: "ARCS publication",
        description: "ARCS 모델의 개발과 사용 절차를 논문으로 발표했다.",
        sourceIds: ["keller-1987"],
      },
      {
        year: 2010,
        label: "Motivational Design",
        description: "동기 설계의 진단·전략·평가를 확장했다.",
        sourceIds: ["keller-1987"],
      },
    ],
    sourceIds: ["keller-1987", "bandura-1997", "reiser-2017"],
  },
  {
    id: "papert",
    slug: "seymour-papert",
    nameKo: "시모어 파퍼트",
    nameEn: "Seymour Papert",
    initials: "SP",
    birthYear: 1928,
    deathYear: 2016,
    life: "1928—2016",
    role: "수학자 · 컴퓨팅 교육자",
    era: "컴퓨팅 교육의 태동",
    domains: ["구성주의", "디지털 학습"],
    school: "Constructionism",
    accent: "#4d9a92",
    thesis:
      "학습자는 컴퓨터로 무언가를 만들 때 자신의 사고를 외부화하고 다시 구성한다.",
    summary:
      "파퍼트는 Piaget의 구성주의를 컴퓨터 기반 제작 활동으로 확장했다. Logo와 Mindstorms는 프로그래밍을 단순한 기능 습득이 아니라 수학적 사고와 메타인지의 매개로 보게 했다.",
    quote: "가장 좋은 학습은 학습자가 가장 잘 아는 것을 만들어낼 때 일어난다.",
    quoteSourceId: "papert-1980",
    concepts: ["Constructionism", "Logo", "강력한 아이디어", "만들며 배우기"],
    works: [
      {
        title: "Mindstorms",
        year: "1980",
        note: "어린이·컴퓨터·강력한 아이디어의 관계를 탐구한 대표 저작.",
        sourceIds: ["papert-1980"],
      },
    ],
    sections: [
      {
        title: "구성주의에서 Constructionism으로",
        body: "Papert는 지식이 학습자의 머릿속에서 구성된다는 구성주의를, 학습자가 다른 사람과 공유할 수 있는 산출물을 만들며 지식을 구성한다는 Constructionism으로 구체화했다. 산출물은 코드일 수도, 로봇일 수도, 설명 가능한 모델일 수도 있다.",
        sourceIds: ["papert-1980"],
      },
      {
        title: "디지털 학습의 윤리",
        body: "파퍼트의 컴퓨터는 자동화된 정답 기계가 아니라 생각을 실험하는 재료다. 따라서 오늘날의 디지털 학습도 플랫폼 사용 시간보다 학습자가 무엇을 만들고, 실패를 어떻게 수정하며, 자신의 사고를 어떻게 설명하는지로 평가해야 한다.",
        sourceIds: ["papert-1980", "dewey-1938"],
      },
    ],
    timeline: [
      {
        year: 1967,
        label: "Logo turtle",
        description: "프로그래밍을 어린이의 수학적 탐구 도구로 발전시켰다.",
        sourceIds: ["papert-1980"],
      },
      {
        year: 1980,
        label: "Mindstorms",
        description: "컴퓨터와 강력한 아이디어를 통한 학습을 이론화했다.",
        sourceIds: ["papert-1980"],
      },
      {
        year: 1993,
        label: "The Children’s Machine",
        description: "학교와 컴퓨터의 관계를 다시 상상했다.",
        sourceIds: ["papert-1980"],
      },
    ],
    sourceIds: ["papert-1980", "dewey-1938"],
  },
  {
    id: "mayer",
    slug: "richard-mayer",
    nameKo: "리처드 메이어",
    nameEn: "Richard E. Mayer",
    initials: "RM",
    birthYear: 1947,
    deathYear: null,
    life: "1947—",
    role: "교육심리학자 · 멀티미디어 학습 연구자",
    era: "멀티미디어 학습과학",
    domains: ["멀티미디어", "인지부하"],
    school: "인지이론",
    accent: "#6d82ad",
    thesis:
      "사람은 시각·언어 정보를 제한된 작업기억 안에서 선택하고 조직하고 통합하며 학습한다.",
    summary:
      "메이어는 멀티미디어 학습의 인지이론을 통해 글·그림·애니메이션을 어떻게 조합해야 학습을 돕는지 실험적으로 연구했다. 멀티미디어의 화려함보다 인지 처리의 분할과 통합을 설계의 핵심으로 삼는다.",
    quote: "멀티미디어 학습은 말과 그림에서 정신적 표상을 구성하는 과정이다.",
    quoteSourceId: "mayer-2005",
    concepts: [
      "이중 채널",
      "제한된 작업기억",
      "능동적 처리",
      "외재적 인지부하",
    ],
    works: [
      {
        title: "A Split-Attention Effect in Multimedia Learning",
        year: "1997",
        note: "멀티미디어 자료의 분할 주의 효과를 검토한 연구.",
        sourceIds: ["mayer-1997"],
      },
      {
        title: "The Cambridge Handbook of Multimedia Learning",
        year: "2005",
        note: "멀티미디어 학습 연구의 이론과 실증 연구를 집대성한 편집서.",
        sourceIds: ["mayer-2005"],
      },
    ],
    sections: [
      {
        title: "멀티미디어는 정보를 더하는 일이 아니다",
        body: "메이어의 관점에서 학습자는 화면에 있는 모든 정보를 그대로 저장하지 않는다. 시각·언어 채널에서 중요한 정보를 선택하고, 조직하고, 서로 연결하는 능동적 처리 과정이 필요하다. 따라서 장식 이미지와 중복된 설명은 학습을 돕지 않을 수 있다.",
        sourceIds: ["mayer-1997", "mayer-2005"],
      },
      {
        title: "디지털 설계에 적용할 때",
        body: "신호화, 분절, 공간적 인접성, 중복 회피 같은 설계 원리는 학습자의 인지 자원을 핵심 내용에 배분하기 위한 휴리스틱이다. 원리는 맥락과 학습자에 따라 달라질 수 있으므로 절대 규칙이 아니라 실험적 근거를 가진 설계 가설로 사용해야 한다.",
        sourceIds: ["mayer-2005"],
      },
    ],
    timeline: [
      {
        year: 1997,
        label: "Split-attention research",
        description: "멀티미디어 학습에서 주의 분할의 영향을 실험했다.",
        sourceIds: ["mayer-1997"],
      },
      {
        year: 2001,
        label: "Multimedia Learning",
        description: "멀티미디어 학습의 인지이론을 종합했다.",
        sourceIds: ["mayer-2005"],
      },
      {
        year: 2005,
        label: "Cambridge Handbook",
        description: "멀티미디어 학습 연구의 주요 쟁점을 편집서로 정리했다.",
        sourceIds: ["mayer-2005"],
      },
    ],
    sourceIds: ["mayer-1997", "mayer-2005", "reiser-2017"],
  },
  {
    id: "piaget",
    slug: "jean-piaget",
    nameKo: "장 피아제",
    nameEn: "Jean Piaget",
    initials: "JP",
    birthYear: 1896,
    deathYear: 1980,
    life: "1896—1980",
    role: "발달심리학자 · 인식론자",
    era: "구성주의의 전사",
    domains: ["인지발달", "구성주의"],
    school: "발생적 인식론",
    accent: "#5f7f73",
    thesis:
      "아동의 지식은 축소된 성인의 지식이 아니라, 환경과의 능동적 조절 속에서 질적으로 재구성된다.",
    summary:
      "피아제는 아동의 오답과 추론을 발달 중인 지식 구조의 증거로 읽었다. 동화·조절·평형화와 발달 단계는 교육공학에 강한 영향을 주었지만, 단계의 보편성과 과제 맥락을 둘러싼 비판까지 함께 읽어야 한다.",
    quote: "지식은 대상의 단순한 복사가 아니라, 주체의 활동 속에서 구성된다.",
    quoteSourceId: "piaget-1970",
    concepts: ["동화와 조절", "평형화", "인지발달", "발생적 인식론"],
    works: [
      {
        title: "The Origins of Intelligence in Children",
        year: "1952",
        note: "감각운동기 지능이 행동 도식과 환경의 상호작용 속에서 형성되는 과정을 다룬 영어판 대표 저작.",
        sourceIds: ["piaget-1952"],
      },
      {
        title: "Genetic Epistemology",
        year: "1970",
        note: "지식의 기원과 발달을 심리학·논리학·과학사 사이에서 설명한 압축적 저작.",
        sourceIds: ["piaget-1970"],
      },
    ],
    sections: [
      {
        title: "단계표보다 중요한 작동 원리",
        body: "피아제의 핵심은 연령별 단계표를 수업 처방으로 옮기는 데 있지 않다. 학습자가 새 경험을 기존 도식에 동화하고, 맞지 않을 때 도식을 조절하며, 더 안정적인 설명을 찾아가는 과정을 설계 관점에서 읽는 데 있다.",
        sourceIds: ["piaget-1952", "piaget-1970"],
      },
      {
        title: "교육공학에서의 영향과 한계",
        body: "학습자를 능동적 지식 구성자로 보는 관점은 파퍼트의 구성주의적 컴퓨팅과 탐구학습에 중요한 배경이 되었다. 다만 발달 단계는 경직된 연령 규칙이 아니며, 사회문화적 지원과 과제 친숙성의 영향을 별도로 고려해야 한다.",
        sourceIds: ["bio-piaget-unige", "piaget-1970", "papert-1980"],
      },
    ],
    timeline: [
      {
        year: 1921,
        label: "루소연구소 합류",
        description:
          "제네바의 장자크 루소연구소 심리학 연구실을 맡으며 아동 사고 연구를 본격화했다.",
        sourceIds: ["bio-piaget-unige"],
      },
      {
        year: 1955,
        label: "발생적 인식론 국제센터 설립",
        description:
          "학문 간 협업으로 지식의 형성 과정을 연구하는 국제센터를 세웠다.",
        sourceIds: ["bio-piaget-unige"],
      },
      {
        year: 1970,
        label: "Genetic Epistemology",
        description: "오랜 연구를 지식의 발생과 변환이라는 관점으로 종합했다.",
        sourceIds: ["piaget-1970"],
      },
    ],
    sourceIds: ["bio-piaget-unige", "piaget-1952", "piaget-1970"],
  },
  {
    id: "pressey",
    slug: "sidney-pressey",
    nameKo: "시드니 프레시",
    nameEn: "Sidney L. Pressey",
    initials: "SLP",
    birthYear: 1888,
    deathYear: 1979,
    life: "1888—1979",
    role: "교육심리학자 · 교수기계 선구자",
    era: "기계화된 학습의 태동",
    domains: ["교수매체", "교육측정"],
    school: "초기 프로그램 학습",
    accent: "#a7654e",
    thesis:
      "기계는 채점 노동을 줄이는 데 그치지 않고, 즉각적 확인과 반복을 통해 학습을 지원할 수 있다.",
    summary:
      "프레시는 1920년대에 객관식 문항을 제시하고 정답을 확인하는 장치를 개발했다. 처음에는 검사 효율화가 목적이었으나, 곧 피드백과 자기 속도 학습을 지원하는 교수기계로 재해석했다.",
    quote:
      "교수기계의 목적은 교사를 없애는 것이 아니라, 교사가 더 가치 있는 일을 하게 하는 데 있다.",
    quoteSourceId: "pressey-1926",
    concepts: ["교수기계", "자기 속도 학습", "즉각적 피드백", "자동 채점"],
    works: [
      {
        title: "A Simple Apparatus Which Gives Tests and Scores—and Teaches",
        year: "1926",
        note: "검사 장치가 학습을 지원할 수 있다는 전환을 직접 설명한 초기 논문.",
        sourceIds: ["pressey-1926"],
      },
      {
        title: "Introduction to the Use of Standard Tests",
        year: "1922",
        note: "능력·성취 검사의 사용과 해석을 교육 현장에 소개한 연구서.",
        sourceIds: ["bio-pressey-osu"],
      },
    ],
    sections: [
      {
        title: "검사 장치에서 학습 장치로",
        body: "프레시의 기계는 여러 선택지 중 하나를 누르게 하고 정답 여부를 즉시 확인했다. 장치의 교육적 의미는 하드웨어 자체보다 학습자가 자신의 응답을 곧바로 점검하고 필요한 항목을 반복하는 피드백 구조에 있었다.",
        sourceIds: ["pressey-1926", "pressey-smithsonian"],
      },
      {
        title: "스키너 이전의 계보",
        body: "교수기계가 흔히 스키너에서 시작한 것으로 요약되지만 프레시의 장치는 약 30년 앞선다. 두 사람은 기계적 피드백을 공유하되, 스키너가 조작적 조건형성과 선형 프로그램을 더 강하게 결합했다는 차이가 있다.",
        sourceIds: ["bio-pressey-osu", "pressey-smithsonian", "skinner-1954"],
      },
    ],
    timeline: [
      {
        year: 1921,
        label: "오하이오주립대학교 합류",
        description: "교육심리·검사 연구를 수행할 기반을 마련했다.",
        sourceIds: ["bio-pressey-osu"],
      },
      {
        year: 1926,
        label: "가르치는 검사 장치",
        description:
          "자동 채점 장치를 교수와 피드백의 도구로 확장한 논문을 발표했다.",
        sourceIds: ["pressey-1926"],
      },
      {
        year: 1959,
        label: "오하이오주립대학교 은퇴",
        description:
          "38년의 교수 경력을 마친 뒤에도 교수기계의 교육적 가능성을 논의했다.",
        sourceIds: ["bio-pressey-osu"],
      },
    ],
    sourceIds: ["bio-pressey-osu", "pressey-1926", "pressey-smithsonian"],
  },
  {
    id: "dale",
    slug: "edgar-dale",
    nameKo: "에드거 데일",
    nameEn: "Edgar Dale",
    initials: "ED",
    birthYear: 1900,
    deathYear: 1985,
    life: "1900—1985",
    role: "교육학자 · 시청각교육 연구자",
    era: "시청각교육의 체계화",
    domains: ["교수매체", "시각문해"],
    school: "경험의 원추",
    accent: "#bd8049",
    thesis:
      "매체는 기억률 순위표가 아니라 학습 경험의 구체성과 추상성을 조절하는 설계 자원이다.",
    summary:
      "데일은 영화·라디오·사진·모형·직접 경험을 교육적으로 분류한 ‘경험의 원추’로 시청각교육의 언어를 정리했다. 오늘날 널리 퍼진 기억률 백분율 피라미드는 데일의 연구가 아니므로 분명히 구분해야 한다.",
    quote:
      "경험의 원추는 고정된 위계가 아니라 경험 형식 사이의 관계를 생각하는 시각적 비유다.",
    quoteSourceId: "molenda-2003-cone",
    concepts: ["경험의 원추", "시청각교육", "구체성과 추상성", "매체 선택"],
    works: [
      {
        title: "Audio-Visual Methods in Teaching",
        year: "1946",
        note: "경험의 원추를 처음 제시하고 다양한 시청각 자료의 교육적 사용을 논의했다.",
        sourceIds: ["dale-1946"],
      },
      {
        title: "Audio-Visual Methods in Teaching, 3rd ed.",
        year: "1969",
        note: "브루너의 표상 논의를 반영해 원추를 수정한 판본.",
        sourceIds: ["dale-1946", "molenda-2003-cone"],
      },
    ],
    sections: [
      {
        title: "매체를 경험의 거리로 읽기",
        body: "원추의 아래쪽은 직접·참여적 경험, 위쪽은 언어·상징처럼 추상적인 표현을 놓는다. 이는 어떤 매체가 항상 우월하다는 순위가 아니라, 목표와 학습자의 사전 경험에 맞춰 구체성과 추상성을 오갈 수 있도록 설계하는 분류다.",
        sourceIds: ["dale-1946", "molenda-2003-cone"],
      },
      {
        title: "기억률 피라미드는 데일의 것이 아니다",
        body: "‘읽으면 10%, 직접 하면 90% 기억한다’는 수치는 데일의 세 판본 어디에도 없으며 원추는 기억률을 측정한 실험 결과가 아니다. 자료를 인용할 때 원추와 후대의 오염된 피라미드를 반드시 구분해야 한다.",
        sourceIds: ["molenda-2003-cone"],
      },
    ],
    timeline: [
      {
        year: 1929,
        label: "오하이오주립대학교 교수",
        description:
          "시청각 자료·어휘·가독성 연구를 진행하며 1970년까지 재직했다.",
        sourceIds: ["bio-dale-osu"],
      },
      {
        year: 1946,
        label: "경험의 원추 제시",
        description:
          "『Audio-Visual Methods in Teaching』 초판에서 매체 경험의 구체성 체계를 제안했다.",
        sourceIds: ["dale-1946"],
      },
      {
        year: 1969,
        label: "원추의 세 번째 개정",
        description: "브루너의 행동적·영상적·상징적 표상과의 연결을 덧붙였다.",
        sourceIds: ["molenda-2003-cone"],
      },
    ],
    sourceIds: ["bio-dale-osu", "dale-1946", "molenda-2003-cone"],
  },
  {
    id: "tyler",
    slug: "ralph-tyler",
    nameKo: "랠프 타일러",
    nameEn: "Ralph W. Tyler",
    initials: "RWT",
    birthYear: 1902,
    deathYear: 1994,
    life: "1902—1994",
    role: "교육학자 · 교육과정 평가 연구자",
    era: "목표중심 교육과정",
    domains: ["교육목표", "평가"],
    school: "타일러 합리모형",
    accent: "#a4864f",
    thesis:
      "교육과정은 목적·학습경험·조직·평가의 네 질문을 순환적으로 검토해야 한다.",
    summary:
      "타일러는 Eight-Year Study와 『Basic Principles of Curriculum and Instruction』을 통해 교육목표와 학습경험, 조직, 평가를 하나의 순환 체계로 묶었다. 후대의 목표중심 설계와 평가 정렬에 큰 영향을 주었다.",
    quote:
      "교육과정 개발은 정답표가 아니라 네 가지 근본 질문을 계속 다시 묻는 과정이다.",
    quoteSourceId: "tyler-1949",
    concepts: ["타일러의 네 질문", "교육목표", "학습경험", "평가 순환"],
    works: [
      {
        title: "Basic Principles of Curriculum and Instruction",
        year: "1949",
        note: "목표 설정, 경험 선택, 조직, 평가를 연결한 교육과정의 고전.",
        sourceIds: ["tyler-1949"],
      },
      {
        title: "Appraising and Recording Student Progress",
        year: "1942",
        note: "Eight-Year Study에서 학생 성장과 평가 기록을 다룬 보고서.",
        sourceIds: ["tyler-eight-year"],
      },
    ],
    sections: [
      {
        title: "목표에서 평가까지의 정렬",
        body: "타일러의 네 질문은 무엇을 달성할지, 어떤 경험이 이를 가능하게 할지, 경험을 어떻게 조직할지, 실제 달성 여부를 어떻게 판단할지를 잇는다. 현대의 백워드 디자인과 정렬 논의가 반복해서 만나는 구조다.",
        sourceIds: ["tyler-1949"],
      },
      {
        title: "선형 체크리스트라는 오해",
        body: "모형은 흔히 목표를 먼저 고정하는 선형 절차로 단순화된다. 그러나 타일러는 평가 결과에 따라 교육과정을 재검토하는 순환성을 강조했고, 목표의 원천으로 학습자·사회·교과를 함께 검토했다.",
        sourceIds: ["tyler-1949", "bio-tyler-uchicago"],
      },
    ],
    timeline: [
      {
        year: 1929,
        label: "오하이오주립대학교 합류",
        description: "교육평가와 목표 진술 연구를 본격화했다.",
        sourceIds: ["bio-tyler-uchicago"],
      },
      {
        year: 1933,
        label: "Eight-Year Study",
        description:
          "진보적 중등학교 교육과정과 대학 진학 성과를 장기간 평가하는 연구를 이끌었다.",
        sourceIds: ["tyler-eight-year"],
      },
      {
        year: 1949,
        label: "Basic Principles",
        description: "교육과정 설계를 네 질문의 구조로 압축했다.",
        sourceIds: ["tyler-1949"],
      },
    ],
    sourceIds: ["bio-tyler-uchicago", "tyler-1949", "tyler-eight-year"],
  },
  {
    id: "mager",
    slug: "robert-mager",
    nameKo: "로버트 메이거",
    nameEn: "Robert F. Mager",
    initials: "RFM",
    birthYear: 1923,
    deathYear: 2020,
    life: "1923—2020",
    role: "심리학자 · 수행공학 저술가",
    era: "수행목표의 명료화",
    domains: ["교육목표", "수행공학"],
    school: "준거지향 교수",
    accent: "#ba6f66",
    thesis:
      "좋은 목표는 교사의 활동이 아니라 학습자가 보일 수행, 조건, 수용 기준을 명료하게 기술한다.",
    summary:
      "메이거는 수행목표와 준거지향 평가를 실무자가 사용할 수 있는 언어로 만들었다. 또한 모든 수행 격차가 교육 문제는 아니며, 환경·피드백·동기·자원의 원인을 먼저 진단해야 한다고 강조했다.",
    quote:
      "목표는 수업이 무엇을 할지가 아니라, 학습자가 끝에 무엇을 할 수 있는지를 말해야 한다.",
    quoteSourceId: "mager-1962",
    concepts: ["수행목표", "조건·행동·준거", "준거지향 평가", "수행 격차"],
    works: [
      {
        title: "Preparing Objectives for Programmed Instruction",
        year: "1962",
        note: "관찰 가능한 수행과 조건, 수용 가능한 기준으로 목표를 쓰는 원리를 대중화했다.",
        sourceIds: ["mager-1962"],
      },
      {
        title: "Analyzing Performance Problems",
        year: "1970",
        note: "교육으로 해결할 문제와 환경·동기·자원 문제를 구분하는 진단 흐름을 제시했다.",
        sourceIds: ["mager-pipe-1970"],
      },
    ],
    sections: [
      {
        title: "행동동사보다 중요한 세 요소",
        body: "메이거식 목표는 수행 그 자체, 수행이 일어날 조건, 받아들일 수 있는 수준을 구분한다. 단순히 동사를 바꾸는 기술이 아니라 목표와 평가 사이의 해석 차이를 줄이는 계약에 가깝다.",
        sourceIds: ["mager-1962"],
      },
      {
        title: "교육부터 처방하지 않기",
        body: "수행자가 할 줄 알면서도 하지 않는다면 추가 교육이 해답이 아닐 수 있다. 메이거와 파이프의 진단은 정보·도구·피드백·보상·장애물을 확인한 뒤에야 교육 개입을 선택하도록 요구한다.",
        sourceIds: ["mager-pipe-1970", "bio-mager-guild"],
      },
    ],
    timeline: [
      {
        year: 1954,
        label: "실험심리학 박사",
        description:
          "아이오와대학교에서 실험심리학 박사학위를 받고 인간 수행 연구를 확장했다.",
        sourceIds: ["bio-mager-guild"],
      },
      {
        year: 1962,
        label: "수행목표와 전문단체",
        description:
          "첫 목표 저서를 출간하고 오늘날 ISPI로 이어지는 전문단체의 창립에 참여했다.",
        sourceIds: ["bio-mager-guild", "mager-1962"],
      },
      {
        year: 1970,
        label: "수행문제 분석",
        description:
          "훈련 여부를 결정하기 전에 수행 격차의 원인을 진단하는 흐름을 제시했다.",
        sourceIds: ["mager-pipe-1970"],
      },
    ],
    sourceIds: ["bio-mager-guild", "mager-1962", "mager-pipe-1970"],
  },
  {
    id: "dick",
    slug: "walter-dick",
    nameKo: "월터 딕",
    nameEn: "Walter Dick",
    initials: "WD",
    birthYear: 1937,
    deathYear: null,
    life: "1937—",
    role: "교수설계 연구자 · 평가 전문가",
    era: "체계적 교수설계",
    domains: ["교수설계", "평가"],
    school: "Dick–Carey 체제접근",
    accent: "#667f9d",
    thesis:
      "수업은 목표·학습자·맥락·평가·전략·자료가 상호작용하는 하나의 체제로 설계되어야 한다.",
    summary:
      "월터 딕과 루 캐리는 교수설계를 연결된 체제로 보고 분석, 수행목표, 평가, 전략, 형성평가, 수정의 순환을 정리했다. 모형은 실제 설계가 언제나 선형이라는 주장이 아니라 초보 설계자가 관계를 놓치지 않게 하는 지도다.",
    quote:
      "교수의 구성요소는 고립된 단계가 아니라 학습 성과를 위해 함께 작동하는 체제다.",
    quoteSourceId: "dick-carey-1978",
    concepts: ["체제접근", "교수분석", "형성평가", "설계 수정"],
    works: [
      {
        title: "The Systematic Design of Instruction",
        year: "1978",
        note: "목표 분석부터 형성·총괄평가까지 연결한 Dick–Carey 모형의 대표 저서.",
        sourceIds: ["dick-carey-1978"],
      },
      {
        title: "The Dick and Carey Model: Will It Survive the Decade?",
        year: "1996",
        note: "모형에 제기된 선형성·경직성 비판에 답하며 그 교육적 용도를 재설명한 논문.",
        sourceIds: ["dick-1996"],
      },
    ],
    sections: [
      {
        title: "단계보다 피드백 고리",
        body: "Dick–Carey 모형의 중요한 특징은 형성평가가 설계 전반으로 되돌아가 목표, 평가도구, 전략, 자료를 수정하게 한다는 점이다. 각 상자를 한 번씩 통과하는 문서 절차로만 사용하면 체제적 사고가 사라진다.",
        sourceIds: ["dick-carey-1978", "dick-1996"],
      },
      {
        title: "가녜 전통의 실천화",
        body: "가녜가 학습 결과와 외적 조건을 분류했다면 딕과 캐리는 이를 실제 과정 설계의 의사결정 흐름으로 번역했다. 그래서 두 계보는 이론적 학습조건과 프로젝트 수준의 교수체제를 연결한다.",
        sourceIds: ["gagne-1985", "dick-carey-1978", "bio-dick-fsu"],
      },
    ],
    timeline: [
      {
        year: 1966,
        label: "FSU 교수설계 프로그램 합류",
        description:
          "플로리다주립대학교에서 교수체제 연구와 대학원 교육을 발전시켰다.",
        sourceIds: ["bio-dick-fsu"],
      },
      {
        year: 1978,
        label: "The Systematic Design of Instruction",
        description: "루 캐리와 함께 체제적 교수설계 모형을 교재로 정리했다.",
        sourceIds: ["dick-carey-1978"],
      },
      {
        year: 1996,
        label: "모형 비판에 대한 재검토",
        description:
          "모형의 목적과 실제 설계에서의 유연성을 논문으로 다시 설명했다.",
        sourceIds: ["dick-1996"],
      },
    ],
    sourceIds: [
      "bio-dick-fsu",
      "bio-dick-authority",
      "dick-carey-1978",
      "dick-1996",
    ],
  },
  {
    id: "reigeluth",
    slug: "charles-reigeluth",
    nameKo: "찰스 라이겔루스",
    nameEn: "Charles M. Reigeluth",
    initials: "CMR",
    birthYear: 1946,
    deathYear: null,
    life: "1946—",
    role: "교수이론 연구자 · 교육체제 개혁가",
    era: "교수이론의 정교화",
    domains: ["교수설계", "교육체제"],
    school: "정교화이론",
    accent: "#766d9d",
    thesis:
      "교수이론은 하나의 최선 방법이 아니라 목표와 조건에 따라 달라지는 설계 방법의 체계다.",
    summary:
      "라이겔루스는 교수이론을 설계지향적 지식으로 정리하고 정교화이론, 형성연구, 학습자 중심 교육체제 전환을 발전시켰다. 방법과 조건을 연결하는 그의 관점은 ‘무엇이 효과적인가’보다 ‘언제, 누구에게, 어떤 방법이 적절한가’를 묻는다.",
    quote:
      "교수 방법의 가치는 그것이 사용되는 목표와 조건을 떠나 판단할 수 없다.",
    quoteSourceId: "reigeluth-1983",
    concepts: ["정교화이론", "교수이론", "형성연구", "학습자 중심 체제"],
    works: [
      {
        title: "Instructional-Design Theories and Models, Volume I",
        year: "1983",
        note: "다양한 교수이론과 모형을 목표·조건·방법의 설계 지식으로 묶은 편집서.",
        sourceIds: ["reigeluth-1983"],
      },
      {
        title: "Formative Research",
        year: "1999",
        note: "설계이론을 실제 사례에 적용하고 개선하는 연구 방법을 정리한 장.",
        sourceIds: ["reigeluth-frick-1999"],
      },
    ],
    sections: [
      {
        title: "내용을 정교화하는 순서",
        body: "정교화이론은 전체 과제의 단순한 판을 먼저 제시하고, 점차 복잡성과 세부를 더하며, 요약과 종합으로 연결을 강화한다. 단순한 쉬운 것부터 어려운 것의 배열이 아니라 전체와 부분의 의미 관계를 보존하는 순서화다.",
        sourceIds: ["reigeluth-1983"],
      },
      {
        title: "이론을 현장에서 개선하기",
        body: "형성연구는 완성된 이론을 검증하는 데 그치지 않고 실제 적용 사례를 통해 어떤 방법이 어떤 조건에서 작동하거나 실패하는지를 찾아 이론 자체를 개선한다.",
        sourceIds: ["reigeluth-frick-1999", "bio-reigeluth-author"],
      },
    ],
    timeline: [
      {
        year: 1969,
        label: "하버드대학교 경제학 학사",
        description: "이후 고등학교 과학 교사를 거쳐 교수심리 연구로 이동했다.",
        sourceIds: ["bio-reigeluth-author"],
      },
      {
        year: 1977,
        label: "BYU 교수심리학 박사",
        description: "교수이론과 설계 연구의 학문적 기반을 마련했다.",
        sourceIds: ["bio-reigeluth-author"],
      },
      {
        year: 1983,
        label: "Instructional-Design Theories and Models",
        description: "교수설계 이론들을 비교 가능한 지식 체계로 편집했다.",
        sourceIds: ["reigeluth-1983"],
      },
    ],
    sourceIds: [
      "bio-reigeluth-author",
      "reigeluth-1983",
      "reigeluth-frick-1999",
    ],
  },
  {
    id: "seels",
    slug: "barbara-seels",
    nameKo: "바버라 실스",
    nameEn: "Barbara B. Seels",
    initials: "BBS",
    birthYear: null,
    deathYear: null,
    life: "생몰연도 공개 전거 미확인",
    role: "교육공학 연구자 · 시각문해 연구자",
    era: "교육공학 영역의 정의",
    domains: ["교육공학사", "시각문해"],
    school: "AECT 정의·영역 체계",
    accent: "#9a6785",
    thesis:
      "교육공학은 장비 목록이 아니라 학습을 위한 설계·개발·활용·관리·평가의 이론과 실천이다.",
    summary:
      "실스는 시각문해와 텔레비전 학습을 연구하고 AECT 정의·용어위원회를 이끌었다. 리타 리치와 함께 1994년 교육공학의 다섯 영역을 정리해 학문과 전문직의 범위를 명료화했다.",
    quote:
      "교육공학의 범위는 설계, 개발, 활용, 관리, 평가가 상호작용하는 실천 체계다.",
    quoteSourceId: "seels-richey-1994",
    concepts: ["설계", "개발", "활용", "관리와 평가"],
    works: [
      {
        title:
          "Instructional Technology: The Definition and Domains of the Field",
        year: "1994",
        note: "AECT가 승인한 교육공학 정의와 다섯 영역을 리타 리치와 공동 집필했다.",
        sourceIds: ["seels-richey-1994"],
      },
      {
        title: "Making Instructional Design Decisions",
        year: "1998",
        note: "설계자가 맥락과 근거를 바탕으로 의사결정을 연습하도록 구성한 실천서.",
        sourceIds: ["bio-seels-archive"],
      },
    ],
    sections: [
      {
        title: "학문 분야를 정의하는 작업",
        body: "1994년 정의는 제품 이름을 열거하지 않고 학습을 위한 과정과 자원의 설계·개발·활용·관리·평가를 이론과 실천의 영역으로 제시했다. 이는 교육공학을 단순한 기기 지원에서 전문적 설계 분야로 설명하는 공용 언어가 되었다.",
        sourceIds: ["seels-richey-1994", "seels-richey-1994-case"],
      },
      {
        title: "시각문해에서 정의 연구로",
        body: "실스의 문서 아카이브는 1968년부터 1999년까지 시각문해, 텔레비전, 메시지 설계, 수업 자료 연구가 정의 작업과 연결되는 경로를 보여준다.",
        sourceIds: ["bio-seels-archive"],
      },
    ],
    timeline: [
      {
        year: 1970,
        label: "오하이오주립대학교 박사",
        description:
          "매스커뮤니케이션 박사학위 후 피츠버그대학교에서 메시지 설계와 시각문해를 연구했다.",
        sourceIds: ["bio-seels-archive"],
      },
      {
        year: 1990,
        label: "AECT 정의·용어위원회 의장",
        description:
          "여러 해에 걸친 분야 정의의 합의 형성과 집필 과정을 이끌었다.",
        sourceIds: ["seels-richey-1994-case"],
      },
      {
        year: 1994,
        label: "정의와 영역 출간",
        description: "리타 리치와 교육공학의 다섯 영역을 체계적으로 발표했다.",
        sourceIds: ["seels-richey-1994"],
      },
    ],
    sourceIds: [
      "bio-seels-archive",
      "seels-richey-1994",
      "seels-richey-1994-case",
    ],
  },
  {
    id: "richey",
    slug: "rita-richey",
    nameKo: "리타 리치",
    nameEn: "Rita C. Richey",
    initials: "RCR",
    birthYear: null,
    deathYear: null,
    life: "생몰연도 공개 전거 미확인",
    role: "교수설계 연구자 · 연구방법론자",
    era: "설계·개발 연구의 정립",
    domains: ["교수설계", "교육공학사"],
    school: "설계·개발 연구",
    accent: "#7f708e",
    thesis:
      "설계와 개발의 실천은 단순 제작이 아니라 일반화 가능한 지식을 생산하는 연구 대상이 될 수 있다.",
    summary:
      "리치는 교수설계의 이론적 기반, 교육공학의 정의와 역사, 전문 역량, 설계·개발 연구 방법을 체계화했다. 웨인주립대학교에서 37년간 재직하며 연구와 실천 사이에서 사용할 수 있는 지식을 만드는 방법을 발전시켰다.",
    quote:
      "설계·개발 연구는 산출물을 만드는 일과 그 과정에서 지식을 만드는 일을 함께 다룬다.",
    quoteSourceId: "richey-klein-2007",
    concepts: [
      "설계·개발 연구",
      "사용 가능한 지식",
      "전문 역량",
      "교육공학 정의",
    ],
    works: [
      {
        title: "The Theoretical and Conceptual Bases of Instructional Design",
        year: "1986",
        note: "교수설계를 지탱하는 이론과 개념을 분야의 지식기반으로 정리한 저서.",
        sourceIds: ["richey-1986"],
      },
      {
        title: "Design and Development Research",
        year: "2007",
        note: "제품·도구 연구와 모형 연구의 질문, 절차, 타당화 전략을 체계화한 공동 저서.",
        sourceIds: ["richey-klein-2007"],
      },
    ],
    sections: [
      {
        title: "실천에서 지식을 생산하기",
        body: "리치의 연구방법론은 하나의 프로젝트를 성공시키는 데서 멈추지 않는다. 산출물·도구·모형을 설계하고 검증하는 과정을 문서화해 다른 맥락에서도 검토할 수 있는 지식으로 만든다.",
        sourceIds: ["richey-klein-2007"],
      },
      {
        title: "분야의 정의와 역사",
        body: "실스와의 1994년 저서는 교육공학의 영역을 합의된 언어로 제시했다. 리치의 후속 연구는 정의가 고정된 문장이 아니라 전문 역량, 연구 방법, 실천 환경의 변화와 함께 재검토되어야 함을 보여준다.",
        sourceIds: ["seels-richey-1994", "bio-richey-wayne", "richey-1986"],
      },
    ],
    timeline: [
      {
        year: 1971,
        label: "웨인주립대학교 박사·교수",
        description:
          "웨인주립대 교육공학 최초의 여성 박사학위자가 되었고 같은 해 교수 경력을 시작했다.",
        sourceIds: ["bio-richey-wayne"],
      },
      {
        year: 1986,
        label: "교수설계 지식기반",
        description:
          "분산되어 있던 교수설계의 이론적·개념적 기반을 한 권으로 조직했다.",
        sourceIds: ["richey-1986"],
      },
      {
        year: 2007,
        label: "Design and Development Research",
        description: "설계·개발 실천을 연구방법론으로 구체화했다.",
        sourceIds: ["richey-klein-2007"],
      },
    ],
    sourceIds: [
      "bio-richey-wayne",
      "richey-1986",
      "richey-klein-2007",
      "seels-richey-1994",
    ],
  },
  {
    id: "jonassen",
    slug: "david-jonassen",
    nameKo: "데이비드 조나센",
    nameEn: "David H. Jonassen",
    initials: "DHJ",
    birthYear: 1947,
    deathYear: 2012,
    life: "1947—2012",
    role: "교육공학 연구자 · 문제해결 연구자",
    era: "구성주의 학습환경",
    domains: ["구성주의", "학습테크놀로지"],
    school: "마인드툴·문제해결",
    accent: "#4f7d88",
    thesis:
      "컴퓨터는 정보를 전달하는 교사가 아니라 학습자가 생각을 표현하고 수정하는 인지 도구가 되어야 한다.",
    summary:
      "조나센은 구성주의 학습환경, 하이퍼미디어, 마인드툴, 비구조화 문제 해결을 교육공학의 중심 의제로 끌어왔다. 학습자가 기술에서 배우기보다 기술과 함께 사고하도록 설계해야 한다고 주장했다.",
    quote: "학습자는 기술로부터 배우기보다 기술과 함께 사고하며 배워야 한다.",
    quoteSourceId: "jonassen-1991",
    concepts: [
      "마인드툴",
      "구성주의 학습환경",
      "비구조화 문제",
      "의미 있는 학습",
    ],
    works: [
      {
        title: "Objectivism versus Constructivism",
        year: "1991",
        note: "교수설계의 인식론적 가정을 비판하고 구성주의적 대안을 논의한 연속 논문.",
        sourceIds: ["jonassen-1991"],
      },
      {
        title: "Toward a Design Theory of Problem Solving",
        year: "2000",
        note: "문제 유형과 구조에 따라 달라지는 문제해결 학습의 설계 요구를 정리했다.",
        sourceIds: ["jonassen-2000"],
      },
    ],
    sections: [
      {
        title: "기술을 사고의 파트너로",
        body: "데이터베이스, 개념지도, 스프레드시트, 모델링 도구는 정답을 전달하는 튜터가 아니라 학습자가 관계를 조직하고 가설을 시험하며 자신의 사고를 외부화하는 마인드툴이 될 수 있다.",
        sourceIds: ["bio-jonassen-profile", "jonassen-1991"],
      },
      {
        title: "문제의 구조를 먼저 본다",
        body: "모든 문제를 같은 절차로 가르칠 수 없다는 것이 조나센의 핵심 문제의식이다. 규칙 문제, 의사결정, 진단, 설계, 딜레마는 서로 다른 지식과 정당화 방식을 요구하므로 학습환경도 달라져야 한다.",
        sourceIds: ["jonassen-2000"],
      },
    ],
    timeline: [
      {
        year: 1991,
        label: "구성주의 논쟁",
        description:
          "교수설계의 객관주의 가정을 비판하고 구성주의 학습환경을 제안했다.",
        sourceIds: ["jonassen-1991"],
      },
      {
        year: 1994,
        label: "기술을 인지 도구로",
        description: "컴퓨터를 학습자의 설계·표현·성찰을 돕는 도구로 설명했다.",
        sourceIds: ["bio-jonassen-profile"],
      },
      {
        year: 2000,
        label: "문제해결 설계이론",
        description: "문제의 구조와 유형을 교수설계의 핵심 변수로 체계화했다.",
        sourceIds: ["jonassen-2000"],
      },
    ],
    sourceIds: ["bio-jonassen-profile", "jonassen-1991", "jonassen-2000"],
  },
  {
    id: "sweller",
    slug: "john-sweller",
    nameKo: "존 스웰러",
    nameEn: "John Sweller",
    initials: "JS",
    birthYear: 1946,
    deathYear: null,
    life: "1946—",
    role: "교육심리학자 · 인지부하이론 창시자",
    era: "인지구조 기반 설계",
    domains: ["인지부하", "교수설계"],
    school: "인지부하이론",
    accent: "#547691",
    thesis:
      "초보자의 제한된 작업기억을 불필요하게 소모하지 않도록 정보와 활동을 조직해야 학습이 촉진된다.",
    summary:
      "스웰러는 문제해결 연구에서 출발해 작업기억과 장기기억의 구조를 교수설계와 연결했다. 해결 예제 효과, 주의분할 효과, 전문성 역전 효과는 학습자의 사전지식에 따라 안내의 양을 조절해야 함을 보여준다.",
    quote:
      "문제를 푸는 인지 과정과 그 문제에서 학습하는 인지 과정은 항상 같지 않다.",
    quoteSourceId: "sweller-1988",
    concepts: ["인지부하", "해결 예제", "주의분할", "전문성 역전"],
    works: [
      {
        title: "Cognitive Load During Problem Solving",
        year: "1988",
        note: "수단–목표 문제해결이 학습에 필요한 도식 형성을 방해할 수 있음을 분석한 기초 논문.",
        sourceIds: ["sweller-1988"],
      },
      {
        title: "Cognitive Load Theory",
        year: "2011",
        note: "인지구조, 부하 효과, 교수설계 원리를 공동 저자들과 종합한 연구서.",
        sourceIds: ["sweller-2011"],
      },
    ],
    sections: [
      {
        title: "초보자에게 해결 예제가 필요한 이유",
        body: "낯선 영역에서 목표와 현재 상태의 차이를 반복 탐색하면 작업기억이 소진될 수 있다. 완성된 예제와 단계별 설명은 해결 구조에 주의를 배분하게 해 도식 형성을 돕지만, 충분한 전문성이 생긴 뒤에는 같은 안내가 중복이 될 수 있다.",
        sourceIds: ["sweller-1988", "sweller-2011"],
      },
      {
        title: "부하를 줄인다는 말의 주의점",
        body: "인지부하이론은 모든 난이도나 도전을 제거하라는 주장이 아니다. 학습목표 자체의 복잡성은 관리하되, 흩어진 정보·중복 설명·불필요한 탐색처럼 학습에 기여하지 않는 요구를 줄이는 것이 핵심이다.",
        sourceIds: ["bio-sweller-unsw", "sweller-2011"],
      },
    ],
    timeline: [
      {
        year: 1972,
        label: "애들레이드대학교 박사",
        description:
          "심리학 박사학위를 받고 문제해결과 인지과정 연구를 발전시켰다.",
        sourceIds: ["bio-sweller-unsw"],
      },
      {
        year: 1988,
        label: "인지부하 핵심 논문",
        description:
          "문제해결 전략이 학습에 부과하는 인지적 비용을 이론화했다.",
        sourceIds: ["sweller-1988"],
      },
      {
        year: 2011,
        label: "Cognitive Load Theory",
        description: "30여 년의 연구와 교수설계 효과를 연구서로 종합했다.",
        sourceIds: ["sweller-2011"],
      },
    ],
    sourceIds: [
      "bio-sweller-unsw",
      "sweller-2016-story",
      "sweller-1988",
      "sweller-2011",
    ],
  },
  {
    id: "lave",
    slug: "jean-lave",
    nameKo: "진 레이브",
    nameEn: "Jean Lave",
    initials: "JL",
    birthYear: 1939,
    deathYear: null,
    life: "1939—",
    role: "사회인류학자 · 학습이론가",
    era: "상황학습과 실천",
    domains: ["사회문화학습", "구성주의"],
    school: "상황학습",
    accent: "#6f8665",
    thesis:
      "학습은 개인의 머릿속에 지식을 저장하는 사건이 아니라 사회적 실천에 참여하는 방식이 변하는 과정이다.",
    summary:
      "레이브는 일상 수학과 도제학습의 민족지 연구를 통해 인지가 활동·도구·문화와 분리될 수 없음을 보였다. 웽거와 제시한 정당한 주변적 참여는 학습을 공동체 참여와 정체성 변화로 이해하게 했다.",
    quote:
      "학습은 지식의 획득만이 아니라 변화하는 사회적 실천에 참여하는 일이다.",
    quoteSourceId: "lave-wenger-1991",
    concepts: ["상황학습", "정당한 주변적 참여", "실천공동체", "일상 인지"],
    works: [
      {
        title: "Cognition in Practice",
        year: "1988",
        note: "일상 활동의 산술과 학교식 문제 해결을 비교해 인지의 상황성을 논증했다.",
        sourceIds: ["lave-1988"],
      },
      {
        title: "Situated Learning",
        year: "1991",
        note: "에티엔 웽거와 정당한 주변적 참여를 통해 도제학습과 공동체 참여를 이론화했다.",
        sourceIds: ["lave-wenger-1991"],
      },
    ],
    sections: [
      {
        title: "맥락은 배경이 아니라 학습의 일부",
        body: "사람들이 시장과 부엌에서 수행하는 계산은 학교의 동일한 수치 문제와 다르게 조직된다. 레이브의 연구는 지식을 한 상황에서 다른 상황으로 운반하는 독립된 소유물로 가정하지 말고 활동·도구·관계 안에서 조사하게 한다.",
        sourceIds: ["lave-1988"],
      },
      {
        title: "주변에서 구성원이 되기까지",
        body: "정당한 주변적 참여는 초보자를 주변에 방치한다는 뜻이 아니다. 실제 공동체의 가치 있는 활동에 낮은 위험으로 참여하고, 숙련자·동료·도구와 관계를 넓히며 참여의 책임과 정체성이 변하는 과정을 말한다.",
        sourceIds: ["lave-wenger-1991", "bio-lave-berkeley"],
      },
    ],
    timeline: [
      {
        year: 1988,
        label: "Cognition in Practice",
        description:
          "일상 인지를 민족지적으로 연구해 학교 밖 사고의 상황성을 보였다.",
        sourceIds: ["lave-1988"],
      },
      {
        year: 1991,
        label: "Situated Learning",
        description:
          "정당한 주변적 참여와 도제학습의 사회적 구조를 웽거와 제시했다.",
        sourceIds: ["lave-wenger-1991"],
      },
      {
        year: 2011,
        label: "학습을 사회적 실천으로",
        description:
          "버클리 강연에서 학습을 가르침의 효과가 아니라 변화하는 사회생활의 이론으로 재강조했다.",
        sourceIds: ["bio-lave-berkeley"],
      },
    ],
    sourceIds: [
      "bio-lave-berkeley",
      "bio-lave-authority",
      "lave-1988",
      "lave-wenger-1991",
    ],
  },
  ...expandedPioneers,
];

export const pioneerById = Object.fromEntries(
  pioneers.map((pioneer) => [pioneer.id, pioneer]),
) as Record<string, Pioneer>;
