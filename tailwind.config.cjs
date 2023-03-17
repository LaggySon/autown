/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Titillium: ['Titillium Web', 'sans-serif'],
				Raleway: ['Raleway', 'sans-serif']
			}
		}
	},
	plugins: []
};
