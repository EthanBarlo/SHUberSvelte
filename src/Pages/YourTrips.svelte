<script>
    let tempAction = () => {
        console.log("Yay thing might happen?!");
    }
    let trips = [
        {Title:"wow", Cost:"priceMuch", Action: () => {console.log("Wow Special")}},
        {Title:"ewasdas", Cost:"priceMuch", Action:tempAction},
        {Title:"asdasd", Cost:"priceMuch", Action:tempAction},
        {Title:"dsfsdfsdf", Cost:"priceMuch", Action:tempAction},
        {Title:"dfgdfg", Cost:"NO", Action:tempAction},
    ]

</script>

<div id="TripsGrid">
    {#each trips as trip}
        <div class="tripContainer">
            <h2>{trip.Title}</h2>
            <p>{trip.Cost}</p>
            
            <button on:click|trusted={trip.Action}>View Trip</button>
        </div>
    {/each}
</div>

<!-- <div class="grid-container">
    <div class="grid-item"> 
        <a href="mars.html">Mars</a>
        <img src="images/marsLink.jpg" alt="Mars" class="image">
    </div>
    <div class="grid-item">
         <a href="europa.html">Europa</a>
         <img src="images/europaLink.jpg" alt="Europa" class="image">
    </div>
    <div class="grid-item">
         <a href="lunar.html">Lunar</a>
          <img src="images/moonLink.jpg" alt="Lunar" class="image">
    </div>  
  </div> -->



<style>
    #TripsGrid{
        display: grid;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
        
        grid-template-rows: auto auto;
        grid-template-areas: "focused focused";
    }
    .tripContainer{
        padding: 0;
        margin: 0;
        border: .5em solid rgba(0, 0, 0, 0.8);
        font-size: 18px;
        text-align: center;
        border-radius: 5%;
    }

    /* If button is clicked */
    .tripContainer:focus-within{
        grid-area: focused;
    }

    /* .grid-container {
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: auto auto auto;
  background-color: black;
  padding: 10px;
}

.grid-item {
  background-color: black;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 60px;
  font-size: 18px;
  text-align: center;
} */
</style>