import react from '@astrojs/react';
import vercel from '@astrojs/vercel/edge'

/** @type {import('astro').AstroUserConfig} */
export default {
  output: 'server',
  adapter: vercel(),
  integrations: [react()]
}