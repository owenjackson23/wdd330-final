import { renderListWithTemplate } from "./utils.mjs";

function attractionCardTemplate(attraction) {
    return `<li class="attraction-card">
        </li>`;
}

export default class AttractionsList {
    constructor(parks, listElement) {
        this.parks = parks;
        this.listElement = listElement;

        this.extServices = new ExternalServices();
    }

    init() {
        // const list = Object.values(this.parks);
        this.renderList(list);
    }

    renderList(list) {
        renderListWithTemplate(attractionCardTemplate, this.listElement, list);
    }
}