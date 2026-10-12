const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;
const weatherBaseUrl = "https://api.weatherapi.com/v1/current.json?";

const themeParksAPIKey = import.meta.env.VITE_THEME_PARKS_API_KEY;
const themeParksBaseUrl = "https://api.themeparks.wiki/v1/";

export const parks = {
    "disneyWorld": {
        "name": "Walt Disney World",
        "id": "e957da41-3552-4cf6-b636-5babc5cbc4e5"
    },
    "magicKingdom": {
        "name": "Magic Kingdom",
        "id": "75ea578a-adc8-4116-a54d-dccb60765ef9"
    },
    "hollywoodStudios": {
        "name": "Hollywood Studios",
        "id": "288747d1-8b4f-4a64-867e-ea7c9b27bad8"
    },
    "animalKingdom": {
        "name": "Animal Kingdom",
        "id": "1c84a229-8862-4648-9c71-378ddd2c7693"
    },
    "typhoonLagoon": {
        "name": "Typhoon Lagoon",
        "id": "b070cbc5-feaa-4b87-a8c1-f94cca037a18"
    },
    "epcot": {
        "name": "EPCOT",
        "id": "47f90d2c-e191-4239-a466-5892ef59a88b"
    },
    "blizzardBeach": {
        "name": "Blizzard Beach",
        "id": "ead53ea5-22e5-4095-9a83-8c29300d7c63"
    }
};

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
        console.log(weatherAPIKey);
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