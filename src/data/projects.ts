// Lista curada: agregá, quitá o reordená proyectos acá.
// slug: URL de la página dedicada (/projects/<slug>/).
// link (opcional): URL externa, se abre en pestaña nueva.
// summary (opcional): texto corto para las tarjetas del Home; si está vacío se usa description.
// Contenido largo (opcional): src/content/projects/<es|en>/<slug>.md (Markdown: tablas, imágenes ./img.png, HTML)
// se muestra debajo de la cabecera en la página del proyecto.
export const projects = [
  // ── Casos de estudio ──────────────────────────────────────────────
  {
    slug: 'simulacion-planta-lecitina',
    title: {
      es: 'PROYECTO LABORAL: Simulación íntegra por software de una planta de lecitina (Amberes, Bélgica)',
      en: 'WORK PROJECT: Fully software-based simulation of a lecithin plant (Antwerp, Belgium)',
    },
    summary: {
      es: 'Desarrollo de una simulación de planta de lecitina para capacitar operadores.',
      en: 'Development of a lecithin plant simulation for operator training.',
    },
    description: {
      es: 'PROYECTO LABORAL: Desarrollo remoto, de punta a punta, de una simulación que reemplaza toda la E/S física para validar la lógica de control, probar pantallas y capacitar operadores sin hardware de campo. STEP 7 Classic con PLCSIM (S7-400) como PLC virtual, iFIX como SCADA/HMI y NetToPLCSim como puente (TCP 102), sobre dos máquinas virtuales. Resultado: secuencias de control batch validadas con menor riesgo antes de la puesta en marcha en campo.',
      en: 'WORK PROJECT: Remote, end-to-end development of a simulation that replaces all physical I/O to validate control logic, test screens and train operators with no field hardware. STEP 7 Classic with PLCSIM (S7-400) as the virtual PLC, iFIX as SCADA/HMI and NetToPLCSim as the bridge (TCP 102), across two virtual machines. Outcome: batch control sequences validated with lower risk before field commissioning.',
    },
    tags: ['STEP 7', 'S7-PLCSIM', 'iFIX', 'NetToPLCSim'],
    docu: '',
  },
  {
    slug: 'puesta-en-marcha-extr-uberlandia',
    title: {
      es: 'PROYECTO LABORAL: Puesta en marcha en una planta agroindustrial (Uberlândia, Brasil)',
      en: 'WORK PROJECT: Commissioning at an agro-industrial plant (Uberlândia, Brazil)',
    },
    summary: {
      es: 'Comisionamiento en sitio de PLC/SCADA en planta agroindustrial (PlantPAX)',
      en: 'On-site commissioning of PLC/SCADA systems at an agro-industrial plant (PlantPAX)',
    },
    description: {
      es: 'PROYECTO LABORAL: Comisionamiento en sitio de sistemas PLC/SCADA de una planta agroindustrial de una multinacional, de forma presencial durante 2 semanas. Validación de E/S contra P&ID, pruebas SAT, de señal, loop testing y pruebas de seguridad, en un equipo multilingüe (inglés, con nociones de portugués).',
      en: 'WORK PROJECT: On-site commissioning of PLC/SCADA systems at a multinational agro-industrial plant, in person for 2 weeks. I/O validation against P&IDs, SAT, signal and loop testing, and safety tests, within a multilingual team (English, with basic Portuguese).',
    },
    tags: ['PLC', 'SCADA', 'SAT', 'Loop testing', 'P&ID'],
    docu: '',
  },

  // ── Proyectos personales ──────────────────────────────────────────
  {
    slug: 'proyecto-final-ingenieria',
    title: {
      es: 'Proyecto final de Ingeniería Electrónica',
      en: 'Final year project for Electronics Engineering',
    },
    summary: {
      es: 'Tesina Zapata Facundo 2025',
      en: 'Zapata Facundo Thesis 2025',
    },
    description: {
      es: 'Control de Redes de Intercambio Calórico',
      en: 'Heat Exchange Network Control',
    },
    tags: ['Academic', 'MATLAB', 'Simulink', 'Control'],
    repo : 'https://github.com/FacZap/TesinaZapata2025/tree/main',
    docu: 'https://drive.google.com/file/d/1xIV67fyXAJmTA5jQJEvdqG1tNHt1FF4I/view?usp=sharing',
  },
  
  {
    slug: 'pipeline-datos-industriales',
    title: {
      es: 'Pipeline de datos industriales (2026)',
      en: 'Industrial data pipeline (2026)',
    },
    summary: {
      es: '',
      en: '',
    },
    description: {
      es: 'Flujo de OPC UA a PostgreSQL y Python que adquiere variables de un banco iFIX + S7-PLCSIM + NetToPLCSim, las almacena, y calcula y visualiza KPI de planta.',
      en: 'OPC UA to PostgreSQL and Python flow that acquires variables from an iFIX + S7-PLCSIM + NetToPLCSim bench, stores them, then computes and visualizes plant KPIs.',
    },
    tags: ['OPC UA', 'PostgreSQL', 'Python', 'iFIX', 'S7-PLCSIM'],
    repo: 'https://github.com/TODO/pipeline-datos-industriales',
    demo: '',
    docu: '',
  },
  {
    slug: 'extension-claude-tabs',
    title: {
      es: 'Extensión de navegador con la API de Claude',
      en: 'Browser extension built on the Claude API',
    },
    summary: {
      es: '',
      en: '',
    },
    description: {
      es: 'Organizador y archivador automático de pestañas para Chrome y Firefox que usa la API de Claude.',
      en: 'Automatic tab organizer and archiver for Chrome and Firefox that uses the Claude API.',
    },
    tags: ['Claude API', 'Chrome', 'Firefox', 'JavaScript'],
    repo: 'https://github.com/FacZap/TabSorterAI',
    demo: '',
    docu: '',
  },
  {
    slug: 'herramientas-propias',
    title: {
      es: 'Herramientas propias',
      en: 'Own tooling',
    },
    summary: {
      es: '',
      en: '',
    },
    description: {
      es: 'Repositorio de AutoHotkey con Git unificado entre tres equipos (conflictos de merge y autenticación SSH resueltos), aplicaciones de productividad personal (metas, tareas y hábitos) y scripts de Python con APIs y herramientas externas (Spotify vía spotipy, exportador de YouTube con yt-dlp). Todo construido y mejorado de forma iterativa con Claude Code y otros LLMs, a partir de necesidades reales de uso.',
      en: 'AutoHotkey repository managed with Git and unified across three computers (merge conflicts and SSH authentication resolved), personal productivity apps (goals, tasks and habits), and Python scripts with APIs and external tools (Spotify via spotipy, a YouTube exporter with yt-dlp). All built, and kept improving, iteratively with Claude Code and other LLMs, driven by real needs.',
    },
    tags: ['AutoHotkey', 'Git', 'Python', 'spotipy', 'yt-dlp', 'Claude Code'],
    repo: 'https://github.com/FacZap/AutoHotkey-Stash',
    demo: '',
    docu: '',
  },
  {
    slug: 'presencia-web',
    title: {
      es: 'Presencia web',
      en: 'Web presence',
    },
    summary: {
      es: '',
      en: '',
    },
    description: {
      es: 'Sitio de CV/portfolio bilingüe en GitHub Pages y sitio en React/Vite desplegado en Vercel.',
      en: 'Bilingual CV/portfolio site on GitHub Pages and a React/Vite site deployed on Vercel.',
    },
    tags: ['GitHub Pages', 'React', 'Vite', 'Vercel'],
    repo: 'https://github.com/faczap/faczap.github.io',
    demo: '',
    docu: '',
  },
  // {
  //   title: {
  //     es: 'Electrónica embebida y diseño de PCB',
  //     en: 'Embedded electronics and PCB design',
  //   },
  //   description: {
  //     es: 'Proyectos con ESP32 y diseño y ruteo de PCB en KiCad: una fuente step-down con LM2596 y una placa controladora para una carga resistiva (ESP32, etapa PWM con MOSFET, driver de relé y regulador buck), con chequeos DRC y reglas de fabricación de JLCPCB.',
  //     en: 'ESP32 projects and PCB design and routing in KiCad: an LM2596 step-down power supply and a controller board for a resistive load (ESP32, MOSFET PWM stage, relay driver and buck regulator), with DRC and JLCPCB fabrication-rule checks.',
  //   },
  //   tags: ['ESP32', 'KiCad', 'PCB', 'LM2596', 'JLCPCB'],
  //   repo: 'https://github.com/TODO/electronica-embebida-pcb',
  //   demo: '',
  // },
  {
    slug: 'impresion-3d',
    title: {
      es: 'Impresión 3D: diseño y venta local',
      en: '3D printing: design and local sales',
    },
    summary: {
      es: '',
      en: '',
    },
    description: {
      es: 'Diseño, impresión y venta de piezas 3D a clientes locales en Rosario. Modelado paramétrico en Fusion 360 y OpenSCAD para piezas funcionales (soportes de celular, soportes, clips, escuadras) y ajuste de proceso en Bambu Studio y OrcaSlicer: calibración de flujo y contracción, tolerancias de encastre y configuraciones multimaterial (PLA, PETG, TPU) en una Bambu Lab A1.',
      en: 'Designed, printed and sold 3D-printed parts to local customers in Rosario. Parametric modeling in Fusion 360 and OpenSCAD for functional parts (phone stands, supports, clips, brackets) and process tuning in Bambu Studio and OrcaSlicer: flow-rate and shrinkage calibration, press-fit tolerances and multi-material setups (PLA, PETG, TPU) on a Bambu Lab A1.',
    },
    tags: ['Fusion 360', 'OpenSCAD', 'Bambu Studio', 'OrcaSlicer', 'FDM'],
    repo: '',
    demo: '',
    docu: '',
  },
  {
    slug: 'it-linux',
    title: {
      es: 'IT y sistemas - Linux',
      en: 'IT and systems - Linux',
    },
    summary: {
      es: '',
      en: '',
    },
    description: {
      es: 'Dual boot Ubuntu/Windows en una ThinkPad y corrección de un congelamiento del medidor de batería ajustando la gestión de energía (TLP); scripts de PowerShell para debuggear problemas de batería',
      en: 'Ubuntu/Windows dual-boot setup on a ThinkPad and a fix for a battery gauge freeze by correcting power-management (TLP) settings; PowerShell scripts to debug battery problems.',
    },
    tags: ['Ubuntu', 'Windows', 'TLP', 'PowerShell'],
    repo: '',
    demo: '',
    docu: '',
  },
];