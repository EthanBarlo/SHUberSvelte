<script>
  import { onMount } from "svelte";
  import { DestinationLocation, UserLocation, CurrentUser, NotificationCounter, Notifications, SelectedTrip, Temp } from "../stores.js";
  let container;
  let map;
  let destinationMarker;
  let mapLoaded = false;
  let currentLocationMarker;
  export let zoom;


  let userLatLng = { lat: 53.384974, lng: -1.461184 };
  UserLocation.subscribe((value) => {
    userLatLng = value;
    if (mapLoaded) {
      map.setCenter(userLatLng);
      currentLocationMarker.setPosition(userLatLng);
    }
  });

  let destinationLocation;
  let destinationLatLng;
  DestinationLocation.subscribe((value) => {
    destinationLocation = value;
    destinationLatLng = value.coords;

    if (destinationMarker != null) destinationMarker.setMap(null);

    if (mapLoaded) {
      destinationMarker = new google.maps.Marker({
        position: destinationLatLng,
        map: map,
      });

      CalculateRoute();
    }
  });

  let output;

  var directionsService = new google.maps.DirectionsService();

  var directionsRenderer = new google.maps.DirectionsRenderer();

  directionsRenderer.setMap(map);

  function CalculateRoute() {
    var request = {
      origin: userLatLng,
      destination: destinationLatLng,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    };

    directionsService.route(request, (result, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        output = {
          startAddress: result.routes[0].legs[0].start_address.split(',')[1],
          distance: result.routes[0].legs[0].distance.text,
          duration: result.routes[0].legs[0].duration.text,
        };
        directionsRenderer.setMap(map);
        directionsRenderer.setDirections(result);

      } else {
        output = null;
        directionsRenderer.setDirections({ routes: [] });
        map.setCenter(userLatLng);
      }
    });
  }

  onMount(() => {
      drawMap();
  });

  function drawMap() {
    map = new google.maps.Map(container, {
      zoom,
      center: userLatLng,
      disableDefaultUI: true,
      draggable: false,
      scrollwheel: false,
      panControl: false,
      clickableIcons: false,
    });
    mapLoaded = true;

    // The marker, positioned at current location
    currentLocationMarker = new google.maps.Marker({
      position: userLatLng,
      map: map,
      icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    });

    //car marker test
    const car1 = new google.maps.Marker({
      position: { lat: 53.384974, lng: -1.461184 },
      map: map,
      icon: "https://media.discordapp.net/attachments/897034987575050290/912737288235130930/gps-navigation_4.png",
    });
  }

  function AddNewRide() {
    if(output != null) {
      Temp.update(value => {
        return {
        output,
        destinationLocation,
        userLatLng,
      }});
    window.location.href = "./#/wallet";
    }
  }

</script>


<div class="full-screen" bind:this={container} />

{#if output != null}
  <p>Cost: £{parseFloat(output.distance) * .8}</p>
  <p>Distance: {output.distance} - Duration: {output.duration}</p>
  <button class="button" on:click={AddNewRide}>Confirm Ride</button>
{/if}

<style>
  .full-screen {
    width: 100%;
    margin: 0 auto;
    height: 50%;
  }
</style>
