<script>
    import { IsGoogleLoaded } from '../stores.js';

    export let origin;
    export let destination;

    let mapContainer;
    var map;
    IsGoogleLoaded.subscribe(googleHasLoaded => {
      if(googleHasLoaded){
        setTimeout(() => {
          map = new google.maps.Map(mapContainer, {
              center: origin,
              disableDefaultUI: true,
              draggable: false,
              scrollwheel: false,
              panControl: false,
              clickableIcons: false
          });
        }, 100);
    
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
        var request = {
          origin,
          destination,
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.IMPERIAL
        }
        
        directionsService.route(request, (result, status) => {
          if(status == google.maps.DirectionsStatus.OK){
            directionsRenderer.setMap(map);
            directionsRenderer.setDirections(result);
          }
          else{
            directionsRenderer.setDirections({routes: []});
            map.setCenter(origin);
          }
        });
      }
    });
</script>

<div id="map" bind:this="{mapContainer}"></div>

<style>
    #map{
        width: 80vw;
        height: 20vh;
    }
</style>