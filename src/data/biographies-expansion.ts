import type { BiographySection } from "./types";

export const expandedBiographies: Record<string, BiographySection[]> = {
  heinich: [
    {
      title: "학교 시청각 실무에서 시작한 교육공학",
      body: "로버트 하이니히는 1923년에 태어나 콜로라도주립교육대학에서 1948년 학사, 1949년 석사학위를 받았다. 이후 약 13년 동안 콜로라도스프링스 공립학교의 시청각교육 책임자로 일하며 매체가 실제 학교의 예산·교사 역할·운영체계 안에서 채택되는 과정을 경험했다. 이 현장 경력은 장비의 성능보다 조직 조건을 묻는 후기 연구의 토대가 됐다.",
      sourceIds: ["bio-heinich-iu"],
    },
    {
      title: "핀의 지도와 기술 체제의 이론화",
      body: "하이니히는 University of Southern California에서 교육공학자 James D. Finn의 지도를 받아 1967년 박사학위를 마쳤다. 그의 학위논문은 교수기술과 교수관리의 새로운 이론 구조를 제안했다. 같은 해 출판 산업으로 옮겨 교육 시스템과 매체를 개발한 뒤, 1969년 인디애나대학교 교수로 부임했다.",
      sourceIds: ["bio-heinich-iu", "heinich-1984"],
    },
    {
      title: "AECT·학술지·교재를 통한 분야 형성",
      body: "하이니히는 1971–72년 AECT 회장, 1972–82년 ECT Foundation 초대 회장을 맡았고 AV Communication Review 편집을 이끌었다. 1982년 공동 집필한 『Instructional Media and the New Technologies of Instruction』은 교수매체 교육의 표준 교재가 됐다. 1990년 은퇴한 뒤 2020년 사망했으며, 교육기술의 적절한 분석 단위가 도구인가 조직인가라는 질문을 남겼다.",
      sourceIds: ["bio-heinich-iu", "heinich-media-1982", "heinich-1984"],
    },
  ],
  glaser: [
    {
      title: "전시 심리측정에서 교수심리학으로",
      body: "로버트 글레이저는 1921년 1월 18일 태어나 뉴욕시에서 성장했다. 1942년 City College of New York에서 화학 학사학위를 받은 뒤 제2차 세계대전 중 미 육군항공대 항공심리 프로그램에서 조종사 선발 검사를 개발했다. 전후 인디애나대학교에서 1947년 실험심리학 석사, 1949년 심리측정·학습이론 박사학위를 마쳤다.",
      sourceIds: ["bio-glaser-aps"],
    },
    {
      title: "LRDC라는 학제 연구 생태계",
      body: "켄터키대학교와 일리노이대학교를 거친 글레이저는 1952년 피츠버그로 옮겼고 1956년 피츠버그대학교 교수가 됐다. 1963년 설립한 Learning Research and Development Center는 인지과학, 교육측정, 교수연구와 학교 개선을 한 조직에서 연결한 초기 연구기관이었다. 그는 이곳에서 많은 연구자와 박사후연구원을 길러내며 교수심리학의 제도적 기반을 만들었다.",
      sourceIds: ["bio-glaser-aps", "glaser-1963"],
    },
    {
      title: "준거참조에서 전문성 연구까지",
      body: "1963년 논문은 학습성과를 다른 학습자와의 상대적 서열이 아니라 명시된 수행 기준에 비추어 해석하는 준거참조 측정을 제기했다. 이후 글레이저는 적성·개인차, 적응적 교수, 초보자와 전문가의 문제 표상, 영역 지식과 사고의 관계로 연구를 넓혔다. 그는 2012년 2월 4일 사망했으며, 학습이론과 측정이 실제 교수 개선을 위해 함께 작동해야 한다는 연구 프로그램을 남겼다.",
      sourceIds: ["glaser-1963", "glaser-1984", "bio-glaser-aps"],
    },
  ],
  novak: [
    {
      title: "미네소타의 과학교사에서 코넬 연구자로",
      body: "조지프 도널드 노백은 1930년 12월 2일 미네소타주 미니애폴리스에서 태어났다. 미네소타대학교에서 학사·석사·박사학위를 받고 퍼듀대학교에서 가르친 뒤 1967년 코넬대학교 교육학과 조교수로 합류했다. 초기에는 아동이 과학 개념을 어떻게 배우고 오랫동안 변화시키는지에 집중했다.",
      sourceIds: ["bio-novak-cornell", "bio-novak-ihmc"],
    },
    {
      title: "오수벨의 이론을 개념지도로 번역하다",
      body: "노백 연구팀은 1970년대 장기 종단연구에서 방대한 아동 면담을 비교하기 위해 개념과 명제의 관계를 시각적으로 표시하는 방법을 발전시켰다. 오수벨의 동화이론은 새 지식이 학습자의 기존 인지구조와 연결되어야 한다는 이론적 기반을 제공했다. 개념지도는 사전지식과 개념 변화를 동시에 기록하는 연구·수업·평가 도구가 됐다.",
      sourceIds: ["bio-novak-ihmc", "novak-1984", "novak-2002"],
    },
    {
      title: "CmapTools와 세계적 확산",
      body: "1984년 D. Bob Gowin과 쓴 『Learning How to Learn』은 개념지도와 V 다이어그램의 사용법을 체계화했다. 코넬대학교 명예교수가 된 뒤에는 Florida Institute for Human & Machine Cognition에서 디지털 개념지도 도구 CmapTools의 이론적 발전에 참여했다. 29권의 책과 100편 이상의 논문을 남긴 그는 2023년 9월 22일 플로리다에서 사망했다.",
      sourceIds: ["novak-1984", "bio-novak-cornell", "bio-novak-ihmc"],
    },
  ],
  gilbert: [
    {
      title: "행동분석에서 수행공학으로",
      body: "토머스 F. 길버트는 1927년에 태어난 미국 심리학자이자 행동분석가다. B. F. 스키너의 연구 전통에서 출발했지만, 관찰 가능한 행동의 빈도만으로 조직의 가치 있는 성과를 충분히 설명하기 어렵다고 보았다. 이 문제의식은 행동을 통제하는 기술에서 인간 역량과 산출물을 설계하는 수행공학으로 관심을 이동시켰다.",
      sourceIds: ["bio-gilbert-sixboxes", "gilbert-2019"],
    },
    {
      title: "Human Competence와 가치 있는 수행",
      body: "1978년 『Human Competence』에서 길버트는 역량을 단순한 개인 속성이 아니라 가치 있는 성과와 그것을 얻는 데 드는 비용의 함수로 다뤘다. Behavior Engineering Model은 수행 원인을 환경의 정보·자원·인센티브와 개인의 지식·능력·동기로 나눠 진단한다. 이 틀은 교육이 필요한 경우와 환경을 고쳐야 하는 경우를 구분하게 했다.",
      sourceIds: ["gilbert-1978"],
    },
    {
      title: "훈련을 넘어선 인간수행기술",
      body: "길버트의 작업은 Human Performance Technology가 수업설계와 조직 성과를 잇는 독자적 영역으로 자리 잡는 데 기초가 됐다. 그는 1995년 사망하기 전까지 초기 이론을 계속 수정했으며, 말년 원고와 동료들의 회고는 2019년 『Human Competence』 40주년 재검토에 반영됐다. 오늘날 그의 핵심 유산은 사람을 재훈련하기 전에 성과 기준과 환경 장벽부터 확인하라는 진단 순서다.",
      sourceIds: ["gilbert-2019", "gilbert-1978"],
    },
  ],
  brown: [
    {
      title: "읽기 어려움을 넘어 발달심리학으로",
      body: "앤 레슬리 브라운은 1943년 영국 포츠머스에서 태어났다. 난독증으로 13세까지 읽기를 익히지 못했지만 Bedford College, University of London에서 최우등 학위와 1967년 심리학 박사학위를 받았다. 자신의 경험은 어린 학습자와 학습에 어려움을 겪는 학생의 수행을 고정된 능력 결함으로 보지 않으려는 연구 방향과 맞닿아 있었다.",
      sourceIds: ["bio-brown-fabbs", "bio-brown-berkeley"],
    },
    {
      title: "기억전략에서 메타인지와 상호교수로",
      body: "브라운은 1970년 미국으로 옮겨 코네티컷대학교 박사후연구를 거친 뒤 일리노이대학교에서 아동의 기억·독해·전략 사용을 연구했다. 전략을 직접 가르치면 수행은 좋아지지만 지원이 사라진 뒤 지속되지 않는다는 결과는 학습자가 자신의 이해와 전략을 점검하는 메타인지 연구로 이어졌다. 앤마리 팔린사와 개발한 상호교수법은 요약·질문·명료화·예측의 책임을 교사에서 학습자에게 점차 이양했다.",
      sourceIds: ["bio-brown-fabbs", "brown-palincsar-1984"],
    },
    {
      title: "버클리 교실과 설계실험",
      body: "브라운은 1988년 UC Berkeley 교육대학원으로 옮겨 남편이자 협력자 Joseph Campione과 Fostering Communities of Learners를 발전시켰다. 이론에 근거한 교실 환경을 실제 학교에서 반복적으로 만들고 수정하는 작업은 1992년 설계실험 논문으로 정식화됐다. National Academy of Education 회장 등을 역임한 그는 1999년 6월 4일 갑작스러운 질환으로 56세에 사망했다.",
      sourceIds: ["bio-brown-berkeley", "brown-1992"],
    },
  ],
  collins: [
    {
      title: "인지심리학과 인공지능의 접점",
      body: "앨런 M. 콜린스는 1937년 9월 24일 태어났다. 미시간대학교에서 1961년 커뮤니케이션과학 석사, 1970년 인지심리학 박사학위를 받았고, 의미기억·질문응답·추론을 계산적으로 설명하는 연구를 수행했다. Cognitive Science 창간 편집자와 Cognitive Science Society 초대 의장을 맡아 인지과학의 학제적 형성에도 참여했다.",
      sourceIds: ["bio-collins-authority", "bio-collins-northwestern"],
    },
    {
      title: "튜터링 시스템에서 인지도제로",
      body: "콜린스는 인공지능과 지능형 튜터링 시스템 연구를 교육 문제로 확장했다. John Seely Brown, Susan Newman과 함께 정리한 인지도제는 전문가가 과제를 수행할 때 사용하는 전략과 자기점검을 모델링하고, 코칭·스캐폴딩·성찰을 통해 학습자가 책임을 넘겨받게 한다. 실제 맥락과 실천 문화는 부가적 장식이 아니라 지식 사용을 구성하는 조건이다.",
      sourceIds: ["collins-1989", "bio-collins-northwestern"],
    },
    {
      title: "학습과학과 설계연구의 제도화",
      body: "Northwestern University 학습과학 명예교수인 콜린스는 상황학습, 탐구교수, 학습공동체와 기술 기반 학교개혁을 폭넓게 연구했다. 1992년 교육의 설계과학을 제안했고, 2004년에는 설계연구의 목표·반복 절차·일반화와 신뢰성 문제를 동료들과 체계화했다. 그의 경로는 인지모형을 실제 학습환경의 설계와 검증으로 연결한 학습과학의 역사를 보여준다.",
      sourceIds: ["collins-1992", "collins-2004", "bio-collins-northwestern"],
    },
  ],
  clark: [
    {
      title: "방송 실무에서 교육공학 연구로",
      body: "리처드 E. 클라크는 1940년 9월 15일 미시간주 하월에서 태어났다. 1962년 Western Michigan University에서 정치학·역사를 공부하고, 1964년 University of Pennsylvania Annenberg School에서 매스커뮤니케이션 석사학위를 받았다. 필라델피아와 뉴욕의 텔레비전 제작·보도 현장 경험은 매체에 대한 관심을 만들었지만, 이후 그는 매체를 둘러싼 주장을 실증적으로 검증하는 쪽으로 이동했다.",
      sourceIds: ["bio-clark-interview"] ,
    },
    {
      title: "교육공학과 교육심리 사이의 긴장",
      body: "클라크는 1970년 인디애나대학교에서 교육공학 박사학위를 마쳤고 Stanford의 교수·연구개발센터, Syracuse University를 거쳐 1978년 USC에 합류했다. 대학원 시절 교육공학의 낙관적 주장과 교육심리학의 검증 기준 사이의 차이를 경험한 일은 그의 연구 방향에 중요한 영향을 주었다. 그는 매체 연구에서 내용·방법·신규성·학습시간을 분리해 보려 했다.",
      sourceIds: ["bio-clark-interview", "bio-clark-usc"] ,
    },
    {
      title: "논쟁을 증거기반 설계로 연결하다",
      body: "1983년 연구 종합과 1994년 논쟁 논문은 학습성과의 인과적 원인을 매체 자체에 귀속하는 관행을 비판했다. 이 입장은 코즈마의 반론과 치열한 논쟁을 낳았지만, 결과적으로 연구자가 매체의 기능과 교수방법의 차이를 더 엄밀히 기술하도록 만들었다. USC 명예교수가 된 뒤에도 그는 전문성, 동기, 수행 진단과 연구-실천의 연결을 다뤘다.",
      sourceIds: ["clark-1983", "clark-1994", "bio-clark-usc"] ,
    },
  ],
  kozma: [
    {
      title: "교실과 교육 소프트웨어에서 출발한 연구",
      body: "로버트 B. 코즈마의 공개 기관 약력에서는 정확한 생년을 확인하기 어렵다. 그는 디트로이트 도심에서 초등 수학을 가르친 뒤 University of Michigan에서 약 20년 동안 교수·연구자로 활동했다. 초기 연구는 고등교육 교수혁신, 교육 소프트웨어, 여러 표상을 활용한 과학학습과 매체 이론을 연결했다.",
      sourceIds: ["bio-kozma-sri", "kozma-1991"] ,
    },
    {
      title: "클라크와의 미디어 효과 논쟁",
      body: "1991년 『Learning with Media』에서 코즈마는 텍스트·영상·컴퓨터가 제공하는 표상과 처리 기능이 학습자의 인지 과정과 상호작용할 수 있다고 주장했다. 1994년에는 클라크의 방법 중심 관점에 직접 답하며 ‘매체가 학습을 일으키는가’보다 ‘어떤 설계 조건에서 매체가 학습에 관여하는가’를 연구해야 한다고 제안했다. 두 사람의 논쟁은 단순 승패보다 연구 질문의 층위를 구분하게 한 데 의의가 있다.",
      sourceIds: ["kozma-1991", "kozma-1994", "clark-1994"] ,
    },
    {
      title: "SRI와 국가 ICT 정책",
      body: "SRI International의 Center for Technology in Learning에서 코즈마는 교수혁신과 첨단기술 연구를 이어가며 센터를 이끌었다. 이후에는 ICT 기반 교육개혁을 경제·사회 발전과 연결하는 국가 정책 연구와 자문을 여러 나라 및 UNESCO·OECD·World Bank 등과 수행했다. 이 경로는 개별 매체의 기능을 교실 설계에서 제도·정책 생태계까지 확장한다.",
      sourceIds: ["bio-kozma-sri", "bio-kozma-event"] ,
    },
  ],
  moore: [
    {
      title: "동아프리카 성인교육이 만든 질문",
      body: "마이클 그레이엄 무어는 영국에서 성장하고 경제학을 공부한 뒤 약 7년 동안 동아프리카에서 성인교육 실무를 경험했다. 현재 공개된 공식 약력에서 생년을 확정하기 어려워 이 아카이브는 생년을 미확인으로 표시한다. 교사와 학습자가 같은 장소에 있지 않아도 학습자가 주도권을 가질 수 있는가라는 질문이 그의 초기 연구를 이끌었다.",
      sourceIds: ["bio-moore-author", "bio-moore-hall"] ,
    },
    {
      title: "독립학습에서 교류간격으로",
      body: "1970년대 초 무어는 독립학습을 교수와 학습 양쪽의 관계로 이론화하고 학습자 자율성을 핵심 차원으로 제시했다. 후기의 교류간격 이론은 원격교육의 거리를 단순한 물리적 분리가 아니라 대화, 프로그램 구조, 자율성이 만드는 심리적·의사소통적 공간으로 설명했다. 같은 기술을 쓰더라도 설계에 따라 교육적 거리는 달라질 수 있다.",
      sourceIds: ["moore-1973", "moore-1993"] ,
    },
    {
      title: "원격교육을 하나의 학문 분야로",
      body: "영국 Open University와 Wisconsin의 연구·교육을 거친 무어는 1986년 Penn State 교수가 됐다. 그는 American Center for the Study of Distance Education, American Journal of Distance Education, 국제 온라인 토론망과 초기 온라인 대학원 과정을 구축했고 Penn State World Campus 구상에도 참여했다. 연구, 저널, 과정과 전문 공동체를 함께 만든 점에서 분야 형성자로 평가된다.",
      sourceIds: ["bio-moore-author", "bio-moore-hall"] ,
    },
  ],
  wenger: [
    {
      title: "스위스에서 언어교사와 AI 연구자로",
      body: "에티엔 웽거-트레이너는 1952년 스위스 뇌샤텔에서 태어나 프랑스어권에서 성장했다. 홍콩과 덴버에서 프랑스어를 가르친 경험을 통해 학습에 관심을 갖게 되었고, 이후 인공지능과 교육을 연구했다. 1987년 첫 저서는 AI 기반 튜터링 시스템의 계산적·인지적 접근을 정리했다.",
      sourceIds: ["bio-wenger-author"] ,
    },
    {
      title: "레이브와 정당한 주변적 참여",
      body: "Institute for Research on Learning에서 진 레이브와 수행한 작업은 1991년 『Situated Learning』으로 이어졌다. 두 사람은 학습을 개인 내부의 지식 획득만으로 설명하지 않고, 초보자가 실천공동체에 정당하게 접근해 참여의 범위와 책임을 바꾸는 과정으로 보았다. 이때 정체성의 변화는 학습의 부산물이 아니라 핵심 구성요소다.",
      sourceIds: ["lave-wenger-1991", "bio-wenger-author"] ,
    },
    {
      title: "실천공동체에서 사회학습 체계로",
      body: "1998년 『Communities of Practice』는 참여, 의미, 공동체, 정체성을 하나의 사회적 학습이론으로 확장했다. 이후 웽거-트레이너는 조직과 국제개발 현장에서 경계, 지식가능성, 실천의 풍경과 가치창출을 연구·자문해 왔다. 최근에는 Beverly Wenger-Trayner와 Social Learning Lab을 세워 여러 규모의 사회학습 역량을 다룬다.",
      sourceIds: ["wenger-1998", "bio-wenger-author"] ,
    },
  ],
  scardamalia: [
    {
      title: "쓰기와 전문성에서 시작된 인지 연구",
      body: "말린 스카다말리아는 캐나다 교육연구자이며 OISE/University of Toronto에서 인지발달, 글쓰기, 전문성과 의도적 학습을 연구했다. 정확한 생년은 공식 공개 약력에서 확인되지 않아 이 아카이브는 생년을 미확인으로 표시한다. 그녀의 초기 질문은 학습자가 과제를 끝내는 데서 멈추지 않고 자신의 지식 상태와 학습 목표를 어떻게 능동적으로 다루는가였다.",
      sourceIds: ["bio-scardamalia-nae", "bio-scardamalia-ikit"] ,
    },
    {
      title: "CSILE: 인터넷 이전의 협력 지식 매체",
      body: "스카다말리아가 이끈 팀은 1980년대에 Computer-Supported Intentional Learning Environments를 개발했다. 학생은 네트워크 데이터베이스에 글·그림·그래프를 남기고 서로의 아이디어를 연결·논평·수정할 수 있었다. 1989년 논문은 이 기능을 단순 정보공유가 아니라 의도적 학습과 성숙한 지식처리를 지원하는 설계로 설명했다.",
      sourceIds: ["scardamalia-1989", "bio-scardamalia-ikit"] ,
    },
    {
      title: "Knowledge Building과 세계적 네트워크",
      body: "칼 베라이터와 함께 발전시킨 지식구축 이론은 학교의 목표를 개인별 성취에만 두지 않고 공동체가 공적 아이디어를 개선하는 데 둔다. CSILE의 후속 시스템 Knowledge Forum은 이 담화를 기술적으로 지원했다. 스카다말리아는 Institute for Knowledge Innovation and Technology를 이끌며 학교·대학·조직을 연결했고 1995년 National Academy of Education 회원으로 선출됐다.",
      sourceIds: ["scardamalia-1994", "bio-scardamalia-nae", "bio-scardamalia-ikit"] ,
    },
  ],
  merrienboer: [
    {
      title: "실험심리학에서 교수기술로",
      body: "예룬 J. G. 판 메리엔보어는 1959년 네덜란드에서 태어났다. 1984년 Vrije Universiteit Amsterdam에서 실험심리학 석사학위를 받고, 1990년 University of Twente에서 교수기술 박사학위를 취득했다. 그는 인지구조와 자동화 연구를 실제 전문기능을 가르치는 교수설계 문제에 연결했다.",
      sourceIds: ["bio-merrienboer-4cid"] ,
    },
    {
      title: "4C/ID와 전체과제 중심 설계",
      body: "1990년대 초부터 발전한 Four-Component Instructional Design은 복합기능을 전체 학습과제, 지원정보, 절차정보, 부분과제 연습으로 구성한다. 1997년 『Training Complex Cognitive Skills』는 10여 년의 연구를 종합해 모형의 심리학적 토대를 완전하게 제시했다. 학습 전이와 통합을 위해 실제적 전체과제를 설계의 출발점으로 삼는 것이 핵심이다.",
      sourceIds: ["merrienboer-1997", "merrienboer-2002"] ,
    },
    {
      title: "복합학습과 의료교육의 유산",
      body: "판 메리엔보어는 Maastricht University 학습·교수 교수이자 보건전문교육 대학원의 연구책임자로 활동했고 노르웨이 Bergen과 네덜란드 Open University에서도 명예직을 맡았다. 450편이 넘는 논문·장을 발표하고 50명 넘는 박사과정 연구자를 지도했다. 2023년 3월 은퇴한 뒤 같은 해 11월 15일 사망했으며, 4C/ID는 전문역량·의료교육·평생학습 설계에 계속 활용된다.",
      sourceIds: ["bio-merrienboer-4cid", "merrienboer-2002"] ,
    },
  ],
};
