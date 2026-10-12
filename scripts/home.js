import { loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import { destinationsId, disneyWorldId, magicKingdomId, epcotId, hollywoodStudiosId, animalKingdomId, typhoonLagoonId, blizzardBeachId } from "./ExternalServices.mjs";
import Weather from "./Weather.mjs";

const extServices = new ExternalServices();

// Load the header and footer
loadHeaderFooter();

async function temporary() {
    // const disneyWorld = await extServices.getThemeParkData(disneyWorldId);
    // console.log(`Walt Disney World Resort: ${disneyWorld}`);

    // const magicKingdom = await extServices.getThemeParkData(magicKingdomUrl);
    // console.log(`Magic Kingdom: ${magicKingdom}`);

    // const epcot = await extServices.getThemeParkData(epcotUrl);
    // console.log(`EPCOT: ${epcot}`);

    // const hollywoodStudios = await extServices.getThemeParkData(hollywoodStudiosUrl);
    // console.log(`Hollywood Studios: ${hollywoodStudios}`);

    // const animalKingdom = await extServices.getThemeParkData(animalKingdomUrl);
    // console.log(`Animal Kingdom: ${animalKingdom}`);

    // const typhoonLagoon = await extServices.getThemeParkData(typhoonLagoonUrl);
    // console.log(`Typhoon Lagoon: ${typhoonLagoon}`);

    // const blizzardBeach = await extServices.getThemeParkData(blizzardBeachUrl);
    // console.log(`Blizzard Beach: ${blizzardBeach}`);
}
temporary();

const weatherCard = document.querySelector(".weather-card");
const weather = new Weather("Orlando", weatherCard);
weather.init();