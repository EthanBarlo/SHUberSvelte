<script>
  import Login from "./Pages/Login.svelte";
  import ChooseDestination from "./Pages/ChooseDestination.svelte";
  import DriverProfile from "./Pages/DriverProfile.svelte";
  import YourTrips from "./Pages/YourTrips.svelte";
  import Notifications from "./Pages/Notifications.svelte";

  let accountId;
  let openPage;
  export let mapReady;
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCta35ziwJVOq4UfEOVnqhv8_GhTQVyw4k&callback=initMap&libraries=&v=weekly">
  </script>
</svelte:head>

<main>
  <ChooseDestination {mapReady} />
</main>

<style>
  main {
    height: 100%;
    width: 100%;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
