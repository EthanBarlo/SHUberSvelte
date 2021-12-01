<script>
  import NavBar from "../Components/NavBar.svelte";
  import { CurrentUser, Temp, NotificationCounter, Notifications, SelectedTrip } from "../stores.js";

  let defaultPayment = 0;
  let user;
  let paymentDetails = [];
  CurrentUser.subscribe(value => {
    user = value;
    defaultPayment = value.defaultPayment;
    paymentDetails = value.paymentDetails;
  });

  let temp;
  Temp.subscribe(value => {
    temp = value;
  });



  let nameOnCard;
  let cardNumber;
  let cvc;
  let expirationDate;  
  let incorrectMessage = "";
  let currentDate = new Date();
  currentDate.setDate(1);
  currentDate.setHours(0,0,0,0);
  function AddPayment(){
    if (nameOnCard == null) {
      incorrectMessage = "Name must be filled out";
      return;
    }
    if (cardNumber.length != 16) {
      incorrectMessage = "Card Number must be 16 characters";
      return;
    }
    if (cvc.length != 3) {
      incorrectMessage = "CVC must be filled in correctly";
      return;
    }
    if (expirationDate.length != 5) {
      incorrectMessage = "Expiration Date must be in the format \'dd/mm\'";
      return;
    }
    let expDate = new Date(currentDate.getFullYear().toString().substr(0, 2) + expirationDate.substr(3, 5) + '-' + expirationDate.substr(0, 2))
    if (expDate < currentDate) {
      incorrectMessage = "Expiration Date must be in date";
      return;
    }
    if(expirationDate !=null) {
        CurrentUser.update(user => {
          user.defaultPayment = paymentDetails.length + 1;
          user.paymentDetails.push({
            ID: paymentDetails.length + 1,
            name: nameOnCard,
            lastDigits: cardNumber.substr(cardNumber.length - 4),
            cvc: cvc,
            expDate: expirationDate,
          });
          return user;
        });
    }
    else{
      incorrectMessage = "Invalid or Missing card details"
    }
  }

  function AddNewRide(){
    if(temp.output != null && defaultPayment != 0){
      CurrentUser.update(user => {
        temp.output.rideID = user.rideHistory.length;
        user.rideHistory.unshift({
          id: user.rideHistory.length,
          origin:{name:temp.output.startAddress, coords:temp.userLatLng},
          destination: temp.destinationLocation,
          driverID:0,
          travelTime:temp.output.duration,
          cost: "£" + parseFloat(temp.output.distance) * .8,
          time: new Date().getDay() + "/"+ new Date().getMonth() + "/" + new Date().getFullYear() + " - " + new Date().getHours() +":"+ new Date().getMinutes(),
          status:"A driver is on their way to your location!"
        });
        return user;
      });
      NotificationCounter.update(value => value + 1);
      Notifications.update(notifs => {
        notifs.unshift({
          Title:"Ride Accepted",
          Detail:"Your driver is on their way to your destination!",
          Time: new Date().getHours() +":"+ new Date().getMinutes(),
          rideID: temp.output.rideID,
        });
        return notifs;
      });
      SelectedTrip.update(() => {
      return temp.output.rideID;
    });
    window.location.href = "./#/tripDetails";
    }
  }

</script>

<NavBar BackDestination = '#/UserProfile'/>
<div class="PageContainer">
  <h1>Wallet</h1>

  {#if paymentDetails.length >= 1}
    <h2>Select payment method:</h2>
    <div id="savedPaymentMethod">
      <select name="DefaultPayment" id="DefaultPayment" bind:value={defaultPayment}>
        <option disabled> Name : LastDigits : ExpiryDate</option>
        {#each paymentDetails as payment}
          <option value={payment.ID}>{payment.name} : {payment.lastDigits} : {payment.expDate}</option>
        {/each}
      </select>
    </div>
    <h3>Or</h3>
  {/if}
  
  <h2>Add a new payment method:</h2>
  <div id="addNewPayment">
    <p class="detailsHeading">Name on Card:</p>
    <input type="text" placeholder="Alan T Cardholder" name="cardName" class="longInput" bind:value={nameOnCard} required/>

    <p class="detailsHeading">Card Number:</p>
    <input type="text" placeholder="1234 5678 1234 5678" name="cardNumber" class="longInput" bind:value={cardNumber} required/>

    <div class="row">
      <div class="shortInput">
        <p class="detailsHeading">CVC:</p>
        <input type="text" placeholder="123" name="cvc" class="card-details" bind:value={cvc} required/>
      </div>

      <div class="shortInput">
        <p class="detailsHeading">Expiration Date:</p>
        <input type="text" placeholder="MM/YY" name="expirationDate" class="card-details" bind:value={expirationDate} required/>
      </div>
    </div>

    <p>{incorrectMessage}</p>
    <button class="button" on:click={AddPayment}>Add Card</button>
  </div>

  <button class="button payButton" on:click={AddNewRide}>Pay Now</button>
</div> 

<style>
  .PageContainer {
    height: 100%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2,
  h3 {
    text-align: center;
    margin: 1.5%;
  }

  #savedPaymentMethod{
    width: 80%;
  }
  #DefaultPayment {
    width: 100%;
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
    width: 90%;
    display: inline;
  }

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
    width: 40%;
    display: block;
  }

  .payButton {
    padding: 5%;
    width: 70%;
    margin-top: 15%;
  }

  /* MEDIA QUERIES */
  @media only screen and (min-width: 768px) {
    .PageContainer {

      width: 50%;
      margin: 0 auto;
    }
  }
</style>
