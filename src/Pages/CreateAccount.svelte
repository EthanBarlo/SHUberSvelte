<script>
  let showPassword = false;
</script>

<div id="PageContainer">
  <h2>Create an account</h2>
  <label for="Details">
    <p>Enter your details</p>
    <input type="text" placeholder="First Name" name="forename" required />
    <input type="text" placeholder="Last Name" name="surname" required />
  </label>
  <label for="Mobile">
    <p>Enter phone number</p>
    <input type="text" placeholder="+ 44" name="mobile" required />
  </label>
  <label for="Postcode">
    <p>Enter postcode</p>
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
      bind:checked={showPassword}
    />
  </label>
  <label for="signUpBtn">
    <a href="#/ChooseDestination">
      <button onclick="location.href='./#/chooseDestination';">Sign Up</button>
    </a>
  </label>
</div>

<style>
</style>
