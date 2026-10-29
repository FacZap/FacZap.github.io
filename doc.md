# Portfolio personal

Astro estático y bilingüe (español en `/`, inglés en `/en/`), publicado en GitHub Pages.

## Completar antes de publicar
- `src/config.ts`: nombre, email, links (CV, GitHub, LinkedIn, YouTube, X) y el token opcional de Cloudflare Web Analytics.
- `astro.config.mjs`: `site` → `https://<usuario>.github.io`.
- `src/i18n/ui.ts`: textos de hero, about y contacto en los dos idiomas.
- `src/data/projects.ts`: tus proyectos.
- `public/avatar.svg`: reemplazar por tu foto (y actualizar `avatar` en `src/config.ts`).

## Desarrollo
```bash
npm install
npm run dev
```

## Publicar un post
Crear el mismo archivo en los dos idiomas:
```
src/content/blog/es/mi-post.md
src/content/blog/en/mi-post.md
```
con frontmatter `title`, `description` y `date`. Commit + push a `main` y se publica solo.

## Deploy (una vez)
1. Crear el repo `<usuario>.github.io` en GitHub y hacer push.
2. Settings → Pages → Source: **GitHub Actions**.
