import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 30px 80px -42px rgba(18, 26, 38, 0.35)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        "float-reverse": "float 13s ease-in-out infinite reverse",
        marquee: "marquee 24s linear infinite",
        "marquee-mobile": "marquee 18s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
