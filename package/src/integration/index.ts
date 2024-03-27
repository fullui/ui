import type { AstroIntegration } from 'astro'
import virtual from 'vite-plugin-virtual'
import unoIntegration from './unoIntegration'

export default function fulluiIntegration(fulluiConfig: any): AstroIntegration {
  return {
    name: '@fulldevlabs/fullui/integration',
    hooks: {
      'astro:config:setup': async ({ config: astroConfig, updateConfig }) => {
        updateConfig({
          integrations: [unoIntegration(fulluiConfig)],
        })

        const virtualModuleId = 'virtual:fullui-config'
        const resolvedVirtualModuleId = '\0' + virtualModuleId
        updateConfig({
          vite: {
            plugins: [
              virtual({
                'virtual:@fulldevlabs/fullui/config': `export default ${JSON.stringify(fulluiConfig)}`,
              }),
            ],
          },
        })
      },
    },
  }
}