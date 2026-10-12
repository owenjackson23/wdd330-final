const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;
const weatherBaseUrl = "https://api.weatherapi.com/v1/current.json?";

const themeParksAPIKey = import.meta.env.VITE_THEME_PARKS_API_KEY;
const themeParksBaseUrl = "https://api.themeparks.wiki/v1/";

export const disneyWorldId = "e957da41-3552-4cf6-b636-5babc5cbc4e5";
export const magicKingdomId = "75ea578a-adc8-4116-a54d-dccb60765ef9";
export const hollywoodStudiosId = "288747d1-8b4f-4a64-867e-ea7c9b27bad8";
export const animalKingdomId = "1c84a229-8862-4648-9c71-378ddd2c7693";
export const typhoonLagoonId = "b070cbc5-feaa-4b87-a8c1-f94cca037a18";
export const epcotId = "47f90d2c-e191-4239-a466-5892ef59a88b";
export const blizzardBeachId = "ead53ea5-22e5-4095-9a83-8c29300d7c63";

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