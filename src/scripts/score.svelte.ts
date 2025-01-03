export const factors = $state<ScoreFactor>(initialScoreFactors());

function initialScoreFactors(): ScoreFactor {
  return {
    level: 0,
    double: 0,
    triple: 0,
    filled: 0,
    snakeTouch: 0,
    secretCommand: 0,
    dragon: 0,
    apple: 0,
    banana: 0,
    orange: 0,
    cherry: 0,
    grapes: 0,
    peach: 0,
    melon: 0,
    watermelon: 0,
  };
}

export function initializeScore() {
  Object.assign(factors, initialScoreFactors());
}

export function getScoreBreakdown(): [string, number][] {
  const breakdown: [string, number][] = [];

  if (factors.level) {
    breakdown.push(["ふろあ", factors.level * 3000]);
  }
  if (factors.double) {
    breakdown.push(["だぶる", factors.double * 1000]);
  }
  if (factors.triple) {
    breakdown.push(["とりぷる", factors.triple * 3000]);
  }
  if (factors.filled) {
    breakdown.push(["ぱーふぇくと", factors.filled * 5000]);
  }
  if (factors.snakeTouch) {
    breakdown.push(["へびなで", factors.snakeTouch * 100]);
  }
  if (factors.secretCommand) {
    breakdown.push(["ひみつのじゅもん", factors.secretCommand * 3000]);
  }
  if (factors.dragon) {
    breakdown.push(["どらごん", 2024]);
  }
  if (factors.apple) {
    breakdown.push(["りんご", factors.apple * 10]);
  }
  if (factors.banana) {
    breakdown.push(["ばなな", factors.banana * 50]);
  }
  if (factors.orange) {
    breakdown.push(["みかん", factors.orange * 100]);
  }
  if (factors.cherry) {
    breakdown.push(["さくらんぼ", factors.cherry * 300]);
  }
  if (factors.grapes) {
    breakdown.push(["ぶどう", factors.grapes * 500]);
  }
  if (factors.melon) {
    breakdown.push(["めろん", factors.melon * 1000]);
  }
  if (factors.peach) {
    breakdown.push(["もも", factors.peach * 1500]);
  }
  if (factors.watermelon) {
    breakdown.push(["すいか", factors.watermelon * 2000]);
  }

  return breakdown;
}

export function getTotalScore() {
  return getScoreBreakdown()
    .map(([_, value]) => value)
    .reduce((prev, acc) => prev + acc, 0);
}
