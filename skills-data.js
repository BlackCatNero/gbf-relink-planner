/* GBF Relink skill catalog & weapon definitions */
const CATEGORIES = [
  { id: "basic", label: "기본" },
  { id: "attack", label: "공격" },
  { id: "defense", label: "방어" },
  { id: "support", label: "지원" },
  { id: "special", label: "특수" },
  { id: "exclusive", label: "전용" },
];

/** @type {{ id: string, name: string, category: string, max: number, priority: boolean }[]} */
const SKILL_CATALOG = [];

function addSkills(category, entries) {
  entries.forEach((e) => {
    const priority = !!e.priority;
    const name = e.name;
    const max = e.max != null ? e.max : 15;
    SKILL_CATALOG.push({
      id: `${category}:${name}`,
      name,
      category,
      max,
      priority,
    });
  });
}

// [기본]
addSkills("basic", [
  { name: "스턴", max: 45, priority: true },
  { name: "체력", max: 50, priority: true },
  { name: "공격력", max: 50 },
  { name: "크리티컬 확률", max: 45 },
]);

// [공격]
addSkills("attack", [
  { name: "배수", max: 30 },
  { name: "혼신", max: 30 },
  { name: "크리티컬 대미지", max: 30 },
  { name: "약점 공격", max: 45 },
  { name: "폭군", max: 30 },
  { name: "결사의 각오", max: 30 },
  { name: "대미지 상한", max: 65, priority: true },
  { name: "어빌리티 대미지" },
  { name: "연계 공격", max: 30 },
  { name: "콤보 보너스", max: 30 },
  { name: "추가 대미지", max: 45, priority: true },
  { name: "베르세르크", max: 15, priority: true },
  { name: "스파르타", max: 15, priority: true },
  { name: "콤보 피니시", max: 30 },
  { name: "차지 어택", max: 30 },
  { name: "모으기 회심", max: 20 },
  { name: "퀵 차지", max: 30 },
  { name: "집중포화", max: 30 },
  { name: "투척", max: 30 },
  { name: "약화 상태 특효", max: 30 },
  { name: "오버 드라이브 특효", max: 30 },
  { name: "브레이크 특효", max: 30 },
  { name: "선제", max: 30 },
  { name: "수라", max: 30 },
  { name: "가드 반격", max: 30 },
  { name: "회피 반격", max: 30, priority: true },
  { name: "적수공권", max: 30 },
  { name: "궁지", max: 30 },
  { name: "미세한 차이", max: 15 },
  { name: "건곤일척", max: 15 },
  { name: "유리 속성 변환", max: 15, priority: true },
  { name: "천성의 염", max: 15, priority: true },
  { name: "천성의 황", max: 15, priority: true },
  { name: "천성의 계", max: 15, priority: true },
  { name: "천성의 지", max: 15, priority: true },
  { name: "천성의 설", max: 15, priority: true },
  { name: "천성의 연", max: 15, priority: true },
  { name: "천상무뢰", max: 15, priority: true },
]);

// [방어]
addSkills("defense", [
  { name: "수호", max: 45, priority: true },
  { name: "금강", max: 30, priority: true },
  { name: "견수", max: 45 },
  { name: "강건", max: 30, priority: true },
  { name: "버티기", max: 15, priority: true },
  { name: "가드 성능", max: 30 },
  { name: "회피 성능", max: 15, priority: true },
  { name: "항전", max: 30 },
  { name: "정신일도", max: 30, priority: true },
  { name: "회피 거리", max: 15 },
  { name: "프래즐 닷지", max: 15, priority: true },
  { name: "모든 약화 효과 내성", max: 15 },
  { name: "슈퍼 얼티메이트 Just 회피", max: 15 },
  { name: "부동", max: 30, priority: true },
  { name: "기절 내성", max: 30 },
  { name: "빙결 내성", max: 30 },
  { name: "물감옥 내성", max: 30 },
  { name: "모래인간 내성", max: 30 },
  { name: "독 내성", max: 30 },
  { name: "슬로우 내성", max: 30 },
  { name: "작열 내성", max: 30 },
  { name: "마비 내성", max: 30 },
  { name: "재앙 내성", max: 30 },
  { name: "어빌리티 봉인 내성", max: 30 },
  { name: "오의 봉인 내성", max: 30 },
  { name: "레지스트 얼터", max: 30 },
  { name: "공격 Down 내성", max: 30 },
  { name: "방어 Down 내성", max: 30 },
]);

