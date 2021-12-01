<script>
  import { slide } from "svelte/transition";
  import BackButton from "../Components/BackButton.svelte";
  import { Notifications, NotificationCounter, SelectedTrip, PreviousPage } from "../stores.js";

  NotificationCounter.update(() => {
    return 0;
  });

  let notifs;
  Notifications.subscribe((value) => {
    notifs = value;
  });

  let previousPage;
  PreviousPage.subscribe(value => {
    previousPage = value;
  });

  function openTripDetails(tripClicked){
    var tripID = parseInt(tripClicked.target.children[0].childNodes[0].data);
    SelectedTrip.update(() => {
      return tripID;
    });
    window.location.href = "./#/tripDetails";
  }

</script>

<div id="NotificationPage" in:slide out:slide={{duration:150}}>
  <div class="navbar">
    <BackButton Destination={previousPage}/>
  </div>
  <h1>Notifications</h1>
  <div id="notifsGrid">

    {#each notifs as notif}
      <div class="timeContainer">
        <h3>{notif.Time}</h3>
      </div>
      <div class="notifContainer">
        <section id="info">
          <h2>{notif.Title}</h2>
          <p>{notif.Detail}</p>
        </section>
        <button on:click|trusted={openTripDetails}>View Details<p style="display:none;">{notif.rideID}</p></button>
      </div>
    {/each}
    <div id="end">End of notification history.</div>
  </div>
</div>

<style>
  .navbar {
    position: relative;
    background: #000;
    height: 6%;
    width: 100%;
    margin: 0;
  }
  #NotificationPage{
    height: 100%;
    overflow: hidden;
  }
  h1 {
    width: 100%;
    margin-right: 30%;
    text-align: center;
    grid-area: title;
  }

  h2 {
    font-size: 1.2em;
  }

  h3 {
    grid-area: time;
    width: 100%;
    text-align: left;
    font-size: 1.2em;
  }

  p {
    grid-area: info;
    text-align: left;
    margin-top: 10%;
  }

  button {
    grid-area: button;
    text-align: center;
    position: absolute;
    right: 2%;
    top: 20%;
    padding: 3%;
    width: 30%;
    height: 40%;
  }

  #notifsGrid {
    display: grid;
    grid-row-gap: 3%;
    grid-template-rows: auto auto auto;
    grid-template-columns: 15% 70%;
    overflow: scroll;
    scrollbar-width: none; /* Firefox */
    height: 80%;
    align-items: center;
  }

  #info {
    width: 70%;
  }

  .notifContainer {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 5%;
    margin: 3%;
    height: auto;
    border: 0.2em solid rgba(0, 0, 0, 0.8);
    font-size: 11px;
    text-align: left;
    border-radius: 5%;
  }

  .timeContainer {
    padding: 10%;
    margin: 3%;
    height: 50%;
    font-size: 11px;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 5%;
  }

  #end {
    font: italic;
    font-size: 1.2em;
    text-align: center;
    width: 100%;
    margin-top: 10%;
    grid-column: 2;
  }
</style>
