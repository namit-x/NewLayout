/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        DEFAULT: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        // Add all other background colors
      },
      textColor: {
        DEFAULT: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary-foreground))',
        // Add other text colors
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        // Add other border colors
      },
    },
  },
  plugins: [],
}