import AttractionsList from "./AttractionsList.mjs";

export default class ResortAttractions {
    constructor(parks, parentElement) {
        this.parks = parks;
        this.parentElement = parentElement;
    }

    init() {
        this.renderResortAttractions(this.parks, this.parentElement);
    }

    renderResortAttractions(parks, parentElement) {
        const parksArray = Object.values(parks);
        for (const park of parksArray) {
            const parkContainer = document.createElement("section");
            parkContainer.classList.add("park-attractions");

            const parkName = document.createElement("h2");
            parkName.innerHTML = `${park.Name}`;
            parkName.classList.add("park-name");

            const attractionsContainer = document.createElement("ul");
            this.renderParkAttractions(park.id, attractionsContainer);

            parkContainer.appendChild(parkName);
            parkContainer.appendChild(attractionsContainer);
            parentElement.appendChild(parkContainer);
        }
    }

    renderParkAttractions(park, attractionsContainer) {
        const attractions = new AttractionsList(park, attractionsContainer)
        attractions.init();
    }
}