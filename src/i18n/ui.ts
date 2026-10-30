export const langs = ['es', 'en'] as const;
export type Lang = (typeof langs)[number];

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.blog': 'Blog',
    'theme.toggle': 'Cambiar tema claro/oscuro',
    'lang.switch': 'English',
    'hero.role': 'Ingeniero Electrónico | Desarrollador',
    'hero.intro': 'Ingeniero Electrónico argentino. Automatización industrial. Software.',
    'hero.cta': 'Portfolio',
    'hero.cv': 'Mi CV',
    'about.title': 'Sobre mí',
    'about.body': '.',
    'projects.title': 'Proyectos',
    'projects.repo': 'Código',
    'projects.demo': 'Demo',
    'contact.title': 'Contacto',
    'contact.body': 'Escribime por mail o encontrame en redes.',
    'contact.cta': 'Escribime',
    'blog.title': 'Blog',
    'blog.empty': 'Todavía no hay posts.',
    'blog.back': '← Volver al blog',
    'blog.other': 'Read in English',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'theme.toggle': 'Toggle light/dark theme',
    'lang.switch': 'Español',
    'hero.role': 'Electronics Engineer | Developer',
    'hero.intro': ' Electronics Engineer from Argentina. PLC and Commissioning',
    'hero.cta': 'See projects',
    'hero.cv': 'My resume',
    'about.title': 'About',
    'about.body': 'Longer bio: experience, the tech you use and what you are looking for.',
    'projects.title': 'Projects',
    'projects.repo': 'Code',
    'projects.demo': 'Demo',
    'contact.title': 'Contact',
    'contact.body': 'Send me an email or find me on social media.',
    'contact.cta': 'Email me',
    'blog.title': 'Blog',
    'blog.empty': 'No posts yet.',
    'blog.back': '← Back to blog',
    'blog.other': 'Leer en español',
  },
} as const;

export const t = (lang: Lang) => ui[lang];

// '/blog/' -> '/en/blog/' (es en la raíz, en bajo /en/)
export const localePath = (lang: Lang, path: string) => (lang === 'es' ? path : `/en${path}`);

// Ruta equivalente en el otro idioma
export const switchPath = (lang: Lang, pathname: string) =>
  lang === 'es' ? `/en${pathname}` : pathname.replace(/^\/en(\/|$)/, '/');
