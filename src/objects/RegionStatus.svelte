<script lang="ts">
  import { state } from "@/scripts/game.svelte";
  import { getTotalScore } from "@/scripts/score.svelte";
</script>

<div class="region-status">
  <div class="label">のこりじかん:</div>
  <div class="value">
    {Math.floor(state.timelimit)}
  </div>

  <div class="label">ふろあ:</div>
  <div class="value">
    {state.level}
  </div>

  <div class="label">へびのながさ:</div>
  <div class="value">
    {getTotalScore()}m
  </div>
</div>

<style>
  .region-status {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: min-content 1fr;
    place-items: center start;
  }

  .label {
    justify-self: end;
    padding-inline: 10px;
    font-size: 20px;
    word-break: keep-all;
  }

  .value {
    font-size: min(7vw, 36px);
  }
</style>
