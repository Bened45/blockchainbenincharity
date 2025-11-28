import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'fade-in-left': 'fadeInLeft 0.6s ease-out',
                'fade-in-right': 'fadeInRight 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'slide-in-up': 'slideInUp 0.6s ease-out',
                'slide-in-down': 'slideInDown 0.6s ease-out',
                'zoom-in': 'zoomIn 0.5s ease-out',
                'zoom-out': 'zoomOut 0.5s ease-out',
                'shimmer': 'shimmer 2s linear infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 2s infinite',
                'wave': 'wave 2s ease-in-out infinite',
                'confetti': 'confetti linear forwards',
            },
            keyframes: {
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                fadeInUp: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    'from': { opacity: '0', transform: 'translateY(-20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInLeft: {
                    'from': { opacity: '0', transform: 'translateX(-20px)' },
                    'to': { opacity: '1', transform: 'translateX(0)' },
                },
                fadeInRight: {
                    'from': { opacity: '0', transform: 'translateX(20px)' },
                    'to': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInLeft: {
                    'from': { transform: 'translateX(-100%)', opacity: '0' },
                    'to': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInRight: {
                    'from': { transform: 'translateX(100%)', opacity: '0' },
                    'to': { transform: 'translateX(0)', opacity: '1' },
                },
                slideInUp: {
                    'from': { transform: 'translateY(100%)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                },
                slideInDown: {
                    'from': { transform: 'translateY(-100%)', opacity: '0' },
                    'to': { transform: 'translateY(0)', opacity: '1' },
                },
                zoomIn: {
                    'from': { opacity: '0', transform: 'scale(0.8)' },
                    'to': { opacity: '1', transform: 'scale(1)' },
                },
                zoomOut: {
                    'from': { opacity: '1', transform: 'scale(1)' },
                    'to': { opacity: '0', transform: 'scale(0.8)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                pulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                bounce: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                wave: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(20deg)' },
                    '75%': { transform: 'rotate(-20deg)' },
                },
                confetti: {
                    '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '1' },
                    '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
