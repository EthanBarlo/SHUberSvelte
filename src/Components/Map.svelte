<script>
  // import mapStyles from './map-styles'; // optional
  import { onMount } from "svelte";

  let container;
  let map;
  export let zoom;
  export let center;

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
    });
  });
</script>

<p>Map is meant to be here</p>
<div class="full-screen" bind:this={container} />

<style>
  .full-screen {
    width: 100vw;
    height: 100vh;
  }
</style>
