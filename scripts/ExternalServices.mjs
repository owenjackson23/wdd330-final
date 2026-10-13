const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;
const weatherBaseUrl = "https://api.weatherapi.com/v1/current.json?";

const themeParksAPIKey = import.meta.env.VITE_THEME_PARKS_API_KEY;
const themeParksBaseUrl = "https://api.themeparks.wiki/v1/";


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

    async getThemeParkDestinations() {
        const url = `${themeParksBaseUrl}destinations`;
        const response = await fetch(url, { headers: { 'x-api-key': themeParksAPIKey } });
        const data = await convertToJson(response);
        return data;
    }

    async getThemeParkData(parkId) {
        const url = `${themeParksBaseUrl}entity/${parkId}`;
        const response = await fetch(url, { headers: { 'x-api-key': themeParksAPIKey } });
        const data = await convertToJson(response);
        return data;
    }

    async getThemeParkHours(parkId) {
        const url = `${themeParksBaseUrl}entity/${parkId}/schedule`;
        const response = await fetch(url, { headers: { 'x-api-key': themeParksAPIKey } });
        const data = await convertToJson(response);
        return data;
    }
}