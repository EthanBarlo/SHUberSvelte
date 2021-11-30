<script>
  import Router from "svelte-spa-router";
  import { CurrentUser, Users } from "./stores.js";

  Users.subscribe(value => {
    CurrentUser.update(() => {return value[0];});
  });


  // Page imports
  import Login from "./Pages/Login.svelte";
  import Wallet from "./Pages/Wallet.svelte";
  import YourTrips from "./Pages/YourTrips.svelte";
  import UserProfile from "./Pages/UserProfile.svelte";
  import TripDetails from "./Pages/TripDetails.svelte";
  import DriverProfile from "./Pages/DriverProfile.svelte";
  import CreateAccount from "./Pages/CreateAccount.svelte";
  import Notifications from "./Pages/Notifications.svelte";
  import ForgotPassword from "./Pages/ForgotPassword.svelte";
  import EnterRideDetails from "./Pages/EnterRideDetails.svelte";
  import ChooseDestination from "./Pages/ChooseDestination.svelte";

  // Router for navigating pages
  const routes = {
    '/': Login,
    '/wallet' : Wallet,
    '/yourTrips' : YourTrips,
    '/tripDetails' : TripDetails,
    '/userProfile' : UserProfile,
    '/createAccount' : CreateAccount,
    '/driverProfile' : DriverProfile,
    '/notifications' : Notifications,
    '/forgotPassword' : ForgotPassword,
    '/enterRideDetails' : EnterRideDetails,
    '/chooseDestination' : ChooseDestination,
  }

  let devMode = false;
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCta35ziwJVOq4UfEOVnqhv8_GhTQVyw4k&callback=initMap&libraries=places">
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
    position: relative;
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
