import { playAudio } from "./audio.svelte";
import { abortEffect } from "./effect.svelte";
import { initializeState } from "./game.svelte";
import { setScene } from "./scene.svelte";
import { initializeScore } from "./score.svelte";

export function startNewGame() {
  abortEffect();
  initializeState();
  initializeScore();
  setScene("ingame");
  playAudio("gamestart");
  playAudio("bgm");
}
