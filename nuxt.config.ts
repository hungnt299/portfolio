// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/scripts", "@nuxt/ui"],

  app: {
    head: {
      title: "Hung Ngo - Software Engineer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Front End Engineer building accessible, pixel-perfect digital experiences for the web.",
        },
        { name: "theme-color", content: "#0f172a" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
