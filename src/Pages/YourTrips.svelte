<script>
  import NavBar from "../Components/NavBar.svelte";
  import ProfileHeader from "../Components/ProfileHeader.svelte";
  let tempAction = () => {
    console.log("Yay thing might happen?!");
  };
  let trips = [
    // add map of trip to each item within array (coordinates? (Long/lat))
    {
      Title: "wow",
      Cost: "priceMuch",
      Action: () => {
        console.log("Wow Special");
      },
    },
    { Title: "ewasdas", Cost: "priceMuch", Action: tempAction },
    { Title: "asdasd", Cost: "priceMuch", Action: tempAction },
    { Title: "dsfsdfsdf", Cost: "priceMuch", Action: tempAction },
    { Title: "dfgdfg", Cost: "NO", Action: tempAction },
  ];
</script>

<NavBar BackDestination ="#/UserProfile" />


<ProfileHeader
  src="https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg"
  Name="Bill Gates"
  Description="SHUber User and Apple founder"
  Rating="4.8"
/>

<div class="PageContainer">
  <h1>Your Trips</h1>
  <div id="TripsGrid">
    {#each trips as trip}
      <div class="tripContainer">
        <h2>{trip.Title}</h2>
        <p>{trip.Cost}</p>
        <!-- Hide img/map of trip within this loop -->
        <!-- <img src={trip.map} alt="this is a map"> -->
        <button on:click|trusted={trip.Action}>View Trip</button>
      </div>
    {/each}
  </div>
</div>

<style>
  h1 {
    width: 100%;
    text-align: center;
  }

  #TripsGrid {
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-rows: auto auto;
    grid-template-areas: "focused focused";
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .tripContainer {
    padding: 0;
    margin: 0;
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
  /* Show img / map when focused */
  /* .tripContainer:focus-within img{
        display: inherit;
    } */
</style>
