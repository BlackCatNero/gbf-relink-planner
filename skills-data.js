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
  "마안의 화살", "마안의 비상", "마안의 투기",
  "검성의 기공", "검성의 섬인", "검성의 투기",
  "천사장의 영위", "천사장의 풍아", "천사장의 투기",
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
  "마안의 각성+",
  "검성의 각성+",
  "천사장의 각성+",
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
  "마안의 각성+": ["마안의 화살", "마안의 비상"],
  "검성의 각성+": ["검성의 기공", "검성의 섬인"],
  "천사장의 각성+": ["천사장의 영위", "천사장의 풍아"],
};

/** 캐릭터 id → 전용 진 접두어 (해당 캐릭터 전용 스킬만 표시) */
const CHAR_EXCLUSIVE_PREFIX = {
  gran: "브레이브",
  katalina: "수호자",
  rackam: "조타사",
  io: "마법사",
  eugen: "노병",
  rosetta: "장미",
  charlotta: "성기사",
  ghandagoza: "고금무쌍",
  ferry: "유환",
  narmaya: "나비칼날",
  lancelot: "백룡",
  vane: "용사",
  percival: "제왕",
  siegfried: "살룡",
  cagliostro: "극치",
  yodarha: "변화무쌍",
  zeta: "진홍",
  vaseraga: "짙은 어둠",
  id: "얼터너티브",
  eustace: "뇌랑",
  beatrix: "군청",
  magilafrira: "고귀한 칼날",
  galanza: "늑대왕",
  frau: "전세",
  fediel: "흑",
  tweyen: "마안",
  seofon: "검성",
  sandalphon: "천사장",
};

function exclusivePrefixForChar(charId) {
  return CHAR_EXCLUSIVE_PREFIX[charId] || null;
}

function isExclusiveSkillForChar(skillName, charId) {
  const prefix = exclusivePrefixForChar(charId);
  if (!prefix || !skillName) return false;
  return skillName === prefix
    || skillName.startsWith(prefix + " ")
    || skillName.startsWith(prefix + "의");
}

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

/**
 * Max-level effect values per skill, sourced from game8.jp/gbf-relink/586843
 * (ジーン一覧, DLC Endless Ragnarok edition). Keyed by the Korean skill name
 * used in SKILL_CATALOG; each entry lists the effect(s) at max skill level.
 */
