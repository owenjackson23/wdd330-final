import ExternalServices from "./ExternalServices.mjs";

function weatherCardTemplate(location, imageUrl, condition, temperature, chanceRain) {
  return `<section class="weather-card">
          <h3>Weather in ${location}</h3>
          <img src="${imageUrl}" alt="${condition} icon" />
          <p>Condition: ${condition}</p>
          <p>Temperature: ${temperature}°F</p>
          <p>Chance of Rain: ${chanceRain}%</p>
        </section>`;
}