const weatherStackAPIKey = import.meta.env.VITE_WEATHERSTACK_API_KEY;
const weatherStackBaseUrl = "http://api.weatherstack.com/";

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
        const url = `${weatherStackBaseUrl}current?access_key=${weatherStackAPIKey}&query=${location}&units=f`;
        const response = await fetch(url);
        const data = await convertToJson(response);
        return data;
    }
}