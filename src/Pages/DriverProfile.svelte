<script>
    import ProfileHeader from "../Components/ProfileHeader.svelte";
    import NotificationBell from "../Components/NotificationBell.svelte";
    import BackButton from "../Components/BackButton.svelte";
    import NavBar from "../Components/NavBar.svelte";


    let reviews = [
        {reviewText:"This guy is a fucking chad", timeStamp: "2 days ago"},
        {reviewText:"He terrified me, and I'm a hairy 6ft 9 lumberjack", timeStamp: "4 days ago"},
        {reviewText:"Not bad, his car was covered in crumbs though..", timeStamp: "1 week ago"},
    ]
</script>

<NavBar />
<NotificationBell/>
<BackButton Destination='#/chooseDestination'/>

<h1>Driver Profile</h1>

<ProfileHeader 
src="https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg" 
Name="Mel Gibson" 
Description="SHUber Driver, Stunt Man" 
Rating="-3.6"/>

<h1>Reviews</h1>


{#each reviews as review}
     <div class="reviewContainer">
        <h2>{review.reviewText}</h2>
        <p>{review.timeStamp}</p>
     </div>
     {/each}


 
<style>

h1{
        width: 100%;
        text-align: center;
        font-size: 1.2em;
}

h2{
    width: 100%;
    text-align: left;
    font-size: 0.8em;
    top: 0;
   
}

p{
    font-size: 0.8em;
    text-align: left;
    
}

.reviewContainer{
    display: grid;
    grid-template-rows: auto auto auto;
    padding: 2%;
    margin: 5%;
    border: 0.1em solid rgba(0, 0, 0, 0.8);
    border-radius: 5%;

}


</style>