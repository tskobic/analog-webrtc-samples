/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    alias: {
      '@spartan-ng/ui-accordion-helm':
        './src/libs/ui/ui-accordion-helm/src/index.ts',
      '@spartan-ng/ui-alert-helm': './src/libs/ui/ui-alert-helm/src/index.ts',
      '@spartan-ng/ui-alertdialog-helm':
        './src/libs/ui/ui-alertdialog-helm/src/index.ts',
      '@spartan-ng/ui-aspectratio-helm':
        './src/libs/ui/ui-aspectratio-helm/src/index.ts',
      '@spartan-ng/ui-avatar-helm': './src/libs/ui/ui-avatar-helm/src/index.ts',
      '@spartan-ng/ui-badge-helm': './src/libs/ui/ui-badge-helm/src/index.ts',
      '@spartan-ng/ui-button-helm': './src/libs/ui/ui-button-helm/src/index.ts',
      '@spartan-ng/ui-card-helm': './src/libs/ui/ui-card-helm/src/index.ts',
      '@spartan-ng/ui-command-helm':
        './src/libs/ui/ui-command-helm/src/index.ts',
      '@spartan-ng/ui-dialog-helm': './src/libs/ui/ui-dialog-helm/src/index.ts',
      '@spartan-ng/ui-icon-helm': './src/libs/ui/ui-icon-helm/src/index.ts',
      '@spartan-ng/ui-input-helm': './src/libs/ui/ui-input-helm/src/index.ts',
      '@spartan-ng/ui-label-helm': './src/libs/ui/ui-label-helm/src/index.ts',
      '@spartan-ng/ui-menu-helm': './src/libs/ui/ui-menu-helm/src/index.ts',
      '@spartan-ng/ui-popover-helm':
        './src/libs/ui/ui-popover-helm/src/index.ts',
      '@spartan-ng/ui-progress-helm':
        './src/libs/ui/ui-progress-helm/src/index.ts',
      '@spartan-ng/ui-radiogroup-helm':
        './src/libs/ui/ui-radiogroup-helm/src/index.ts',
      '@spartan-ng/ui-scrollarea-helm':
        './src/libs/ui/ui-scrollarea-helm/src/index.ts',
      '@spartan-ng/ui-separator-helm':
        './src/libs/ui/ui-separator-helm/src/index.ts',
      '@spartan-ng/ui-sheet-helm': './src/libs/ui/ui-sheet-helm/src/index.ts',
      '@spartan-ng/ui-skeleton-helm':
        './src/libs/ui/ui-skeleton-helm/src/index.ts',
      '@spartan-ng/ui-spinner-helm':
        './src/libs/ui/ui-spinner-helm/src/index.ts',
      '@spartan-ng/ui-switch-helm': './src/libs/ui/ui-switch-helm/src/index.ts',
      '@spartan-ng/ui-tabs-helm': './src/libs/ui/ui-tabs-helm/src/index.ts',
      '@spartan-ng/ui-toggle-helm': './src/libs/ui/ui-toggle-helm/src/index.ts',
      '@spartan-ng/ui-typography-helm':
        './src/libs/ui/ui-typography-helm/src/index.ts',
      '@spartan-ng/ui-table-helm': './src/libs/ui/ui-table-helm/src/index.ts',
      '@spartan-ng/ui-hovercard-helm':
        './src/libs/ui/ui-hovercard-helm/src/index.ts',
      '@spartan-ng/ui-checkbox-helm':
        './src/libs/ui/ui-checkbox-helm/src/index.ts',
      '@spartan-ng/ui-tooltip-helm':
        './src/libs/ui/ui-tooltip-helm/src/index.ts',
    },
  },
  plugins: [
    analog({
      vite: {
        experimental: {
          dangerouslySupportNgFormat: true,
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
