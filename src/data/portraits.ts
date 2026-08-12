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
  heinich: {
    src: "portraits/robert-heinich.jpg",
    alt: "인디애나대학교 교육공학자 로버트 하이니히 초상",
    objectPosition: "50% 34%",
    credit: "Indiana University School of Education, Chalkboard",
    license: "Institutional memorial image; rights not stated",
    sourceUrl:
      "https://education.indiana.edu/alumni/alumni-magazine/PDF/Chalkboard-2020-Spring.pdf",
    verification: {
      authority: "Indiana University School of Education",
      url: "https://education.indiana.edu/alumni/alumni-magazine/PDF/Chalkboard-2020-Spring.pdf",
      basis:
        "대학 공식 동문지의 Robert Heinich 추모 기사에서 인물명과 함께 배치된 사진을 원문 PDF에서 직접 추출했다.",
      checkedOn: "2026-08-13",
    },
  },
  glaser: {
    src: "portraits/robert-glaser.jpg",
    alt: "학습과 교육측정 연구자 로버트 글레이저 초상",
    objectPosition: "50% 25%",
    credit: "Association for Psychological Science",
    license: "Institutional remembrance image; rights not stated",
    sourceUrl:
      "https://www.psychologicalscience.org/observer/remembering-robert-glaser",
    verification: {
      authority: "Association for Psychological Science",
      url: "https://www.psychologicalscience.org/observer/remembering-robert-glaser",
      basis:
        "APS 공식 추모 기사가 Robert Glaser의 이름·생몰연도·연구 경력과 함께 제공한 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  novak: {
    src: "portraits/joseph-novak.jpg",
    alt: "개념도 연구자 조지프 D. 노백 초상",
    credit: "Florida Institute for Human & Machine Cognition",
    license: "Institutional profile image; rights not stated",
    sourceUrl: "https://www.ihmc.us/joseph-novak/",
    verification: {
      authority: "Florida Institute for Human & Machine Cognition",
      url: "https://www.ihmc.us/joseph-novak/",
      basis:
        "IHMC 공식 연구자 페이지가 Joseph D. Novak의 이름·학력·개념도 연구 이력과 함께 게시한 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  gilbert: {
    src: "portraits/thomas-gilbert.jpg",
    alt: "수행공학 연구자 토머스 F. 길버트 초상",
    objectPosition: "50% 24%",
    credit: "Performance Thinking Network / Six Boxes",
    license: "Professional memorial image; rights not stated",
    sourceUrl: "https://www.sixboxes.com/Inspiration.html",
    verification: {
      authority: "Performance Thinking Network",
      url: "https://www.sixboxes.com/Inspiration.html",
      basis:
        "길버트에게 직접 배운 연구자가 운영하는 전문 아카이브의 Thomas F. Gilbert 추모·사상 계보 페이지에 게시된 식별 사진을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  brown: {
    src: "portraits/ann-brown.jpg",
    alt: "학습과학 연구자 앤 L. 브라운 초상",
    objectPosition: "50% 24%",
    credit: "Federation of Associations in Behavioral & Brain Sciences",
    license: "Professional honor profile image; rights not stated",
    sourceUrl: "https://fabbs.org/about/in-honor-of/ann-l-brown-phd/",
    verification: {
      authority:
        "Federation of Associations in Behavioral & Brain Sciences",
      url: "https://fabbs.org/about/in-honor-of/ann-l-brown-phd/",
      basis:
        "FABBS 명예 인물 페이지가 Ann L. Brown의 이름·학습과 기억 연구 경력과 함께 제공한 초상을 UC Berkeley 부고와 교차 확인했다.",
      checkedOn: "2026-08-13",
    },
  },
  collins: {
    src: "portraits/allan-collins.jpg",
    alt: "노스웨스턴대학교 학습과학자 앨런 콜린스 초상",
    credit: "Northwestern University School of Education and Social Policy",
    license: "Institutional profile image; rights not stated",
    sourceUrl:
      "https://sesp.northwestern.edu/people/faculty/allan-m-collins.html",
    verification: {
      authority: "Northwestern University",
      url: "https://sesp.northwestern.edu/people/faculty/allan-m-collins.html",
      basis:
        "대학 공식 교수 페이지가 Allan Collins의 이름·직함·인지적 도제 및 설계연구 경력과 함께 제공한 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  clark: {
    src: "portraits/richard-clark.jpg",
    alt: "USC 교육심리·교육공학 연구자 리처드 E. 클라크 초상",
    credit: "USC Rossier School of Education",
    license: "Institutional profile image; rights not stated",
    sourceUrl:
      "https://rossier.usc.edu/faculty-research/directory/richard-clark",
    verification: {
      authority: "University of Southern California",
      url: "https://rossier.usc.edu/faculty-research/directory/richard-clark",
      basis:
        "USC 공식 교수 페이지가 Richard E. Clark의 이름·직함·교육공학 연구 경력과 함께 제공한 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  kozma: {
    src: "portraits/robert-kozma.jpg",
    alt: "교육공학 연구자 로버트 B. 코즈마 강연 초상",
    objectPosition: "50% 24%",
    credit: "Fundació Jaume Bofill / UOC Debates on Education",
    license: "Official event video still; rights not stated",
    sourceUrl:
      "https://www.equitat.org/en/videos/robert-b-kozma-icts-and-transformation-education-knowledge-economy",
    verification: {
      authority: "Fundació Jaume Bofill and Universitat Oberta de Catalunya",
      url: "https://www.equitat.org/en/videos/robert-b-kozma-icts-and-transformation-education-knowledge-economy",
      basis:
        "공식 강연 페이지 제목과 영상 명찰에 Robert Kozma가 명시된 프레임에서 얼굴 영역을 추출했다.",
      checkedOn: "2026-08-13",
    },
  },
  moore: {
    src: "portraits/michael-moore.jpg",
    alt: "원격교육 연구자 마이클 G. 무어 초상",
    credit: "Michael G. Moore official author site",
    license: "Author profile image; rights not stated",
    sourceUrl: "https://michaelgmoore.com/a/",
    verification: {
      authority: "Michael G. Moore",
      url: "https://michaelgmoore.com/a/",
      basis:
        "연구자가 운영하는 공식 저자 페이지가 이름·Penn State 경력·거래적 거리 이론 설명과 함께 제공한 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  wenger: {
    src: "portraits/etienne-wenger.jpg",
    alt: "실천공동체 연구자 에티엔 웽거-트레이너 초상",
    credit: "Wenger-Trayner",
    license: "Author-provided press photo; rights not stated",
    sourceUrl: "https://www.wenger-trayner.com/etienne/",
    verification: {
      authority: "Wenger-Trayner",
      url: "https://www.wenger-trayner.com/etienne/",
      basis:
        "연구자 공식 전기 페이지가 Etienne Wenger-Trayner의 이름·실천공동체 연구 이력과 함께 제공한 사용 가능 사진을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  scardamalia: {
    src: "portraits/marlene-scardamalia.jpg",
    alt: "지식구축 연구자 말린 스카더말리아 초상",
    credit: "National Academy of Education",
    license: "Institutional member profile image; rights not stated",
    sourceUrl: "https://naeducation.org/member/marlene-scardamalia/",
    verification: {
      authority: "National Academy of Education",
      url: "https://naeducation.org/member/marlene-scardamalia/",
      basis:
        "NAEd 공식 회원 페이지가 Marlene Scardamalia의 이름·소속·지식구축 연구 이력과 함께 제공한 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
  merrienboer: {
    src: "portraits/jeroen-van-merrienboer.jpg",
    alt: "4C/ID 모형 연구자 예룬 반 메리엔보어 초상",
    credit: "4C/ID official site",
    license: "Institutional memorial image; rights not stated",
    sourceUrl: "https://www.4cid.org/in-memoriam/",
    verification: {
      authority: "4C/ID",
      url: "https://www.4cid.org/in-memoriam/",
      basis:
        "4C/ID 공식 추모 페이지가 Jeroen van Merriënboer의 이름·생몰연도·모형 개발 경력과 함께 제공한 초상을 사용했다.",
      checkedOn: "2026-08-13",
    },
  },
};

export const portraitById = portraits;
