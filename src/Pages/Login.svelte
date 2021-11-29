<script>
  import Car from "../Components/CarSVG.svelte";
  let showPassword = false;
  let rememberMe = false;

  let userName;
  let password;

  function ValidateUserCredentials() {
    if (userName != null && password != null) {
      window.location.href = "./#/chooseDestination";
    }
  }
</script>

<div class="pageHeader">
  <h1>SHUber</h1>
</div>

<div id="PageContainer">
  <section id="TitleBar">
    <Car />
    <p>Aren't SHU glad you chose us? hahah</p>
  </section>
  <div>
    <label for="userName">
      <input
        type="text"
        placeholder="JoeBlogs123@email.com"
        name="userName"
        bind:value={userName}
        required
      />
    </label>
    <label for="password">
      {#if showPassword}
        <input
          type="text"
          placeholder="Password"
          name="password"
          bind:value={password}
          required
        />
      {:else}
        <input
          type="password"
          placeholder="Password"
          name="password"
          bind:value={password}
          required
        />
      {/if}

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
  </div>
  <div class="buttons">
    <button on:click={ValidateUserCredentials} class="loginPageButton"
      >Login</button
    >
    <button
      onclick="location.href='./#/forgotPassword';"
      class="loginPageButton">Forgot Password</button
    >
  </div>
  <label for="signUpBtn"
    >New User?
    <button onclick="location.href='./#/createAccount';" class="loginPageButton"
      >Sign Up</button
    >
  </label>
</div>

<style>
  h1 {
    margin: 0;
  }

  #PageContainer {
    height: 100%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
  }
  #PageContainer,
  #TitleBar {
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

  .loginPageButton {
    color: #fff;
    background-color: #000;
    border-radius: 5px;
  }
</style>
