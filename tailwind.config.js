/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Linux Libertine"', '"Source Serif 4"', '"Noto Serif"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Lato', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        wiki: {
          lightBg: '#f8f9fa',
          lightContent: '#ffffff',
          lightBorder: '#a2a9b1',
          lightBorderSubtle: '#eaecf0',
          lightText: '#202122',
          lightTextMuted: '#54595d',
          lightLink: '#3366cc',
          lightLinkHover: '#0645ad',
          lightLinkVisited: '#0b0080',
          lightInfoboxBg: '#f8f9fa',
          lightInfoboxHeader: '#eaecf0',
          
          darkBg: '#101418',
          darkContent: '#202122',
          darkSurface: '#27292d',
          darkBorder: '#54595d',
          darkBorderSubtle: '#3c4043',
          darkText: '#eaecf0',
          darkTextMuted: '#a2a9b1',
          darkLink: '#6ea8fe',
          darkLinkHover: '#9ec5fe',
          darkLinkVisited: '#c290e2',
          darkInfoboxBg: '#27292d',
          darkInfoboxHeader: '#36393e',
        }
      }
    },
  },
  plugins: [],
}
