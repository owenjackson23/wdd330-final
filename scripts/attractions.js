import { loadHeaderFooter } from "./utils.mjs";
import { disneyResorts } from "./parkInfo.mjs";
import ResortAttractions from "./ResortAttractions.mjs";

// Load the header and footer
loadHeaderFooter();

const attractionsList = document.querySelector(".attractions-list");
const attractions = new ResortAttractions(disneyResorts.disneyWorld.parks, attractionsList);
attractions.init();

// const showsList = document.querySelector(".shows-list");

// async function disneyWorldAttractions() {
//     const parksArray = Object.values(disneyWorldParks);
//     for (const park of parksArray) {
//         let attractionData = await extServices.getAttractionsData(park.id);
//         console.log(park.name);
//         console.log(attractionData);
//     }
// }
// disneyWorldAttractions();