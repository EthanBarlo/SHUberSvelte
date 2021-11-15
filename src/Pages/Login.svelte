<script>
    import Car from "../Components/CarSVG.svelte"
</script>

<h1>SHUber</h1>
<Car/>
<p>Aren't SHU glad you chose us?</p>

<form>Existing User
    <label for="userName">
        <input type="text" placeholder="Username / Email Address" name="userName" required>
    </label>
    <label for="password">
        <input type="password" placeholder="Password" name="password" required>
        <input type="checkbox" name="showPassword">
    </label>
    <label for="rememberMe">
        <input type="checkbox" name="rememberMe">
    </label>

    <button>Login</button>
    <button>Forgot Password</button>

    <label for="signUpBtn">New User?
        <button>Sign Up</button>
    </label>
</form>


<style>
    
</style>