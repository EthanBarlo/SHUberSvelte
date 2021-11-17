<script>
	import Login from "./Pages/Login.svelte";
	import ChooseDestination from "./Pages/ChooseDestination.svelte";
	import DriverProfile from "./Pages/DriverProfile.svelte";
	import YourTrips from "./Pages/YourTrips.svelte";
import Notifications from "./Pages/Notifications.svelte";

	let accountId;
	let openPage;
</script>

<main>
	<Notifications/>
</main>

<style>
	main{
		height: 100%;
		width: 100%;
		-ms-overflow-style: none;  /* IE and Edge */
  		scrollbar-width: none;  /* Firefox */
	}
</style>