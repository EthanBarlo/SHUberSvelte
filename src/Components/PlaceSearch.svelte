<script >
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
            setTimeout(() => {
                autocomplete = new google.maps.places.Autocomplete(input, {
                    fields: ['name', 'geometry'],
                    componentRestrictions: {'country' : ['UK']},
                });
                
                google.maps.event.addListener(autocomplete, 'place_changed', ()=>{
                place = autocomplete.getPlace();
                if(place.geometry.location){
                    DestinationLocation.update(value =>{
                        value.name = place.name;
                        value.coords.lat = parseFloat(place.geometry.location.lat());
                        value.coords.lng = parseFloat(place.geometry.location.lng());
                        return value;
                    })
                }
            });
            }, 100);
    }});


</script>
<NotificationBell/>

<section>
    <label for="destinationInput">Choose your destination
      <input type="text" placeholder="Tesco" bind:this={input}/>
    </label>
</section>