// [지원]
addSkills("support", [
  { name: "회복 성능", max: 30 },
  { name: "리제너레이션", max: 45 },
  { name: "다이버전스", max: 15 },
  { name: "HP 흡수", max: 45, priority: true },
  { name: "퀵 어빌리티", max: 45, priority: true },
  { name: "맹렬", max: 20, priority: true },
  { name: "고양", max: 45, priority: true },
  { name: "격노", max: 30 },
  { name: "명경지수", max: 30 },
  { name: "만능약", max: 30 },
]);

// [특수]
addSkills("special", [
  { name: "포션 보유 수", max: 15, priority: true },
  { name: "근성", max: 20, priority: true },
  { name: "자동 부활", max: 20, priority: true },
  { name: "차지 강화", max: 15 },
  { name: "도발", max: 20 },
  { name: "은신", max: 20 },
  { name: "게의 공명", max: 45 },
  { name: "게의 보은", max: 15 },
  { name: "가공할 만한 칠흑의 게 진", max: 20 },
  { name: "칠흑의 인연", max: 15 },
  { name: "스모워 포스", max: 5 },
  { name: "움츠러들기 무효", max: 15, priority: true },
  { name: "획득 경험치", max: 45 },
  { name: "획득 루피", max: 45 },
  { name: "획득 MSP", max: 45 },
  { name: "알파 코드", max: 30 },
  { name: "베타 코드", max: 30 },
  { name: "감마 코드", max: 30 },
]);

// [전용]
addSkills("exclusive", [
  "브레이브 드라이브", "브레이브 오라", "브레이브 하트",
  "수호자의 결의", "수호자의 긍지", "수호자의 투기",
  "조타사의 인도", "조타사의 집념", "조타사의 투기",
  "마법사의 소원", "마법사의 재치", "마법사의 투기",
  "노병의 지혜", "노병의 일척안", "노병의 투기",
  "장미의 이른 개화", "장미의 만발", "장미의 투기",
  "성기사의 검광", "성기사의 위풍", "성기사의 투기",
  "고금무쌍의 기풍", "고금무쌍의 경지", "고금무쌍의 투기",
  "유환의 유대", "유환의 호응", "유환의 투기",
  "나비칼날의 몽환", "나비칼날의 무예", "나비칼날의 투기",
  "백룡의 맹세", "백룡의 자긍심", "백룡의 투기",
  "용사의 신념", "용사의 근성", "용사의 투기",
  "제왕의 행진", "제왕의 전념", "제왕의 투기",
  "살룡의 맹위", "살룡의 기지", "살룡의 투기",
  "극치의 계략", "극치의 진리", "극치의 투기",
  "변화무쌍의 쾌도", "변화무쌍의 요검사", "변화무쌍의 투기",
  "진홍의 기염", "진홍의 천무", "진홍의 투기",
  "짙은 어둠의 서슬", "짙은 어둠의 자약", "짙은 어둠의 투기",
  "얼터너티브 글로우", "얼터너티브 브레이커", "얼터너티브 하트",
  "뇌랑의 혜안", "뇌랑의 장탄", "뇌랑의 투기",
  "군청의 역경", "군청의 검섬", "군청의 투기",
  "고귀한 칼날의 세레나데", "고귀한 칼날의 론도", "고귀한 칼날의 투기",
  "늑대왕의 큰 팽이", "늑대왕의 격정", "늑대왕의 투기",
  "전세의 은총", "전세의 약동", "전세의 투기",
  "흑의 일약", "흑의 주인", "흑의 투기",
  // + (2칸)
  "브레이브 소울+",
  "수호자의 각성+",
  "조타사의 각성+",
  "마법사의 각성+",
  "노병의 각성+",
  "장미의 각성+",
  "성기사의 각성+",
  "고금무쌍의 각성+",
  "유환의 각성+",
  "나비칼날의 각성+",
  "백룡의 각성+",
  "용사의 각성+",
  "제왕의 각성+",
  "살룡의 각성+",
  "극치의 각성+",
  "변화무쌍의 각성+",
  "진홍의 각성+",
  "짙은 어둠의 각성+",
  "얼터너티브 소울+",
  "뇌랑의 각성+",
  "군청의 각성+",
  "고귀한 칼날의 각성+",
  "늑대왕의 각성+",
  "전세의 각성+",
  "흑의 각성+",
].map((name) => ({ name, max: 15 })));

