<script>
    import { IsGoogleLoaded } from '../stores.js';

    export let DestinationCoords = {lat: 0, lng: 0};
    let input;
    let hasGoogleLoaded = false;
    IsGoogleLoaded.subscribe(value => {
        hasGoogleLoaded = value;
        if (value) {
            const autocomplete = new google.maps.places.Autocomplete(input, {
                fields: ['name', 'geometry'],
            });
            // autocomplete.addEventListener("place_changed", () => {
            //     const place = autocomplete.getPlace();
            //     if(!place.geometry.location){
            //         // If place not valid / found.
            //     }
            // });
    }});

</script>

<section>
    <label for="destinationInput">Choose your destination
      <input type="text" placeholder="Tesco" bind:this={input}/>
    </label>
</section>
