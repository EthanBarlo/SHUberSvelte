<script>
  import Map from "../Components/Map.svelte";
  import Axios from "axios";

  let pos = {lat: 0, lng: 0};
  var isReady = false;

  navigator.geolocation.getCurrentPosition(StoreLocation);

  function StoreLocation(position){
      pos.lat = position.coords.latitude;
      pos.lng = position.coords.longitude;
      isReady = true;
  }

  let destinationText;

let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+ pos.lng +'%2C'+ pos.lat +'&radius=1500&keyword='+ destinationText +'&key=AIzaSyCta35ziwJVOq4UfEOVnqhv8_GhTQVyw4k';

function searchMap(){
  fetch(url)
.then(data=>{console.log({data})})
.then(res=>{console.log({res})});
}



// var config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+ pos.lng +'%2C'+ pos.lat +'&radius=1500&keyword='+ destinationText +'&key=AIzaSyCta35ziwJVOq4UfEOVnqhv8_GhTQVyw4k',
//   headers: { }
// };

// Axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


</script>

<div id="PageContainer">
  <section id="TitleBar">
    <h1>Book SHUber</h1>
    <p>Where would you like to go?</p>
  </section>

  <section>
    <label for="destinationInput">Choose your destination
      <input type="text" placeholder="Tesco" bind:value={destinationText}/>
    </label>
    <button on:click|trusted={searchMap}>ClickToSearch</button>
  </section>
  
  
  {#if isReady}
      <Map zoom={12} center={pos}/>
  {/if}
 
</div>

<style>
  #PageContainer{
    height: 100%;
  }
</style>
