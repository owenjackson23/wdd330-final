import { loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import Weather from "./Weather.mjs";

const extServices = new ExternalServices();

// Load the header and footer
loadHeaderFooter();

// async function temporary() {
//     const weatherData = await extServices.getWeatherData("Orlando");
//     console.log(weatherData);

//     const temperature = weatherData.current.temp_f;
//     console.log(temperature);
//     console.log(`The current temperature in Orlando is ${temperature}°F.`);

//     const chanceRain = weatherData.current.chance_of_rain;
//     console.log(chanceRain);
//     console.log(`The chance of rain in Orlando is ${chanceRain}%.`);
// }
// temporary();

const weatherCard = document.querySelector(".weather-card");
const weather = new Weather("Orlando", weatherCard);
weather.init();