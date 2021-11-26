<script>
    import { destroy_block } from 'svelte/internal';
    import NotificationBell from "../Components/NotificationBell.svelte";
    import { IsGoogleLoaded, DestinationLocation } from '../stores.js';

    let DestinationCoords = {lat: 0, lng: 0};

    let input;
    let hasGoogleLoaded = false;
    let autocomplete;
    let place;
    IsGoogleLoaded.subscribe(value => {
        hasGoogleLoaded = value;
        if (value) {
            autocomplete = new google.maps.places.Autocomplete(input, {
                fields: ['name', 'geometry'],
            });
            
            google.maps.event.addListener(autocomplete, 'place_changed', ()=>{
                place = autocomplete.getPlace();
                if(place.geometry.location){
                    DestinationLocation.update(value =>{
                        console.log("Updating With - " + {value})
                        console.log({place})
                        lat:place.geometry.location.lat
                        lng:place.geometry.location.lng
                    })
                }
            });
    }});


</script>
<NotificationBell/>

<section>
    <label for="destinationInput">Choose your destination
      <input type="text" placeholder="Tesco" bind:this={input}/>
    </label>
</section>
