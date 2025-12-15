/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark theme palette
        background: '#0a0a0a',
        'background-secondary': '#111111',
        surface: '#1a1a1a',
        'surface-hover': '#222222',
        border: '#2a2a2a',
        'border-light': '#3a3a3a',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-muted': '#666666',
        accent: '#68B827',
        'accent-light': '#7ed32f',
        'accent-dark': '#4a8a1c',
        success: '#10b981',
        error: '#ef4444',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(40px, 6vw, 64px)', { lineHeight: '1.1', fontWeight: '800' }],
        'h2': ['clamp(32px, 4vw, 48px)', { lineHeight: '1.1', fontWeight: '700' }],
        'h3': ['clamp(24px, 3vw, 32px)', { lineHeight: '1.2', fontWeight: '600' }],
        'h4': ['clamp(18px, 2vw, 24px)', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
      },
      maxWidth: {
        'content': '1280px',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(104, 184, 39, 0.15), 0 0 60px rgba(104, 184, 39, 0.08)',
        'glow-lg': '0 0 50px rgba(104, 184, 39, 0.2), 0 0 100px rgba(104, 184, 39, 0.1)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'card-lg': '0 20px 50px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

