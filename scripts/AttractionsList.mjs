import { renderListWithTemplate } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

function attractionCardTemplate(attraction) {
    return `<li class="attraction-card">
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