import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts}', './tests/**/*.{ts,vue}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--dach-text-primary)',
        muted: 'var(--dach-text-muted)',
        line: 'var(--dach-border-light)',
        surface: 'var(--dach-surface-card)',
        soft: 'var(--dach-surface-page)',
        brand: 'var(--dach-blue-600)',
        'brand-strong': 'var(--dach-blue-700)',
        accent: 'var(--dach-sky-500)',
        danger: 'var(--dach-danger-500)',
      },
      borderRadius: {
        sm: 'var(--dach-radius-sm)',
        md: 'var(--dach-radius-md)',
      },
      boxShadow: {
        sm: 'var(--dach-shadow-sm)',
        md: 'var(--dach-shadow-md)',
      },
      fontFamily: {
        sans: ['var(--dach-font-sans)'],
        display: ['var(--dach-font-display)'],
      },
      maxWidth: {
        dach: 'var(--dach-container-lg)',
      },
    },
  },
  plugins: [],
} satisfies Config
