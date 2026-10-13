import { loadHeaderFooter } from "./utils.mjs";
// import ExternalServices from "./ExternalServices.mjs";
import { disneyWorldParks } from "./parkInfo.mjs";
import ParkHours from "./ParkHours.mjs";

// const extServices = new ExternalServices();

// Load the header and footer
loadHeaderFooter();

const park = disneyWorldParks.magicKingdom;  // TODO: Make dynamic
// const park = getParam(...);

const parkImage = document.getElementById("parkImage");
parkImage.setAttribute("src", park.icon);

const hoursCard = document.querySelector(".park-hours");
const parkHours = new ParkHours(park.id, hoursCard);
parkHours.init();