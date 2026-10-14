import { renderListWithTemplate } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

function attractionCardTemplate(attraction) {
    let wait = "";
    if (attraction.queue !== undefined) {
        wait = `Wait Time: ${attraction.queue.STANDBY.waitTime} min`;
    }
    return `<li class="attraction-card">
            <h3>${attraction.name}</h3>
            <p class="status">${attraction.status}</p>
            <p class="wait">${wait}</p>
        </li>`;
}

export default class AttractionsList {
    constructor(park, listElement) {
        this.park = park;
        this.listElement = listElement;

        this.extServices = new ExternalServices();
        this.attractionsList = [];
    }

    async init() {
        const attractions = await this.extServices.getAttractionsData(this.park.id);
        this.toAttractionsList(attractions);
        this.renderList(this.attractionsList);
    }

    toAttractionsList(attractions) {
        const attractionsArray = attractions.liveData;
        this.attractionsList = attractionsArray.filter(this.isAttraction);
    }

    isAttraction(currentItem) {
        return currentItem.entityType === "ATTRACTION";
    }

    renderList(list) {
        renderListWithTemplate(attractionCardTemplate, this.listElement, list);
    }
}