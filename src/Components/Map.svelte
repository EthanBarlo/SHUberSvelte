<script>
  import { onMount } from "svelte";
  let container;
  let map;
  export let zoom;
  export let center;
  export let destination;
 
  onMount(() => {
    drawMap();
  });
  
  async function drawMap(){
    map = new google.maps.Map(container, {
      zoom,
      center,
      disableDefaultUI: true,
      draggable: false,
      scrollwheel: false,
      panControl: false,
      clickableIcons: false
    });
    
    const destinationMarker = new google.maps.Marker({
      position: {destination},
      map: map,
    });
    
    // The marker, positioned at current location
    const currentLocationMarker = new google.maps.Marker({
    position: center,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    });
      //car marker test
    const car1 = new google.maps.Marker({
    position: { lat: 53.384974, lng: -1.461184 },
    map: map,
icon: 'https://media.discordapp.net/attachments/897034987575050290/912737288235130930/gps-navigation_4.png'});
  }

  
</script>

<div class="full-screen" bind:this={container} />

<style>
  .full-screen {
    width: calc(100vw - 24px);
    height: 90vh;
  }
</style>