const SKILL_EFFECTS = {
  // [basic]
  "스턴": ["스턴치 +100"],
  "체력": ["최대 HP +10000"],
  "공격력": ["공격력 +2000"],
  "크리티컬 확률": ["크리티컬 확률 +50%"],

  // [attack]
  "배수": ["최대 효과 시 공격력 +100%"],
  "혼신": ["HP 100%일 때 공격력 +70%", "HP 25%일 때 공격력 +10.5%"],
  "크리티컬 대미지": ["주는 대미지 +50%"],
  "약점 공격": ["약점 부위 대미지 +70%", "배후 공격 대미지 +70%"],
  "폭군": ["공격력 +50%", "최대 HP -20%"],
  "결사의 각오": ["공격력 +50%", "아군에게 받는 회복 효과 무효"],
  "대미지 상한": ["X·Y 공격 대미지 상한 +250%", "어빌리티·오의 대미지 상한 +250%"],
  "어빌리티 대미지": ["주는 대미지 +100%"],
  "연계 공격": ["링크 어택 대미지 +100% · 오의 대미지 +50%", "체인 버스트 대미지 +20~50% · 링크 카운터 상승률 +50%"],
  "콤보 보너스": ["최대 효과 시 주는 대미지 +100%"],
  "추가 대미지": ["추격 발생 확률 100%"],
  "베르세르크": ["주는 대미지 20%의 추격 발생 (공격력 25000 이상: 100%, 20000 이하: 0%)"],
  "스파르타": ["주는 대미지 20%의 추격 발생 (HP 80000 이상: 100%, 50000 이하: 0%)"],
  "콤보 피니시": ["주는 대미지 +50%"],
  "차지 어택": ["주는 대미지 +50%"],
  "모으기 회심": ["크리티컬 확률 +60%"],
  "퀵 차지": ["모으기 시간 -30%", "공격력 +20%"],
  "집중포화": ["주는 대미지 +50%"],
  "투척": ["주는 대미지 +100%"],
  "약화 상태 특효": ["주는 대미지 +30%"],
  "오버 드라이브 특효": ["주는 대미지 +100%"],
  "브레이크 특효": ["주는 대미지 +200%"],
  "선제": ["공격력 +60%"],
  "수라": ["HP 감소량: 최대 HP의 50%", "공격력 +30%"],
  "가드 반격": ["스턴 게이지 상승량 +100%", "공격력 +50%"],
  "회피 반격": ["무적 시간 +3초", "공격력 +30%"],
  "적수공권": ["장착 어빌리티 3개: 공격력 +30% / 2개: +60% / 1개: +90% / 0개: +120%"],
  "궁지": ["공격력 +80%"],
  "미세한 차이": ["공격력 +30%", "대미지 상한 +30%"],
  "건곤일척": ["확률로 대미지 증가"],
  "천성의 염": ["대미지 상한 +50%"],
  "천성의 황": ["공격력 +20%", "대미지 상한 +70% (HP 75% 이상)"],
  "천성의 계": ["대미지 상한 +70%", "최대 HP -30%"],
  "천성의 지": ["주는 대미지 +10%", "아군에게 받는 회복 무효"],
  "천성의 설": ["주는 대미지 +15%"],
  "천성의 연": ["공격력 +30%", "대미지 상한 +120% (HP 25% 이하)"],
  "천상무뢰": ["공격력 +50%", "방어력 +5%", "대미지 상한 +50%"],

  // [defense]
  "수호": ["최대 HP +80%"],
  "금강": ["최대 HP +80%"],
  "견수": ["최대 효과 시 방어력 +70%"],
  "강건": ["HP 100%일 때 방어력 +30%", "HP 25%일 때 방어력 +4.5%"],
  "버티기": ["받는 대미지 -15%"],
  "가드 성능": ["가드 브레이크 발생률 -50%"],
  "회피 성능": ["연속 회피 가능 횟수 +4", "회피 성능 강화"],
  "항전": ["방어력 +30%", "최대 HP의 15% 회복"],
  "정신일도": ["무적 시간 +3초", "방어력 +20%", "최대 HP의 10% 회복"],
  "회피 거리": ["지상 회피 거리 증가"],
  "프래즐 닷지": ["공격력 -50%"],
  "슈퍼 얼티메이트 Just 회피": ["저스트 회피 성공 후 무적 시간 중 대미지 상한 +50%"],
  "부동": ["끌어당김·밀어냄 무효"],
  "기절 내성": ["기절 무효"],
  "빙결 내성": ["동상·빙결 무효"],
  "물감옥 내성": ["물감옥 무효"],
  "모래인간 내성": ["모래인간 무효"],
  "독 내성": ["독 무효"],
  "슬로우 내성": ["슬로우 무효"],
  "작열 내성": ["작열 무효"],
  "마비 내성": ["마비 무효"],
  "재앙 내성": ["재앙 무효"],
  "어빌리티 봉인 내성": ["어빌리티 봉인 무효"],
  "오의 봉인 내성": ["오의 봉인 무효"],
  "레지스트 얼터": ["자은(紫銀)의 불꽃 무효"],
  "공격 Down 내성": ["공격 DOWN 무효"],
  "방어 Down 내성": ["방어 DOWN 무효"],

  // [support]
  "회복 성능": ["어빌리티 HP 회복량 +50%", "회복 상한 +50%"],
  "리제너레이션": ["최대 HP의 5% 회복"],
  "다이버전스": ["최대 HP의 2% 회복", "15% 확률로 약화 효과 1개 해제"],
  "HP 흡수": ["주는 대미지의 5% 회복"],
  "퀵 어빌리티": ["쿨타임 -20%"],
  "맹렬": ["쿨타임 -2%"],
  "고양": ["오의 게이지 상승량 +30%"],
  "격노": ["오의 게이지 상승량 +5%", "쿨타임 -5%"],
  "명경지수": ["무적 시간 +3초", "오의 게이지 상승량 +5%", "쿨타임 -5%"],
  "만능약": ["큐어 포션 사용 시 상태 이상 회복", "이후 잠시 동안 약화 무효 부여"],

  // [special]
  "포션 보유 수": ["큐어 포션 +3 · 올 포션 +5 · 메가 포션 +5 · 부활약 +2"],
  "근성": ["발동 후 120초 뒤 재발동 가능"],
  "자동 부활": ["발동 후 120초 뒤 재발동 가능"],
  "차지 강화": ["방어력 +20%", "움츠러들기 무효"],
  "도발": ["적대심 +50"],
  "은신": ["적대심 -50"],
  "게의 공명": ["리틀 스나이퍼 45마리 보호 시 공격력 +1000"],
  "게의 보은": ["최대 HP +20%", "10% 대미지 컷 부여"],
  "칠흑의 인연": ["빈사 복귀 시간 -30%", "복귀 시 공격력 +10% · 5% 대미지 UP · 대미지 상한 +5%"],
  "움츠러들기 무효": ["항상 움츠러들기 무효"],
  "획득 경험치": ["경험치 획득량 +30%"],
  "획득 루피": ["루피 획득량 +60%"],
  "획득 MSP": ["MSP 획득량 +30%"],

  // [weapon-only]
  "카타스트로피 노바": ["최대 HP 200000 이하일 때 공격력 +70% · 대미지 상한 +500%"],
  "엑스트라 브레이커": ["대미지 상한 +50%"],
  "슈퍼노바": ["공격력 +40% · 대미지 상한 +350%"],
  "엑스트라 스트라이크": ["일반 공격 대미지 상한 +30%"],
  "광천(대미지 상한)": ["최소: 공격력 +40% · 상한 +200% (최대 HP 115000 이상)", "최대: 공격력 +50% · 상한 +260% (최대 HP 200000 이상)"],
  "엑스트라 익시드": ["오의 대미지 상한 +50%"],
  "질천(대미지 상한)": ["최대: 공격력 +35% · 상한 +280% (질천 V)", "링크 카운터 20% 증가마다 Lv 상승"],
  "홍천(대미지 상한)": ["최대: 공격력 +40% · 상한 +310% (홍천 V)", "일정 대미지를 줄 때마다 강화 부여 (60초)"],
  "엑스트라 아츠": ["어빌리티 대미지 상한 +30%"],
  "창천(대미지 상한)": ["최소: 공격력 +40% · 상한 +220% (크리티컬 확률 100% 이상)", "최대: 공격력 +50% · 상한 +270% (크리티컬 확률 200% 이상)"],

  // [exclusive]
  "브레이브 드라이브": ["쿨타임 -2% (Class II) / -3% (III) / -4% (IV)"],
  "브레이브 오라": ["공격력·방어력 +10% (II) / +15% (III) / +20% (IV)"],
  "브레이브 하트": ["주는 대미지 강화 +5% (II) / +7% (III) / +10% (IV)"],
  "수호자의 결의": ["주는 대미지 10%의 추격 효과", "대미지 상한 +15%"],
  "수호자의 긍지": ["쿨타임 -5%"],
  "수호자의 투기": ["아이시클 네일: 약화 무효 부여 (45초)", "비전 디바인: 추가로 25% 대미지 강화 부여 (45초)"],
  "조타사의 인도": ["X 공격 3연사 → 4연사 (공격 횟수 +1)"],
  "조타사의 집념": ["사거리 +50%", "대미지 상한 +25%"],
  "조타사의 투기": ["20% 대미지 강화 부여 (15초)"],
  "마법사의 소원": ["모으기 시간 -30%"],
  "마법사의 재치": ["대미지 상한 +50%"],
  "마법사의 투기": ["15% 대미지 강화 부여 (15초)", "마력의 소용돌이를 소비하지 않을 확률 50%"],
  "노병의 지혜": ["주는 대미지 +100%"],
  "노병의 일척안": ["공격 간격 -20%"],
  "노병의 투기": ["차지 공격 대미지 강화 +25%", "차지 공격으로 기폭한 그레네이드 대미지 강화 +25%"],
  "장미의 이른 개화": ["공격 간격 -30%"],
  "장미의 만발": ["공격력 +10%", "방어력 +10%", "재생 회복량 +2%"],
  "장미의 투기": ["장미 게이지 감소 속도 +200% · 공격 UP +15% · 방어 UP +15% · 재생 +3%", "장미 자동 공격 대미지 강화 +100%"],
  "성기사의 검광": ["X 공격 1회마다 쿨타임 -0.5%"],
  "성기사의 위풍": ["무적 시간 5초", "15초간 공격력 +30%"],
  "성기사의 투기": ["노블 스탠스 상태의 대미지 강화 +10%"],
  "고금무쌍의 기풍": ["크리티컬 확률: 고금무쌍류 Lv × 10%"],
  "고금무쌍의 경지": ["대미지 상한 +50%"],
  "고금무쌍의 투기": ["차지 시간 +100% · 대미지 강화 +100%"],
  "유환의 유대": ["주는 대미지 +30%", "25% 확률로 약화 부여 (공격 DOWN 20%·방어 DOWN 20%, 10초)"],
  "유환의 호응": ["출현 중인 펫 1마리당 대미지 상한 +15%", "쿨타임 -2%"],
  "유환의 투기": ["15% 대미지 강화 부여 (15초)", "출현한 펫이 소멸하지 않을 확률 50%"],
  "나비칼날의 몽환": ["호접 수 +1"],
  "나비칼날의 무예": ["발동률 50%"],
  "나비칼날의 투기": ["오의 게이지 상승량 -50%", "저스트 전환 시 15초간 15% 대미지 강화 · 10% 추격 부여"],
  "백룡의 맹세": ["주는 대미지 +50%", "이동 거리 +25%"],
  "백룡의 자긍심": ["최대 효과 시 주는 대미지 +50%"],
  "백룡의 투기": ["10% 대미지 강화 부여 (30초)"],
  "용사의 신념": ["15초간 받는 대미지 -20%"],
  "용사의 근성": ["쿨타임 -3%"],
  "용사의 투기": ["대미지 강화 +30% · 비트 게이지 +12.5%"],
  "제왕의 행진": ["이동 속도 +20%", "대미지 상한 +50%"],
  "제왕의 전념": ["최대 HP의 8% 회복", "15초간 공격력 +30%"],
  "제왕의 투기": ["대미지 강화 +30% · 10% 추격 부여 (30초)"],
  "살룡의 맹위": ["10초간 방어력 +20% · 움츠러들기 무효"],
  "살룡의 기지": ["쿨타임 -3%", "저스트 콤비네이션 시 추가로 쿨타임 -5%"],
  "살룡의 투기": ["방어력 -50% · 주는 대미지 +40%"],
  "극치의 계략": ["15초간 방어 DOWN 30% 부여"],
  "극치의 진리": ["쿨타임 -3%"],
  "극치의 투기": ["10% 대미지 강화 부여 (20초)", "서로 다른 콤보 피니시 히트 시 15%로 상승"],
  "변화무쌍의 쾌도": ["공격력 +30%"],
  "변화무쌍의 요검사": ["발동률 75%"],
  "변화무쌍의 투기": ["대미지 강화 +30%"],
  "진홍의 기염": ["주는 대미지 +25%"],
  "진홍의 천무": ["도약 공격 입력 타이밍 연장"],
  "진홍의 투기": ["주는 대미지 +15% · 크리티컬 확률 100%"],
  "짙은 어둠의 서슬": ["그로우노스 게이지 유지 시간 +100%"],
  "짙은 어둠의 자약": ["쿨타임 -0.6% ~ -8% (최대 차지 시)"],
  "짙은 어둠의 투기": ["HP 30% 소비로 게이지 상승", "30% 대미지 강화 부여 (45초)"],
  "얼터너티브 글로우": ["얼터너티브 게이지 상승량 +25%"],
  "얼터너티브 브레이커": ["공격 시 회복량 +10%", "대미지 상한 +30%", "움츠러들기 무효"],
  "얼터너티브 하트": ["용인화·신위일체 게이지 감소 속도 +200%", "10% 대미지 강화 · 게이지가 0이 될 때까지 변신 해제되지 않음"],
  "뇌랑의 혜안": ["샷 II 대미지 상한 +10% · III +15% · IV +20%"],
  "뇌랑의 장탄": ["최대 효과 시 스트렝스 +20% (20초) · 차지 시간 -20%"],
  "뇌랑의 투기": ["샷 III·IV 주는 대미지 +15%", "강화탄 Y 저스트 리로드 시 장전 수 +1"],
  "군청의 역경": ["최대 효과 시 대미지 상한 +30%"],
  "군청의 검섬": ["쿨타임 -20%"],
  "군청의 투기": ["인과 포식 상태 시 대미지 +20% · 추격 +10%", "지속해서 받는 대미지 +50%"],
  "고귀한 칼날의 세레나데": ["쿨타임 -10%"],
  "고귀한 칼날의 론도": ["대미지 상한 +10%", "백중 연격 저스트 추격 발동 시 칼날 게이지 상승량 +20%"],
  "고귀한 칼날의 투기": ["15% 대미지 UP 부여 (30초)"],
  "늑대왕의 큰 팽이": ["대풍차 시 히트 수 +1", "방어력 +20%"],
  "늑대왕의 격정": ["회전 수 +5"],
  "늑대왕의 투기": ["개산아 상태 시 주는 대미지 +20%"],
  "전세의 은총": ["업라이트 게이지 상승량 +20% (20초)", "리버스 게이지 상승량 +20% (20초)"],
  "전세의 약동": ["20% 대미지 상한 UP 부여 (20초)"],
  "전세의 투기": ["20% 대미지 UP 부여 (30초)"],
  "흑의 일약": ["차지 시간 -20%", "20% 대미지 상한 UP 부여 (20초)"],
  "흑의 주인": ["20초간 누적 방어 DOWN 10% 부여 (최대 3회)"],
  "흑의 투기": ["20% 대미지 UP 부여 (20초)"],
};

