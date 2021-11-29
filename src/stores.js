import { writable } from 'svelte/store';

// We can add in variables that are editable / accessible throughout the application here
export const IsGoogleLoaded = writable(false);
export const UserLocation = writable({lat:53.370491, lng:-1.321860});
export const DestinationLocation = writable({lat:53.370491, lng:-1.321860});
export const PreviousRides = writable([{origin:{lat:53.52644, lng:-1.63132}, destination:{lat:53.41438, lng:-1.4113328}, travelTime:"15mins", driverID:1}]);
export const NotificationCounter = writable(1);
export const Notifications = writable([
    {Title:"Ride cancelled!", Detail:"Your driver cancelled your trip! lorem ipsum some text testig tesintai", Time: "00:00", Action:() => { console.log("some detail for you bruh"); }},
    {Title:"Driver arrived!", Detail:"Your driver has arrived at your location", Time: "00:00", Action:() => { console.log("some detail for you bruh"); }},
    {Title:"Ride accepted!", Detail:"Your driver is on their way to your destination", Time: "00:20", Action:() => { console.log("some detail for you bruh"); }},
]); 

export const CurrentUser = writable({
    username:"admin", 
    password:"admin", 
    accountType:"user",
    defaultPayment: 1, 
    paymentDetails:[
        {ID: 1, name:"Alan T Cardholder", lastDigits:"1234", cvc:"123", expDate:"07/25"},
    ], 
    rideHistory:[
        {origin:{name:"sheffield", coords:{lat:0, lng:0}}, 
        destination:{name:"meadowhall", coords:{lat:0, lng:0}},
        travelTime:"6mins", 
        cost:"£5",
        driverID:1,
        time:"180:00"
        },  
    ], 
    favoriteLocations:[
        {lat: 0, lng:0}
    ],
});
export const Users = writable([
    {username:"admin", 
    password:"admin", 
    accountType:"user", 
    paymentDetails:[
        {ID: 0, name:"Visa", LastDigits:"1234"},
    ], 
    rideHistory:[
        {origin:{name:"sheffield", coords:{lat:0, lng:0}}, 
        destination:{name:"meadowhall", coords:{lat:0, lng:0}},
        travelTime:"6mins", 
        cost:"£5",
        driverID:1,
        time:"180:00"
        },
    ], 
    favoriteLocations:[
        {lat: 0, lng:0},
    ]}
]);
