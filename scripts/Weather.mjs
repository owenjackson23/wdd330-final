import ExternalServices from "./ExternalServices.mjs";
import { renderWithTemplate } from "./utils.mjs";

function weatherCardTemplate(location, imageUrl, condition, temperature, chanceRain) {
  return `<div class="weather-card">
            <h3>Weather in ${location}</h3>
            <img src="${imageUrl}" alt="${condition} icon" />
            <p>Condition: ${condition}</p>
            <p>Temperature: ${temperature}°F</p>
            <p>Chance of Rain: ${chanceRain}%</p>
          </div>`;
}

export default class Weather {
  constructor(location, parentElement) {
    this.location = location;
    this.parentElement = parentElement;
    this.imageUrl = "";
    this.condition = "";
    this.temperature = 0;
    this.chanceRain = 0;

    this.extServices = new ExternalServices();
  }

  async init() {
    await this.getCurrentWeather();
    this.renderWeatherDetails();
  }

  async getCurrentWeather() {
    const weatherData = await this.extServices.getWeatherData(this.location);
    this.imageUrl = weatherData.current.condition.icon;
    this.condition = weatherData.current.condition.text;
    this.temperature = weatherData.current.temp_f;
    this.chanceRain = weatherData.current.chance_of_rain;
  }

  renderWeatherDetails() {
    renderWithTemplate(
      weatherCardTemplate(
        this.location,
        this.imageUrl,
        this.condition,
        this.temperature,
        this.chanceRain
      ),
      this.parentElement
    );
  }
}