/**
 * Returns display text for a skill's max-level effect.
 * Awakening+ (각성+/소울+) sigils have no own entry; their text is built
 * from the two component skills in EXCLUSIVE_PLUS_COMPONENTS.
 */
function skillEffectText(name) {
  const fx = SKILL_EFFECTS[name];
  if (fx) return "MAX: " + fx.join(" · ");
  const parts = EXCLUSIVE_PLUS_COMPONENTS[name];
  if (parts) {
    return parts
      .map((p) => {
        const pfx = SKILL_EFFECTS[p];
        return pfx ? `${p} — ${pfx.join(" · ")}` : p;
      })
      .join(" / ");
  }
  return "";
}

function _skillCatalogMax(name) {
  const n = (typeof NAME_ALIASES !== "undefined" && NAME_ALIASES[name]) || name;
  const found = SKILL_CATALOG.find((s) => s.name === n);
  return found && found.max > 0 ? found.max : 15;
}

/** Round scaled effect numbers: % → 1 decimal (trim .0), else integer. */
function _scaleFxNum(v, isPercent) {
  if (isPercent) {
    const r = Math.round(v * 10) / 10;
    return Number.isInteger(r) ? String(r) : r.toFixed(1);
  }
  return String(Math.round(v));
}

/**
 * Scale effect magnitudes in a MAX phrase by ratio r (√(lv/max)).
 * Only touches signed amounts (+50 / -20) and values with % / 초 units
 * (incl. ranges like 20~50%). Leaves bare thresholds (HP 200000, 최대 3회) alone.
 */
