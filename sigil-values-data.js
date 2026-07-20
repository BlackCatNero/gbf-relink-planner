/* GBF Relink 진(Sigil) 합산 스킬 레벨 수치표
 *
 * 주 출처: 나무위키 「진(그랑블루 판타지 Relink)」 Slv 앵커 표
 *   https://namu.wiki/w/진(그랑블루_판타지_Relink)
 * 보조: wikiwiki.jp/gb-rerink (대미지 상한 세부 Slv 등)
 *
 * pts = [합산 스킬 레벨, 효과량] 앵커. 사이 값은 선형 보간, 마지막 앵커에서 캡.
 * FextraLife(진 1개 ≤15) 표는 합산 레벨·MAX와 어긋나 폐기하고 본 표로 교체.
 * 키가 없는 스킬은 skills-data.js 의 skillEffectAtLevel(√ 환산)로 폴백.
 */
const SIGIL_VALUES = {
  "HP 흡수": {
    effects: [
      { label: 'HP 흡수', sign: '', unit: '%', pts: [[1, 0.2], [15, 2.0], [30, 3.5], [45, 5.0]] },
    ],
  },
  "가드 반격": {
    effects: [
      { label: '스턴치', sign: '+', unit: '%', pts: [[1, 10.0], [15, 70.0], [30, 100.0]] },
      { label: '공격력', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0]] },
    ],
  },
  "가드 성능": {
    effects: [
      { label: '가드 브레이크 상한', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0]] },
    ],
  },
  "감마 코드": {
    effects: [
      { label: '대미지 상한', sign: '+', unit: '%', pts: [[11, 11.0], [15, 15.0], [30, 30.0]] },
    ],
  },
  "강건": {
    effects: [
      { label: 'HP 100% 시 방어력', sign: '+', unit: '%', pts: [[1, 5.0], [15, 22.0], [30, 30.0]] },
      { label: 'HP 25% 미만 시 방어력', sign: '+', unit: '%', pts: [[1, 0.7], [15, 3.3], [30, 4.5]] },
    ],
  },
  "건곤일척": {
    effects: [
      { t: '기본 공격 대미지가 일정 확률로 1~4배 (4배 시 상한 무시, 실패 시 1)' },
    ],
  },
  "게의 공명": {
    effects: [
      { label: '공격력', sign: '+', unit: '', pts: [[1, 3.0], [15, 18.0], [30, 59.0], [45, 1000.0]] },
    ],
  },
  "게의 보은": {
    effects: [
      { label: '최대 HP', sign: '+', unit: '%', pts: [[15, 20.0]] },
      { label: '피해 감소', sign: '-', unit: '%', pts: [[15, 10.0]] },
    ],
  },
  "격노": {
    effects: [
      { label: '오의 게이지 상승량', sign: '+', unit: '%', pts: [[1, 0.5], [15, 3.5], [30, 5.0]] },
      { label: '어빌리티 쿨타임 감소', sign: '-', unit: '%', pts: [[1, 0.5], [15, 3.5], [30, 5.0]] },
    ],
  },
  "견수": {
    effects: [
      { label: '최대 효과 시 방어력', sign: '+', unit: '%', pts: [[1, 4.0], [15, 35.0], [30, 50.0], [45, 70.0]] },
    ],
  },
  "결사의 각오": {
    effects: [
      { label: '공격력', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0]] },
      { t: '동료로부터 HP 회복 불가' },
    ],
  },
  "고양": {
    effects: [
      { label: '오의 게이지 상승량', sign: '+', unit: '%', pts: [[1, 5.0], [15, 12.0], [30, 19.5], [45, 30.0]] },
    ],
  },
  "공격 Down 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "공격력": {
    effects: [
      { label: '공격력', sign: '+', unit: '', pts: [[1, 4.0], [15, 40.0], [30, 350.0], [45, 1400.0], [50, 2000.0]] },
    ],
  },
  "궁지": {
    effects: [
      { label: '공격력', sign: '+', unit: '%', pts: [[1, 36.0], [15, 50.0], [30, 80.0]] },
      { t: '가드·회피 불가' },
    ],
  },
  "근성": {
    effects: [
      { label: '쿨타임', sign: '', unit: '초', pts: [[1, 600.0], [15, 170.0], [20, 120.0]] },
    ],
  },
  "금강": {
    effects: [
      { label: '최대 HP', sign: '+', unit: '%', pts: [[1, 10.0], [15, 50.0], [30, 80.0]] },
    ],
  },
  "기절 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "대미지 상한": {
    effects: [
      // 나무위키 앵커 + wikiwiki.jp/gb-rerink 세부 Slv
      { label: '대미지 상한', sign: '+', unit: '%', pts: [[1, 3], [2, 6], [4, 12], [7, 21], [11, 33], [15, 45], [30, 90], [40, 130], [45, 150], [50, 170], [60, 220], [65, 250]] },
    ],
  },
  "도발": {
    effects: [
      { label: '적대심', sign: '+', unit: '', pts: [[1, 3.0], [15, 37.0], [20, 50.0]] },
    ],
  },
  "독 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "리제너레이션": {
    effects: [
      { label: 'HP 회복', sign: '', unit: '%', pts: [[1, 0.2], [15, 2.0], [30, 3.5], [45, 5.0]] },
    ],
  },
  "마비 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "만능약": {
    effects: [
      { t: '큐어 포션 사용 시 모든 상태 이상 회복 · 2개 장착 시 약화 무효' },
    ],
  },
  "맹렬": {
    effects: [
      { label: '쿨타임 감소', sign: '-', unit: '%', pts: [[1, 0.1], [15, 1.5], [20, 2.0]] },
    ],
  },
  "명경지수": {
    effects: [
      { label: '무적 시간', sign: '+', unit: '초', pts: [[1, 1.0], [15, 2.0], [30, 3.0]] },
      { label: '오의 게이지 상승량', sign: '+', unit: '%', pts: [[1, 0.5], [15, 3.5], [30, 5.0]] },
      { label: '어빌리티 쿨타임 감소', sign: '-', unit: '%', pts: [[1, 0.5], [15, 3.5], [30, 5.0]] },
    ],
  },
  "모래인간 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "모으기 회심": {
    effects: [
      { label: '차지 공격 크리티컬 확률', sign: '+', unit: '%', pts: [[1, 6.0], [15, 54.0], [20, 60.0]] },
    ],
  },
  "물감옥 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "미세한 차이": {
    effects: [
      { label: '공격력', sign: '+', unit: '%', pts: [[1, 2.0], [15, 30.0]] },
      { label: '대미지 상한', sign: '+', unit: '%', pts: [[1, 2.0], [15, 30.0]] },
      { t: '피격 시 반드시 기절' },
    ],
  },
  "방어 Down 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "배수": {
    effects: [
      { label: '최대 효과 시 공격력', sign: '+', unit: '%', pts: [[1, 10.0], [15, 70.0], [30, 100.0]] },
    ],
  },
  "버티기": {
    effects: [
      { label: '피해 감소', sign: '-', unit: '%', pts: [[1, 1.0], [15, 15.0]] },
    ],
  },
  "베르세르크": {
    effects: [
      { t: '공격력에 따라 추가 대미지 20% (25000↑ 시 100%)' },
    ],
  },
  "베타 코드": {
    effects: [
      { label: '어빌리티 대미지 상한', sign: '+', unit: '%', pts: [[11, 23.0], [15, 35.0], [30, 50.0]] },
    ],
  },
  "부동": {
    effects: [
      { t: '끌어당기기·밀어내기에 대한 내성' },
    ],
  },
  "브레이크 특효": {
    effects: [
      { label: '피해', sign: '+', unit: '%', pts: [[1, 20.0], [15, 140.0], [30, 200.0]] },
    ],
  },
  "빙결 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "선제": {
    effects: [
      { label: '공격력', sign: '+', unit: '%', pts: [[1, 16.0], [15, 30.0], [30, 60.0]] },
    ],
  },
  "수라": {
    effects: [
      { label: '공격력', sign: '+', unit: '%', pts: [[1, 1.0], [15, 15.0], [30, 30.0]] },
      { t: '전투 시작 시 HP 50% 감소' },
    ],
  },
  "수호": {
    effects: [
      { label: '최대 HP', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0], [45, 80.0]] },
    ],
  },
  "스턴": {
    effects: [
      { label: '스턴치', sign: '+', unit: '', pts: [[1, 5.0], [15, 50.0], [30, 65.0], [45, 100.0]] },
    ],
  },
  "스파르타": {
    effects: [
      { t: '최대 HP에 따라 추가 대미지 20% (80000↑ 시 100%)' },
    ],
  },
  "슬로우 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "알파 코드": {
    effects: [
      { label: '기본 공격 대미지 상한', sign: '+', unit: '%', pts: [[11, 17.0], [15, 25.0], [30, 40.0]] },
    ],
  },
  "약점 공격": {
    effects: [
      { label: '약점 공격 시 대미지', sign: '+', unit: '%', pts: [[1, 4.0], [15, 36.0], [30, 51.0], [45, 70.0]] },
      { label: '백어택 시 대미지', sign: '+', unit: '%', pts: [[1, 4.0], [15, 36.0], [30, 51.0], [45, 70.0]] },
    ],
  },
  "약화 상태 특효": {
    effects: [
      { label: '피해', sign: '+', unit: '%', pts: [[1, 5.0], [15, 22.0], [30, 30.0]] },
    ],
  },
  "어빌리티 대미지": {
    effects: [
      { label: '어빌리티 대미지', sign: '+', unit: '%', pts: [[1, 10.0], [15, 70.0], [30, 100.0]] },
    ],
  },
  "연계 공격": {
    effects: [
      { label: '링크 어택 대미지', sign: '+', unit: '%', pts: [[1, 10.0], [15, 70.0], [30, 100.0]] },
      { label: '오의 대미지', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0]] },
      { label: '체인 버스트 대미지', sign: '+', unit: '%', pts: [[1, 3.5], [15, 24.5], [30, 35.0]] },
      { label: '링크 카운터 상승량', sign: '+', unit: '%', pts: [[1, 5.0], [15, 31.0], [30, 50.0]] },
    ],
  },
  "오버 드라이브 특효": {
    effects: [
      { label: '피해', sign: '+', unit: '%', pts: [[1, 10.0], [15, 70.0], [30, 100.0]] },
    ],
  },
  "움츠러들기 무효": {
    effects: [
      { t: '상시 움츠러들기 무효 · 받는 대미지 -30%' },
    ],
  },
  "유리 속성 변환": {
    effects: [
      { t: '무속성 제외 모든 공격이 유리 속성화 (상한 무시 대미지 +20%)' },
    ],
  },
  "은신": {
    effects: [
      { label: '적대심', sign: '-', unit: '', pts: [[1, 3.0], [15, 37.0], [20, 50.0]] },
    ],
  },
  "자동 부활": {
    effects: [
      { label: '쿨타임', sign: '', unit: '초', pts: [[1, 600.0], [15, 170.0], [20, 120.0]] },
    ],
  },
  "작열 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "재앙 내성": {
    effects: [
      { label: '지속 시간·대미지', sign: '-', unit: '%', pts: [[1, 10], [15, 70], [30, 100]] },
    ],
  },
  "적수공권": {
    effects: [
      // 어빌 0/1/2/3개 장착 시 (나무위키). 표시는 0개 기준 + 안내
      { label: '공격력(어빌0/1/2/3)', sign: '+', unit: '%', pts: [[1, 4], [15, 60], [30, 120]] },
      { t: '어빌 수↓일수록 효과↑ (30Lv: 120/90/60/30%)' },
    ],
  },
  "정신일도": {
    effects: [
      { label: '무적 시간', sign: '+', unit: '초', pts: [[1, 1.0], [15, 2.0], [30, 3.0]] },
      { label: '방어력', sign: '+', unit: '%', pts: [[1, 3.0], [15, 14.0], [30, 20.0]] },
      { label: 'HP 회복', sign: '', unit: '%', pts: [[1, 1.5], [15, 7.0], [30, 10.0]] },
    ],
  },
  "집중포화": {
    effects: [
      { label: '원거리 공격 피해', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0]] },
    ],
  },
  "차지 강화": {
    effects: [
      { label: '방어력', sign: '+', unit: '%', pts: [[1, 6.0], [15, 20.0]] },
      { t: '차지 중 움츠러들기 무효' },
    ],
  },
  "차지 어택": {
    effects: [
      { label: '차지 공격 피해', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0]] },
    ],
  },
  "체력": {
    effects: [
      { label: '체력', sign: '+', unit: '', pts: [[1, 200.0], [15, 2600.0], [30, 5600.0], [45, 8600.0], [50, 10000.0]] },
    ],
  },
  "추가 대미지": {
    effects: [
      { label: '추가 피해', sign: "", unit: "%", flat: 20 },
      { label: '발동 확률', sign: '', unit: '%', pts: [[1, 12.0], [15, 40.0], [30, 70.0], [45, 100.0]] },
    ],
  },
  "콤보 보너스": {
    effects: [
      { label: '최대 효과 시 공격력', sign: '+', unit: '%', pts: [[1, 10.0], [15, 70.0], [30, 100.0]] },
    ],
  },
  "콤보 피니시": {
    effects: [
      { label: '콤보 피니시 피해', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0]] },
    ],
  },
  "퀵 어빌리티": {
    effects: [
      { label: '쿨타임 감소', sign: '-', unit: '%', pts: [[1, 1.0], [15, 10.0], [30, 13.0], [45, 20.0]] },
    ],
  },
  "퀵 차지": {
    effects: [
      { label: '차지 시간 단축', sign: '-', unit: '%', pts: [[1, 3.0], [15, 21.0], [30, 30.0]] },
      { label: '공격력', sign: '+', unit: '%', pts: [[1, 2.0], [15, 14.0], [30, 20.0]] },
    ],
  },
  "크리티컬 대미지": {
    effects: [
      { label: '크리티컬 피해', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0]] },
    ],
  },
  "크리티컬 확률": {
    effects: [
      { label: '크리티컬 확률', sign: '+', unit: '%', pts: [[1, 5.0], [15, 19.0], [30, 34.0], [45, 50.0]] },
    ],
  },
  "투척": {
    effects: [
      { label: '피해', sign: '+', unit: '%', pts: [[1, 10.0], [15, 70.0], [30, 100.0]] },
    ],
  },
  "포션 보유 수": {
    effects: [
      { label: '큐어 포션', sign: '+', unit: '', pts: [[1, 0.0], [15, 3.0]] },
      { label: '올 포션', sign: '+', unit: '', pts: [[1, 1.0], [15, 5.0]] },
      { label: '메가 포션', sign: '+', unit: '', pts: [[1, 0.0], [15, 5.0]] },
      { label: '소생약', sign: '+', unit: '', pts: [[1, 0.0], [15, 2.0]] },
    ],
  },
  "폭군": {
    effects: [
      { label: '공격력', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0]] },
      { label: '최대 HP 감소', sign: '-', unit: '%', pts: [[1, 20.0]] },
    ],
  },
  "프래즐 닷지": {
    effects: [
      { t: '공격력 -50% · 회피가 무조건 저스트 회피 판정' },
    ],
  },
  "항전": {
    effects: [
      { label: '방어력', sign: '+', unit: '%', pts: [[1, 5.0], [15, 22.0], [30, 30.0]] },
      { label: 'HP 회복', sign: '', unit: '%', pts: [[1, 3.5], [15, 10.5], [30, 15.0]] },
    ],
  },
  "혼신": {
    effects: [
      { label: '최대 효과 시 공격력', sign: '+', unit: '%', pts: [[1, 8.0], [15, 50.0], [30, 70.0]] },
      { label: '최소 효과 시 공격력', sign: '+', unit: '%', pts: [[1, 1.2], [15, 7.5], [30, 10.5]] },
    ],
  },
  "회복 성능": {
    effects: [
      { label: '회복량 및 회복량 상한', sign: '+', unit: '%', pts: [[1, 5.0], [15, 35.0], [30, 50.0]] },
    ],
  },
  "회피 거리": {
    effects: [
      { t: '구르기 동작의 거리가 길어진다' },
    ],
  },
  "회피 반격": {
    effects: [
      { label: '무적 시간', sign: '+', unit: '초', pts: [[1, 1.0], [15, 2.0], [30, 3.0]] },
      { label: '공격력', sign: '+', unit: '%', pts: [[1, 5.0], [15, 22.0], [30, 30.0]] },
    ],
  },
  "회피 성능": {
    effects: [
      { label: '구르기 횟수', sign: '', unit: '', pts: [[11, 4.0], [12, 5.0], [13, 6.0], [14, 7.0], [15, 7.0]] },
      { t: '무적 시간 증가', minLv: 15 },
    ],
  },
  "획득 MSP": {
    effects: [
      { label: '획득 MSP', sign: '+', unit: '%', pts: [[1, 2.0], [15, 15.0], [30, 22.5], [45, 30.0]] },
    ],
  },
  "획득 경험치": {
    effects: [
      { label: '획득 경험치', sign: '+', unit: '%', pts: [[1, 1.0], [15, 15.0], [30, 22.5], [45, 30.0]] },
    ],
  },
  "획득 루피": {
    effects: [
      { label: '획득 루피', sign: '+', unit: '%', pts: [[1, 2.0], [15, 30.0], [30, 46.0], [45, 60.0]] },
    ],
  },
};

