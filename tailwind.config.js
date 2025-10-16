/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			animation: {
				slowping: 'slowping 2s cubic-bezier(0,0,0.2,1) infinite',
			},
			keyframes: {
				slowping: {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'80%': { transform: 'scale(2)', opacity: '0.5' },
					'100%': { transform: 'scale(2.5)', opacity: '0.1' },
				},
			},
		},
	},
	plugins: [],
};