function _scaleEffectPhrase(text, r) {
  if (r >= 1) return text;
  return String(text).replace(
    /([+\-])(\d+(?:\.\d+)?)(%|초)?|(\d+(?:\.\d+)?)(?:~(\d+(?:\.\d+)?))?(%|초)/g,
    (_m, sign, sNum, sUnit, a, b, unit) => {
      if (sign != null) {
        const isPct = sUnit === "%";
        return sign + _scaleFxNum(Number(sNum) * r, isPct) + (sUnit || "");
      }
      const isPct = unit === "%";
      const left = _scaleFxNum(Number(a) * r, isPct);
      if (b != null) return left + "~" + _scaleFxNum(Number(b) * r, isPct) + unit;
      return left + unit;
    }
  );
}

/**
 * Current-level effect text from game8 MAX phrases (√ curve).
 * Prefer sigilValueText when a namu.wiki sum-level table exists.
 * @returns {string} e.g. "대미지 상한 +35%" · empty if no effect data / level≤0
 */
function skillEffectAtLevel(name, level) {
  const lv = Number(level) || 0;
  if (lv <= 0) return "";

  const maxLv = _skillCatalogMax(name);
  const r = Math.sqrt(Math.min(lv, maxLv) / maxLv);

  const fx = SKILL_EFFECTS[name];
  if (fx && fx.length) {
    return fx.map((line) => _scaleEffectPhrase(line, r)).join(" · ");
  }

  const parts = EXCLUSIVE_PLUS_COMPONENTS[name];
  if (parts) {
    return parts
      .map((p) => {
        const pfx = SKILL_EFFECTS[p];
        if (!pfx) return p;
        return `${p} — ${pfx.map((line) => _scaleEffectPhrase(line, r)).join(" · ")}`;
      })
      .join(" / ");
  }
  return "";
}