/** %는 소수 첫째 자리까지(.0은 정수로), 그 외는 정수 */
function _svRound(v, unit) {
  if (unit === "%") {
    const r = Math.round(Math.abs(v) * 10) / 10;
    return Number.isInteger(r) ? String(r) : r.toFixed(1);
  }
  if (unit === "초") {
    const r = Math.round(Math.abs(v) * 10) / 10;
    return Number.isInteger(r) ? String(r) : r.toFixed(1);
  }
  return String(Math.round(Math.abs(v)));
}

/** 합산 레벨에서의 수치. 마지막 앵커에서 캡(합산 표이므로 외삽 없음). */
function sigilValueAt(entry, level) {
  const pts = entry.pts;
  const L = Number(level) || 0;
  if (L <= 0 || !pts || !pts.length) return null;
  const maxLv = pts[pts.length - 1][0];
  const maxVal = pts[pts.length - 1][1];
  if (L >= maxLv) return maxVal;
  let prevL = 0, prevV = 0;
  // if first point > 1, extrapolate from 0 only when L < first
  for (const [pl, pv] of pts) {
    if (L <= pl) {
      if (pl === prevL) return pv;
      return prevV + (pv - prevV) * (L - prevL) / (pl - prevL);
    }
    prevL = pl; prevV = pv;
  }
  return maxVal;
}

