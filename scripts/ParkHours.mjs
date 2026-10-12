import ExternalServices from "./ExternalServices.mjs";
import { renderWithTemplate } from "./utils.mjs";

function hoursCardTemplate(parkId, date) {
  return `<div class="hours-card">
            <h3>${parkId.name} Hours</h3>
            <p>Open: </p>
          </div>`;
}

export default class ParkHours {
  constructor(parkId, parentElement) {
    this.parkId = parkId;
    this.parentElement = parentElement;
    this.parkName = "";
    this.dateToday = new Date().toISOString().substring(0, 10);
    this.parkOpen = "";

    this.extServices = new ExternalServices();
  }

  async init() {
    await this.getParkHours();
    this.renderHoursDetails();
  }

  async getParkHours() {
    const hoursData = await this.extServices.getThemeParkHours(this.parkId);
    this.parkOpen = hoursData.schedule[0].openingTime;
    console.log(this.parkOpen);
  }

  renderHoursDetails() {
    renderWithTemplate(
      hoursCardTemplate(this.parkId),
      this.parentElement
    );
  }
}