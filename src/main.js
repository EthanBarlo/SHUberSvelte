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
		pos => {
			return {
				lat:position.coords.latitude, 
				lng:position.coords.longitude
			}
		}));
		
export default app;