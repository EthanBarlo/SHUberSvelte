<script>
  import { onMount } from "svelte";
  import { DestinationLocation, UserLocation } from '../stores.js';
  let container;
  let map;
  let destinationMarker;
  let mapLoaded = false;
  export let zoom;
 
  let userLatLng = { lat: 53.384974, lng: -1.461184 };
  UserLocation.subscribe(value => {
      userLatLng = value;
  });


  let destinationLatLng;
    DestinationLocation.subscribe(value => {
      destinationLatLng = value;

      if(destinationMarker != null)
        destinationMarker.setMap(null);

      if(mapLoaded){
        destinationMarker = new google.maps.Marker({
        position: value,
        map: map,
        });

        CalculateRoute();
      }
    });


    let output;

    var directionsService = new google.maps.DirectionsService();
  
    var directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(map);

    function CalculateRoute(){
      var request = {
        origin: {lat: userLatLng.coords.latitude, lng: userLatLng.coords.latitude},
        destination: destinationLatLng,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
      }

      directionsService.route(request, (result, status) => {;
        if(status == google.maps.DirectionsStatus.OK){
          output = {distance: result.routes[0].legs[0].distance.text,
                    duration: result.routes[0].legs[0].duration.text};
          directionsRenderer.setMap(map);
          directionsRenderer.setDirections(result);
        }
        else{
          directionsRenderer.setDirections({routes: []});
          map.setCenter(userLatLng);
        }
      });
    }

  onMount(() => {
    drawMap();
  });
 

  function drawMap(){
    map = new google.maps.Map(container, {
      zoom,
      center: userLatLng,
      disableDefaultUI: true,
      draggable: false,
      scrollwheel: false,
      panControl: false,
      clickableIcons: false
    });
    mapLoaded = true;

    // The marker, positioned at current location
    const currentLocationMarker = new google.maps.Marker({
    position: userLatLng,
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    });


    //car marker test
    const car1 = new google.maps.Marker({
    position: { lat: 53.384974, lng: -1.461184 },
    map: map,
    icon: 'https://media.discordapp.net/attachments/897034987575050290/912737288235130930/gps-navigation_4.png',
    });

  }

  
</script>


{#if output != null}
  <p>Distance: {output.distance} - Duration: {output.duration}</p>
{/if}

<div class="full-screen" bind:this={container} />

<style>
  .full-screen {
    width: calc(100vw - 24px);
    height: 75vh;
  }
</style>
