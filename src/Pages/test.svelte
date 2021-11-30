<script>
    import RouteViewer from "../Components/RouteViewer.svelte";
    import { CurrentUser } from '../stores.js';

    let ridesArray;
    CurrentUser.subscribe(value => {
        ridesArray = value.rideHistory;
        console.log({ridesArray});
    });
</script>

{#each ridesArray as ride}
    <RouteViewer origin={ride.origin.coords} destination={ride.destination.coords}/>
{/each}