function _formatEffect(entry, level) {
  const lv = Number(level) || 0;
  if (entry.minLv != null && lv < entry.minLv) return "";
  if (entry.t) return entry.t;
  if (lv <= 0) return "";
  if (entry.flat != null) {
    const sign = entry.sign != null ? entry.sign : "+";
    const unit = entry.unit || "";
    const prefix = sign === "" ? "" : sign;
    return `${entry.label} ${prefix}${_svRound(entry.flat, unit)}${unit}`;
  }
  const v = sigilValueAt(entry, level);
  if (v == null) return "";
  const sign = entry.sign != null ? entry.sign : "+";
  const unit = entry.unit || "";
  // 쿨타임 초·구르기 횟수 등은 sign 빈 문자열
  const prefix = sign === "" ? "" : sign;
  return `${entry.label} ${prefix}${_svRound(v, unit)}${unit}`;
}

/**
 * 스킬 리스트에 표시할 합산 레벨 수치 문구 (나무위키 앵커 보간).
 * @returns {string} 예 "대미지 상한 +90%" · 표 없으면 ""
 */
function sigilValueText(name, level) {
  const pack = SIGIL_VALUES[name];
  if (!pack) return "";
  const lv = Number(level) || 0;
  if (lv <= 0) return "";
  const list = pack.effects || (pack.pts || pack.t || pack.flat != null ? [pack] : []);
  const parts = [];
  for (const entry of list) {
    const s = _formatEffect(entry, lv);
    if (s) parts.push(s);
  }
  return parts.join(" · ");
}
