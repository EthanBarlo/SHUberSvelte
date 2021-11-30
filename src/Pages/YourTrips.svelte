<script>
  import NavBar from "../Components/NavBar.svelte";
  import ProfileHeader from "../Components/ProfileHeader.svelte";
  import { CurrentUser } from "../stores.js";

  let tripsLoaded = false;
  let trips;
  let currentUser;
  CurrentUser.subscribe(user => {
    currentUser = user;
    trips = user.rideHistory;
    tripsLoaded = trips != null;
  });

  function openTripDetails(tripClicked){
    console.log({tripClicked});
  }
</script>

<NavBar BackDestination ="#/UserProfile" />
<ProfileHeader
  src={currentUser.imgSource}
  Name={currentUser.username}
  Description={currentUser.description}
  Rating={currentUser.rating}
/>

<div class="PageContainer">
  <h1>Your Trips</h1>
  {#if tripsLoaded}
     <div id="TripsGrid">
       {#each trips as trip}
         <div class="tripContainer">
           <h2>{trip.origin.name}➜{trip.destination.name}</h2>
           <p>{trip.Cost} : {trip.time}</p>
           <button on:click|trusted={openTripDetails}>View Trip <p style="display:none;">{trip.id}</p></button>
         </div>
       {/each}
     </div>
  {:else}
     <h3>Loading trips...</h3>
  {/if}
</div>


<style>
  h1 {
    width: 100%;
    text-align: center;
  }

  .tripContainer {
    padding-bottom: 15px;
    margin: 15px 0;
    border: solid #000;
    border-width: 1px;
    border-radius: 10px;
    font-size: 18px;
    text-align: center;
    border-radius: 5%;
  }

  /* If button is clicked */
  .tripContainer:focus-within {
    grid-area: focused;
  }
</style>
