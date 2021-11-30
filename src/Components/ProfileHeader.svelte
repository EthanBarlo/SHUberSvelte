<script>
export let src = "https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg";

export let Size = "";   //If nothing; displays as 'big'
export let Name = "";
export let Description = "";
export let Rating = "";

</script>

<div class="{Size}" id="ProfileContainer">
    <img {src} alt="Profile Picture">
    <h2>{Name}</h2>
    <h3>{Description}</h3>
    <p>{Rating}⭐</p>
    <p class="underline"> </p>
</div>

<style>
    #ProfileContainer{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img, h2, h3, p{
        margin: 0;
    }
    
    h2{
        font-size: 1.2em;
    }

    img{
        margin: 5%;
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

    #ProfileContainer.Small h3, 
    #ProfileContainer.Small p, 
    #ProfileContainer.Small p::after{
        display: none;
    }
    #ProfileContainer.Small img{
        width: 100%;
    }

</style>