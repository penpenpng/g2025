<script lang="ts">
  import { mapH, mapW } from "./config";
  import GameScene from "./scenes/GameScene.svelte";
  import TitleScene from "./scenes/TitleScene.svelte";
  import { getScene } from "./scripts/scene.svelte";
</script>

<div class="container" style:--map-h={mapH} style:--map-w={mapW}>
  <div class="scene">
    {#if getScene() === "title"}
      <TitleScene />
    {:else}
      <GameScene />
    {/if}
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .scene {
    display: block;
    width: calc(var(--cell-size) * var(--map-w));
    height: calc(var(--cell-size) * (var(--map-h) + 2));
    background-color: bisque;
  }
</style>
