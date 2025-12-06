/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: 'var(--color-primary)',
  			secondary: 'var(--color-secondary)',
  			accent: 'var(--color-accent)',
  			background: 'var(--color-background)',
  			text: 'var(--color-text)',
  			'neon-cyan': '#00FFFF',
  			'electric-blue': '#0066FF',
  			'neon-pink': '#FF00FF',
  			'neon-green': '#39FF14',
  			'neon-purple': '#8A2BE2',
  			'dark-gray': '#1A1A1A',
  			'light-gray': '#2E2E2E'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [],
};
