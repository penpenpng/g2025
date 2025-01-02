<script lang="ts">
  import { state } from "@/scripts/game.svelte";
  import { startNewGame } from "@/scripts/newgame";
  import { setScene } from "@/scripts/scene.svelte";
  import { getScoreBreakdown } from "@/scripts/score.svelte";
  import { copyResult, tweetResult } from "@/scripts/share";
  import { tap } from "@/scripts/tap-action.svelte";
  import GridCell from "./GridCell.svelte";

  const clipboardAvailable = !!navigator.clipboard;
  const gameoverReason = $derived(
    state.gameover === "dragon"
      ? "どらごんをたべた！\nたつどしはおしまい！"
      : "たいむあっぷ！"
  );
</script>

<GridCell --row="2" --col="1 / -1">
  <div class="title">あけおめ</div>
</GridCell>
<GridCell --row="3 / span 3" --col="1 / -1">
  <div class="result">
    <div class="score">
      <div class="gameover-reason">{gameoverReason}</div>
      <div class="score-table">
        {#each getScoreBreakdown() as [factor, value] (factor)}
          <div class="score-factor">{factor}:</div>
          <div class="score-value">+{value}m</div>
        {/each}
      </div>
    </div>
    <div class="actions">
      <div class="retry">
        <button class="button" use:tap ontap={startNewGame}>もういちど</button>
        <button class="button" use:tap ontap={() => setScene("title")}
          >たいとる</button
        >
      </div>
      <button class="button" use:tap ontap={tweetResult}>ついーと</button>
      {#if clipboardAvailable}
        <button class="button" use:tap ontap={copyResult}>こぴー</button>
      {/if}
    </div>
  </div>
</GridCell>

<style>
  .title {
    display: grid;
    place-content: center center;
    font-size: min(11vw, 58px);
    color: white;
  }

  .result {
    display: grid;
    grid-template-rows: 1;
    grid-template-columns: 1fr min-content;
    background-color: azure;
  }

  .gameover-reason {
    margin: min(4vw, 20px);
    font-size: min(5vw, 24px);
    white-space: pre-line;
  }

  .score-table {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: min-content 1fr;
    place-items: center start;
    max-height: min(38vw, 192px);
    margin: min(4vw, 20px);
    overflow-x: auto;
  }

  .score-factor {
    justify-self: end;
    padding-inline: min(2vw, 10px);
    font-size: min(4vw, 18px);
    word-break: keep-all;
  }

  .score-value {
    font-size: min(5vw, 24px);
  }

  .actions {
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-bottom: min(2vw, 10px);
  }

  .button {
    padding: 8px;
    margin: min(1vw, 6px) min(2vw, 10px);
    font-size: min(4vw, 18px);
    word-break: keep-all;
    border: 3px solid black;
  }

  .retry {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin-top: min(2vw, 10px);
  }
</style>
