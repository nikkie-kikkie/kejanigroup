import apart1 from "./images/apart1.jpg"
import apart2 from "./images/apart2.jpg"
import apart3 from "./images/apart3.jpg"
import estate from "./images/estate.jpg"
import nicebalcony from "./images/nicebalcony.jpg"

export const apartmentData = [
    {
        image: apart1,
        id: Math.floor(Math.random() * 200000000),
        location: "Ruaka town,Joyland opposite Equity bank. 14km from Nairobi,CBD",
        name:"Ruaka Plain-View Apartments",
        details: "2100sq feet,spacious two bedroom all ensuite with a balcony from the sitting room.",
        rent: "Ksh.29000 inclusive of clean borehole water and garbage collection.",
        amenities:"Cabro paved parking for two per house, 24-hour manned security and CCTV,clean water throughout the year and easy access to amenities like Two Rivers Mall and Nairobi West Hospital."
    },
    {
        image: apart2,
        id: Math.floor(Math.random() * 200000000),
        location: "Eldoret town,Mercyview near Lounge 2020 club",
        name:"Mercyview Apartments",
        details: "2500sq feet,spacious one bedroom all ensuite with a balcony from the sitting room.",
        rent: "Ksh.18000 inclusive of clean borehole water and garbage collection.",
        amenities:"Supermarket near the apartments,DSTV and 24/7  free WIFI."
    },
    {
        image: apart3,
        id: Math.floor(Math.random() * 200000000),
        location: "Juja near main gate of JKUAT",
        name:"Daughters Plaza Apartments",
        details: "Spacious bedsitters with furnished furniture",
        rent: "Ksh.9000 inclusive of clean borehole water and garbage collection.",
        amenities:"Near the Jkuat institution,high security."
    },
    {
        image: estate,
        id: Math.floor(Math.random() * 200000000),
        location: "Kitengela,Millimani 2km from Kitengela Town",
        name:"Valley Norm Estate",
        details: "2100sq feet,One,Two ,Three bedroom apartments",
        rent: "Ksh.35,000 - 95,000 inclusive of clean borehole water and garbage collection.",
        amenities:"Peaceful Estate, 24-hour manned security and CCTV,clean water throughout the year and easy access to amenities like Two Rivers Mall and Nairobi West Hospital."
    },
    {
    image: nicebalcony,
    id: Math.floor(Math.random() * 200000000),
    location: "Kilimani off Ngong Road",
    name:"NewYork apartments ",
    details: "A beautiful balcony with a nice scenery ",
    rent: "Ksh.30000 inclusive of clean borehole water and garbage collection.",
    amenities:" 24-hour manned security and CCTV,clean water throughout the year and easy access to amenities and 20 minuts to CBD."
},
]