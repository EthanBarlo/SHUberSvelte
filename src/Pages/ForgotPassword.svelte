<script>
    import Car from "../Components/CarSVG.svelte"
</script>


<div id="PageContainer">
    <section id="TitleBar">
        <h1>SHUber</h1>
        <Car/>
        <p>Aren't SHU glad you chose us?</p>
    </section>
    <h2>Forgot Password</h2>
    <form>
        <label for="Username/Email">
            <input type="text" placeholder="Username / Email Address" name="userName" required>
        </label>
        <button onclick="location.href='./#/Login';">Request Password Reset</button>
    </form>
</div>

<style>
    #PageContainer{
        height: 100%;
        max-height: 100%;
        width: 100%;
        max-width: 100%;
    }
    #PageContainer,
    #TitleBar,
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label{
        position: relative;
    }
</style>