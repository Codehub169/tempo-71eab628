/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // If you plan to use the app directory
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Add your custom brand colors here if needed
        // Example:
        // 'brand-purple': '#6d28d9',
        // 'brand-pink': '#ec4899',
        // 'brand-cyan': '#06b6d4',
      },
      boxShadow: {
        'large': '0 10px 30px -10px rgba(0, 0, 0, 0.1), 0 10px 20px -15px rgba(0, 0, 0, 0.1)',
        'medium': '0 5px 20px -7px rgba(0, 0, 0, 0.08)',
      }
      // You can extend other theme properties like backgroundImage, screens, etc.
    },
  },
  plugins: [],
};