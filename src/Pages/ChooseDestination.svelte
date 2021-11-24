<script>
  import Map from "../Components/Map.svelte";
  import PlaceSearch from "../Components/PlaceSearch.svelte";
  import { IsGoogleLoaded } from '../stores.js';

  let hasGoogleLoaded;
  IsGoogleLoaded.subscribe(value => {
    hasGoogleLoaded = value;
  });

  let pos = {lat: 0, lng: 0};
  navigator.geolocation.getCurrentPosition(StoreLocation);
  function StoreLocation(position){
      pos.lat = position.coords.latitude;
      pos.lng = position.coords.longitude;
  }
</script>

<div id="PageContainer">
  <section id="TitleBar">
    <h1>Book SHUber</h1>
    <p>Where would you like to go?</p>
  </section>

  <PlaceSearch/>

  {#if hasGoogleLoaded}
      <Map zoom={12} center={pos}/>
  {/if}
 
</div>


<style>
  #PageContainer{
    height: 100%;
  }
</style>
