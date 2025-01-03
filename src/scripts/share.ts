import { getTotalScore } from "./score.svelte";

export function tweetResult() {
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURI(getResultText())}`
  );
}

export function copyResult() {
  navigator.clipboard.writeText(getResultText());
}

function getResultText() {
  return `あけましておめでとう！私はへびのばしでへびを${getTotalScore()}m伸ばしたよ！！ ${
    location.href
  }`;
}
