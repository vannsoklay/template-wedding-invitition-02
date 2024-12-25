import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFAF0',
      },
      fontFamily: {
        script: ['var(--font-dancing-script)', 'cursive'],
        serif: ['var(--font-playfair-display)', 'serif'],
        khmer: ['var(--font-playfair-display)', 'serif'],
      },
      screens: {
        '2mb': '300px', // Custom breakpoint for 300px
        'mb': '390px', // Custom breakpoint for 400 px
        'sm': '430px', // Small devices (sm)
        'md': '768px', // Medium devices (md)
        'lg': '1024px', // Large devices (lg)
        'xl': '1280px', // Extra large devices (xl)
        '2xl': '1536px', // 2x extra large devices (2xl)
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideDown: {
        '0%': { transform: 'translateY(-20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      fadeUp: {
        '0%': { transform: 'translateY(20px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      flutter: {
        '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
        '25%': { transform: 'translateY(-5px) rotate(5deg)' },
        '75%': { transform: 'translateY(5px) rotate(-5deg)' },
      },
      wings: {
        '0%, 100%': { transform: 'scaleX(1)' },
        '50%': { transform: 'scaleX(0.8)' },
      },
      zoomIn: {
        '0%': { transform: 'scale(1.1)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    animation: {
      flutter: 'flutter 4s ease-in-out infinite',
      wings: 'wings 0.5s ease-in-out infinite',
      'zoom-in': 'zoomIn 1.5s ease-out forwards',
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
