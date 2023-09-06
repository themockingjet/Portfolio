/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			"roboto-mono": ["Roboto", "monospace"],
		},
		extend: {
			colors: {
				"wild-blue": "#96B6C5",
				"dark-blue": "#001C30",
				"light-blue": "#E6FFFD",
				"medium-blue": "#537FE7",
				moonstone: "#E9F8F9",
			},
			keyframes: {
				spin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				"slide-lr": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0%)" },
				},
				"slide-rl": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0%)" },
				},
				zoom: {
					"0%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.5)" },
					"100%": { transform: "scale(1)" },
				},
			},
			animation: {
				"toggle-spin": "spin 300ms ease-in-out",
				"slide-lr": "slide-lr 300ms ease-in-out",
				"slide-rl": "slide-rl 300ms ease-in-out",
				zoom: "zoom 300ms ease-in-out",
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme("fontSize.2xl") },
				h2: { fontSize: theme("fontSize.xl") },
				h3: { fontSize: theme("fontSize.lg") },
			});
		}),
	],
	darkMode: "class",
};
