const weatherStackAPIKey = "";
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
}