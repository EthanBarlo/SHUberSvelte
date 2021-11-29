<script>
  import NotificationBell from "./NotificationBell.svelte";
  import BackButton from "./BackButton.svelte";
  export let backLoc = "#/";
</script>

<div class="navbar">
  <NotificationBell />
  <BackButton Destination={backLoc}/>
</div>

<style>
  .navbar {
    background-color: #000;
    height: 6%;
    margin: 0;
  }
</style>
