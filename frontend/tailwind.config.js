/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./index.html", // Include your main HTML file
	  "./src/**/*.{js,ts,jsx,tsx}", // Include all files in the src folder
	],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {
		  // Define custom colors here if needed
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  