/** 각성+ / 소울+ → 투기(또는 하트)를 제외한 전용 스킬 2개 */
const EXCLUSIVE_PLUS_COMPONENTS = {
  "브레이브 소울+": ["브레이브 드라이브", "브레이브 오라"],
  "수호자의 각성+": ["수호자의 결의", "수호자의 긍지"],
  "조타사의 각성+": ["조타사의 인도", "조타사의 집념"],
  "마법사의 각성+": ["마법사의 소원", "마법사의 재치"],
  "노병의 각성+": ["노병의 지혜", "노병의 일척안"],
  "장미의 각성+": ["장미의 이른 개화", "장미의 만발"],
  "성기사의 각성+": ["성기사의 검광", "성기사의 위풍"],
  "고금무쌍의 각성+": ["고금무쌍의 기풍", "고금무쌍의 경지"],
  "유환의 각성+": ["유환의 유대", "유환의 호응"],
  "나비칼날의 각성+": ["나비칼날의 몽환", "나비칼날의 무예"],
  "백룡의 각성+": ["백룡의 맹세", "백룡의 자긍심"],
  "용사의 각성+": ["용사의 신념", "용사의 근성"],
  "제왕의 각성+": ["제왕의 행진", "제왕의 전념"],
  "살룡의 각성+": ["살룡의 맹위", "살룡의 기지"],
  "극치의 각성+": ["극치의 계략", "극치의 진리"],
  "변화무쌍의 각성+": ["변화무쌍의 쾌도", "변화무쌍의 요검사"],
  "진홍의 각성+": ["진홍의 기염", "진홍의 천무"],
  "짙은 어둠의 각성+": ["짙은 어둠의 서슬", "짙은 어둠의 자약"],
  "얼터너티브 소울+": ["얼터너티브 글로우", "얼터너티브 브레이커"],
  "뇌랑의 각성+": ["뇌랑의 혜안", "뇌랑의 장탄"],
  "군청의 각성+": ["군청의 역경", "군청의 검섬"],
  "고귀한 칼날의 각성+": ["고귀한 칼날의 세레나데", "고귀한 칼날의 론도"],
  "늑대왕의 각성+": ["늑대왕의 큰 팽이", "늑대왕의 격정"],
  "전세의 각성+": ["전세의 은총", "전세의 약동"],
  "흑의 각성+": ["흑의 일약", "흑의 주인"],
};

// Weapon-only fixed skills (for resolve)
[
  { name: "카타스트로피 노바", max: 35 },
  { name: "진 강화", max: 2 },
  { name: "엑스트라 브레이커", max: 55 },
  { name: "슈퍼노바", max: 15 },
  { name: "엑스트라 스트라이크", max: 15 },
  { name: "광천(대미지 상한)", max: 15 },
  { name: "엑스트라 익시드", max: 15 },
  { name: "질천(대미지 상한)", max: 15 },
  { name: "홍천(대미지 상한)", max: 15 },
  { name: "엑스트라 아츠", max: 15 },
  { name: "창천(대미지 상한)", max: 15 },
].forEach((e) => {
  SKILL_CATALOG.push({
    id: `weapon:${e.name}`,
    name: e.name,
    category: "special",
    max: e.max,
    priority: false,
    weaponOnly: true,
  });
});

/** Aliases used in weapon select pools → catalog display names */
const NAME_ALIASES = {
  HP: "체력",
  HP흡수: "HP 흡수",
  "오버드라이브 특효": "오버 드라이브 특효",
  "가드 강화": "가드 성능",
  "중독 내성": "독 내성",
  "공격DOWN 내성": "공격 Down 내성",
  "방어DOWN 내성": "방어 Down 내성",
};

