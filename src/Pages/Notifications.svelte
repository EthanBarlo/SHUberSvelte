<script>
import { each } from "svelte/internal";  

    import ProfileHeader from "../Components/ProfileHeader.svelte";

    let tempAction = () => {
        console.log("some detail for you bruh");
    }

    let notifs = [
    {Title:"Ride cancelled!", Detail:"Your driver cancelled your trip!", Action:tempAction},
    {Title:"Driver arrived!", Detail:"Your driver has arrived at your location", Action:tempAction},
    {Title:"Ride accepted!", Detail:"Your driver is on their way to your destination", Action:tempAction},
    ]

</script>

<h1>Notifications</h1> 




<div id="notifsGrid">
    {#each notifs as notif}
    <div class="timeContainer">
    <h3>00:00</h3>
    </div>
        <div class="notifContainer">
            <h2>{notif.Title}</h2>
            <p>{notif.Detail}</p>
            <button> on:click|trusted={notif.Action}>View Details</button>
        </div>
    {/each}
</div>

<!-- <ProfileHeader 
src="https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg" 
Name="Bill Gates" 
Size="Small"
/> -->



<style>
    h1{
        width: 100%;
        text-align: center;
    }

    h3{
        width: 100%;
        text-align: left;
    }

    button{
        text-align: left;
        padding: 3%;
    }

    #notifsGrid{
        display: grid;
        grid-row-gap: 3%;
        grid-template-rows: auto auto auto;
        grid-template-columns: 15% 70%; 
        -ms-overflow-style: none;  /* IE and Edge */
  		scrollbar-width: none;  /* Firefox */
    }

    .notifContainer{
        padding: 10%;
        margin: 3%;
        border: .2em solid rgba(0, 0, 0, 0.8);
        font-size: 18px;
        text-align: left;
        border-radius: 5%;
    }

    .timeContainer{
        padding: 30%;
        margin: 3%;
        margin-top: auto;
        margin-bottom: auto;
        text-align: center;
       
    }
</style>