/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fc6812", // Color principal para componentes o fondos (naranja)
        primaryDisabled: "b46638", // Color para los componentes disabled (naranja oscuro)
        darkBackground: "rgba(0, 0, 0, 0.6)", // Color para fondos oscuros
        grayButton: "#808080", // Color gris para el botón de iniciar sesión con Google
      },
    },
  },
  plugins: [],
};
