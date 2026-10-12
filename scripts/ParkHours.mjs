import ExternalServices from "./ExternalServices.mjs";
import { renderWithTemplate } from "./utils.mjs";

function hoursCardTemplate(parkId) {
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
    this.parkOpen = "";

    this.extServices = new ExternalServices();
  }

  async init() {
    await this.getParkHours();
    this.renderHoursDetails();
  }

  async getParkHours() {
    const hoursData = await this.extServices.getThemeParkHours(this.parkId);
    // this.parkOpen = hoursData.ssknskgnksg;
  }

  renderHoursDetails() {
    renderWithTemplate(
      hoursCardTemplate(this.parkId),
      this.parentElement
    );
  }
}