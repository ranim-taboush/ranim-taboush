import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        light: '#faebd7',
        dark: '#1e1f26',
        neonBlue: '#03dac6',
        neonPink: '#ff0266',
        neonGreen: '#39FF14',
        background: "#222",
        centerBackground: "#fff",
        borderColor: "#aaa",
        borderColorC2: "#666",
      },
      spacing: {
        atom: "250px",
        atomC2: "140px",
        atomCenter: "30px",
      },
      borderWidth: {
        atom: "3px",
        atomC2: "2px",
      },
      animationDuration: {
        '3s': '3s',
      },
      animation: {
        lateral: "lateral 15s ease-in-out infinite",
        lateralRevert: "lateralRevert 8s linear infinite",
        horizontalC1: "horizontal 8s linear infinite",
        verticalC1: "vertical 6s linear infinite",
        horizontalC2: "horizontalRevert 4s linear infinite",
        verticalC2: "vertical 3s linear infinite",
        electronC1: "electron 3s linear infinite",
        electronC2: "electron 2s linear infinite",
      },
      keyframes: {
        electron: {
          from: { transform: "rotateZ(0deg)" },
          to: { transform: "rotateZ(360deg)" },
        },
        horizontal: {
          from: { transform: "rotateY(0deg)" },
          to: { transform: "rotateY(360deg)" },
        },
        horizontalRevert: {
          from: { transform: "rotateY(360deg)" },
          to: { transform: "rotateY(0deg)" },
        },
        vertical: {
          from: { transform: "rotateX(0deg)" },
          to: { transform: "rotateX(360deg)" },
        },
        verticalRevert: {
          from: { transform: "rotateX(360deg)" },
          to: { transform: "rotateX(0deg)" },
        },
        lateral: {
          from: { transform: "rotateZ(0deg)" },
          to: { transform: "rotateZ(360deg)" },
        },
        lateralRevert: {
          from: { transform: "rotateZ(360deg)" },
          to: { transform: "rotateZ(0deg)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;