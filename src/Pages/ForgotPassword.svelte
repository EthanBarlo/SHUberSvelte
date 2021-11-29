<script>
  import Car from "../Components/CarSVG.svelte";
  import Login from "./Login.svelte";
  import NavBar from "../Components/NavBar.svelte";
</script>

<NavBar />
<div class="PageContainer">
  <section id="TitleBar">
    <h1>SHUber</h1>
    <Car />
    <p>Aren't SHU glad you chose us?</p>
  </section>
  <h2>Forgot Password</h2>
  <form>
    <label for="Username/Email">
      <input
        type="text"
        placeholder="Username / Email Address"
        name="userName"
        required
      />
    </label>
    <button on:click={Login} class="button">Request Password Reset</button>
  </form>
</div>

<style>
  .PageContainer {
    width: 100%;
    max-width: 100%;
  }
  .PageContainer,
  #TitleBar,
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    position: relative;
  }
</style>
