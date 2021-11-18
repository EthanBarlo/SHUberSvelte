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
      disableDefaultUI: true,
      draggable: false,
      scrollwheel: false,
      panControl: false,
      clickableIcons: false
    });
  });
</script>

<div class="full-screen" bind:this={container} />

<style>
  .full-screen {
    width: calc(100vw - 24px);
    height: 90vw;
  }

</style>
