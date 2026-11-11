import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Poppins",
            cssVariable: "--font-poppins",
            weights: [500, 600, 700],
            styles: ["normal"],
            subsets: ["latin"],
            fallbacks: ["system-ui", "sans-serif"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Open Sans",
            cssVariable: "--font-open-sans",
            weights: [400, 600],
            styles: ["normal"],
            subsets: ["latin"],
            fallbacks: ["system-ui", "sans-serif"],
        },
    ],
});