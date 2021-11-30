<script>
  import Map from "../Components/Map.svelte";
  import PlaceSearch from "../Components/PlaceSearch.svelte";
  import NavBar from "../Components/NavBar.svelte";
  import { IsGoogleLoaded, DestinationLocation, UserLocation, CurrentUser } from "../stores.js";


  let userLocation;
  UserLocation.subscribe(value => {
    userLocation = value;
  });

  let destinationLocation;
  DestinationLocation.subscribe(value =>{
    destinationLocation = value;
  });

  let hasGoogleLoaded;
  IsGoogleLoaded.subscribe((value) => {
    hasGoogleLoaded = value;
  });

  let currentUser;
  CurrentUser.subscribe(user =>{
    currentUser = user;
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


<style>
  .PageContainer {
    height: 80vh;
    text-align: center;
  }

</style>
