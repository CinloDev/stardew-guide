import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        stardew: {
          soil: "#7c5e3a",
          wheat: "#eabf65",
          sky: "#93c5fd",
          pine: "#3d6c55",
        },
      },
    },
  },
  plugins: [],
};

export default config;
