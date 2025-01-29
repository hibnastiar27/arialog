import { colors } from "@heroui/react";
import type { Config } from "tailwindcss";
const {heroui} = require("@heroui/react");

const config ={
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode : "class",
  plugins: [
    heroui({
    themes: {
        light: {
            colors: {
                background: "#FFFFFF",
                foreground: "#1E1F24",
                primary: {
                    50: "#FDFDFE",   // bg
                    100: "#F7F9FF", 
                    200: "#EDF2FE",  // interactive
                    300: "#DFEAFF", 
                    400: "#D0DFFF", 
                    500: "#BDD1FF",  // border
                    600: "#A6BFF9", 
                    700: "#87A5EF", 
                    800: "#3D63DD",  // solid
                    900: "#3657C3", 
                    1000: "#395BC7", // text
                    1100: "#1D2E5C",
                    DEFAULT: "#3D63DD",
                    foreground: "#FFFFFF", 
                },
                gray: {
                    50: "#FCFCFD",   // bg 
                    100: "#F9F9FB", 
                    200: "#EFF0F3",  // inteactive
                    300: "#E7E8EC", 
                    400: "#E0E1E6", 
                    500: "#D8D9E0",  // border
                    600: "#CDCED7", 
                    700: "#B9BBC6", 
                    800: "#8B8D98",  // solid
                    900: "#80828D", 
                    1000:"#62636C",  // text
                    1100: "#1E1F24",
                    DEFAULT: "#8B8D98",
                    foreground: "#FFFFFF", 
                },
            },
        },
        dark: {
            colors: {
                background: "#111111",
                foreground: "#FFFFFF",
                primary: {
                    50: "#0C111C",   // bg
                    100: "#111725", 
                    200: "#172448",  // interactive
                    300: "#1D2E61", 
                    400: "#243974", 
                    500: "#2D4484",  // border
                    600: "#375098", 
                    700: "#405EB2", 
                    800: "#3D63DD",  // solid
                    900: "#3F5CB0", 
                    1000: "#93B4FF", // text
                    1100: "#D5E2FF",
                    DEFAULT: "#3D63DD",
                    foreground: "#EEEEF0", 
                },
                gray: {
                    50: "#111113",   // bg 
                    100: "#19191B", 
                    200: "#222325",  // inteactive
                    300: "#292A2E", 
                    400: "#303136", 
                    500: "#393A40",  // border
                    600: "#46484F", 
                    700: "#5F606A", 
                    800: "#6C6E79",  // solid
                    900: "#797B86", 
                    1000:"#B2B3BD",  // text
                    1100: "#EEEEF0",
                    DEFAULT: "#6C6E79",
                    foreground: "#FFFFFF", 
                },
            },
        },
    }
  })]
};

export default config;

