<script lang="ts">
  import { Fruit } from "@/scripts/assets";
  import { state } from "@/scripts/game.svelte";

  const { n }: { n: number } = $props();

  const fruit = $derived(state.bag[n]);
  const fruitimg = $derived(fruit && { ...Fruit }[fruit]);
</script>

<div class={`fruit-bag bag-${n}`}>
  {#if fruitimg}
    <img src={fruitimg} alt="" class="object" />
  {/if}
</div>

<style>
  .fruit-bag {
    display: grid;
    place-content: center center;
    background-image: url("@/assets/img/tile/matt-gray.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .bag-0 {
    background-image: url("@/assets/img/tile/bag-tl.png");
  }

  .bag-1 {
    background-image: url("@/assets/img/tile/bag-tr.png");
  }

  .bag-2 {
    background-image: url("@/assets/img/tile/bag-bl.png");
  }

  .bag-3 {
    background-image: url("@/assets/img/tile/bag-br.png");
  }

  .object {
    display: block;
    width: var(--object-size);
    height: var(--object-size);
  }
</style>
