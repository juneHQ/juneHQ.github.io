/** @type {import('tailwindcss').Config} */

const companyColors = ['text-[#6B46FF]', 'text-[#F83361]', 'text-[#FF5B33]', 'text-[#7E64FF]', 'text-[#6C75F1]']; //used in customer-stories section
const cardsBackgroundColors = ['bg-[#FFD2E1]', 'bg-[#EDE6DE]', 'bg-[#D2F3FF]']; //used in horizontal cards
const cardsTextColors = ['text-[#1A0B00]', 'text-[#800000]']; //used in horizontal cards
const socialProofsColors = [
  'text-[#FFA1A5]',
  'text-[#FFC310]',
  'text-[#6B46FF]',
  'text-[#C3D9F4]',
  'text-[#837CFE]',
  'text-[#E84F2F]',
  'text-[#0057FF]',
  'text-[#F56741]',
  'text-[#0768FD]',
  'text-[#FF9966]',
  'text-[#7E64FF]',
  'text-[#1B99F5]',
  'text-[#8CE3AD]',
  'text-[#6C75F1]',
  'border-[#FFA1A5]',
  'border-[#FFC310]',
  'border-[#6B46FF]',
  'border-[#C3D9F4]',
  'border-[#837CFE]',
  'border-[#E84F2F]',
  'border-[#0057FF]',
  'border-[#F56741]',
  'border-[#0768FD]',
  'border-[#FF9966]',
  'border-[#7E64FF]',
  'border-[#1B99F5]',
  'border-[#8CE3AD]',
  'border-[#6C75F1]',
]; //used in customer stories section

module.exports = {
  jit: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    ...companyColors,
    ...cardsBackgroundColors,
    ...cardsTextColors,
    ...socialProofsColors,
    // Need to safelist these colors and their gradients because they are being accessed after CSS compilation
    {
      pattern: /(from|bg|text)-(blue|green|orange)-([0-9]{3})/,
    },
    'from-secondary',
    'bg-secondary',
    'text-[#FF7B57]',
  ],
  theme: {
    fontFamily: {
      hero: ['"SF Pro Rounded"', '"SN Pro"', '-apple-system', 'BlinkMacSystemFont'],
    },
    extend: {
      letterSpacing: {
        'tracking-xl': '-0.037em',
      },
      keyframes: {
        progress: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'text-slide': {
          '0%, 16%': {
            transform: 'translateY(0%)',
          },
          '26%, 46%': {
            transform: 'translateY(-33.83%)',
          },
          '46%, 66%': {
            transform: 'translateY(-66.66%)',
          },
          '76%, 86%': {
            transform: 'translateY(-33.83%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Scrolls one full set of logos
        },
      },
      animation: {
        'text-slide': 'text-slide 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        progress: 'progress 37s linear',
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      maxWidth: {
        landing: '1512px',
      },
      colors: {
        primary: '#151531',
        secondary: '#F9E2FB',
        third: '#560059',
        purple: {
          50: '#F0F0FE',
          100: '#E1E1FD',
          200: '#C3C3FC',
          300: '#A4A4FA',
          400: '#8686F9',
          500: '#6868F7',
          600: '#5353C6',
          700: '#3E3E94',
          800: '#2A2A63',
          900: '#151531',
        },
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#0D131B',
        },
        cyan: {
          500: '#8AE7FD',
        },
        blue: {
          300: '#C9F0FF',
          500: '#003D5A',
        },
        green: {
          300: '#DAF9D4',
          500: '#005900',
        },
        brown: {
          300: '#FFE9C8',
          500: '#5F2700',
        },
      },
      dropShadow: {
        hero: ['0px 2px 10px rgba(13, 19, 27, 0.10)', '0px 0px 2px rgba(13, 19, 27, 0.20)'],
        'multi-colored': [
          '2px -2px 8px rgba(218, 249, 212, 0.50)',
          '-2px 2px 8px rgba(201, 240, 255, 0.50)',
          '-2px 4px 8px rgba(232, 226, 251, 0.50)',
        ],
        testimonials: ['0px 0px 1px rgba(13, 19, 27, 0.25)', '0px 2px 1px rgba(13, 19, 27, 0.05)'],
        image: ['0px 0px 2px rgba(13, 19, 27, 0.15)', '0px 2px 2px rgba(13, 19, 27, 0.10)'],
      },
      boxShadow: {
        csCards: ['0px 0px 1px 0px rgba(13, 19, 27, 0.25)', '0px 2px 1px 0px rgba(13, 19, 27, 0.05)'],
      },
    },
    screens: {
      mobile: { raw: '(max-width: 640px)' },
      xs: '440px', // iPhone Pro Max size
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.pause-animation-on-hover:hover': {
          'animation-play-state': 'paused',
        },
      });
    },
  ],
};
