const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;
const weatherBaseUrl = "https://api.weatherapi.com/v1/current.json?";

const themeParksWikiAPIKey = "";
const themeParksWikiBaseUrl = "";

export async function convertToJson(response) {
    const jsonResponse = await response.json();

    if (response.ok) {
        return jsonResponse;
    } else {
        throw {
            name: "servicesError",
            message: jsonResponse,
        };
    }
}

export default class ExternalServices {
    constructor() { }

    async getWeatherData(location) {
        const url = `${weatherBaseUrl}key=${weatherAPIKey}&q=${location}`;
        const response = await fetch(url);
        const data = await convertToJson(response);
        return data;
    }
}