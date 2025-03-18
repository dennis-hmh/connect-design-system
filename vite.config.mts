import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { externalizeDeps } from 'vite-plugin-externalize-deps';

import dts from 'vite-plugin-dts';
import autoprefixer from 'autoprefixer';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

export default defineConfig({
  assetsInclude: ['**/*.riv'],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Connect-Design-System',
      fileName: 'connect-design-system',
      formats: ['umd'],
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
          '@rive-app/react-canvas': 'reactCanvas',
        },
        interop: 'auto',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts({
      outDir: 'dist/types',
      include: [
        'src/index.ts',
        'src/components',
        'src/enum',
        'src/types',
        'src/utils',
        'src/context',
      ],
    }),
    react(),
    ViteSvgSpriteWrapper({
      icons: './src/assets/icons/svg/*.svg',
      outputDir: './src/assets/icons',
      sprite: {
        shape: {
          transform: [
            {
              svgo: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeUselessStrokeAndFill: false,
                        removeAttrs: {
                          attrs: '(fill)',
                        },
                      },
                    },
                  },
                  {
                    name: 'removeDimensions',
                    active: true,
                  },
                ],
              },
            },
          ],
        },
      },
    }),
    libInjectCss(),
    externalizeDeps(),
  ],
  server: { hmr: { overlay: false } },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    'process.env': process.env,
  },
});
