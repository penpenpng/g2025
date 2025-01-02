export const factors = $state<ScoreFactor>(initialScoreFactors());

function initialScoreFactors(): ScoreFactor {
  return {
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

  if (factors.double) {
    breakdown.push(["だぶる", factors.double * 100]);
  }
  if (factors.triple) {
    breakdown.push(["とりぷる", factors.triple * 200]);
  }
  if (factors.filled) {
    breakdown.push(["ぱーふぇくと", factors.filled * 300]);
  }
  if (factors.snakeTouch) {
    breakdown.push(["へびなで", factors.snakeTouch * 100]);
  }
  if (factors.secretCommand) {
    breakdown.push(["ひみつのじゅもん", factors.secretCommand * 100000]);
  }
  if (factors.dragon) {
    breakdown.push(["どらごん", factors.dragon * 2024]);
  }
  if (factors.apple) {
    breakdown.push(["りんご", factors.apple * 10]);
  }
  if (factors.banana) {
    breakdown.push(["ばなな", factors.banana * 20]);
  }
  if (factors.orange) {
    breakdown.push(["みかん", factors.orange * 30]);
  }
  if (factors.cherry) {
    breakdown.push(["さくらんぼ", factors.cherry * 40]);
  }
  if (factors.grapes) {
    breakdown.push(["ぶどう", factors.grapes * 50]);
  }
  if (factors.melon) {
    breakdown.push(["めろん", factors.melon * 60]);
  }
  if (factors.peach) {
    breakdown.push(["もも", factors.peach * 70]);
  }
  if (factors.watermelon) {
    breakdown.push(["すいか", factors.watermelon * 80]);
  }

  return breakdown;
}

export function getTotalScore() {
  return getScoreBreakdown()
    .map(([_, value]) => value)
    .reduce((prev, acc) => prev + acc, 0);
}
