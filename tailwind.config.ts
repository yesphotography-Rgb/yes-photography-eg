import { type Config } from 'tailwindcss'

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        dark: "#0B0B0B",
        accent: "#1F1F1F",
      },
    },
  },
  plugins: [],
}

export default config
