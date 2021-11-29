<script>
    import Car from "../Components/CarSVG.svelte"
    let showPassword = false;
    let rememberMe = false;

    let userName;
    let password;

    function ValidateUserCredentials(){
        if(userName != null && password != null){

            window.location.href = "#/chooseDestination";
        }
    }



</script>

<NavBar />
<div id="PageContainer">
  <section id="TitleBar">
    <h1>SHUber</h1>
    <Car />
    <p>Aren't SHU glad you chose us? hahah</p>
  </section>

    <div>Existing User
        <label for="userName">
            <input type="text" placeholder="JoeBlogs123@email.com" name="userName" bind:value={userName} required>
        </label>
        <label for="password">
            {#if showPassword}
                <input type="text" placeholder="Password" name="password" bind:value={password} required>
            {:else}
                <input type="password" placeholder="Password" name="password" bind:value={password} required>
            {/if}
            
            <input id="ShowPassword" type="checkbox" name="showPassword" bind:checked={showPassword}>
        </label>
        <label for="rememberMe">Remember Me
            <input type="checkbox" name="rememberMe" bind:checked={rememberMe}>
        </label>
        <button on:click|trusted={ValidateUserCredentials()}>Login</button>
        <button onclick="location.href='./#/forgotPassword';">Forgot Password</button>
    </div>
    <label for="signUpBtn">New User?
        <button onclick="location.href='./#/createAccount';">Sign Up</button>
    </label>
    <label for="password">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        name="password"
        required
      />
      <input
        id="ShowPassword"
        type="checkbox"
        name="showPassword"
        bind:checked={showPassword}
      />
    </label>
    <label for="rememberMe"
      >Remember Me
      <input type="checkbox" name="rememberMe" bind:checked={rememberMe} />
    </label>
    <button>Login</button>
    <button on:click={ForgotPassword}>Forgot Password</button>
  <label for="signUpBtn"
    >New User?
    <button on:click={CreateAccount}>Sign Up</button>
  </label>
</div>

<style>
  #PageContainer {
    height: 100%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
  }
  #PageContainer,
  #TitleBar,
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    position: relative;
  }
  #ShowPassword {
    position: absolute;
    right: 2%;
    top: 25%;
  }
</style>
