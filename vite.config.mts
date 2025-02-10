import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
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
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: { interop: "auto" },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts({
      include: ['src/components/'],
    }),
    react(),
    ViteSvgSpriteWrapper({
      icons: './src/assets/icons/svg/*.svg',
      outputDir: './public/svg/',
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
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    'process.env': process.env,
  },
});
