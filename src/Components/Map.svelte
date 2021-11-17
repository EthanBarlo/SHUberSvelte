<script>
  // import mapStyles from './map-styles'; // optional
  import { onMount } from "svelte";

  let container;
  let map;
  export let zoom = 15;
  export let center = { lat: 53.37862, lng: -1.46629 };

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
