<script>
    import ProfileHeader from "../Components/ProfileHeader.svelte";
    import NotificationBell from "../Components/NotificationBell.svelte";
    import BackButton from "../Components/BackButton.svelte";
    import NavBar from "../Components/NavBar.svelte";

    import { CurrentUser } from "../stores.js";

    let currentUser;
    CurrentUser.subscribe(value =>{
        currentUser = value;
    });
    
</script>

<NavBar BackDestination='#/chooseDestination'/>

<ProfileHeader 
src={currentUser.imgSource} 
Name={currentUser.username} 
Description={currentUser.description} 
Rating={currentUser.rating}/>

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