<script>
  import Car from "../Components/CarSVG.svelte";
  import BackButton from "../Components/BackButton.svelte";
</script>


<BackButton Destination='/'/>

<div class="pageHeader">
  <h1>SHUber</h1>
</div>
<div class="PageContainer">
  <section id="TitleBar">
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
    <button onclick="location.href='./#/Login';" class="resetButton"
      >Request Password Reset</button
    >
  </form>
</div>

<style>
  #TitleBar,
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    position: relative;
  }

  h1 {
    margin: 0;
  }

  h2 {
    text-align: center;
  }
  .resetButton {
    color: #fff;
    background-color: #000;
    border-radius: 5px;
    margin-top: 20px;
  }
</style>
