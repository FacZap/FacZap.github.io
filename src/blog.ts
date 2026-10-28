import { getCollection } from 'astro:content';
import type { Lang } from './i18n/ui';

// Posts de un idioma, más nuevos primero. id = 'es/hola-mundo' -> slug 'hola-mundo'
export async function postsFor(lang: Lang) {
  const all = await getCollection('blog', (p) => p.id.startsWith(`${lang}/`));
  return all
    .map((post) => ({ post, slug: post.id.slice(lang.length + 1) }))
    .sort((a, b) => b.post.data.date.valueOf() - a.post.data.date.valueOf());
}

export const staticPaths = (lang: Lang) => async () =>
  (await postsFor(lang)).map(({ post, slug }) => ({ params: { slug }, props: { post } }));
