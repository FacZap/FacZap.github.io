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
    'hero.intro': 'Ingeniero Electrónico. Automatización industrial. Software. Argentina.',
    'hero.cta': 'Portfolio',
    'hero.cv': 'Mi CV',
    'about.title': 'Sobre mí',
    'about.body': 'Egresado de Ingeniería Electrónica de la Universidad Nacional de Rosario, Argentina. Poseo experiencia en automatización industrial, PLCs y puesta en marcha de sistemas. Actualmente adentrandome en el desarrollo de software y herramientas propias para productividad personal y profesional. Mis intereses incluyen impresión 3D, robótica y electrónica embebida.',
    'projects.title': 'Proyectos',
    'projects.all': 'Ver todos los proyectos',
    'projects.repo': 'Código',
    'projects.demo': 'Demo',
    'projects.flow': 'Alternar orden vertical/horizontal',
    'projects.count': 'Ítems por fila/columna (1-4)',
    'contact.title': 'Contacto',
    'contact.body': 'Escribime por mail o encontrame en redes.',
    'contact.cta': 'Escribime',
    'blog.title': 'Blog',
    'blog.empty': 'Todavía no hay posts.',
    'blog.back': '← Volver al blog',
    'blog.other': 'Read in English',
    'blog.linkedin': 'Desde LinkedIn',
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
    'hero.intro': ' Electronics Engineer from Argentina. PLC and Commissioning.',
    'hero.cta': 'See projects',
    'hero.cv': 'My resume',
    'about.title': 'About',
    'about.body': 'Longer bio: experience, the tech you use and what you are looking for.',
    'projects.title': 'Projects',
    'projects.all': 'See all projects',
    'projects.repo': 'Code',
    'projects.demo': 'Demo',
    'projects.flow': 'Toggle vertical/horizontal order',
    'projects.count': 'Items per row/column (1-4)',
    'contact.title': 'Contact',
    'contact.body': 'Send me an email or find me on social media.',
    'contact.cta': 'Email me',
    'blog.title': 'Blog',
    'blog.empty': 'No posts yet.',
    'blog.back': '← Back to blog',
    'blog.other': 'Leer en español',
    'blog.linkedin': 'From LinkedIn',
  },
} as const;

export const t = (lang: Lang) => ui[lang];

// '/blog/' -> '/en/blog/' (es en la raíz, en bajo /en/)
export const localePath = (lang: Lang, path: string) => (lang === 'es' ? path : `/en${path}`);

// Ruta equivalente en el otro idioma
export const switchPath = (lang: Lang, pathname: string) =>
  lang === 'es' ? `/en${pathname}` : pathname.replace(/^\/en(\/|$)/, '/');
