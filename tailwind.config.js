import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      layout: {
        dividerWeight: '1px', // h-divider the default height applied to the divider component
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        fontSize: {
          tiny: '0.75rem', // text-tiny
          small: '0.875rem', // text-small
          medium: '1rem', // text-medium
          large: '1.125rem', // text-large
        },
        lineHeight: {
          tiny: '1rem', // text-tiny
          small: '1.25rem', // text-small
          medium: '1.5rem', // text-medium
          large: '1.75rem', // text-large
        },
        radius: {
          small: '8px', // rounded-small
          medium: '12px', // rounded-medium
          large: '14px', // rounded-large
        },
        borderWidth: {
          small: '1px', // border-small
          medium: '2px', // border-medium (default)
          large: '3px', // border-large
        },
      },
      themes: {
        light: {
          colors: {
            default: {
              50: '#fafafa',
              100: '#f4f4f5',
              200: '#e4e4e7',
              300: '#d4d4d8',
              400: '#a1a1aa',
              500: '#71717a',
              600: '#52525b',
              700: '#3f3f46',
              800: '#27272a',
              900: '#18181b',
              foreground: '#111111',
              DEFAULT: '#d4d4d8',
            },
            primary: {
              50: '#e0fafa',
              100: '#b3f1f1',
              200: '#80e8e8',
              300: '#4ddfdf',
              400: '#26d6d6',
              500: '#00cdcd',
              600: '#00a3a3',
              700: '#007979',
              800: '#005050',
              900: '#002626',
              foreground: '#fff',
              DEFAULT: '#00cdcd',
            },
            secondary: {
              50: '#e6f9f4',
              100: '#c0f0e4',
              200: '#99e6d3',
              300: '#66d9bf',
              400: '#33cdaa',
              500: '#00c096',
              600: '#009976',
              700: '#007358',
              800: '#004c39',
              900: '#00261c',
              foreground: '#fff',
              DEFAULT: '#00c096',
            },
            success: {
              500: '#4caf50',
              foreground: '#fff',
              DEFAULT: '#4caf50',
            },
            warning: {
              500: '#f59e0b',
              foreground: '#111',
              DEFAULT: '#f59e0b',
            },
            danger: {
              500: '#ef4444',
              foreground: '#fff',
              DEFAULT: '#ef4444',
            },
            background: '#ffffff',
            foreground: '#111111',
            content1: { DEFAULT: '#ffffff', foreground: '#111' },
            content2: { DEFAULT: '#f4f4f5', foreground: '#111' },
            content3: { DEFAULT: '#e4e4e7', foreground: '#111' },
            content4: { DEFAULT: '#d4d4d8', foreground: '#111' },
            focus: '#3b82f6',
            overlay: '#000000',
          },
          layout: {
            hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small: '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
              // shadow-medium
              medium: '0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
              // shadow-large
              large: '0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
            },
          },
        },
        dark: {
          colors: {
            default: {
              50: '#fafafa',
              100: '#f4f4f5',
              200: '#e4e4e7',
              300: '#d4d4d8',
              400: '#a1a1aa',
              500: '#71717a',
              600: '#52525b',
              700: '#3f3f46',
              800: '#27272a',
              900: '#18181b',
              foreground: '#111111',
              DEFAULT: '#d4d4d8',
            },
            primary: {
              50: '#e0fafa',
              100: '#b3f1f1',
              200: '#80e8e8',
              300: '#4ddfdf',
              400: '#26d6d6',
              500: '#00cdcd',
              600: '#00a3a3',
              700: '#007979',
              800: '#005050',
              900: '#002626',
              foreground: '#fff',
              DEFAULT: '#00cdcd',
            },
            secondary: {
              50: '#e6f9f4',
              100: '#c0f0e4',
              200: '#99e6d3',
              300: '#66d9bf',
              400: '#33cdaa',
              500: '#00c096',
              600: '#009976',
              700: '#007358',
              800: '#004c39',
              900: '#00261c',
              foreground: '#fff',
              DEFAULT: '#00c096',
            },
            success: {
              500: '#4caf50',
              foreground: '#fff',
              DEFAULT: '#4caf50',
            },
            warning: {
              500: '#f59e0b',
              foreground: '#111',
              DEFAULT: '#f59e0b',
            },
            danger: {
              500: '#ef4444',
              foreground: '#fff',
              DEFAULT: '#ef4444',
            },
            background: '#0d1117',
            foreground: '#c9d1d9',
            content1: { DEFAULT: '#161B22', foreground: '#C9D1D9' },
            content2: { DEFAULT: '#1E242C', foreground: '#C9D1D9' },
            content3: { DEFAULT: '#242C35', foreground: '#C9D1D9' },
            content4: { DEFAULT: '#30363D', foreground: '#C9D1D9' },
            focus: '#17D9D9',
            overlay: '#000000',
          },
          layout: {
            hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small:
                '0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
              // shadow-medium
              medium:
                '0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
              // shadow-large
              large:
                '0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
            },
          },
        },
      },
    }),
  ],
};
