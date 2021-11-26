<script>
  import Map from "../Components/Map.svelte";
  import PlaceSearch from "../Components/PlaceSearch.svelte";
  import NotificationBell from "../Components/NotificationBell.svelte";
  import { IsGoogleLoaded, UserLocation, DestinationLocation } from '../stores.js';

  let hasGoogleLoaded;
  IsGoogleLoaded.subscribe(value => {
    hasGoogleLoaded = value;
  });

  let pos = {lat: 0, lng: 0};
  UserLocation.subscribe(value => {
    pos.lat = value.lat;
    pos.lng = value.lng;
  });

let DestinationCoords = {lat: 0, lng: 0};
DestinationLocation.subscribe(value => {
  DestinationCoords = value;
  // console.log({value});
});
</script>




<div id="PageContainer">
  <NotificationBell/> 
  <section id="TitleBar">
    <h1>Book SHUber</h1>
    <p>Where would you like to go?</p>
  </section>

  <PlaceSearch/>

  {#if hasGoogleLoaded}
      <p>lat: {DestinationCoords.lat} lng: {DestinationCoords.lng}</p>
      <Map zoom={12} center={pos}/>
  {/if}
 
</div>


<style>
  #PageContainer{
    height: 100%;
  }
</style>
