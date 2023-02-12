/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('/src/assets/home/section2bg.png')",
        secfourBg: "url('/src/assets/home/Sec4Img.svg')",
        banner: "url('/src/assets/home/Sec4Img.svg')",
      },
      colors: {
        lightPink: "#EEE5E9",
        lightBlue: "#EDF7FF",
        darkblue: "#2D3047",
        green: "#419D78",
        blue: "rgba(193,228,255,0.3)",
        lightGreen: "#67b193",
        textColor: "rgba(91, 91, 91, 1)",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  plugins: [],
};
