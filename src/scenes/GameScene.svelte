<script lang="ts">
  import { mapH, mapW } from "@/config";
  import FruitBag from "@/objects/FruitBag.svelte";
  import Grid from "@/objects/Grid.svelte";
  import GridCell from "@/objects/GridCell.svelte";
  import MapCell from "@/objects/MapCell.svelte";
  import RegionGameover from "@/objects/RegionGameover.svelte";
  import RegionStatus from "@/objects/RegionStatus.svelte";
  import { state } from "@/scripts/game.svelte";

  const {}: {} = $props();
</script>

<Grid --rows={mapW} --cols={mapH}>
  {#each Array.from({ length: mapH }) as _, h (h)}
    {#each Array.from({ length: mapW }) as _, w (w)}
      <GridCell --row={h + 1} --col={w + 1}>
        <MapCell {h} {w} />
      </GridCell>
    {/each}
  {/each}

  {#if state.gameover}
    <RegionGameover />
  {/if}
</Grid>

<Grid --rows={2} --cols={mapH}>
  <GridCell --row="1" --col="1"><FruitBag n={0} /></GridCell>
  <GridCell --row="1" --col="2"><FruitBag n={1} /></GridCell>
  <GridCell --row="2" --col="1"><FruitBag n={2} /></GridCell>
  <GridCell --row="2" --col="2"><FruitBag n={3} /></GridCell>
  <GridCell --row="1 / span 2" --col="3 / -1">
    <RegionStatus />
  </GridCell>
</Grid>
