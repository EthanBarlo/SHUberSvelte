<script>
  import NavBar from "../Components/NavBar.svelte";
</script>

<NavBar />
<div class="PageContainer">
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
</div>

<style>
</style>
