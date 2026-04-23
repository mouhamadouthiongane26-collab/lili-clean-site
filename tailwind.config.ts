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
        ink: "#1F2933",
        ocean: "#185C37",
        sky: "#D61F75",
        mist: "#F6F8F6",
        foam: "#FCE7F3",
        accent: "#2F8F46",
        gold: "#B58D53"
      },
      boxShadow: {
        soft: "0 24px 60px rgba(24, 92, 55, 0.12)"
      },
      borderRadius: {
        xl2: "1.5rem"
      },
      backgroundImage: {
        "grain-gradient":
          "radial-gradient(circle at top left, rgba(214,31,117,0.14), transparent 34%), radial-gradient(circle at top right, rgba(47,143,70,0.14), transparent 40%), linear-gradient(180deg, #ffffff 0%, #f6f8f6 100%)"
      }
    }
  },
  plugins: []
};

export default config;
