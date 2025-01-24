module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-bg": "url('/images/headerbackground.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"), // Add the Aspect Ratio plugin
  ],
};
