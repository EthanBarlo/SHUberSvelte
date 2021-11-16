<script>
let src = "https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg";

export let Name = "Unassigned";
export let Description = "Unassigned";
export let Rating = "Unassigned";

</script>

<div id="ProfileContainer">
    <img {src} alt="Profile Picture">
    <h2>{Name}</h2>
    <h3>{Description}</h3>
    <p>{Rating}⭐</p>
    <p class="underline"> </p>
</div>

<style>
    #ProfileContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img, h2, h3, p{
        margin: 0;
    }
    img{
        width: 40%;
        border-radius: 100%;
    }
    p{
        position: relative;
    }
    p::after{
        position: absolute;
        content: ' ';
        width: 150%;
        height: 10%;
        background-color: black;
        bottom: -10%;
        left: -40%;
    }

  
 
    
</style>