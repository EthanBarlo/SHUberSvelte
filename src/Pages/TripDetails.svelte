<script>
  import { CurrentUser, SelectedTrip, Drivers } from "../stores.js";
  import NavBar from "../Components/NavBar.svelte";
  import RouteView from "../Components/RouteViewer.svelte";
  import ProfileHeader from "../Components/ProfileHeader.svelte";

  let tripLoaded = false;
  let currentUsersTrips = null;
  let selectedTrip = null;
  let driversList = null;
  let data = null;
  let driver;

  CurrentUser.subscribe(user => {
    currentUsersTrips = user.rideHistory;
    LoadTripData();
  });

  SelectedTrip.subscribe(value => {
    selectedTrip = value;
    LoadTripData();
  });

  Drivers.subscribe(value => {
    driversList = value;
    LoadTripData();
  });

  function LoadTripData(){
    if(selectedTrip != null 
    && currentUsersTrips != null 
    && driversList != null && data == null){
      data = currentUsersTrips.find((trip) => trip.id == selectedTrip);
      driver = driversList.find(d => d.id == data.driverID)
      tripLoaded = true;
    }
  }
</script>

<NavBar BackDestination="#/yourTrips" />
<div class="PageContainer">
  <h1>Trip Details</h1>
  {#if tripLoaded}
    <div class="map">
        <h3>{data.origin.name} ➜ {data.destination.name}</h3>
        <h4>{data.cost} : {data.travelTime}</h4>
        <RouteView
          origin={data.origin.coords}
          destination={data.destination.coords}/>
    </div>

    <section class="info">
      <div id="DriverContainer">
        <ProfileHeader
          src={driver.imgSource}
          Name={driver.name}
          Size="Small"
        />
      </div>
      <div id="LatestUpdate">
        <h3>Latest Update -</h3>
        <p>{data.status}</p>
        <h3>Car Details - </h3>
        <p>Reg Plate: {driver.carDetails.regPlate}</p>
        <p>Make: {driver.carDetails.model}</p>
        <p>Colour: {driver.carDetails.colour}</p>
      </div>
    </section>
  {:else}
    <p>Loading Trip Data...</p>
  {/if}
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

  .map {
    display: block;
    margin: 10px auto;
  }
  #DriverContainer {
    width: 100px;
    display: block;
    margin: 10px auto;
  }

  .info {
    border: solid #000;
    border-width: 1px;
    border-radius: 5px;
    display: block;
    padding: 10px;
    margin: 20px auto;
  }
</style>
