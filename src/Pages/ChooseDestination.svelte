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

<NavBar BackDestination="#/UserProfile" showUserProfile="true" />

<div class="PageContainer">
  <h1>Book SHUber</h1>
  <h3>Where would you like to go?</h3>

  <PlaceSearch />

  {#if hasGoogleLoaded}
    <Map zoom={12} />
  {/if}
</div>
<button class="button">Confirm Ride</button>

<style>
  .PageContainer {
    height: 80vh;
    text-align: center;
  }
</style>
