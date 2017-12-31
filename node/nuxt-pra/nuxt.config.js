module.exports = {
  head: {
    titleTemplate: "nuxt practice",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Meta description" },
    ],
  },
  css: [
    { src: "@/assets/css/main.sass", lang: "sass" },
    "font-awesome/css/font-awesome.css",
  ],
  build: {
    postcss: {
      plugins: {
        "postcss-custom-properties": false,
      },
    },
  },
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "http://localhost:3000",
  },
};
