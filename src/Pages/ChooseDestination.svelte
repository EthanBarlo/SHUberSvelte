

<div id="PageContainer">
    <section id="TitleBar">
        <h1>Book SHUber</h1>
        <p>Where would you like to go?</p>
    </section>

    <div id="map"></div>
</div>


<style>
    #map {
        height: 400px;
        width: 100%;
    }
</style>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHLzZRogIRo-WlDgzgubIp2vnD5AY7xi4&callback=initMap&libraries=&v=weekly"
async>
//JS code taken from Google Maps API setup guide (https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript)
function initMap() {
  const hallamUni = { lat: 53.37878, lng: -1.46640 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: hallamUni,
  });
  const marker = new google.maps.Marker({
    position: hallamUni,
    map: map,
  });
}</script>