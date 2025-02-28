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
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGray: "var(--lightGray)",
        darkGray: "var(--darkGray)",
        deepBlue: "var(--deepBlue)",
        primary: "var(--primary)",
      },
      fontFamily: {
        code: ["SourceCodePro", "Montserrat", "Arial"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      width: {
        "8xl": "90rem",
      }
    },
  },
  plugins: [],
};
