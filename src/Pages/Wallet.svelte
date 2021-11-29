<script>
  import NavBar from "../Components/NavBar.svelte";

  let paymentOptions = [
    { ID: 0, name: "Visa" },
    { ID: 1, name: "Mastercard" },
    { ID: 2, name: "Bitcoin" },
    { ID: 3, name: "NFT" },
  ];
</script>

<NavBar />
<div class="PageContainer">
  <h1>Wallet</h1>

  <h2>Select payment method:</h2>
  <div id="savedPaymentMethod">
    <select name="DefaultPayment" id="DefaultPayment">
      {#each paymentOptions as { id, name }}
        <option value={id}>{name}</option>
      {/each}
    </select>
  </div>
  <h3>Or</h3>
  <h2>Add a new payment method:</h2>
  <div id="addNewPayment">
    <p class="detailsHeading">Name on Card:</p>
    <input
      type="text"
      placeholder="Alan T Cardholder"
      name="cardName"
      class="longInput"
      required
    />
    <p class="detailsHeading">Card Number:</p>
    <input
      type="text"
      placeholder="1234 5678 1234 5678"
      name="cardNumber"
      class="longInput"
      required
    />
    <div class="row">
      <div class="shortInput">
        <p class="detailsHeading">CVC:</p>
        <input
          type="text"
          placeholder="123"
          name="cvc"
          class="card-details"
          required
        />
      </div>
      <div class="shortInput">
        <p class="detailsHeading">Expiration Date:</p>
        <input
          type="text"
          placeholder="MM/YY"
          name="expirationDate"
          class="card-details"
          required
        />
      </div>
    </div>
    <button class="button">Add Card</button>
  </div>
  <button class="button payButton">Pay Now</button>
</div>

<style>
  .PageContainer {
    height: 100%;
    padding: 5%;
  }

  h2,
  h3 {
    text-align: center;
  }

  #DefaultPayment {
    display: block;
    margin: 0 auto;
  }

  div#addNewPayment {
    display: block;
    border: solid #000;
    border-width: 1px;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px;
  }

  .detailsHeading {
    margin: 5px 0;
    font-weight: bold;
  }

  .card-details {
    /* display: block; */
    width: 90%;
    display: inline;
    /* margin: 0 auto; */
  }

  /* .row {
  } */

  .shortInput {
    width: 50%;
    float: left;
  }

  .longInput {
    width: 95%;
  }

  .button {
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    width: 100px;
    display: block;
    margin: 0 auto;
  }

  .payButton {
    margin: 15px auto;
  }
</style>
