<script>
	import Login from "./Pages/Login.svelte";
	import ChooseDestination from "./Pages/ChooseDestination.svelte";
	import DriverProfile from "./Pages/DriverProfile.svelte";
	import YourTrips from "./Pages/YourTrips.svelte";

	let accountId;
	let openPage;
</script>

<main>
	<YourTrips/>
</main>

<style>
	main{
		height: 100%;
		width: 100%;
		-ms-overflow-style: none;  /* IE and Edge */
  		scrollbar-width: none;  /* Firefox */
	}
</style>