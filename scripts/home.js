import { loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

const extServices = new ExternalServices();

// Load the header and footer
loadHeaderFooter();

async function temporary() {
    const weatherData = await extServices.getWeatherData("New York");
    console.log(weatherData);

    const temperature = weatherData.current.heatindex_f;
    console.log(temperature);
    console.log(`The current temperature in New York is ${temperature}°F.`);
}
temporary();