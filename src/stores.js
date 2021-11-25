import { writable } from 'svelte/store';

// We can add in variables that are editable / accessible throughout the application here
export const IsGoogleLoaded = writable(false);
export const UserLocation = writable({lat: 53.370491, lng: -1.321860});
export const Notifications = writable([
    {name: "Test", data:"data"},
]);
