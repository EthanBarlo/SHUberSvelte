<script>
  let showPassword = false;
</script>

<div class="pageHeader">
  <h1>Create an account</h1>
</div>

<div class="PageContainer">
  <div class="accountCreationForm">
    <label for="Details">
      <p>Enter your details:</p>
      <input type="text" placeholder="First Name" name="forename" required />
      <input type="text" placeholder="Last Name" name="surname" required />
    </label>
    <label for="Mobile">
      <p>Enter phone number:</p>
      <input type="text" placeholder="+ 44" name="mobile" required />
    </label>
    <label for="Postcode">
      <p>Enter postcode:</p>
      <input
        type="text"
        placeholder="Here to find address"
        name="postCode"
        required
      />
    </label>
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
        class="checkBox"
        bind:checked={showPassword}
      />
    </label>
    <label for="signUpBtn">
      <a href="#/ChooseDestination">
        <button onclick="location.href='./#/chooseDestination';">Sign Up</button
        >
      </a>
    </label>
  </div>
</div>

<style>
  h1 {
    margin: 0;
  }

  label {
    margin: 0 17%;
    font-weight: bold;
  }

  input {
    display: block;
  }

  .checkBox {
    display: block;
    margin: 0 auto;
  }

  button {
    display: block;
    margin: 100px auto;
    color: #fff;
    background-color: #000;
    border-radius: 5px;
  }
</style>
