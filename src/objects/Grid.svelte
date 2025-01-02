<script lang="ts">
  import type { Snippet } from "svelte";

  const {
    children,
  }: {
    children: Snippet;
  } = $props();
</script>

<div class="grid">
  {@render children()}
</div>

<style>
  .grid {
    display: grid;
    grid-template-rows: repeat(var(--rows), var(--cell-size));
    grid-template-columns: repeat(var(--cols), var(--cell-size));
  }
</style>
