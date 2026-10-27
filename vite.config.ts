import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

const config = defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    {
      name: 'tanstack-start-rollup-fix',
      config(_config, env) {
        if (env?.isSsrBuild) {
          return {
            build: {
              rollupOptions: {
                input: {
                  server: 'virtual:tanstack-start-server-entry',
                },
              },
            },
          }
        }
        return {
          build: {
            rollupOptions: {
              input: {
                client: 'virtual:tanstack-start-client-entry',
              },
            },
          },
        }
      },
      configEnvironment(name) {
        if (name === 'client') {
          return {
            build: {
              rollupOptions: {
                input: {
                  client: 'virtual:tanstack-start-client-entry',
                },
              },
            },
          }
        }
        if (name === 'ssr' || name === 'server') {
          return {
            build: {
              rollupOptions: {
                input: {
                  server: 'virtual:tanstack-start-server-entry',
                },
              },
            },
          }
        }
      },
    },
    {
      name: 'netlify-server-entrypoint-fix',
      enforce: 'post',
      applyToEnvironment({ name }) {
        return name === 'ssr'
      },
      generateBundle(_, bundle) {
        for (const [fileName, chunk] of Object.entries(bundle)) {
          if (chunk.type === 'chunk' && fileName !== 'server.js') {
            chunk.isEntry = false
          }
        }
      },
    },
    netlify(),
  ] as any,
})

export default config
