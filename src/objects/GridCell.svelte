<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

<div class="grid-cell">
  {@render children()}
</div>

<style>
  .grid-cell {
    grid-row: var(--row);
    grid-column: var(--col);
    width: 100%;
    height: 100%;
  }

  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  .grid-cell > :global(*) {
    width: 100%;
    height: 100%;
  }
</style>
