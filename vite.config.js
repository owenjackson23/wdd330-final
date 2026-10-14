import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/wdd330-final/",

    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "/wdd330-final/index.html"),
                park: resolve(__dirname, "/wdd330-final/park_pages/index.html"),
                itineraries: resolve(__dirname, "/wdd330-final/itineraries/index.html"),
                attractions: resolve(__dirname, "/wdd330-final/attractions/index.html"),
                attributions: resolve(__dirname, "/wdd330-final/attributions/attributions.html"),
            },
        },
    },
});