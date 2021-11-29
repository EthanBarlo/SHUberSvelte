<script>
  import BackButton from "../Components/BackButton.svelte";
  import NavBar from "../Components/NavBar.svelte";
  import ProfileHeader from "../Components/ProfileHeader.svelte";
  import { Notifications, NotificationCounter } from "../stores.js";


  NotificationCounter.update(() => {
    return 0;
  });

  let notifs;
  Notifications.subscribe((value) => {
    notifs = value;
  });
</script>

<div id="NotificationPage">
  <NavBar BackDestination="#/chooseDestination"/>
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
          <button on:click|trusted={notif.Action}>View Details</button>
        </section>

        <section id="profile">
          <ProfileHeader
            src="https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg"
            Name="Angry Mel"
            Size="Small"
          />
        </section>
      </div>
    {/each}

  </div>
  
  <div class="end">End of notification history.</div>
</div>

<style>
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
    top: 0;
    position: absolute;
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
    padding: 3%;
    width: 50%;
  }

  #notifsGrid {
    display: grid;
    grid-row-gap: 3%;
    grid-template-rows: auto auto auto;
    grid-template-columns: 15% 70%;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  #info {
    width: 70%;
  }
  #profile {
    height: 100%;
    width: 30%;
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

  .end {
    font: italic;
    font-size: 1.2em;
    text-align: center;
    width: 100%;
    margin-top: 10%;
  }
</style>
