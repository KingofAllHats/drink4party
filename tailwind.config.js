/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      darkBlue: "#0f0226",
      pink: "#e545cb",
      green: "#70d13f",
      lightGreen: "#98d977",
      blue: "#340b7c",
      white: "#FFF",
      black: "#000",
    },
    fontFamily: {
      body: "Rubik",
      header: "Bungee",
    },
    extend: {
      backgroundImage: {
        dots: "url('/dots-transparent.png')",
      },
    },
  },
  plugins: [],
};
