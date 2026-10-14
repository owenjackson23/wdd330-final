import { loadHeaderFooter, getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { disneyWorldParks } from "./parkInfo.mjs";

const extServices = new ExternalServices();

// Load the header and footer
loadHeaderFooter();

const attractionsList = document.querySelector(".attractions-list");
const showsList = document.querySelector(".shows-list");



// async function temporary() {
//     const parksArray = Object.values(disneyWorldParks);
//     for (const park of parksArray) {
//         let parkData = await extServices.getThemeParkData(park.id);
//         console.log(park.name);
//         console.log(parkData);
//     }
// }
// temporary();