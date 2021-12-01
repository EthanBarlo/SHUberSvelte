import { writable } from 'svelte/store';

// We can add in variables that are editable / accessible throughout the application here
// Our own fake databaseS
export const Temp = writable();
export const IsGoogleLoaded = writable(false);
export const UserLocation = writable({lat:53.52644, lng:-1.63132});
export const DestinationLocation = writable({name: "placeName", coords:{lat:53.41438, lng:-1.4113328}});
export const PreviousPage = writable(0);
export const SelectedTrip = writable(0);
export const NotificationCounter = writable(0);
export const Notifications = writable([
    {Title:"Ride cancelled!", Detail:"Your driver cancelled your trip!", Time: "00:20", rideID: 0},
    {Title:"Driver arrived!", Detail:"Your driver has arrived at your location", Time: "00:12", rideID: 0},
    {Title:"Ride accepted!", Detail:"Your driver is on their way to your destination", Time: "00:00", rideID: 0},
    {Title:"Ride cancelled!", Detail:"Your driver cancelled your trip!", Time: "00:20", rideID: 0},
    {Title:"Driver arrived!", Detail:"Your driver has arrived at your location", Time: "00:12", rideID: 0},
    {Title:"Ride accepted!", Detail:"Your driver is on their way to your destination", Time: "00:00", rideID: 0},
    {Title:"Ride cancelled!", Detail:"Your driver cancelled your trip!", Time: "00:20", rideID: 0},
    {Title:"Driver arrived!", Detail:"Your driver has arrived at your location", Time: "00:12", rideID: 0},
    {Title:"Ride accepted!", Detail:"Your driver is on their way to your destination", Time: "00:00", rideID: 0},
]); 

export const CurrentUser = writable(0);
export const Users = writable([
    {
        username:"admin", 
        password:"admin", 
        imgSource:"https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg",
        description:"SHUber guy",
        rating:"∞",
        defaultPayment: 1,
        paymentDetails:[
            {ID: 1, name:"Alan T Cardholder", lastDigits:"1234", cvc:"123", expDate:"07/25"},
        ], 
        rideHistory:[
            {
                id:0,
                origin:{name:"Sheffield", coords:{lat:53.52644, lng:-1.63132}}, 
                destination:{name:"Meadowhall", coords:{lat:53.41438, lng:-1.4113328}},
                travelTime:"6mins", 
                cost:"£5",
                driverID:0,
                time:"18:36",
                status:"Ride Finished and paid for."
            },
        ], 
    },
    {
        username:"Jordan", 
        password:"password", 
        imgSource:"https://cdn.discordapp.com/attachments/897034987575050290/915631554569588797/unknown.png",
        description:"I work at tesco",
        rating:"4.7",
        defaultPayment: 0,
        paymentDetails:[
        ], 
        rideHistory:[
            {
                id:0,
                origin:{name:"Sheffield", coords:{lat:53.52644, lng:-1.63132}}, 
                destination:{name:"Meadowhall", coords:{lat:53.41438, lng:-1.4113328}},
                travelTime:"6mins", 
                cost:"£70",
                driverID:0,
                time:"18:36",
                status:"Ride Finished and paid for."
            },
            {
                id:0,
                origin:{name:"Sheffield", coords:{lat:53.52644, lng:-1.63132}}, 
                destination:{name:"Meadowhall", coords:{lat:53.41438, lng:-1.4113328}},
                travelTime:"6mins", 
                cost:"£5",
                driverID:0,
                time:"18:36",
                status:"Ride Finished and paid for."
            },
            {
                id:0,
                origin:{name:"Sheffield", coords:{lat:53.52644, lng:-1.63132}}, 
                destination:{name:"Meadowhall", coords:{lat:53.41438, lng:-1.4113328}},
                travelTime:"6mins", 
                cost:"£5",
                driverID:0,
                time:"18:36",
                status:"Ride Finished and paid for."
            },
        ], 
    },
]);
export const Drivers = writable([
    {
        id:0,
        name:"Mel", 
        imgSource:"https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg",
        description:"Mell'y Christmas!",
        rating:"4.2",
        carDetails:{
            model:"Ford",
            regPlate:"ASKJSAD",
            colour:"yellow"
        },  
        reviews:[
            {name:"RealUser", rating:"5", message:"Great driver, better guy"},
            {name:"MellsAlt", rating:"5", message:"BEST DRIVER FOR THE WORLD!"},
            {name:"Harry", rating:"-20", message:"Drove into a wall while driving."},
        ]
    }
]);
