/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        docker: {
          blue: "#0db7ed",
          dark: "#0b1d28",
          navy: "#1d2b3a",
          light: "#e7f6fc",
        },
      },
    },
  },
  plugins: [],
};
