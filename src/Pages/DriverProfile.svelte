<script>
    import ProfileHeader from "../Components/ProfileHeader.svelte";
    import NotificationBell from "../Components/NotificationBell.svelte";
    import BackButton from "../Components/BackButton.svelte";
    import NavBar from "../Components/NavBar.svelte";
    import { Drivers } from "../stores.js";

    let driver;
    Drivers.subscribe(d => {
        driver = d[0];
    });

</script>

<NavBar />
<NotificationBell/>
<BackButton Destination='#/chooseDestination'/>

<h1>Driver Profile</h1>

<ProfileHeader 
src={driver.imgSource}
Name={driver.name}
Description={driver.description}
Rating={driver.rating}/>

<h1>Reviews</h1>

{#each driver.reviews as review}
    <div class="reviewContainer">
        <p id="rating">{review.rating}⭐</p>
        <h2 id="message">{review.message}</h2>
        <p id="name">~{review.name}</p>
    </div>
{/each}

 
<style>

h1{
        width: 100%;
        text-align: center;
        font-size: 1.2em;
}

.reviewContainer{
    display: grid;
    margin: 5%;
    padding: 2%;
    border: 0.2em solid rgba(0, 0, 0, 0.8);
    border-radius: 5%;
}

#rating,
#message,
#name{
    margin: 0;
    width: 100%;
}

#rating{
    text-align: center;
    font-size: 1.2em;
}
#message{
    font-size: 1em;
}
#name{
    text-align: left;
    font-size: 1em;
}

</style>