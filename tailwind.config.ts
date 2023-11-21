import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "shadow-[0px_4px_200px_10px_#facc15]",
    "shadow-[0px_4px_200px_10px_#22c55e]",
    "shadow-[0px_4px_200px_10px_#10b981]",
    "shadow-[0px_4px_200px_10px_#fbbf24]",
    "shadow-[0px_4px_200px_10px_#facc15]",
    "shadow-[0px_4px_200px_10px_#0ea5e9]",
    "shadow-[0px_4px_200px_10px_#06b6d4]",
    "shadow-[0px_4px_200px_10px_#ec4899]",
    "shadow-[0px_4px_200px_10px_#fb923c]",
    "shadow-[0px_4px_200px_10px_#f97316]",
    "shadow-[0px_4px_200px_10px_#a78bfa]",
    "shadow-[0px_4px_200px_10px_#c084fc]",
    "shadow-[0px_4px_200px_10px_#2dd4bf]",
    "shadow-[0px_4px_200px_10px_#14b8a6]",
    "shadow-[0px_5px_250px_12.5px_#3b82f6]",
    "shadow-[0px_5px_250px_12.5px_#60a5fa]",
    "bg-[#22c55e]",
    "bg-[#10b981]",
    "bg-[#fbbf24]",
    "bg-[#facc15]",
    "bg-[#0ea5e9]",
    "bg-[#06b6d4]",
    "bg-[#ec4899]",
    "bg-[#fb923c]",
    "bg-[#f97316]",
    "bg-[#a78bfa]",
    "bg-[#c084fc]",
    "bg-[#2dd4bf]",
    "bg-[#14b8a6]",
    "bg-[#facc15]",
    "bg-[#3b82f6]",
    "bg-[#60a5fa]",
    "border-[#22c55e]",
    "border-[#10b981]",
    "border-[#fbbf24]",
    "border-[#facc15]",
    "border-[#0ea5e9]",
    "border-[#06b6d4]",
    "border-[#ec4899]",
    "border-[#fb923c]",
    "border-[#f97316]",
    "border-[#a78bfa]",
    "border-[#c084fc]",
    "border-[#2dd4bf]",
    "border-[#14b8a6]",
    "border-[#facc15]",
    "border-[#3b82f6]",
    "border-[#60a5fa]",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          pattern: "url('/Images/Astrounaut.png')",
        'pattern-2': "url('/Images/Hero.png')",
      },
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
