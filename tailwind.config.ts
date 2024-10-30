import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "888": "#888888",
                "333": "#333333",
            },
            dropShadow: {
                glow: "0 0 5px rgba(255, 255, 255, 0.5)",
            },
        },
        fontFamily: {
            regular: ["Pretendard", "sans-serif"],
            mono: ["SF Mono"],
            semibold: ["Pretendard Semibold", "sans-serif"],
        },
    },
    plugins: [],
};
export default config;
