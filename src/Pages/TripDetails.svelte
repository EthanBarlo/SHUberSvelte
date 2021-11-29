<script>
    import { CurrentUser } from "../stores.js";
    import NavBar from "../Components/NavBar.svelte";
    import RouteView from "../Components/RouteViewer.svelte";
    export let tripID = 0;

    let gotDetails

    let trip;
    CurrentUser.subscribe(user => {
        trip = user.rideHistory.find(ride => ride.id == tripID);
    });

</script>

<NavBar BackDestination="#/userProfile"/>
<div class="PageContainer">
    <h1>Trip Details</h1>
    <h3>{trip.origin.name} --> {trip.destination.name}</h3>
    <h4>{trip.cost}   :   {trip.travelTime}</h4>
    <RouteView origin={trip.origin.coords} destination={trip.destination.coords}/>

</div>

<style>
    .PageContainer{
        margin: 0;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3, h4{
        margin: 0;
    }
</style>
