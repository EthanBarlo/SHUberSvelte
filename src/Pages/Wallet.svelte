<script>
// import Login from "./Login.svelte";
// <button on:click={Login}></button>

let paymentOptions = [
    {ID: 0, name: "Visa"},
    {ID: 1, name: "Mastercard"},
    {ID: 2, name: "Bitcoin"},
    {ID: 3, name: "NFT"},
]
</script>



<h2>Wallet</h2>
<select name="DefaultPayment" id="DefaultPayment">
    {#each paymentOptions as { id, name }}
        <option value="{id}">{name}</option>
    {/each}
</select>
<label for="NewPayment">
    <p>Name on Card</p>
    <input type="text" placeholder="Card Name..." name="cardName" required>
    <p>Card Number</p>
    <input type="text" placeholder="Card Number..." name="cardNumber" required>
    <div>
        <p>CVC</p>
        <input type="text" placeholder="cvc..." name="cvc" required>
        <p>Expiration Date</p>
        <input type="text" placeholder="Expiration Date..." name="expirationDate" required>
    </div>
    <button>Add Card</button>
</label>




<style>
    /* your styles go here */
</style>