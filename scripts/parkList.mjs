import parks from "./parkInfo.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function iconCardTemplate(park) {
    return `<li class="park-card">
          <a href="/park_pages/?park=${park.id}">
            <img src="${park.icon}"
              alt="${park.name}" />
            <h3 class="card__name">${park.name}</h3>
          </a>
        </li>`;
}