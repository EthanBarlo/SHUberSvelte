<script>
  import Router from "svelte-spa-router";

  // Page imports
  import Login from "./Pages/Login.svelte";
  import CreateAccount from "./Pages/CreateAccount.svelte";
  import ForgotPassword from "./Pages/ForgotPassword.svelte";
  import ChooseDestination from "./Pages/ChooseDestination.svelte";
  import DriverProfile from "./Pages/DriverProfile.svelte";
  import YourTrips from "./Pages/YourTrips.svelte";
  import Notifications from "./Pages/Notifications.svelte";
  import RideDetails from "./Pages/ChooseRideDestination.svelte";

  // Router for navigating pages
  const routes = {
    '/': Login,
    '/createAccount' : CreateAccount,
    '/forgotPassword' : ForgotPassword,
    '/chooseDestination' : ChooseDestination,
    '/driverProfile' : DriverProfile,
    '/yourTrips' : YourTrips,
    '/notifications' : Notifications,
    '/rideDetails' : RideDetails,
  }

  let accountId;
  let openPage;
  let devMode = false;
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCta35ziwJVOq4UfEOVnqhv8_GhTQVyw4k&callback=initMap&libraries=&v=weekly">
  </script>
</svelte:head>

<main>
  {#if devMode}

    <div id="DevelopmentContainer">
      <nav>
        {#each Object.entries(routes) as [key, value]}
            <a href="#{key}">{value.name}</a>
        {/each}
      </nav>
      
      <div id="MobileViewer">
        <Router {routes}/>
      </div>
    </div>

  {:else}

    <Router {routes}/>
  {/if}



  
</main>

<style>
  main {
    height: 100%;
    width: 100%;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  #DevelopmentContainer{
    width: 90vw;
    display: flex;
    flex-direction: row;
    align-items: center;

  }

  #MobileViewer{
    border: .5em solid rgba(0, 0, 0, 0.8);
    width: 375px;
    max-width: 375px;
    height: 812px;
    max-height: 812px;
    flex-shrink: 0;
    overflow: hidden;
  }
  /* Styles for nav */
  nav{
    flex-grow: 1;
    background-color: cadetblue;
    -webkit-user-drag: element;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
