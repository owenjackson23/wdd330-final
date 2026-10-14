// Returns a park object given the park ID
export function getPark(parkID, parks) {
    const parksArray = Object.values(parks);

    for (const park of parksArray) {
        if (parkID === park.id) {
            return park;
        }
    }

    console.log("Could not find a matching park")
    return null
}

export const disneyResorts = {
    "disneyWorld": {
        "name": "Walt Disney World",
        "id": "e957da41-3552-4cf6-b636-5babc5cbc4e5",
        "icon": "/wdd330-final/images/disney-world.svg"
    }
};

export const disneyWorldParks = {
    "magicKingdom": {
        "name": "Magic Kingdom",
        "id": "75ea578a-adc8-4116-a54d-dccb60765ef9",
        "icon": "/wdd330-final/images/magic-kingdom.svg"
    },
    "hollywoodStudios": {
        "name": "Hollywood Studios",
        "id": "288747d1-8b4f-4a64-867e-ea7c9b27bad8",
        "icon": "/wdd330-final/images/hollywood-studios.svg"
    },
    "animalKingdom": {
        "name": "Animal Kingdom",
        "id": "1c84a229-8862-4648-9c71-378ddd2c7693",
        "icon": "/wdd330-final/images/animal-kingdom.svg"
    },
    "epcot": {
        "name": "EPCOT",
        "id": "47f90d2c-e191-4239-a466-5892ef59a88b",
        "icon": "/wdd330-final/images/epcot.svg"
    },
    "typhoonLagoon": {
        "name": "Typhoon Lagoon",
        "id": "b070cbc5-feaa-4b87-a8c1-f94cca037a18",
        "icon": "/wdd330-final/images/typhoon-lagoon.svg"
    },
    "blizzardBeach": {
        "name": "Blizzard Beach",
        "id": "ead53ea5-22e5-4095-9a83-8c29300d7c63",
        "icon": "/wdd330-final/images/blizzard-beach.svg"
    }
};