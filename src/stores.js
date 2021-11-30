import { writable } from 'svelte/store';

// We can add in variables that are editable / accessible throughout the application here
// Our own fake databaseS
export const IsGoogleLoaded = writable(false);
export const UserLocation = writable({lat:53.370491, lng:-1.321860});
export const DestinationLocation = writable({lat:53.370491, lng:-1.321860});
export const SelectedTrip = writable(0);
export const NotificationCounter = writable(1);
export const Notifications = writable([
    {Title:"Ride cancelled!", Detail:"Your driver cancelled your trip! lorem ipsum some text testig tesintai", Time: "00:00", Action:() => { console.log("some detail for you bruh"); }},
    {Title:"Driver arrived!", Detail:"Your driver has arrived at your location", Time: "00:00", Action:() => { console.log("some detail for you bruh"); }},
    {Title:"Ride accepted!", Detail:"Your driver is on their way to your destination", Time: "00:20", Action:() => { console.log("some detail for you bruh"); }},
]); 

export const CurrentUser = writable(0);
export const Users = writable([
    {
        username:"admin", 
        password:"admin", 
        imgSource:"https://media.discordapp.net/attachments/897035019153977344/910205894397145138/mel_anger.jpg",
        description:"SHUber guy",
        rating:"∞",
        paymentDetails:[
            {ID: 0, name:"Alan T Cardholder", lastDigits:"1234", cvc:"123", expDate:"07/25"},
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
            {
                id:1,
                origin:{name:"Sheffield", coords:{lat:53.52644, lng:-1.63132}}, 
                destination:{name:"Meadowhall", coords:{lat:53.41438, lng:-1.4113328}},
                travelTime:"6mins", 
                cost:"£5",
                driverID:0,
                time:"18:36",
                status:"Ride Finished and paid for."
            },
            {
                id:2,
                origin:{name:"Sheffield", coords:{lat:53.52644, lng:-1.63132}}, 
                destination:{name:"Meadowhall", coords:{lat:53.41438, lng:-1.4113328}},
                travelTime:"6mins", 
                cost:"£5",
                driverID:0,
                time:"18:36",
                status:"Ride Finished and paid for."
            },
            {
                id:3,
                origin:{name:"Sheffield", coords:{lat:53.52644, lng:-1.63132}}, 
                destination:{name:"Meadowhall", coords:{lat:53.41438, lng:-1.4113328}},
                travelTime:"6mins", 
                cost:"£5",
                driverID:0,
                time:"18:36",
                status:"Ride Finished and paid for."
            },
            {
                id:4,
                origin:{name:"Sheffield", coords:{lat:53.52644, lng:-1.63132}}, 
                destination:{name:"Meadowhall", coords:{lat:53.41438, lng:-1.4113328}},
                travelTime:"6mins", 
                cost:"£5",
                driverID:0,
                time:"18:36",
                status:"Ride Finished and paid for."
            },
        ], 
    }
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
            {name:"Harry", rating:"2", message:"Drove into a wall while driving."},
        ]
    }
]);
