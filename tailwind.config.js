/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			"roboto-mono": ["Roboto", "monospace"],
		},
		extend: {
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
	plugins: [],
	darkMode: "class",
};
