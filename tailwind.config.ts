/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
	theme: {
		extend: {
			tg: {
				bg: 'var(--tg-bg-color)',
				secondary: 'var(--tg-secondary-bg-color)',
				text: 'var(--tg-text-color)',
				hint: 'var(--tg-hint-color)',
				link: 'var(--tg-link-color)',
				button: 'var(--tg-button-color)',
				buttonText: 'var(--tg-button-text-color)',
				destructive: 'var(--tg-destructive-text-color)',
				accent: 'var(--tg-accent-text-color)',
			},
		},
		fontFamily: {
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Inter',
				'Arial',
				'sans-serif',
			],
			serif: ['Merriweather', 'serif'],
		},
		spacing: {
			'8xl': '96rem',
			'9xl': '128rem',
		},
		borderRadius: {
			'4xl': '2rem',
		},
	},
}
