/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#3366cc",
				mainBg: "#f8fafc",
				alt: "#f46c30cc",
				myBlue: "#1177ee",
				myRed: "#ee1111",
				bgDark: "#0b0c0f",
				pColor: "#eeeeee",
			},
			screens: {
				xs: { max: "450px" },
			},
			gridTemplateColumns: {
				auto: "repeat(auto-fill, minmax(300px, 1fr))",
			},
		},
	},
	plugins: [],
};
