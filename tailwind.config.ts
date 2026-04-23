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
        ocean: "#1E3A8A",
        sky: "#3B82F6",
        mist: "#F8FAFC",
        foam: "#DBEAFE",
        accent: "#10B981",
        gold: "#B58D53"
      },
      boxShadow: {
        soft: "0 25px 80px rgba(30, 58, 138, 0.12)"
      },
      borderRadius: {
        xl2: "1.5rem"
      },
      backgroundImage: {
        "grain-gradient":
          "radial-gradient(circle at top left, rgba(59,130,246,0.14), transparent 36%), radial-gradient(circle at top right, rgba(16,185,129,0.12), transparent 42%), linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)"
      }
    }
  },
  plugins: []
};

export default config;
