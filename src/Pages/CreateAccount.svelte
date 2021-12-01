<script>
  let showPassword = false;
  import BackButton from "../Components/BackButton.svelte";
  import { Users } from "../stores.js";

  let firstName;
  let lastName;
  let userName;
  let password;
  let mobileNo;
  let postCode;

  function createAccount(){
    if(userName != null && password != null){
      Users.update(usersList => {
        usersList.push({
          username: userName,
          password: password,
          firstName: firstName,
          lastName: lastName,
          mobileNo: mobileNo,
          postCode: postCode,
          accountType: "passenger",
          paymentDetails:[],
          rideHistory:[],
          favoriteLocations:[],
        });
        return usersList;
      });
      window.location.href = "./#/";
    }
  }
</script>

<BackButton Destination='/'/>

<div class="pageHeader">
  <h1>Create an account</h1>
</div>

<div class="PageContainer">
  <div class="accountCreationForm">

    <label for="Details">
      <p>Enter your details:</p>
      <input type="text" placeholder="First Name" name="forename" bind:value={firstName} required />
      <input type="text" placeholder="Last Name" name="surname" bind:value={lastName} required />
    </label>

    <label for="Mobile">
      <p>Enter phone number:</p>
      <input type="text" placeholder="+ 44" name="mobile" bind:value={mobileNo} required />
    </label>

    <label for="Postcode">
      <p>Enter postcode:</p>
      <input type="text" placeholder="Here to find address" name="postCode" bind:value={postCode} required/>
    </label>

    <label for="userName">
      <input type="text" placeholder="Username / Email Address" name="username" bind:value={userName} required/>
    </label>

    <label for="password">
      {#if showPassword}
         <input type="text" placeholder="Password" name="password" bind:value={password} required/>
      {:else}
        <input type="password" placeholder="Password" name="password" bind:value={password} required/>
      {/if}
      <input id="ShowPassword" type="checkbox" name="showPassword" class="checkBox" bind:checked={showPassword}/>
    </label>

    <label for="signUpBtn">
      <button on:click={createAccount}>Sign Up</button>
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

  @media only screen and (min-width: 768px) {
    label {
      margin: 0 45%;
      width: 200px;
    }
  }
</style>
