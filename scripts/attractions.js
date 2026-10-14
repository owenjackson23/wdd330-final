import { loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { disneyWorldParks } from "./parkInfo.mjs";
import AttractionsList from "./AttractionsList.mjs";

const extServices = new ExternalServices();

// Load the header and footer
loadHeaderFooter();

const attractionsList = document.querySelector(".attractions-list");
const attractions = new AttractionsList(disneyWorldParks.magicKingdom, attractionsList);
attractions.init();


const showsList = document.querySelector(".shows-list");

// async function disneyWorldAttractions() {
//     const parksArray = Object.values(disneyWorldParks);
//     for (const park of parksArray) {
//         let attractionData = await extServices.getAttractionsData(park.id);
//         console.log(park.name);
//         console.log(attractionData);
//     }
// }
// disneyWorldAttractions();