<script>
  import { onMount } from "svelte";
  import { DestinationLocation } from '../stores.js';
  let container;
  let map;
  let destinationMarker;
  let mapLoaded = false;
  export let zoom;
  export let center;
  export let showDestination = true;
 
    DestinationLocation.subscribe(value => {
      if(destinationMarker != null)
        destinationMarker.setMap(null);

      if(mapLoaded){
        destinationMarker = new google.maps.Marker({
        position: value,
        map: map,
        });
      }
    });

  onMount(() => {
    drawMap();
  });
 

  function drawMap(){
    map = new google.maps.Map(container, {
      zoom,
      center,
      disableDefaultUI: true,
      draggable: false,
      scrollwheel: false,
      panControl: false,
      clickableIcons: false
    });
    mapLoaded = true;
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
