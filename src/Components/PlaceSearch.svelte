<script>
    import { IsGoogleLoaded } from '../stores.js';

    let input;

    let hasGoogleLoaded = false;
    IsGoogleLoaded.subscribe(value => {
        hasGoogleLoaded = value;
        if (value) {
            autocomplete = new google.maps.places.Autocomplete(input, {
                fields: ['name', 'geometry'],
            });
    }});
</script>

<section>
    <label for="destinationInput">Choose your destination
      <input type="text" placeholder="Tesco" bind:this={input}/>
    </label>
</section>
