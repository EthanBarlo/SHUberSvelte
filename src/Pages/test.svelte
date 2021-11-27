<script>
    import RouteViewer from "../Components/RouteViewer.svelte";
    import { PreviousRides } from '../stores.js';

    let ridesArray;
    PreviousRides.subscribe(value => {
        ridesArray = value;
        console.log({ridesArray});
    });
</script>

{#each ridesArray as ride}
    <RouteViewer origin={ride.origin} destination={ride.destination}/>
{/each}

