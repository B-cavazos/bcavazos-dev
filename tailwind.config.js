import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				Kodchasan: ["Kodchasan", "sans-serif"],
			},
			colors: {
				sand: "#FBF6EF",
				plum: "#712E85",
				lilac: "#B59FBD",
				lilac2: "#E7C2FF",
				indigo: "#291F84",
				blue: "#728BE8",
				sky: "5B94FF",
				orange: "#ECA193",
			},
			boxShadow: {
				xl: "35px 35px px -21px rgba(0, 0, 0, 1)",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};

//purple-950 -- purple text
//violet-300 -- inner shadow top
//violet-400 -- header text
//violet-600
//indigo-800 -- shadow
//indigo--950 -- blue text
//amber-50 -- bg
//amber-600 -- inner shadow bottom
//blue-500 -- divider
