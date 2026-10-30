// Lista curada: agregá, quitá o reordená proyectos acá.
export const projects = [
  // ── Casos de estudio ──────────────────────────────────────────────
  {
    title: {
      es: 'TRABAJO: Simulación íntegra por software de una planta de lecitina (Amberes, Bélgica)',
      en: 'WORK: Fully software-based simulation of a lecithin plant (Antwerp, Belgium)',
    },
    description: {
      es: 'TRABAJO: Desarrollo remoto, de punta a punta y con asistencia de Claude Code, de una simulación que reemplaza toda la E/S física para validar la lógica de control, probar pantallas y capacitar operadores sin hardware de campo. STEP 7 Classic con PLCSIM (S7-400) como PLC virtual, iFIX como SCADA/HMI y NetToPLCSim como puente (TCP 102), sobre dos máquinas virtuales. Resultado: secuencias de control batch validadas con menor riesgo antes de la puesta en marcha en campo.',
      en: 'WORK: Remote, end-to-end development, assisted by Claude Code, of a simulation that replaces all physical I/O to validate control logic, test screens and train operators with no field hardware. STEP 7 Classic with PLCSIM (S7-400) as the virtual PLC, iFIX as SCADA/HMI and NetToPLCSim as the bridge (TCP 102), across two virtual machines. Outcome: batch control sequences validated with lower risk before field commissioning.',
    },
    tags: ['STEP 7', 'S7-PLCSIM', 'iFIX', 'NetToPLCSim', 'Claude Code'],
    repo: 'https://github.com/TODO/simulacion-planta-lecitina',
    demo: '',
  },
  {
    title: {
      es: 'TRABAJO: Puesta en marcha en una planta agroindustrial (Uberlândia, Brasil)',
      en: 'WORK: Commissioning at an agro-industrial plant (Uberlândia, Brazil)',
    },
    description: {
      es: 'TRABAJO: Comisionamiento en sitio de sistemas PLC/SCADA de una planta agroindustrial de una multinacional, de forma presencial durante 2 semanas. Validación de E/S contra P&ID, pruebas SAT, de señal, loop testing y pruebas de seguridad, en un equipo multilingüe (inglés, con nociones de portugués).',
      en: 'WORK: On-site commissioning of PLC/SCADA systems at a multinational agro-industrial plant, in person for 2 weeks. I/O validation against P&IDs, SAT, signal and loop testing, and safety tests, within a multilingual team (English, with basic Portuguese).',
    },
    tags: ['PLC', 'SCADA', 'SAT', 'Loop testing', 'P&ID'],
    repo: 'https://github.com/TODO/puesta-en-marcha-uberlandia',
    demo: '',
  },

  // ── Proyectos personales ──────────────────────────────────────────
  {
    title: {
      es: 'Pipeline de datos industriales (2026)',
      en: 'Industrial data pipeline (2026)',
    },
    description: {
      es: 'Flujo de OPC UA a PostgreSQL y Python que adquiere variables de un banco iFIX + S7-PLCSIM + NetToPLCSim, las almacena, y calcula y visualiza KPI de planta.',
      en: 'OPC UA to PostgreSQL and Python flow that acquires variables from an iFIX + S7-PLCSIM + NetToPLCSim bench, stores them, then computes and visualizes plant KPIs.',
    },
    tags: ['OPC UA', 'PostgreSQL', 'Python', 'iFIX', 'S7-PLCSIM'],
    repo: 'https://github.com/TODO/pipeline-datos-industriales',
    demo: '',
  },
  {
    title: {
      es: 'Extensión de navegador con la API de Claude',
      en: 'Browser extension built on the Claude API',
    },
    description: {
      es: 'Organizador y archivador automático de pestañas para Chrome y Firefox que usa la API de Claude.',
      en: 'Automatic tab organizer and archiver for Chrome and Firefox that uses the Claude API.',
    },
    tags: ['Claude API', 'Chrome', 'Firefox'],
    repo: 'https://github.com/TODO/extension-organizador-tabs',
    demo: '',
  },
  {
    title: {
      es: 'Herramientas propias',
      en: 'Own tooling',
    },
    description: {
      es: 'Repositorio de AutoHotkey con Git unificado entre tres equipos (conflictos de merge y autenticación SSH resueltos), aplicaciones de productividad personal (metas, tareas y hábitos) y scripts de Python con APIs y herramientas externas (Spotify vía spotipy, exportador de YouTube con yt-dlp). Todo construido y mejorado de forma iterativa con Claude Code y otros LLMs, a partir de necesidades reales de uso.',
      en: 'AutoHotkey repository managed with Git and unified across three computers (merge conflicts and SSH authentication resolved), personal productivity apps (goals, tasks and habits), and Python scripts with APIs and external tools (Spotify via spotipy, a YouTube exporter with yt-dlp). All built, and kept improving, iteratively with Claude Code and other LLMs, driven by real needs.',
    },
    tags: ['AutoHotkey', 'Git', 'Python', 'spotipy', 'yt-dlp', 'Claude Code'],
    repo: 'https://github.com/TODO/herramientas-propias',
    demo: '',
  },
  {
    title: {
      es: 'Presencia web',
      en: 'Web presence',
    },
    description: {
      es: 'Sitio de CV/portfolio bilingüe en GitHub Pages y sitio en React/Vite desplegado en Vercel.',
      en: 'Bilingual CV/portfolio site on GitHub Pages and a React/Vite site deployed on Vercel.',
    },
    tags: ['GitHub Pages', 'React', 'Vite', 'Vercel'],
    repo: 'https://github.com/TODO/portfolio',
    demo: 'https://TODO.github.io/portfolio',
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
    title: {
      es: 'Impresión 3D: diseño y venta local',
      en: '3D printing: design and local sales',
    },
    description: {
      es: 'Diseño, impresión y venta de piezas 3D a clientes locales en Rosario. Modelado paramétrico en Fusion 360 y OpenSCAD para piezas funcionales (soportes de celular, soportes, clips, escuadras) y ajuste de proceso en Bambu Studio y OrcaSlicer: calibración de flujo y contracción, tolerancias de encastre y configuraciones multimaterial (PLA, PETG, TPU) en una Bambu Lab A1.',
      en: 'Designed, printed and sold 3D-printed parts to local customers in Rosario. Parametric modeling in Fusion 360 and OpenSCAD for functional parts (phone stands, supports, clips, brackets) and process tuning in Bambu Studio and OrcaSlicer: flow-rate and shrinkage calibration, press-fit tolerances and multi-material setups (PLA, PETG, TPU) on a Bambu Lab A1.',
    },
    tags: ['Fusion 360', 'OpenSCAD', 'Bambu Studio', 'OrcaSlicer', 'FDM'],
    repo: 'https://github.com/TODO/impresion-3d',
    demo: '',
  },
  {
    title: {
      es: 'IT y sistemas - Linux',
      en: 'IT and systems - Linux',
    },
    description: {
      es: 'Dual boot Ubuntu/Windows en una ThinkPad y corrección de un congelamiento del medidor de batería ajustando la gestión de energía (TLP); scripts de PowerShell para encontrar qué llenaba un disco de sistema casi lleno.',
      en: 'Ubuntu/Windows dual-boot setup on a ThinkPad and a fix for a battery gauge freeze by correcting power-management (TLP) settings; PowerShell scripts to find what was filling a nearly full system drive.',
    },
    tags: ['Ubuntu', 'Windows', 'TLP', 'PowerShell'],
    repo: 'https://github.com/TODO/it-sistemas',
    demo: '',
  },
];