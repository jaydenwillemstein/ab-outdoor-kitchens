import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: { extend: {
    colors: { beige: "#f1e8d6", sand: "#e8d6ab", cream: "#f8f2e4", brown: "#2e2418", ink: "#2b2118", olive: "#6b6a2e", gold: "#c9962e", mute: "#6a5a47", line: "#cdbb98" },
    fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
};
export default config;
