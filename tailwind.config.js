/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#F6EED9',
                'cream-dark': '#E8DFBD',
                charcoal: '#1E293B',
                'charcoal-light': '#334155',
                gold: '#CEA34D',
                'gold-hover': '#B68F42',
            },
        },
    },
    plugins: [],
}
