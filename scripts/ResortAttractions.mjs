import ExternalServices from "./ExternalServices.mjs";
import { disneyWorldParks } from "./parkInfo.mjs";
import AttractionsList from "./AttractionsList.mjs";

const attractionsList = document.querySelector(".attractions-list");
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

function parkAttractionsTemplate(park, renderAttractions) {
    return `<section class="park-attractions">
            <h2>${park.name}</h2>
            <ul class="attractions-container">${renderAttractions}</ul>
        </section>`
}

export default class ResortAttractions {
    constructor(parks, parentElement) {
        this.parks = parks;
        this.parentElement = parentElement;
    }
}