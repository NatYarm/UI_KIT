import type { Preview } from '@storybook/react-vite';
import '../src/styles/index.scss';
import { themes } from 'storybook/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#0d0d0d' },
        light: { name: 'Light', value: '#F7F9F2' },
        gray: { name: 'Gray', value: '#4c4c4c' },
      },
    },
    docs: {
      theme: themes.dark,
    },

    a11y: {
      test: 'todo',
    },
  },
  initialGlobals: {
    backgrounds: { value: 'dark' },
  },
};

export default preview;
