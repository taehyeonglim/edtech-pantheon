import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://taehyeonglim.github.io',
  base: '/edtech-pantheon',
  integrations: [react()],
  prefetch: true,
  build: {
    format: 'directory'
  }
});
