import App from './App.svelte';
import { IsGoogleLoaded, UserLocation } from './stores.js';

const app = new App({
	target: document.body,
	props: {
		
	}
});

window.initMap = function ready() {
	IsGoogleLoaded.update(() => true);
}

navigator.geolocation.getCurrentPosition(
	position => UserLocation.update(
		pos => position));
		
export default app;