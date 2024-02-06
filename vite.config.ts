import { readFileSync } from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-polyfill-node'

const packageJson = JSON.parse(
  readFileSync('./package.json', { encoding: 'utf-8' }),
);

const globals = {
  ...(packageJson?.peerDependencies || {}),
};

const resolve = (str: string) => {
  return path.resolve(__dirname, str);
};

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    plugins: [
      react(),
    ],
    build: {
      // output
      outDir: 'dist',
      lib: {
        // source code input
        entry: resolve('src/index.ts'),
        // library name
        name: 'ultiverse-toolkit',
        // [filename].cjs
        fileName: 'index',
        // format
        formats: ['es', 'cjs', 'umd'],
      },
      rollupOptions: {
        // external resource
        external: ['react', 'react-dom', '@rainbow-me/rainbowkit', 'wagmi', ...Object.keys(globals)],
        plugins: [
          rollupNodePolyFill()
        ]
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true, 
            process: true,
          }), 
          NodeModulesPolyfillPlugin() 
        ]
      }
   }
  }
});
