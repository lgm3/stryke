module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "system-ui", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black"],
  },
};
