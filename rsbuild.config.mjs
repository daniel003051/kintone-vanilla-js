import { defineConfig } from '@rsbuild/core'
import { pluginBasicSsl } from '@rsbuild/plugin-basic-ssl'

export default defineConfig({
  plugins: [pluginBasicSsl()],
  output: {
    injectStyles: true,
    distPath: {
      js: './',
    },
    filename: {
      js: 'app.js',
    },
  },
  performance: {
    chunkSplit: {
      strategy: 'all-in-one',
    },
  },
  dev: {
    hmr: false,
    liveReload: false,
  }
})
