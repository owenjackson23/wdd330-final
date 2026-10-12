const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;
const weatherBaseUrl = "https://api.weatherapi.com/v1/current.json?";

const themeParksAPIKey = import.meta.env.VITE_THEME_PARKS_API_KEY;
const themeParksBaseUrl = "https://api.themeparks.wiki/v1/";
export const destinationsUrl = "destinations";
export const disneyWorldUrl = "entity/e957da41-3552-4cf6-b636-5babc5cbc4e5";

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

    async getThemeParkData(parkUrl) {
        const url = `${themeParksBaseUrl}${parkUrl}`;
        const response = await fetch(url, { headers: { 'x-api-key': themeParksAPIKey } });
        const data = await convertToJson(response);
        return data;
    }
}