// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Cambiar TODO por tu usuario de GitHub (el repo debe llamarse <usuario>.github.io)
  site: 'https://TODO.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
