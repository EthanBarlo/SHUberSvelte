<script>
    import NotificationBell from "../Components/NotificationBell.svelte";
</script>


<NotificationBell/>

<div id="PageContainer">
      <h1>Where would you like to go?</h1>
        <label for="StreetName"> House Number and Street:
            <input type="text" placeholder="Number and Street" required>
        </label>
        <label for="Postcode"> Postcode:
            <input type="text" placeholder="Postcode" required>
        </label>
</div>