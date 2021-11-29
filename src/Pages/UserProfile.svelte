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

<div class="Settings">
<h2>Your Trips</h2>
<h2>Wallet</h2>
<h2>Log out</h2>


</div>

<style>
    h1{
        width: 100%;
        text-align: center;
        font-size: 1.2em;
}

.Settings{
    align-items: left;
    margin: 10%;

}
</style>