const WEAPONS = [
  {
    id: "ultimate",
    name: "궁극 무기",
    slots: [
      { type: "fixed", name: "카타스트로피 노바", level: 35 },
      {
        type: "select",
        level: 25,
        pool: ["배수", "혼신", "폭군", "콤보 보너스", "오버드라이브 특효", "가드 반격", "미세한 차이", "리제너레이션", "HP흡수", "정신일도"],
      },
      { type: "fixed", name: "대미지 상한", level: 15 },
      { type: "fixed", name: "진 강화", level: 1 },
      { type: "fixed", name: "엑스트라 브레이커", level: 55 },
    ],
  },
  {
    id: "awakening",
    name: "각성 무기",
    slots: [
      { type: "fixed", name: "공격력", level: 35 },
      {
        type: "select",
        level: 25,
        pool: ["HP", "크리티컬 확률", "스턴", "연계 공격", "추가 대미지", "콤보 피니시", "HP흡수", "격노", "항전"],
      },
      { type: "fixed", name: "슈퍼노바", level: 15 },
      { type: "fixed", name: "진 강화", level: 2 },
      { type: "fixed", name: "엑스트라 스트라이크", level: 15 },
    ],
  },
  {
    id: "defense",
    name: "방어 무기",
    slots: [
      { type: "fixed", name: "체력", level: 35 },
      {
        type: "select",
        level: 25,
        pool: ["금강", "리제너레이션", "견수", "강건", "가드 강화", "기절 내성", "중독 내성", "작열 내성", "재앙 내성"],
      },
      { type: "fixed", name: "광천(대미지 상한)", level: 15 },
      {
        type: "select",
        level: 10,
        pool: ["금강", "리제너레이션", "견수", "강건", "가드 강화", "기절 내성", "중독 내성", "작열 내성", "재앙 내성"],
      },
      { type: "fixed", name: "엑스트라 익시드", level: 15 },
    ],
  },
  {
    id: "stun",
    name: "스턴 무기",
    slots: [
      { type: "fixed", name: "스턴", level: 35 },
      {
        type: "select",
        level: 25,
        pool: ["혼신", "연계 공격", "가드 반격", "수호", "물감옥 내성", "모래인간 내성", "마비 내성", "오의 봉인 내성", "포션 보유 수"],
      },
      { type: "fixed", name: "질천(대미지 상한)", level: 15 },
      {
        type: "select",
        level: 10,
        pool: ["혼신", "연계 공격", "가드 반격", "수호", "물감옥 내성", "모래인간 내성", "마비 내성", "오의 봉인 내성", "포션 보유 수"],
      },
      { type: "fixed", name: "엑스트라 익시드", level: 15 },
    ],
  },
  {
    id: "weak",
    name: "약점 공격 무기",
    slots: [
      { type: "fixed", name: "약점 공격", level: 35 },
      {
        type: "select",
        level: 25,
        pool: ["브레이크 특효", "퀵 어빌리티", "맹렬", "고양", "명경지수", "빙결 내성", "공격DOWN 내성", "방어DOWN 내성", "자동 부활"],
      },
      { type: "fixed", name: "홍천(대미지 상한)", level: 15 },
      {
        type: "select",
        level: 10,
        pool: ["브레이크 특효", "퀵 어빌리티", "맹렬", "고양", "명경지수", "빙결 내성", "공격DOWN 내성", "방어DOWN 내성", "자동 부활"],
      },
      { type: "fixed", name: "엑스트라 아츠", level: 15 },
    ],
  },
  {
    id: "crit",
    name: "크리티컬 무기",
    slots: [
      { type: "fixed", name: "크리티컬 확률", level: 35 },
      {
        type: "select",
        level: 25,
        pool: ["크리티컬 대미지", "결사의 각오", "오버드라이브 특효", "회피 반격", "부동", "슬로우 내성", "어빌리티 봉인 내성", "레지스트 얼터", "근성"],
      },
      { type: "fixed", name: "창천(대미지 상한)", level: 15 },
      {
        type: "select",
        level: 10,
        pool: ["크리티컬 대미지", "결사의 각오", "오버드라이브 특효", "회피 반격", "부동", "슬로우 내성", "어빌리티 봉인 내성", "레지스트 얼터", "근성"],
      },
      { type: "fixed", name: "엑스트라 아츠", level: 15 },
    ],
  },
];

/** 소환석 스탯 선택 목록 (<> = priority) */
const SUMMON_STATS = [
  { id: "summonstat:기본 공격 대미지 상한", name: "기본 공격 대미지 상한", priority: true },
  { id: "summonstat:어빌리티 대미지 상한", name: "어빌리티 대미지 상한", priority: true },
  { id: "summonstat:스턴치", name: "스턴치", priority: true },
  { id: "summonstat:공격력", name: "공격력", priority: false },
  { id: "summonstat:HP", name: "HP", priority: false },
  { id: "summonstat:크리티컬 확률", name: "크리티컬 확률", priority: false },
  { id: "summonstat:어빌리티 대미지", name: "어빌리티 대미지", priority: false },
  { id: "summonstat:오의 대미지", name: "오의 대미지", priority: false },
  { id: "summonstat:체인 버스트 대미지", name: "체인 버스트 대미지", priority: false },
  { id: "summonstat:오의 대미지 상한", name: "오의 대미지 상한", priority: false },
  { id: "summonstat:회복 상한 UP", name: "회복 상한 UP", priority: false },
];
