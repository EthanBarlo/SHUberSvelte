import { writable } from 'svelte/store';

// We can add in variables that are editable / accessible throughout the application here
export const IsGoogleLoaded = writable(false);
export const UserLocation = writable({lat:53.370491, lng:-1.321860});
export const DestinationLocation = writable({lat:53.370491, lng:-1.321860});
export const Notifications = writable([
    {Title:"Ride cancelled!", Detail:"Your driver cancelled your trip! lorem ipsum some text testig tesintai", Time: "00:00", Action:() => { console.log("some detail for you bruh"); }},
    {Title:"Driver arrived!", Detail:"Your driver has arrived at your location", Time: "00:00", Action:() => { console.log("some detail for you bruh"); }},
    {Title:"Ride accepted!", Detail:"Your driver is on their way to your destination", Time: "00:20", Action:() => { console.log("some detail for you bruh"); }},
]);                                                                                            //TODO: in JS, make button clicks take us to a new page with details
