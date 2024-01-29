/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#00a0ff",
      
"secondary": "#228200",
      
"accent": "#006bfa",
      
"neutral": "#001326",
      
"base-100": "#fff0ff",
      
"info": "#0082f0",
      
"success": "#b0f352",
      
"warning": "#ff8200",
      
"error": "#ff7679",
      },
    },
  ],
  plugins: [require("daisyui")],
}

