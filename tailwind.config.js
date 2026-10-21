/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      colors: {
        paper: {
          50: '#FDFCF9',
          100: '#FAF8F4',
          200: '#F4EFE6',
          300: '#EAE3D6',
        },
        navy: {
          950: '#070D19',
          900: '#0B1528',
          850: '#0E1C36',
          800: '#142548',
          700: '#1F3463',
          600: '#2E4C8E',
          500: '#3D65BC',
        },
        slateSubtle: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
        },
        academic: {
          accent: '#2563EB',
          lavender: '#6366F1',
          lavenderLight: '#EEF2FF',
          teal: '#0D9488',
          mutedGold: '#B45309',
        }
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 21, 40, 0.04), 0 1px 2px -1px rgba(11, 21, 40, 0.04)',
        'academic': '0 4px 20px -2px rgba(11, 21, 40, 0.06), 0 2px 6px -1px rgba(11, 21, 40, 0.03)',
        'elevated': '0 10px 30px -4px rgba(11, 21, 40, 0.08), 0 4px 10px -2px rgba(11, 21, 40, 0.04)',
      }
    },
  },
  plugins: [],
}
