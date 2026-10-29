// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // El repo debe llamarse <usuario>.github.io para servirse en la raíz
  site: 'https://faczap.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
