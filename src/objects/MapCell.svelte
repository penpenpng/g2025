<script lang="ts">
  import { Arrow, Fruit, Marker } from "@/scripts/assets";
  import { isGlittered } from "@/scripts/effect.svelte";
  import { move, state, touchSnake } from "@/scripts/game.svelte";
  import { isSamePosition } from "@/scripts/position";
  import { tap } from "@/scripts/tap-action.svelte";

  const { h, w }: { h: number; w: number } = $props();

  const { object, tile } = $derived(state.map[h][w]);

  const objectimg = $derived(
    object && { ...Fruit, ...Marker, ...Arrow }[object]
  );
  const glittered = $derived(isGlittered([h, w]));
  const snakeHere = $derived(isSamePosition([h, w], state.snake));
  const clickable = $derived(tile === "control");
  const ontap = () => {
    if (tile === "control" && snakeHere) {
      touchSnake();
    }
    if (
      object === "up" ||
      object === "down" ||
      object === "left" ||
      object === "right"
    ) {
      move(object);
    }
  };
</script>

<div use:tap class={`map-cell ${tile}`} class:glittered class:clickable {ontap}>
  {#if snakeHere}
    <img src={Marker.snake} alt="" class="object snake" />
  {:else if objectimg && !glittered}
    <img src={objectimg} alt="" class="object" />
  {/if}
</div>

<style>
  .map-cell {
    display: grid;
    place-content: center center;
    background-image: url("@/assets/img/tile/matt-gray.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border: 1px solid white;
  }

  .floor {
    background-image: url("@/assets/img/tile/matt-gray.png");
  }

  .control {
    background-image: url("@/assets/img/tile/control.png");
  }

  .glittered {
    background-image: url("@/assets/img/tile/matt-light.png");
  }

  .clickable {
    cursor: pointer;
  }

  .object {
    display: block;
    width: var(--object-size);
    height: var(--object-size);
  }

  .snake {
    width: var(--snake-width);
    height: var(--snake-height);
  }
</style>
