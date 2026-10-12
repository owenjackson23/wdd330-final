import { loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { parks } from "./ExternalServices.mjs";
import Weather from "./Weather.mjs";
import ParkHours from "./ParkHours.mjs";

const extServices = new ExternalServices();

// Load the header and footer
loadHeaderFooter();

async function temporary() {
    const parksArray = Object.values(parks);
    for (const park of parksArray) {
        let parkData = await extServices.getThemeParkData(park.id);
        console.log(park.name);
        console.log(parkData);
    }
}
temporary();

const weatherCard = document.querySelector(".weather-card");
const weather = new Weather("Orlando", weatherCard);
weather.init();

const hoursCard = document.querySelector(".park-hours");
const parkHours = new ParkHours(parks.magicKingdom.id, hoursCard);
parkHours.init();