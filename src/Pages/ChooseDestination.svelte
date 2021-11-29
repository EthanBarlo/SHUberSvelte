<script>
  import Map from "../Components/Map.svelte";
  import PlaceSearch from "../Components/PlaceSearch.svelte";
  import NavBar from "../Components/NavBar.svelte";
  import { IsGoogleLoaded } from "../stores.js";

  let hasGoogleLoaded;
  IsGoogleLoaded.subscribe((value) => {
    hasGoogleLoaded = value;
  });
</script>

<NavBar />

<div class="PageContainer">
  <h1>Book SHUber</h1>
  <h3>Where would you like to go?</h3>

  <PlaceSearch />

  {#if hasGoogleLoaded}
    <Map zoom={12} />
  {/if}
</div>

<style>
  #PageContainer {
    height: 100%;
    overflow: hidden;
  }
</style>
