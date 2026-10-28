import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    nitro({
      preset: 'vercel',
    }),
    viteReact(),
    {
      name: 'tanstack-start-rollup-fix',
      config() {
        return {
          build: {
            rollupOptions: {
              input: 'virtual:tanstack-start-client-entry',
            },
          },
          environments: {
            client: {
              build: {
                rollupOptions: {
                  input: 'virtual:tanstack-start-client-entry',
                },
              },
            },
            ssr: {
              build: {
                rollupOptions: {
                  input: 'virtual:tanstack-start-server-entry',
                },
              },
            },
          },
        }
      },
    },
  ],
})
