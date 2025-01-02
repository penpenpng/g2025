<script>
  import { audioConfig, playAudio } from "@/scripts/audio.svelte";
  import { startNewGame } from "@/scripts/newgame";
  import { tap } from "@/scripts/tap-action.svelte";

  $effect(() => {
    playAudio("gamestart");
  });
</script>

<div class="title-scene">
  <div class="title">へびのばし</div>

  <button use:tap class="button" ontap={startNewGame}>すたーと</button>

  <div class="sub-title">あそびかた</div>
  <div>しょうりゃく。</div>

  <div class="sub-title">おんりょう</div>
  <div>
    <input
      bind:value={audioConfig.volume}
      type="range"
      min="0"
      max="1"
      step="0.05"
    />
    <span class="volume">{Math.floor(audioConfig.volume * 100)}</span>
  </div>

  <div class="sub-title">くれじっと</div>
  <div class="credit-table">
    <div class="credit-target">え</div>
    <div class="credit-link">
      <a href="https://dot-illust.net/" target="_blank">DOT ILLUST</a>
    </div>

    <div class="credit-target">ふぉんと</div>
    <div class="credit-link">
      <a href="https://littlelimit.net/misaki.htm" target="_blank"
        >美咲フォント</a
      >
    </div>

    <div class="credit-target">おと</div>
    <div class="credit-link">
      <a href="https://maou.audio/" target="_blank">魔王魂</a>
    </div>
    <div class="credit-link">
      <a href="https://on-jin.com/" target="_blank">On-Jin ～音人～</a>
    </div>
  </div>
</div>

<style>
  * {
    font-size: min(4vw, 20px);
  }

  .title-scene {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    margin-block: min(6vw, 30px);
    font-size: min(10vw, 50px);
  }

  .sub-title {
    margin-block: min(6vw, 30px) min(4vw, 20px);
    font-size: min(5vw, 28px);
  }

  .credit-table {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: min-content 1fr;
    place-items: center start;
  }

  .credit-target {
    grid-column: 1;
    justify-self: end;
    padding: 6px;
    word-break: keep-all;
  }

  .credit-link {
    grid-column: 2;
  }

  .button {
    padding: min(4vw, 20px);
    font-size: min(6vw, 32px);
    border: 3px solid black;
  }

  .volume {
    font-size: min(6vw, 30px);
  }
</style>
