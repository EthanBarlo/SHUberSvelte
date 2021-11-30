<script>
    import { IsGoogleLoaded } from '../stores.js';

    export let origin;
    export let destination;
    export let output;

    let mapContainer;
 
    IsGoogleLoaded.subscribe(googleHasLoaded => {
        if(googleHasLoaded){
            var map = new google.maps.Map(mapContainer, {
                center: origin,
                disableDefaultUI: true,
                draggable: false,
                scrollwheel: false,
                panControl: false,
                clickableIcons: false
            });
        
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
                output = {distance: result.routes[0].legs[0].distance.text,
                          duration: result.routes[0].legs[0].duration.text};
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


<div id="RouteViewContainer">
    <div id="map" bind:this={mapContainer}></div>
</div>


<style>
    #map{
        width: 80vw;
        height: 20vh;
    }
</style>