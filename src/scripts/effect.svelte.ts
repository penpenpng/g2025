import { mapW } from "@/config";
import { playAudio } from "./audio.svelte";

interface GameEffect {
  glitterPhase: number;
}

const state = $state<GameEffect>({
  glitterPhase: -1,
});

export function abortEffect() {
  if (gameoverEffect) {
    clearInterval(gameoverEffect);
    gameoverEffect = null;
  }
  state.glitterPhase = -1;
}

export function isGlittered(pos: Position): boolean {
  const [h, w] = pos;
  return h === 1 && w <= state.glitterPhase;
}

let gameoverEffect: ReturnType<typeof setInterval> | null = null;
export function playGameoverEffect() {
  gameoverEffect = setInterval(() => {
    if (state.glitterPhase < mapW - 1) {
      state.glitterPhase++;
      playAudio("move");
    } else if (gameoverEffect) {
      clearInterval(gameoverEffect);
      gameoverEffect = null;
    }
  }, 200);
}
