import type { Portrait } from "./types";

export const portraits: Record<string, Portrait | null> = {
  dewey: {
    src: "portraits/john-dewey.jpg",
    alt: "1902년 존 듀이 초상 사진",
    credit:
      "Eva Watson-Schütze; John Dewey Photograph Collection, Morris Library",
    license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:John_Dewey_in_1902.jpg",
    verification: {
      authority: "SIU 듀이 연구센터",
      url: "https://deweycenter.siu.edu/about-dewey/dewey-portraits.php",
      basis:
        "센터가 소장처와 연대를 명시한 1885년 초상과 현재의 1902년 시카고대학교 초상을 얼굴 특징으로 대조했다.",
      checkedOn: "2026-08-12",
    },
  },
  thorndike: {
    src: "portraits/edward-thorndike.png",
    alt: "1912년 에드워드 리 손다이크 흑백 초상",
    credit: "Unknown author; Popular Science Monthly, vol. 80",
    license: "Public domain",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:PSM_V80_D211_Edward_Lee_Thorndike.png",
    verification: {
      authority: "Teachers College, Columbia",
      url: "https://www.tc.columbia.edu/articles/2009/october/silhouettes-of-tc-today-cover/",
      basis:
        "Teachers College가 인물 1번으로 식별한 역사 이미지와 Popular Science Monthly의 1912년 명명 초상을 대조했다.",
      checkedOn: "2026-08-12",
    },
  },
  vygotsky: {
    src: "portraits/lev-vygotsky.jpg",
    alt: "1925년경 레프 비고츠키 흑백 초상",
    credit: "Unknown author",
    license: "Public domain",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Lev-Semyonovich-Vygotsky-1896-1934.jpg",
    verification: {
      authority: "Vygotsky Internet Archive",
      url: "https://www.marxists.org/archive/vygotsky/images/",
      basis:
        "전문 아카이브에 수록된 단독 초상과 1925년 런던 국제회의 단체 사진을 현재 초상과 대조했다.",
      checkedOn: "2026-08-12",
    },
  },
  skinner: {
    src: "portraits/bf-skinner.jpg",
    alt: "1950년경 하버드의 B. F. 스키너",
    credit: "Silly rabbit",
    license: "CC BY 3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:B.F._Skinner_at_Harvard_circa_1950_(cropped).jpg",
    verification: {
      authority: "B. F. Skinner Foundation",
      url: "https://www.bfskinner.org/archival-materials/biographical-information/",
      basis:
        "스키너 재단 아카이브가 생애 단계별로 제공하는 사진들과 1950년경 하버드 초상의 얼굴을 대조했다.",
      checkedOn: "2026-08-12",
    },
  },
  bloom: {
    src: "portraits/benjamin-bloom.jpg",
    alt: "시카고대학교 교육심리학자 벤저민 S. 블룸 초상",
    credit:
      "University of Chicago Photographic Archive, apf1-09293, Hanna Holborn Gray Special Collections Research Center, University of Chicago Library; cropped",
    license: "Educational & scholarly use",
    sourceUrl:
      "https://photoarchive.lib.uchicago.edu/db.xqy?one=apf1-09293.xml",
    verification: {
      authority: "University of Chicago Library",
      url: "https://photoarchive.lib.uchicago.edu/db.xqy?one=apf1-09293.xml",
      basis:
        "공식 사진 기록의 이름, 교육심리학자 직함, 소속, 생몰연도(1913–1999), 이미지 식별번호 apf1-09293을 모두 확인했다.",
      checkedOn: "2026-08-12",
    },
  },
  gagne: {
    src: "portraits/robert-gagne.jpg",
    alt: "1989년 유타주립대학교 교수설계 대담에 참여한 로버트 가녜",
    credit:
      "Utah State University OpenCourseWare; video frame, contributing authors",
    license: "CC BY-NC-SA 2.5",
    sourceUrl: "https://digitalcommons.usu.edu/ocw_uext/23/",
    verification: {
      authority: "Utah State University DigitalCommons",
      url: "https://digitalcommons.usu.edu/ocw_uext/23/",
      basis:
        "1989년 대담의 공식 메타데이터, 오프닝 크레딧, 영상 속 “Dr. Robert Gagné” 하단 이름표를 함께 확인했다.",
      checkedOn: "2026-08-12",
    },
  },
  bruner: {
    src: "portraits/jerome-bruner.png",
    alt: "1936년의 젊은 제롬 브루너",
    credit: "Unknown author; The Chanticleer 1936",
    license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Jerome_Bruner_1936.png",
    verification: {
      authority: "NYU School of Law",
      url: "https://www.law.nyu.edu/news/Jerome-Bruner-interdisciplinary-law-psychology-memorial-celebration",
      basis:
        "NYU의 식별된 추모 초상 및 1936년 Duke 연감의 이름·재학 시점과 현재의 젊은 시절 사진을 대조했다.",
      checkedOn: "2026-08-12",
    },
  },
  bandura: {
    src: "portraits/albert-bandura.jpg",
    alt: "2005년 앨버트 반두라 초상",
    credit: "Albert Bandura",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Albert_Bandura_Psychologist_(headshot).jpg",
    verification: {
      authority: "Stanford University",
      url: "https://news.stanford.edu/stories/2021/07/psychology-professor-albert-bandura-dead-95",
      basis:
        "Stanford 공식 부고가 “Courtesy Albert Bandura”로 식별한 초상과 2005년 원본 제공자 명의의 사진을 대조했다.",
      checkedOn: "2026-08-12",
    },
  },
  merrill: {
    src: "portraits/david-merrill.jpg",
    alt: "2009년 ED-MEDIA 기조연설자 M. 데이비드 메릴",
    credit: "Kristina D.C. Hoeppner",
    license: "CC BY-SA 2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:M._David_Merrill_(3662310676)_(2).jpg",
    verification: {
      authority: "Utah State University",
      url: "https://cehhs.usu.edu/itls/people/m-david-merrill",
      basis:
        "USU 교수 프로필의 식별 초상과 2009년 ED-MEDIA 기조연설 사진의 얼굴을 대조했다.",
      checkedOn: "2026-08-12",
    },
  },
  keller: {
    src: "portraits/john-keller.jpg",
    alt: "교육공학 연구자 프로필에 게시된 존 M. 켈러 초상",
    credit: "Educational Technology: An Introduction; photographer not stated",
    license: "Rights not stated",
    sourceUrl:
      "https://sites.google.com/view/educational-technology-info/researchers/john-m-keller",
    verification: {
      authority: "SDSU Educational Technology",
      url: "https://www.youtube.com/watch?v=E1ugbX2EKN0",
      basis:
        "SDSU의 “ARCS: A Conversation with John Keller” 인터뷰에서 얼굴, 음성, 이름과 ARCS 저자 소개를 함께 확인했다.",
      checkedOn: "2026-08-12",
    },
  },
  papert: {
    src: "portraits/seymour-papert.jpg",
    alt: "시모어 파퍼트가 로고 터틀 장치를 시연하는 초상",
    credit: "Matematicamente.it",
    license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Seymour_Papert.jpg",
    verification: {
      authority: "MIT News",
      url: "https://news.mit.edu/2016/seymour-papert-pioneer-of-constructionist-learning-dies-0801",
      basis:
        "MIT가 캡션으로 식별한 1968–1988년 사진 여러 장과 터틀 장치를 든 현재 초상의 얼굴을 대조했다.",
      checkedOn: "2026-08-12",
    },
  },
  mayer: {
    src: "portraits/richard-mayer.jpg",
    alt: "2011년 리처드 E. 메이어 영상 학습 강연 장면",
    credit: "239MikeO",
    license: "CC BY 3.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Prof._Richard_E._Mayer_-_On_the_role_and_design_of_video_for_learning._2011.jpg",
    verification: {
      authority: "UC Santa Barbara Mayer Lab",
      url: "https://mayerlab.psych.ucsb.edu/people/richard-mayer",
      basis:
        "UCSB 공식 교수 프로필 사진과 이름이 명시된 2011년 영상 학습 인터뷰 프레임의 얼굴을 대조했다.",
      checkedOn: "2026-08-12",
    },
  },
  piaget: {
    src: "portraits/jean-piaget.png",
    alt: "미시간대학교 방문 당시의 장 피아제 초상",
    credit: "Unidentified photographer; Michiganensian, University of Michigan",
    license: "Public domain",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Jean_Piaget_in_Ann_Arbor_(cropped).png",
    verification: {
      authority: "University of Geneva · Jean Piaget Archives",
      url: "https://www.unige.ch/centre-piaget/en/jean-piaget/biography/trajectory",
      basis:
        "미시간대학교 연감이 Jean Piaget로 명명한 원본과 제네바대학교 피아제 아카이브의 생애별 초상을 얼굴·방문 시기와 함께 대조했다.",
      checkedOn: "2026-08-13",
    },
  },
  pressey: {
    src: "portraits/sidney-pressey.jpg",
    alt: "오하이오주립대학교가 소장한 시드니 프레시 초상",
    objectPosition: "0% 0%",
    objectScale: 2,
    transformOrigin: "0% 0%",
    credit: "The Ohio State University",
    license: "Institutional image; rights not stated",
    sourceUrl: "https://research.osu.edu/sidney-l-pressey",
    verification: {
      authority: "The Ohio State University",
      url: "https://research.osu.edu/sidney-l-pressey",
      basis:
        "대학 공식 연구 명예 페이지가 인물명·재직기간·교수기계 업적과 함께 게시한 식별 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  dale: {
    src: "portraits/edgar-dale-1972.jpg",
    alt: "1972년 에드거 데일 초상",
    credit: "The Ohio State University College of Education and Human Ecology",
    license: "Institutional image; rights not stated",
    sourceUrl: "https://ehe.osu.edu/about/history",
    verification: {
      authority: "The Ohio State University",
      url: "https://research.osu.edu/edgar-dale",
      basis:
        "대학 공식 연구 명예 페이지가 이름·생몰연도·재직기간·경험의 원추 설명과 함께 게시한 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  tyler: {
    src: "portraits/ralph-tyler.jpg",
    alt: "교육과정 연구자 랠프 W. 타일러 초상",
    credit: "University of Massachusetts Amherst",
    license: "CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Photo_of_Ralph_W._Tyler.jpg",
    verification: {
      authority: "University of Chicago Library",
      url: "https://www.lib.uchicago.edu/e/scrc/findingaids/view.php?eadid=ICU.SPCL.TYLER",
      basis:
        "UMass Amherst가 인물명으로 제공한 교수 사진을 시카고대학교 랠프 W. 타일러 문서의 생애·소속 기록과 대조했다.",
      checkedOn: "2026-08-13",
    },
  },
  mager: {
    src: "portraits/robert-mager.jpg",
    alt: "교수설계 연구자 로버트 F. 메이거 초상",
    credit: "Tashlovely",
    license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Robert_F._Mager.jpg",
    verification: {
      authority: "The Learning Guild",
      url: "https://www.learningguild.com/articles/in-memoriam-robert-f-mager-1923-2020",
      basis:
        "이름이 명시된 공개 라이선스 초상을 Learning Guild의 공식 추모 기사 사진과 얼굴·생몰연도로 대조했다.",
      checkedOn: "2026-08-13",
    },
  },
  dick: {
    src: "portraits/walter-dick.png",
    alt: "교수설계 연구자 월터 딕 인터뷰 초상",
    credit:
      "AECT Legends and Legacies; profile frame via Educational Technology: An Introduction",
    license: "Rights not stated",
    sourceUrl:
      "https://www.educational-technology.info/researchers/walter-dick",
    verification: {
      authority: "Florida State University",
      url: "https://annescollege.fsu.edu/instructional-systems-and-learning-technologies",
      basis:
        "Walter Dick로 명명된 AECT 인터뷰 프레임을 FSU 프로그램 기록과 Pearson 저자 정보의 이름·경력으로 교차 확인했다.",
      checkedOn: "2026-08-13",
    },
  },
  reigeluth: {
    src: "portraits/charles-reigeluth.png",
    alt: "교수설계 이론가 찰스 라이겔루스 초상",
    credit: "Charles M. Reigeluth official profile",
    license: "Rights not stated",
    sourceUrl: "https://www.reigeluth.net/me-c1owg",
    verification: {
      authority: "Charles M. Reigeluth",
      url: "https://www.reigeluth.net/me-c1owg",
      basis:
        "연구자 본인이 운영하는 경력 페이지의 이름·학력·재직 이력과 함께 제공된 프로필 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  seels: {
    src: "portraits/barbara-seels.png",
    alt: "교육공학 연구자 바버라 B. 실스 초상",
    credit: "Educational Technology: An Introduction; photographer not stated",
    license: "Rights not stated",
    sourceUrl:
      "https://www.educational-technology.info/researchers/barbara-seels",
    verification: {
      authority: "Visual Literacy Today archive",
      url: "https://visualliteracytoday.org/barbara-seels-papers-1968-1999-mss-156/",
      basis:
        "Barbara Seels로 명명된 연구자 프로필 초상을 피츠버그대학교 경력과 문서 컬렉션을 기록한 전문 아카이브 자료와 대조했다.",
      checkedOn: "2026-08-13",
    },
  },
  richey: {
    src: "portraits/rita-richey.jpg",
    alt: "AECT History Makers 인터뷰의 리타 C. 리치",
    credit:
      "Association for Educational Communications and Technology; Virginia Tech repository",
    license: "In Copyright",
    sourceUrl:
      "https://vtechworks.lib.vt.edu/items/78627ab6-2d29-432a-b656-7acfcb70528b",
    verification: {
      authority: "Virginia Tech VTechWorks",
      url: "https://vtechworks.lib.vt.edu/items/78627ab6-2d29-432a-b656-7acfcb70528b",
      basis:
        "대학 저장소가 Rita C. Richey의 AECT History Makers 인터뷰로 식별하고 권리 상태를 명시한 영상 프레임을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  jonassen: {
    src: "portraits/david-h-jonassen.png",
    alt: "교육공학 연구자 데이비드 H. 조나센 초상",
    credit: "Educational Technology: An Introduction; photographer not stated",
    license: "Rights not stated",
    sourceUrl:
      "https://www.educational-technology.info/researchers/david-h-jonassen",
    verification: {
      authority: "Educational Technology: An Introduction",
      url: "https://www.educational-technology.info/researchers/david-h-jonassen",
      basis:
        "David H. Jonassen으로 명명된 전기 페이지의 초상을 동일 페이지의 생몰연도·소속·대표 저작과 함께 확인했다.",
      checkedOn: "2026-08-13",
    },
  },
  sweller: {
    src: "portraits/john-sweller.jpg",
    alt: "뉴사우스웨일스대학교의 존 스웰러 교수 초상",
    credit: "UNSW Sydney",
    license: "Institutional profile image; rights not stated",
    sourceUrl: "https://www.unsw.edu.au/staff/john-sweller",
    verification: {
      authority: "UNSW Sydney",
      url: "https://www.unsw.edu.au/staff/john-sweller",
      basis:
        "대학 공식 교수 페이지가 John Sweller의 이름·직함·박사연도·인지부하 이론 연구와 함께 제공한 식별 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  lave: {
    src: "portraits/jean-lave.jpg",
    alt: "2014년 ICLS 기조강연 중인 진 레이브",
    credit: "Raymond Johnson",
    license: "CC BY-SA 2.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Jean_Lave,_ICLS_2014_opening_keynote_(15057409757).jpg",
    verification: {
      authority: "University of California, Berkeley",
      url: "https://gsi.berkeley.edu/programs-services/hsl-project/hsl-speakers/lave/",
      basis:
        "ICLS 2014 행사와 연사가 명시된 공개 사진을 UC Berkeley가 Jean Lave로 소개한 강연 기록·연구 분야와 대조했다.",
      checkedOn: "2026-08-13",
    },
  },
};

export const portraitById = portraits;
