<script>
    import NotificationBell from "../Components/NotificationBell.svelte";
// import Login from "./Login.svelte";
// <button on:click={Login}></button>

let paymentOptions = [
    {ID: 0, name: "Visa"},
    {ID: 1, name: "Mastercard"},
    {ID: 2, name: "Bitcoin"},
    {ID: 3, name: "NFT"},
]
</script>

<NotificationBell/>
<div id="PageContainer">
    <h1>Wallet</h1>
    <h2>Select payment method:</h2>
    <select name="DefaultPayment" id="DefaultPayment">
        {#each paymentOptions as { id, name }}
            <option value="{id}">{name}</option>
        {/each}
    </select>
    <h2>Add a new payment method:</h2>
    <div id="addNewPayment">
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
    </div>
</div>




<style>
    #PageContainer{
    height: 100%;
    padding: 5%;
    }

    h2 {
        color: red;
    }

    div#addNewPayment{
        display: block;
        border: solid black;
        border-width: 1px;
        border-radius: 10px;
        margin: 0;
    }

</style>