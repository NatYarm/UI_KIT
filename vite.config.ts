/// <reference types="vitest/config" />

import { defineConfig } from 'vite';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dependencies, devDependencies } from './package.json';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
      name: 'UI-KIT',
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
      output: {
        assetFileNames: 'style[extname]',
      },
    },
    target: 'esnext',
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
