<script>
  import BackButton from "../Components/BackButton.svelte";
  import NavBar from "../Components/NavBar.svelte";
  import ProfileHeader from "../Components/ProfileHeader.svelte";
  let tempAction = () => {
    console.log("Yay thing might happen?!");
  };
  let trips = [
    // add map of trip to each item within array (coordinates? (Long/lat))
    {
      Title: "Berlin --> Brandenburg Airport",
      Cost: "£65",
      Time: "13:08",
      Action: tempAction,
    },
    {
      Title: "London --> Manchester",
      Cost: "£459",
      Time: "09:40",
      Action: tempAction,
    },
    {
      Title: "Marseille --> Montpellione",
      Cost: "£48",
      Time: "10:48",
      Action: tempAction,
    },
    {
      Title: "Sheffield --> Rotherham",
      Cost: "£20",
      Time: "17:35",
      Action: tempAction,
    },
    {
      Title: "Stuttgart --> Frankfurt",
      Cost: "£63",
      Time: "22:15",
      Action: tempAction,
    },
  ];
</script>

<NavBar />
<BackButton Destination="#/chooseDestination" />

<ProfileHeader
  src="https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg"
  Name="Bill Gates"
  Description="SHUber User and Apple founder"
  Rating="4.8"
/>

<div class="PageContainer">
  <h1>Your Trips</h1>
  {#each trips as trip}
    <div class="tripContainer">
      <h2>{trip.Title}</h2>
      <p>{trip.Cost} - {trip.Time}</p>
      <!-- Hide img/map of trip within this loop -->
      <!-- <img src={trip.map} alt="this is a map"> -->
      <button on:click|trusted={trip.Action} class="button">View Trip</button>
    </div>
  {/each}
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
