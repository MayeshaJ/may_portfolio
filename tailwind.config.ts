import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        neo: {
          bg: '#fffdf5',
          pink: '#ff90e8',
          yellow: '#ffc900',
          cyan: '#23a9d5',
          purple: '#b28dff',
          green: '#00d1b2',
          black: '#1a1a1a',
          orange: '#ff6b6b'
        }
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #1a1a1a',
        'neo-hover': '6px 6px 0px 0px #1a1a1a',
        'neo-sm': '2px 2px 0px 0px #1a1a1a',
        'neo-lg': '8px 8px 0px 0px #1a1a1a',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config

