import { loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { destinationsUrl, disneyWorldUrl } from "./ExternalServices.mjs";
import Weather from "./Weather.mjs";

const extServices = new ExternalServices();

// Load the header and footer
loadHeaderFooter();

async function temporary() {
    const themeParks = await extServices.getThemeParkData(destinationsUrl);
    console.log(themeParks);

    // const disneyWorld = await extServices.getThemeParkData(disneyWorldUrl);
    // console.log(disneyWorld);
}
temporary();

const weatherCard = document.querySelector(".weather-card");
const weather = new Weather("Orlando", weatherCard);
weather.init();