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
        mintBreeze: "var(--mintBreeze)",
        tropicalTeal: "var(--tropicalTeal)",
        verdantWave: "var(--verdantWave)",
        forestCanopy: "var(--forestCanopy)",
        midnightLagoon: "var(--midnightLagoon)",
      },
      fontFamily: {
        code: ["SourceCodePro", "Montserrat", "Arial"],
      },
    },
  },
  plugins: [],
};
