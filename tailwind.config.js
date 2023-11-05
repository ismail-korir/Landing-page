/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.{js,jsx,ts,tsx}',
             'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'judson': ['Judson'],
      'body': ['"Open Sans"']
    },
  },
  corePlugins: {
    aspectRatio: false,
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
    // eslint-disable-next-line no-undef
    require('@tailwindcss/aspect-ratio'),
],
}
}