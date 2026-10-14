import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: "/wdd330-final/",

    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "/index.html"),
                park: resolve(__dirname, "/park_pages/index.html"),
                itineraries: resolve(__dirname, "/itineraries/index.html"),
                attractions: resolve(__dirname, "/attractions/index.html"),
                attributions: resolve(__dirname, "/attributions/attributions.html"),
            },
        },
    },
});