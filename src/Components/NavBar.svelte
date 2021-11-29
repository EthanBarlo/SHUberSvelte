<script>
  import NotificationBell from "./NotificationBell.svelte";
  import BackButton from "./BackButton.svelte";
  export let BackDestination = "#/";
</script>

<div class="navbar">
  <NotificationBell />
  <BackButton Destination={BackDestination}/>
</div>

<style>
  .navbar {
    background-color: #000;
    height: 6%;
    margin: 0;
  }
</style>
