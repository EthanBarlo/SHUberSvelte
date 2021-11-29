<script>
  import Car from "../Components/CarSVG.svelte";
  import ForgotPassword from "./ForgotPassword.svelte";
  import CreateAccount from "./CreateAccount.svelte";
  import NavBar from "../Components/NavBar.svelte";
  let showPassword = false;
  let rememberMe = false;
</script>

<NavBar />
<div id="PageContainer">
  <section id="TitleBar">
    <h1>SHUber</h1>
    <Car />
    <p>Aren't SHU glad you chose us? hahah</p>
  </section>

  <form>
    Existing User
    <label for="userName">
      <input
        type="text"
        placeholder="Username / Email Address"
        name="userName"
        required
      />
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
  </form>
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
