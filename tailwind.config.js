/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/index.html"],
	theme: {
		colors: {
			transparent: "transparent",
			"bright-orange": "hsl(31, 77%, 52%)",
			"dark-cyan": "hsl(184, 100%, 22%)",
			"v-dark-cyan": "hsl(179, 100%, 13%)",
			"transparent-white": "hsla(0, 0%, 100%, 0.75)",
			"v-light-gray": "hsl(0, 0%, 95%)",
		},
		extend: {
			fontFamily: {
				"lexend-deca": ["Lexend Deca", "sans-serif"],
				"big-shoulders-display": ["Big Shoulders Display", "sans-serif"],
			},
		},
	},
	plugins: [],
};
