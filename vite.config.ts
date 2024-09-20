// vite.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { libInjectCss, scanEntries } from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
// import css from 'rollup-plugin-css-only';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Connect-Design-System',
      fileName: 'connect-design-system',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    assetsInlineLimit: 0,
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    libInjectCss(),
    dts({
      include: ['src/components/'],
    }),
    react({
      jsxRuntime: 'classic',
    }),
    // css({ output: 'button.css' }),
    ViteSvgSpriteWrapper({
      icons: './src/assets/icons/svg/*.svg',
      outputDir: './public/svg/',
    }),
  ],
  define: {
    'process.env': process.env,
  },
});