/**
 * Numeric tables for the damage calculator, following the formula on
 * wikiwiki.jp/maglielle/ジーン・加護 ("ダメージ計算" section).
 * All values are max-skill-level percentages (from the game8 data above);
 * sub-max levels are approximated with a sqrt curve in index.html, which
 * reproduces the wiki's two anchor points (혼신 Slv16=51%, 폭군 Slv16=36%).
 */
const DMG_CALC = {
  // Static attack multipliers (reflected on the status screen), applied as ×(1 + v/100).
  // Wiki lists 폭군/궁지/미세한 차이/카타스트로피/프래즐 닷지; weapon attack% skills are
  // included here too, assuming their conditions are met at max stage.
  STATIC_MULT: {
    "폭군": 50, "궁지": 80, "미세한 차이": 30, "카타스트로피 노바": 70, "프래즐 닷지": -50,
    "슈퍼노바": 40, "천성의 황": 20, "천성의 연": 30, "천상무뢰": 50,
    "광천(대미지 상한)": 50, "질천(대미지 상한)": 35, "홍천(대미지 상한)": 40, "창천(대미지 상한)": 50,
  },
  // Additive group: summed first, then multiplied once (wiki: 加算グループ).
  DYN_ADD: { "결사의 각오": 50, "콤보 보너스": 100, "퀵 차지": 20, "수라": 30, "선제": 60 },
  // 적수공권 value by number of equipped abilities (index 0..3).
  NAKED_FIST: [120, 90, 60, 30],
  // HP-dependent curves at max Slv (wiki-verified): [hp%, effect%].
  HAISUI: [[1, 100], [25, 63.44], [50, 33.87], [75, 12.78], [100, 0]],
  KONSHIN: [[25, 10.5], [50, 17.5], [75, 35], [100, 70]],
  // Damage-multiplier components: base% comes from character upgrades (assumed maxed).
  CRIT: { base: 100, skill: "크리티컬 대미지", max: 50 },
  WEAK_SPOT: { base: 70, skill: "약점 공격", max: 70 },
  BACK: { base: 20, skill: "약점 공격", max: 70 },
  // Attack-type multipliers. base = character upgrade + limit break (assumed maxed).
  ATK_TYPES: {
    normal: { label: "일반 공격", base: 0 },
    charge: { label: "차지 공격", base: 0, skill: "차지 어택", max: 50 },
    ability: { label: "어빌리티", base: 40, skill: "어빌리티 대미지", max: 100 },
    ougi: { label: "오의", base: 40, skill: "연계 공격", max: 50, skillIsMult: true },
    link: { label: "링크 어택", base: 0, skill: "연계 공격", max: 100 },
    ranged: { label: "원거리 공격", base: 0, skill: "집중포화", max: 50 },
    comboFin: { label: "콤보 피니시", base: 0, skill: "콤보 피니시", max: 50 },
    throw: { label: "투척", base: 0, skill: "투척", max: 100 },
  },
  // Enemy-state multipliers (skill-only).
  STATE: {
    od: { skill: "오버 드라이브 특효", max: 100 },
    break: { skill: "브레이크 특효", max: 200 },
    weak: { skill: "약화 상태 특효", max: 30 },
  },
  // Generic "given damage +%" skills, multiplied into the damage multiplier.
  GENERIC_DMG: { "천성의 지": 10, "천성의 설": 15 },
  // Damage-cap bonuses, ×(1 + Σ/100) on the per-attack base cap.
  CAP_ALL: {
    "대미지 상한": 250, "엑스트라 브레이커": 50, "미세한 차이": 30, "천상무뢰": 50,
    "천성의 염": 50, "천성의 황": 70, "천성의 연": 120, "천성의 계": 70,
    "슈퍼노바": 350, "카타스트로피 노바": 500,
    "광천(대미지 상한)": 260, "질천(대미지 상한)": 280, "홍천(대미지 상한)": 310, "창천(대미지 상한)": 270,
  },
  CAP_TYPE: {
    normal: { "엑스트라 스트라이크": 30 },
    ougi: { "엑스트라 익시드": 50 },
    ability: { "엑스트라 아츠": 30 },
  },
  // 추가 대미지 sigil: 20% pursuit damage, proc rate scales to 100% at max.
  PURSUIT: { skill: "추가 대미지", dmg: 20, rate: 100 },
};

