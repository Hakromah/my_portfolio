/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	mode: 'jit',
	theme: {
		extend: {
			animation : {
				blob: "blob 8s infinite"
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -10px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "translate(0px, 0px) scale(1)",
					},
				},
			},

			colors: {
				'cyan': colors.cyan,
				'teal': colors.teal,
				'deep-blue': '#010026',
				'dark-grey': '#757575',
				'opaque-black': 'rgba(0,0,0,,.36)',
			},
			backgroundImage: (theme) => ({
				'gradient-rainbow':
					'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
				'gradient-rainblue':
					'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)'
			}),
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				opensans: ['Open Sans', 'sans-serif'],
			},
			content: {
				brush: "url('./assets/brush1.png')",
				person1: "url('./assets/person-1.png')",
				person2: "url('./assets/person-2.png')",
				person3: "url('./assets/person-3.png')",
			},
		},
		screens: {
			xs: '480px',
			sm: '769px',
			md: '1060px',
		},
	},
	plugins: [],
};
