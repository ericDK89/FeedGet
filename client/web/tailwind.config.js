module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        darkTheme: {
          900: "#18181b",
        },
        brand: {
          300: "#996dff",
          500: "#8257e5",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
