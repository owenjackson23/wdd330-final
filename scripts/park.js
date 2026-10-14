import { loadHeaderFooter, getParam } from "./utils.mjs";
// import ExternalServices from "./ExternalServices.mjs";
import { disneyWorldParks, getPark } from "./parkInfo.mjs";
import ParkHours from "./ParkHours.mjs";

// const extServices = new ExternalServices();

// Load the header and footer
loadHeaderFooter();

const parkID = getParam("park");
console.log(parkID);
const park = getPark(parkID, disneyWorldParks);
console.log(park);

const parkImage = document.getElementById("parkImage");
parkImage.setAttribute("src", park.icon);

const hoursCard = document.querySelector(".park-hours");
const parkHours = new ParkHours(park.id, hoursCard);
parkHours.init();