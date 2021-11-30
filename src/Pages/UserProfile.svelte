<script>
    import ProfileHeader from "../Components/ProfileHeader.svelte";
    import NotificationBell from "../Components/NotificationBell.svelte";
    import BackButton from "../Components/BackButton.svelte";
    import NavBar from "../Components/NavBar.svelte";


    
</script>

<NavBar />
<NotificationBell/>
<BackButton Destination='#/chooseDestination'/>

<h1>User Profile</h1>

<ProfileHeader 
src="https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg" 
Name="Nervous boi" 
Description="Newbie user" 
Rating="4"/>

<div id="aGrid">
<a href = "#/YourTrips">Your trips</a>
<a href = "#/Wallet">Wallet</a>
<a href = "#/">Log out</a>



</div>

<style>
h1{
        width: 100%;
        text-align: center;
        font-size: 1.2em;
}

#aGrid{
    display: grid;
    grid-template-rows: auto auto auto;
    margin: 10%;
}

a{
    align-items: left;
    margin: 5%;
    font-size: 1.2em;
    text-decoration: none;
    color: black;
    font-weight: bold;
}
</style>