<script>
  import { slide } from "svelte/transition"
  import NotificationBell from "./NotificationBell.svelte";
  import BackButton from "./BackButton.svelte";
  import BlankProfile from "./BlankProfile.svelte";
  export let BackDestination = "#/";
  export let showUserProfile = false;
</script>


<div class="navbar">
  <NotificationBell />
  {#if showUserProfile}
    <BlankProfile/>
  {:else}
    <BackButton Destination={BackDestination}/>
  {/if}
  
</div>


<style>
  .navbar {
    position: relative;
    background: #000;
    height: 6%;
    width: 100%;
    margin: 0;
  }
</style>
