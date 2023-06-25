/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				emerald: {
					...require('daisyui/src/theming/themes')['[data-theme=emerald]'],
					primary: '#cae2e8',
					secondary: '#80ced1',
					accent: '#111827'
				}
			},
			{
				synthwave: {
					...require('daisyui/src/theming/themes')['[data-theme=synthwave]'],
					primary: '#3f72af',
					secondary: '#e84a5f',
					'secondary-hover': '#ff8c94',
					accent: '#bad7e9',
					neutral: '#303a52',
					'base-100': '#111827',
					info: '#537188'
				}
			}
		],
		darkTheme: 'synthwave'
	}
}
