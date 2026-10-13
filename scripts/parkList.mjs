import { parks } from "./parkInfo.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function iconCardTemplate(park) {
    return `<li class="park-card">
          <a href="/park_pages/?park=${park.id}">
            <img src="${park.icon}"
              alt="${park.name}" width="300" />
            <h3 class="card__name">${park.name}</h3>
          </a>
        </li>`;
}

export default class ParkList {
    constructor(listElement) {
        this.parks = parks;
        this.listElement = listElement;
    }

    init() {
        const list = Object.values(this.parks);
        this.renderList(list);
    }

    renderList(list) {
        renderListWithTemplate(iconCardTemplate, this.listElement, list);
    }
}