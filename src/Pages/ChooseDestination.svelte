<script>
  import Map from "../Components/Map.svelte";
  import PlaceSearch from "../Components/PlaceSearch.svelte";
  import NotificationBell from "../Components/NotificationBell.svelte";
  import { IsGoogleLoaded } from '../stores.js';

  let hasGoogleLoaded;
  IsGoogleLoaded.subscribe(value => {
    hasGoogleLoaded = value;
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
      <Map zoom={12}/>
  {/if}
 
</div>


<style>
  #PageContainer{
    height: 100%;
    overflow: hidden;
  }
</style>
