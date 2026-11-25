# Estrategias de Control Avanzado para Redes de Intercambio Calórico

Proyecto de Ingeniería (A20 – Proyecto II) · Ingeniería Electrónica · FCEIA – Universidad Nacional de Rosario.

- **Autor:** Facundo Zapata (Z-1131/2)
- **Director:** Dr. Ing. Patricio Luppi
- **Asesor / director externo:** Dr. Ing. Lautaro Braccia (CIFASIS, CONICET-UNR)
- **Inicio:** marzo 2025 · **Repositorio:** https://github.com/FacZap/TesinaZapata2025
- **Informe final:** [`INFORME FINAL ZapataFacundo 2025.pdf`](https://drive.google.com/file/d/1xIV67fyXAJmTA5jQJEvdqG1tNHt1FF4I/view?usp=sharing) (108 págs.)

## De qué trata

Se estudian redes de intercambio calórico (RIC) simuladas en Simulink: se identifican modelos simplificados de primer orden, se verifican los apareamientos entrada–salida con RGA y número de condición, se diseñan controladores IMC en tres estructuras (**descentralizada**, **sparse** y **full**), se convierten a PID/PI y se evalúan frente a perturbaciones con los índices IAE, Eu y EIP, y en la Etapa II también con costos (OPEX/CAPEX).

| Etapa del informe | Red | Carpeta | Resultado principal |
|---|---|---|---|
| Etapa I | Red 1: 2 corrientes calientes, 2 frías, 3 intercambiadores y 1 utilidad fría (4 salidas × 7 entradas) | `Diseno/Ejemplo 1` | Sparse ≈ Full. Sparse mejora el EIP promedio un 8–21 % respecto de Desc. |
| Etapa II, 1ª síntesis | Red 6, sin divisiones de corriente (4 × 11 entradas: 8 bypasses + fcu1, fcu2, fhu2) | `Diseno/Ejemplo 6` | Se elige Sparse. Filtro IMC τ = 300. |
| Etapa II, 2ª síntesis | Red 7, con divisiones de corriente (fracciones 0.565 en H1 y 0.314 en C2) | `Diseno/Ejemplo 7` | Se elige Sparse. Filtro IMC τ = 100. Mayor costo que la 1ª síntesis. |
| Fuera del informe | Problema 2: cambio de estructura de control entre punto nominal y punto de trabajo 2 | `Cambio de Estructura` | Trabajo exploratorio. Es la "reconfiguración" mencionada en la solicitud de inscripción. |

Conclusión del informe: la 1ª síntesis (sin divisiones) es preferible. Tiene menores SSD_u y NLE, usa dos utilidades en lugar de tres y su TAC es de $462.915 contra $684.175 de la 2ª.

## Requisitos

- **MATLAB R2021a + Simulink.** Los modelos `.slx` están guardados en esa versión (`*_v2021.slx`, `.slx.r2021a`).
- **Toolboxes:**
  - Control System: `tf`, `dcgain`, `pid`, `pole`.
  - System Identification: `iddata`, `pem`, `procest`, `n4sid`, `compare`.
  - Optimization (`fmincon`) y Model Predictive Control (`mpc`): solo en los prototipos MPC de `Ejemplo 7/MPC`.
  - Signal Processing (`downsample`).
- Python 3 (biblioteca estándar) solo para `Ejemplo 1/250705_sat/clasificar_subcarpetas.py`.

## Estructura

```
Tesina - Zapata 2025/
├── INFORME FINAL ZapataFacundo 2025 (1).pdf   Informe final
├── Hoja de Ruta.docx / .txt                   Plan de trabajo (rediseño + cambio de estructura)
├── ZapataFacundo_Solicitud-...-2023_LB.pdf    Solicitud de inscripción firmada
├── Solicitud-Inscripcion-...-2023.pdf         Formulario en blanco
├── Anteproyecto - LUNARI - vA2.pdf            Anteproyecto de otro alumno (2022), usado de referencia
├── escobar2009.pdf, Yan2001.pdf               Bibliografía (diseño de bypasses en RIC)
├── imc.png, controlador clasico.png, norm_G_1.png   Figuras del informe
├── Diseno/                                    Etapas I y II
│   ├── Funciones/                             Librería común (agregar al path)
│   ├── Ejemplo 1/                             Red 1 (Etapa I)
│   ├── Ejemplo 6/                             Red 6 (1ª síntesis)
│   ├── Ejemplo 7/                             Red 7 (2ª síntesis) + prototipos MPC
│   ├── 25_11_17--Ejemplo7/                    Snapshot del 17/11/2025 de Ejemplo 7 y "Script de Facu"
│   ├── Contro con Rediseño/Full/              CS Final.eps, Sol_bypass_info_RIC01.npz
│   ├── *.xlsx, *.ods                          Datos de identificación y diseño (ver abajo)
│   ├── ORDEN.docx                             Filtros finales (red 6 = 300, red 7 = 100) y perturbaciones a–d
│   ├── matriz_latex_1/2.txt                   Matriz G de la Red 1 en LaTeX
│   └── *.png, *.jpg                           Capturas
├── Cambio de Estructura/                      Problema 2 (no incluido en el informe)
└── RESULTADOS/                                Tablas de índices y capturas finales
```

## Flujo de trabajo

El mismo esquema se repite en cada ejemplo. Casi todos los archivos son *scripts* que leen y escriben el workspace base, así que hay que ejecutarlos en orden.

1. **Planta no lineal.** Cada intercambiador es la S-function `Int_er.m`, que declara la función `In_ter` e integra `din_inter.m` (modelo por rodajas). Los estados estacionarios se guardan en `dynamic_inter_<id>.mat`. Los parámetros nominales se cargan con `INI.m` (Ej. 1) o con `ini_comun.m` e `inicializar_areas*.m` (Ej. 6/7).
2. **Identificación.** Se aplica un escalón a cada entrada y perturbación y se ajusta un primer orden.
   - Ej. 1: `scr4_variar` → `f_variar_iter` / `d_variar_iter` → `create_tfs_matrix*` → corrección manual en `scr7_fix_model` → `G_candidata.mat` / `D_candidata.mat`.
   - Ej. 6/7: `script_build_tfs` + `build_tfs` / `build_tfs_d` → `G_modelo_{desc,spar,full}_v*.mat`.
   - En todos: `identification_P1_HEN` (usa `pem`) o `ident_P1_sin_retardo`.
3. **Validación.** `scr8_graficas_modelo` (Ej. 1); `validacion` y `save_plot_validacion` (Ej. 6/7).
4. **Apareamientos.** `scr7_5_rga_analysis` y `create_rga_matrix` (Ej. 1); `script_RGA` (Ej. 6/7). Usan `Funciones/RGA.m`.
5. **Controlador.**
   - `script_desc` / `script_spar` / `script_full` reducen G a 4×4.
   - `Funciones/imc_d|imc_s|imc_f` calculan `Kimc = G⁻¹·F` y `K_clasica = (I − Kimc·G)⁻¹·Kimc`.
   - `IMC_Controladores_HEN` calcula los PID, con los factores de ajuste `Kc_per` y `Tp_per`.
6. **Simulación por lotes.**
   - `SUPER_SCRIPT_1_*`: 7 combinaciones de perturbaciones Thin1 / Tcin1 / Tcin2.
   - `SUPER_SCRIPT_6`, `SUPER_SCRIPT_7`: casos a–d.
   - Cada caso aplica `set_d` → `sim(...)` → `univ_plotter` → `save_univ_plotter`. Los resultados van a `SIMULACIONES_SUPER_SCRIPT/`.
7. **Índices y tablas.**
   - `SS_COMPARISION_1` / `SS_COMPARISION_X_Y_*_67` → `indices_universales` (IAE, Eu, T_est) → `indices_to_table_new` → `COMPARISION_X_Y`.
   - Salida: `tabla_RIC_{IAE,Eu,EIP}.xlsx`.

## Convenciones

- **Salidas:** y1..y4 = Th1out, Th2out, Tc1out, Tc2out.
- **Bypasses:** `uh`/`uc` + corriente caliente + corriente fría + etapa. Ejemplo: `uh112` es el lado caliente del intercambiador H1–C1 en la etapa 2.
- **Entradas en Ej. 6/7:** `u1..u11` = 8 bypasses + `fcu1`, `fcu2`, `fhu2`. Las columnas activas de cada estructura están en `Funciones/Listado_Utilidades.txt`:
  - Red 6: Desc [2 9 10 11] · Spar [3 8 9 10] · Full [2 8 9 10]
  - Red 7: Desc [8 9 10 11] · Spar [5 9 10 11] · Full [2 8 9 10]
- **Estructura:** `select_area` = `'d'` (descentralizada), `'s'` (sparse) o `'f'` (full). `RIC` = 1, 6 o 7.
- **Perturbaciones:** `d1_end..d8_end` (impares = temperatura, pares = flujo).
  - Casos Ej. 6/7: a = (0.65, 0.15), b = (0.65, 0), c = (−0.35, −0.15), d = (−0.35, 0).
  - Casos Ej. 1: `h5c0c0`, `h0c5c5`, `h5c5c5`, que indican qué temperaturas de entrada se perturban en ±5 K.
- **Carpetas de corridas manuales:** `nNN_PID{d,s,f}_{OK|XX}_<pert>_<yymmdd>`.
  - `OK` = la corrida llega al setpoint. `XX` = falla.
  - `<pert>` ∈ {`noPert`, `maxPert`, `1111`, `-1-1-1-1`, `1100`, `00-1-1`} = signo de d1, d3, d5, d7.
  - Cada carpeta trae un `desc.txt` con `filt`, `Kc_per`, `Tp_per`, `t_step` y los valores finales.

## Contenido por carpeta

### `Diseno/Funciones/`
Librería compartida. Agregarla al path con `addpath`.

- **Identificación:** `identification_P1_HEN` (+ `_new`, `_ts`, `_og`), `ident_P1_sin_retardo`, `buscar_time` (+ `_new`, `_og`).
- **Sintonía:** `IMC_Controladores_HEN` (PI / PI mejorado / PID por IMC), `imc_d/s/f`, `filt_values_test` (barrido de τ).
- **Simulación:** `set_d`, `input_d`, `check_tol`, `norm_6_7`, `Find_Range_Norm`.
- **Gráficos y datos:** `univ_extract_simdata`, `univ_plotter`, `univ_indiv_plotter`, `save_univ_plotter`, `multicontrol_plotter_y/u`.
- **Índices:** `indices_universales`, `indices_to_table_new`, `COMPARISION_X_Y`, `SS_COMPARISION_X_Y_data_67` / `_SCALED_67`, `calcular_SSD`, `calcular_NLE`, `costos` (CAPEX).
- **Exportación:** `RGA.m` (Yi Cao), `tf2text.m`, `univ_LATEX_STRINGS`, `matrix2latex.m` (M. Koehler, GPL).

### `Diseno/Ejemplo 1/` (Etapa I)
- **Modelos:** `Red_problema1_original.slx` (lazo abierto, planta frente a modelo), `Red_problema1_imc.slx`, `Red_problema1_imc_PID.slx`.
- **Importante:** antes de simular hay que restaurar los `dynamic_inter_*.mat` con `reset_dynamic_inter` (llama a `copy_dyn.bat`, que copia desde `OG-dynamic/`). Ver `Importante.txt`.
- **Carpetas de corridas:**
  - `graphs_auto`, `S_graphs_auto`: corridas automáticas de junio 2025. El ID se codifica con `encode_triplet`.
  - `250701_plot_tuning`: figuras de sintonía.
  - `250705_sat`: estudio de saturación (`d_nXX` / `s_nXX`).
  - `250723_sim`: PID n01–n08 y trenes aleatorios `N07–N09_RNDM`.
  - `251116_revision`: PID paralelo, solo PI.
  - `SIMULACIONES_SUPER_SCRIPT*`: campaña final y respaldos de enero 2026.
- **Métricas:** `ssd_nle`, `iae`, `save_metrics_data`, `exportar_metricas`, `compare_data_250618` → `resultados_SSD.csv`, `metricas_comparadas.csv`.
- **Material ajeno a la tesina:** `scripts-originales/` (primeros ensayos), `archivos_tp1/` (TP de Teoría de Control: Cohen-Coon, CSTR) y `curso/IMCyPIDDisseny.mlx`.

### `Diseno/Ejemplo 6/` (Red 6, 1ª síntesis)
- **Modelos:** `Red_problema6.slx` (planta) y `Red_problema6_imc.slx` (lazo cerrado).
- **Scripts:** `script_build_tfs`, `validacion`, `script_RGA`, `script_desc/spar/full`, `alternative_sparse_PID_calculation`, `SUPER_SCRIPT_6`.
- **Apareamientos:** los finales están en `Ordenes_Alternativos.txt`.
- **Tablas:** `tabla_RIC6_{IAE,Eu,EIP}*.xlsx`, `G_est_RIC_6.xlsx`, `g_ltx*.xlsx` (matrices para el informe).
- **Simulaciones:** en `SIMULACIONES/`, `!PID_desc` y `!PID_full` son las corridas curadas; las carpetas sin `!` son intentos anteriores con IMC.
- **Paquetes de Lautaro Braccia:** `SimulacionLautaEj6/` y `rar_lauta/`.

### `Diseno/Ejemplo 7/` (Red 7, 2ª síntesis)
- **Cadena IMC/PID:** igual que en Ej. 6, con `script_IMC_ej7`, `script_PID_ej7`, `SUPER_SCRIPT_7`, `script_test_perturbaciones_pos` y el modelo `Red_problema7_imc_v2021.slx`.
- **Corridas PID:** `SIMULACIONES_251118/PID_{desc,full,spar}`. En full hubo que bajar `Kc_per` a 0.2, y el caso `-1-1-1-1` falla en sparse y full.
- **Heredado de la base "Controllable HEN"** (no adaptado al Ej. 7):
  - `Identificacion/`: `procest` / `n4sid` con barrido de Ts.
  - `MPC/`, `MPC_planta`, `MPC_function`, `din_mpc`: MPC con `fmincon` y `mpc`.
  - `Modelo Lineal/`.
  - `Tuneo PID/`: método descartado según `explicacion.txt`.
  - `Solucion Simulacion/`, `valores que funcionan/`.
- **Vacía:** `Soluciones/{Descentralizada,Full,Sparce}/` (placeholders).

### Planillas en `Diseno/`
- `datos_u.xlsx` / `mod_datos_u.xlsx`: barridos de bypasses y fcu, ajustes y matriz de ganancia estática (Red 1).
- `datos_d.xlsx` / `mod_datos_d.xlsx`: barridos de perturbaciones.
- `cualitativo.xlsx`: tabla de sentidos (+ / − / s.e.).
- `Ejemplo 1 - Rediseño.xlsx`, `Ejemplo 6,7 y 8.xlsx`: datos de corrientes, áreas, identificación y pesos MPC. Hay versiones `.ods`.
- `nominales.xlsx`: nominales de las redes 6 y 7.
- `perturbaciones minimas.xlsx`.

### `Cambio de Estructura/` (Problema 2)
Red con utilidad caliente. Usa la S-function `In_ter_hu` / `din_inter_hu` y PIs descentralizados en el punto nominal (`Datos Trabajando en el PN/`) y en el punto de trabajo 2 (`Datos Trabajando en el PC1/`).

- `Tuneo_PID_HEN_control_p1.m`: step tests → `step_test_Inter_*.mat` y controladores `controlador_*.mat`.
- `Bypass_Function.m`: función objetivo para optimizar aperturas de bypass sobre `Red_original_problema2_periodo2_operacion_1_PI.slx`.
- `run_simulacion.m`: deja las ganancias en 0 (placeholders).
- `Resultados Redes/`: áreas finales y bypasses (`RedFinal_Problema2{1,2}.mat`, `Bypass_obtenido_periodos2{1,2}.mat`, `red_p_{1,2}.mat`).
- `soluciones/` y `slprj/` están vacías.

### `RESULTADOS/`
- `resumen_indices_editado_PL.xlsx`: IAE, Eu y offsets de la Red 1.
- `segunda_etapa_indices_reales.xlsx`: Eu e IAE por caso a–d de las redes 6 y 7.
- `TABLA_NO_LINEALIDAD_EJEMPLO_1.xlsx`: Tablas 05 a/b del informe.
- Capturas de las Tablas 1 y 2 y de utilidades de las redes 6 y 7.

## Cómo ejecutar

1. Abrir MATLAB R2021a y hacer `addpath('Diseno/Funciones')`.
2. Ir con `cd` a la carpeta del ejemplo. Los `load` y `save` son relativos.
3. **Corregir las rutas absolutas** antes de correr los scripts de lote. Los scripts esperan `D:\Facultad\!PROYECTO\...`, sin `Carpetas\`, y cortan con `error('No estas en la carpeta correcta')`:
   - `SUPER_SCRIPT_1_*`, `SS_COMPARISION_1`, `SUPER_SCRIPT_6`, `SUPER_SCRIPT_7`, `SS_COMPARISION_X_Y_*_67`, `multicontrol_plotter_*`, `Find_Range_Norm`.
   - `copy_dyn.bat`: falla en silencio y no restaura los `dynamic_inter_*.mat`.
   - `save_metrics_data`, `plot_salidas_vm`, `subfolder_fig_to_jpg`.
   - Otras rutas a corregir: `C:\Users\Usuario\Desktop\Tesina\...` (`run_simulacion.m`), `F:\Matlab\Controllable HEN\...` y una ruta Linux (`MPC_planta.m`) en el material heredado de Ej. 7.
4. Restaurar los estados estacionarios (`reset_dynamic_inter` en Ej. 1, o `ini/` en Ej. 7) antes de cada simulación.




