<script>
  import Map from "../Components/Map.svelte";
  export let mapReady;
</script>

<div id="PageContainer">
  <section id="TitleBar">
    <h1>Book SHUber</h1>
    <p>Where would you like to go?</p>
  </section>
  {#if mapReady}
    <Map zoom={4} center={ {lat: 53.37862, lng: -1.46629} }/>
  {/if}
</div>
