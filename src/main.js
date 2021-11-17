import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

window.initMap = function ready() {
	app.$set({ mapReady: true })
	console.log("hello");
}

export default app;