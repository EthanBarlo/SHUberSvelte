<script>
  import { CurrentUser, SelectedTrip, Drivers, NotificationCounter, Notifications } from "../stores.js";
  import NavBar from "../Components/NavBar.svelte";
  import RouteView from "../Components/RouteViewer.svelte";
  import ProfileHeader from "../Components/ProfileHeader.svelte";

  let tripLoaded = false;
  let currentUsersTrips = null;
  let selectedTrip = null;
  let driversList = null;
  let data = null;
  let driver;
  let rideCompleted = false;
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
      rideCompleted = data.status == "Ride Finished and paid for." || data.status == "Ride Canceled, payment is withdrawn.";
      tripLoaded = true;
    }
  }

  function cancelRide(){
    CurrentUser.update(user => {
      user.rideHistory.find(d => d.id == data.id).status = "Ride Canceled, payment is withdrawn."
      data = null;
      return user;
    });
    NotificationCounter.update(value => value + 1);
    Notifications.update(value => {
      value.unshift({
        Title:"Ride cancelled!", 
        Detail:"You cancelled your trip to "+data.destination.name+"!", 
        Time: new Date().getHours() +":"+ new Date().getMinutes(), 
        rideID: data.id
      });
    });
  }

</script>

<NavBar BackDestination="#/yourTrips" />
<div class="PageContainer">
  <h1>Trip Details</h1>
  {#if tripLoaded}
  <h3>{data.origin.name} ➜ {data.destination.name}</h3>
  <h4>{data.cost} : {data.travelTime}</h4>
    <div class="map">
        <RouteView
          origin={data.origin.coords}
          destination={data.destination.coords}/>
    </div>

    <section class="info">
      <div id="LatestUpdate">
          <h3>Latest Update -</h3>
          <p>{data.status}</p>
      </div>
      <section id="driverDetails">
        <div id="carDetails">
          <h3>Car Details - </h3>
          <p>Reg Plate: {driver.carDetails.regPlate}</p>
          <p>Make: {driver.carDetails.model}</p>
          <p>Colour: {driver.carDetails.colour}</p>
        </div>
        <div id="DriverContainer">
          <ProfileHeader
            src={driver.imgSource}
            Name={driver.name}
            Size="Small"
          />
          <a class="button" href="#/driverProfile">View Profile</a>
        </div>
      </section>
      {#if !rideCompleted}
         <p id="cancelButton" on:click={cancelRide} class="button">Cancel</p>
      {/if}
    </section>
  {:else}
    <p>Loading Trip Data...</p>
  {/if}
</div>

<style>
  .PageContainer {
    margin: 0;
    height: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h4 {
    margin: 0;
    width: 100%;
    text-align: center;
  }

  h3, p{
    margin: 0;
  }
  h3{
    font-size: 1.1em;
  }
  p{
    font-size: 1em;
  }

  #LatestUpdate{
    position: relative;
  }
  #LatestUpdate::after{
    content: ' ';
    background: gray;
    width: 100%;
    height: 3%;
    position: absolute;
    bottom: -10%;
    left: 0;
  }
  .map {
    margin: 2% auto;
  }

  #cancelButton{
    position: relative;
    cursor: pointer;
  }

  #DriverContainer {
    width: 30%;
    position: absolute;
    right: 6%;
    top: 6%;
  }
  #DriverContainer .button{
    position: relative;
    right: 10%;
    padding: 7%;
  }
  #driverDetails{
    display: flex;
    position: relative;
  }
  #carDetails{
    position: relative;
    top: 15%;
    left: 6%;
    min-height: 160px;
  }

  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    border: solid #000;
    border-width: 1px;
    border-radius: 5px;
    padding: 10px;
    margin: 20px auto;
    width: 85%;
    min-height: 25%;
  }
</style>
