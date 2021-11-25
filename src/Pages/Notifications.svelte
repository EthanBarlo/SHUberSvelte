<script>
import { each } from "svelte/internal";  

    import ProfileHeader from "../Components/ProfileHeader.svelte";
    import { Notifications } from '../stores.js';

    let notificationArray;
    Notifications.subscribe(value => {
        notificationArray = value;
    });

    let tempAction = () => {
        console.log("some detail for you bruh");
    }

    let notifs = [
    {Title:"Ride cancelled!", Detail:"Your driver cancelled your trip!", Action:tempAction, },
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
            <section id="info">
                <h2>{notif.Title}</h2>
                <p>{notif.Detail}</p>
                <button on:click|trusted={notif.Action}>View Details</button>   
            </section>
            <section id="profile">
                <ProfileHeader id="profileImage" src="https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg" 
                Name="Angry Mel" Size="Small"></ProfileHeader> 
            </section>
        </div>
    {/each}
</div>

<div class="end">
    <h3>"bruh"</h3>
</div>



<style>
    h1{
        width: 70%;
        margin-right: 30%;
        text-align: center;
        grid-area: title;
    }

    h2{
        font-size: 1.2em;
        top: 0;
        position: absolute;
    }

    h3{
        grid-area:time;
        width: 100%;
        text-align: left;
        font-size: 1.2em;
    }
    
    #profileImage{
        grid-area: image;
        position: absolute;
        right: 0;
        margin-right: 5%;
    }

    p{
        grid-area:info;
        text-align: left;
        margin-top: 10%;
    }


    button{
        grid-area: button;
        text-align: center;
        padding: 3%;
        width: 50%
    }

    #notifsGrid{
        
        display: grid;
        grid-row-gap: 3%;
        grid-template-rows: auto auto auto;
        grid-template-columns: 15% 70%; 
        -ms-overflow-style: none;  /* IE and Edge */
  		scrollbar-width: none;  /* Firefox */
    }

    #info{
        width:70%;
    }
    #profile{
        height: 100%;
        width: 30%;
    }
    
    .notifContainer{
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 5%;
        margin: 3%;
        height: auto;
        /* width: auto; */
        border: .2em solid rgba(0, 0, 0, 0.8);
        font-size: 11px;
        text-align: left;
        border-radius: 5%;
    }


    .timeContainer{
        padding: 10%;
        margin: 3%;
        height: 50%;
        font-size: 11px;
        margin-top: auto;
        margin-bottom: auto;
        border-radius: 5%;
    }

    .end{
        font: italic;
        font-size: 1.2em;
        text-align: center;
        position: absolute;
    }
    
</style>