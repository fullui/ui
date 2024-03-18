import starlight from '@astrojs/starlight'
import vercel from '@astrojs/vercel/static'
import { fullui } from '@fulldevlabs/fullui/astro'
// @ts-ignore
import liveCode from 'astro-live-code'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://fullui.dev',
  adapter: vercel(),
  integrations: [
    liveCode({
      layout: './src/components/LiveCodeLayout.astro',
    }),
    fullui(),
    starlight({
      title: 'Fullui',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Logo Fullui',
        replacesTitle: true,
      },
      favicon: './favicon.png',
      components: {
        // FIXME: causing erro on vercel build
        // Head: './src/components/StarlightHead.astro',
      },
      customCss: ['./src/css/custom.css'],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Introduction', link: '/start-here/introduction/' },
            { label: 'Quick Start', link: '/start-here/quick-start/' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Installation', link: '/guides/installation/' },
            { label: 'Theming', link: '/guides/theming/' },
            { label: 'Endomorphic', link: '/guides/endomorphic/' },
            { label: 'Typescript', link: '/guides/typescript/' },
          ],
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
      ],
    }),
  ],
})