import { loadHeaderFooter } from "./utils.mjs";
import { disneyWorldParks } from "./parkInfo.mjs";
import Weather from "./Weather.mjs";
import ParkList from "./ParkList.mjs";

// Load the header and footer
loadHeaderFooter();

const listElement = document.querySelector(".park-list");
const parkList = new ParkList(disneyWorldParks, listElement);
parkList.init();

// async function temporary() {
//     const parksArray = Object.values(parks);
//     for (const park of parksArray) {
//         let parkData = await extServices.getThemeParkData(park.id);
//         console.log(park.name);
//         console.log(parkData);
//     }
// }
// temporary();

const weatherCard = document.querySelector(".weather-card");
const weather = new Weather("Orlando", weatherCard);
weather.init();