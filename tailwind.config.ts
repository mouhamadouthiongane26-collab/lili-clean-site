import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F2937",
        ocean: "#2F80ED",
        sky: "#1F6FE0",
        mist: "#F5F7FA",
        foam: "#EAF4FF",
        accent: "#27AE60",
        gold: "#B58D53"
      },
      boxShadow: {
        soft: "0 25px 80px rgba(47, 128, 237, 0.14)"
      },
      borderRadius: {
        xl2: "1.5rem"
      },
      backgroundImage: {
        "grain-gradient":
          "radial-gradient(circle at top left, rgba(47,128,237,0.16), transparent 36%), radial-gradient(circle at top right, rgba(39,174,96,0.12), transparent 42%), linear-gradient(180deg, #ffffff 0%, #f5f7fa 100%)"
      }
    }
  },
  plugins: []
};

export default config;
