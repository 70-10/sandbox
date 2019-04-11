import NuxtConfiguration from "@nuxt/config";

const config: NuxtConfiguration = {
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" }
    ]
  },
  css: ["water.css/dist/light.css"]
};

export default config;
