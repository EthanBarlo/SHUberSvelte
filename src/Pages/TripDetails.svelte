<script>
  import { CurrentUser } from "../stores.js";
  import NavBar from "../Components/NavBar.svelte";
  import RouteView from "../Components/RouteViewer.svelte";
  import ProfileHeader from "../Components/ProfileHeader.svelte";
  export let tripID = 0;

    let tripLoaded = false;

    let trip;
    CurrentUser.subscribe(user => {
        trip = user.rideHistory.find(ride => ride.id == tripID);
        tripLoaded = trip != null;
    });
    
</script>

<NavBar BackDestination="#/userProfile" />
<div class="PageContainer">
    <h1>Trip Details</h1>
    {#if tripLoaded}
         <h3>{trip.origin.name} ----> {trip.destination.name}</h3>
         <h4>{trip.cost}   :   {trip.travelTime}</h4>
         <RouteView origin={trip.origin.coords} destination={trip.destination.coords}/>
     
         <section>
             <div id="DriverContainer">
                 <ProfileHeader
                 src="https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg"
                 Name="Mel"
                 Size="Small"
               />
             </div>
             <div id="LatestUpdate">
                 <h3>Latest Update -</h3>
                 <p>{trip.status}</p>
             </div>
             <div>
                 <h3>Car Details -</h3>
                 <p>Reg Plate: </p>
                 <p>Make: </p>
                 <p>Colour: </p>
             </div>
         </section>
    {:else}
         <p>Loading Trip Data...</p>
    {/if}

  <section>
    <div id="DriverContainer">
      <ProfileHeader
        src="https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg"
        Name="Mel"
        Size="Small"
      />
    </div>
    <div id="LatestUpdate">
      <h3>Latest Update -</h3>
      <p>{trip.status}</p>
    </div>
    <div>
      <h3>Car Details -</h3>
      <p>Reg Plate:</p>
      <p>Make:</p>
      <p>Colour:</p>
    </div>
  </section>
</div>

<style>
  .PageContainer {
    margin: 0;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3,
  h4 {
    margin: 0;
  }

  .route {
    display: block;
    height: 50%;
  }
</style>
