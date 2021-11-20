<script>
  import Map from "../Components/Map.svelte";
</script>

<div id="PageContainer">
  <section id="TitleBar">
    <h1>Book SHUber</h1>
    <p>Where would you like to go?</p>
  </section>

  <Map zoom={16} center={ {lat: 53.37862, lng: -1.46629} }/>
</div>
