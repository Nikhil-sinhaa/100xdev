/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',      // For Next.js App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    // For Next.js Pages Router
    './components/**/*.{js,ts,jsx,tsx,mdx}', // For your UI components
    './src/**/*.{js,ts,jsx,tsx,mdx}', 
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx} '// If using a src/ directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

