// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { libInjectCss, scanEntries } from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts';

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
        },
      },
    },
  },
  plugins: [
    libInjectCss(),
    dts({
      include: ['src/component/'],
    }),
  ],
});
