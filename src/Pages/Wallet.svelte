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
    <option value=""></option>
</select>




<style>
    /* your styles go here */
</style>