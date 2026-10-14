import { loadHeaderFooter, getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { disneyWorldParks } from "./parkInfo.mjs";

const extServices = new ExternalServices();

// Load the header and footer
loadHeaderFooter();

const attractionsList = document.querySelector(".attractions-list");
const showsList = document.querySelector(".shows-list");