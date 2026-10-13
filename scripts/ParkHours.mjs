import ExternalServices from "./ExternalServices.mjs";
import { renderWithTemplate } from "./utils.mjs";

function hoursCardTemplate(park, earlyEntry, openingTime, closingTime) {
  return `<div class="hours-card">
            <h2>${park} Hours</h2>
            <p>Early Entry - ${earlyEntry}</p>
            <p>Opening - ${openingTime}</p>
            <p>Closing - ${closingTime}</p>
          </div>`;
}

export default class ParkHours {
  constructor(parkId, parentElement) {
    this.parkId = parkId;
    this.parentElement = parentElement;
    this.parkName = "";
    this.earlyEntry = "";
    this.parkOpen = "";
    this.parkClose = "";

    this.extServices = new ExternalServices();
  }

  async init() {
    await this.getParkHours();
    this.renderHoursDetails();
  }

  async getParkHours() {
    const hoursData = await this.extServices.getThemeParkHours(this.parkId);

    this.parkName = hoursData.name;

    const early = hoursData.schedule[0].openingTime;
    this.earlyEntry = early.split("T")[1].substring(0, 5);

    const opening = hoursData.schedule[1].openingTime;
    this.parkOpen = opening.split("T")[1].substring(0, 5);

    const closing = hoursData.schedule[1].closingTime;
    this.parkClose = closing.split("T")[1].substring(0, 5);

  }

  renderHoursDetails() {
    renderWithTemplate(
      hoursCardTemplate(this.parkName, this.earlyEntry, this.parkOpen, this.parkClose),
      this.parentElement
    );
  }
}