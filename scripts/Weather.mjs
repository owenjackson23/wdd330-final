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

export default class Weather {
  constructor(location) {
    this.location = location;

    this.extServices = new ExternalServices();
  }

  async displayWeather() {
    const weatherData = await this.extServices.getWeatherData(this.location);
    const imageUrl = weatherData.current.condition.icon;
    const condition = weatherData.current.condition.text;
    const temperature = weatherData.current.temp_f;
    const chanceRain = weatherData.current.chance_of_rain;

    return weatherCardTemplate(this.location, imageUrl, condition, temperature, chanceRain);
  }
}