/**
 * 캐릭터/무기 강화·수집·초월·마스터 레벨 보너스.
 * atk/hp/stun/critRate/critDmg = 평타 외 스탯.
 * caps: { all, basic, ability, ougi, chain } 대미지 상한 %.
 * dmg: { ability, ougi, chain } 대미지 %(상한 아님).
 */
const PROGRESS_BONUSES = {
  // 항상 적용 전제: 캐릭터 강화 100% + 무기 수집 보너스 100%
  base: {
    id: "base",
    label: "캐릭터 강화 100% + 무기 수집 보너스 100%",
    atk: 5248,
    hp: 32410,
    stun: 50,
    critRate: 45,
    critDmg: 80,
    caps: { all: 0, basic: 108, ability: 108, ougi: 108, chain: 0 },
    dmg: { ability: 20, ougi: 20, chain: 20 },
  },
  // 체크 옵션
  weaponAwaken: {
    id: "weaponAwaken",
    label: "무기 강화 초월 보너스 100%",
    atk: 3520,
    hp: 13200,
    stun: 29,
    critRate: 33,
    critDmg: 55,
    caps: { all: 0, basic: 385, ability: 385, ougi: 385, chain: 33 },
    dmg: {},
  },
  ml50: {
    id: "ml50",
    label: "ML 50",
    atk: 3000,
    hp: 6000,
    stun: 0,
    critRate: 0,
    critDmg: 0,
    caps: { all: 100, basic: 0, ability: 0, ougi: 0, chain: 0 },
    dmg: {},
  },
  ml55: {
    id: "ml55",
    label: "ML 55 캐릭터 강화 150%",
    atk: 0,
    hp: 0,
    stun: 30,
    critRate: 0,
    critDmg: 0,
    caps: { all: 0, basic: 150, ability: 150, ougi: 150, chain: 0 },
    dmg: {},
  },
};

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
