# Project Contract — CEO · Centro de Especialidades Odontológicas

> Documento de diseño y especificación para la demo comercial del sitio web.
> La fuente de referencia para la marca y los datos del negocio es el sitio actual del cliente: https://www.ceo-odontologia.ar/
> Este contrato es el único documento de verdad de diseño. El Agente Desarrollador implementa sin tomar decisiones de UX/UI.

---

## 1. Business

**Business name:** CEO — Centro de Especialidades Odontológicas

**Industry / category:** Odontología · Centro de especialidades odontológicas (multiespecialidad)

**Location / market:** Córdoba Capital, Argentina — Dean Funes 1307, Bº Quintas de Santa Ana

**Business description:**
Centro odontológico que cubre todas las áreas de la especialidad con tecnología de punta y profesionales de primer nivel. Es una clínica familiar (familia Busleimán) con formación académica de la Facultad de Odontología de la UNC, especialistas en implantología, estética dental, endodoncia, ortodoncia y psicología clínica. Cuenta con tres consultorios equipados, laboratorio propio con protesista, sala de esterilización con autoclave, quirófano exclusivo para cirugías y grupo electrógeno propio. Trabaja con particulares y una amplia red de obras sociales y prepagas.

**Relevant business context (extraído del sitio actual):**
- Filosofía declarada: "la mejor atención mediante la realización de un diagnóstico certero" y "tratamientos personalizados para obtener el mejor resultado, bienestar y seguridad".
- Diferenciadores comunicados por el cliente: tecnología de avanzada (diseño de sonrisa y rehabilitación 3D, prótesis CAD CAM, diagnóstico láser, implantes), instalaciones modernas y cálidas, seguridad (esterilización, quirófano propio, grupo electrógeno), trayectoria académica (profesores y docentes de la UNC).
- El nombre "CEO" refuerza el concepto de centro: un único lugar que cubre todas las especialidades.

---

## 2. Project Objective

**Primary website objective:**
Demo comercial 100% utilizable para presentar al cliente y vender la actualización de su sitio web actual. El sitio debe verse moderno, transmitir confiabilidad y elevar la percepción de la marca hacia un posicionamiento premium ("silent luxury") sin perder la identidad del negocio.

**Primary conversion:**
Solicitud de turno ("Pedí tu turno") — formulario de solicitud de turno en página dedicada `/turnos` + llamada telefónica + WhatsApp directo.

**Secondary conversion:**
- Consultas por formulario de contacto.
- WhatsApp click-to-chat (botón flotante y CTAs).
- Seguimiento en redes sociales (Instagram/Facebook).

**Target audience:**
Adultos de Córdoba Capital con poder adquisitivo alto, urbanos, nivel educativo superior, modernos y elegantes; consumidores de "silent luxury" (lujo discreto): valoran calidad, precisión, higiene, tecnología y trato personalizado por encima de promociones o espectacularidad. Deciden por confianza y reputación.

---

## 3. Brand and Positioning

**Brand personality (extraída de la web del cliente y elevada):**
Precisa, académica, cálida, confiable, discreta y moderna. Es el "centro de especialidades" serio y elegante: habla con autoridad clínica pero con calidez humana. Herencia familiar + excelencia universitaria + tecnología de vanguardia. Nada de ruido: comunicación serena, cuidada, editorial.

**Desired perception:**
Una clínica premium y de confianza: el lugar al que una persona exigente va porque sabe que la van a cuidar, diagnosticar con precisión y tratar con excelencia. Sensación de orden, limpieza, calma y lujo discreto (hospitalidad de hotel, no "consultorio frío").

**Positioning:**
"CEO: todas las especialidades odontológicas bajo un mismo estándar de excelencia." El único centro en el que un paciente puede resolver desde la consulta general hasta la rehabilitación completa 3D sin cambiar de lugar, con tecnología digital y un equipo con formación académica.

**Visual direction:**
Editorial y atemporal, con un aire de "clínica privada europea": mucho aire, tipografía serif elegante, paleta de marfil y navy profundo con acento dorado apagado (champagne). Fotografía cálida y luminosa. Composición asimétrica y generosa. Se aleja del look clínico esterilizado (blanco brillante + azul eléctrico) y del look SaaS genérico (cards redondeadas + gradientes).

**Avoid:**
- Azul eléctrico / celeste brillante (el celeste del sitio actual se descarta o se reduce a detalle mínimo: es el color que más envejece la marca).
- Gradientes, glassmorphism, cards excesivamente redondeadas, tipografía gigante, animaciones decorativas, stock de dentistas sonriendo con dedo gordo arriba.
- Efectismos de "lujo" ostentoso (dorado brillante, dorado a granel, texturas de mármol exageradas).
- Jerga médica densa; el copy debe ser claro, cálido y preciso.

---

## 4. Design System

### Colors

| Token | Hex | Uso |
|---|---|---|
| `--navy-900` (Ink) | `#0E222E` | Fondos oscuros, footer, bandas CTA, texto sobre claro |
| `--navy-800` (Primary) | `#14303F` | Color primario: fondos oscuros, títulos sobre claro, bordes de acento |
| `--steel-500` (Secondary) | `#40667C` | Herencia de la marca: detalles secundarios, iconos suaves, textos secundarios sobre oscuro |
| `--gold-500` (Accent) | `#B08D57` | Acento de lujo discreto: detalles, íconos, subrayados, hover |
| `--gold-300` | `#C9AC7E` | Acento claro sobre fondos oscuros |
| `--ivory-50` (Background) | `#FBF9F6` | Fondo general del sitio (marfil cálido) |
| `--bone-100` (Surface alt) | `#F2EFE9` | Superficies alternas, bandas suaves |
| `--white` (Surface) | `#FFFFFF` | Cards, formularios |
| `--ink-900` (Text) | `#1E2B33` | Texto principal |
| `--slate-500` (Text muted) | `#5A6B75` | Texto secundario, descripciones |
| `--hairline` | `#E5DFD5` | Bordes y separadores (beige-gris cálido) |
| `--success` | `#2F7D5B` | Estados de éxito de formularios |
| `--error` | `#B4473B` | Errores de formulario |
| `--wa-green` | `#25D366` | Exclusivo para el botón flotante de WhatsApp (reconocimiento) |

Reglas de contraste: texto sobre marfil siempre `--ink-900`/`--slate-500`; texto sobre navy siempre blanco/marfil; el dorado solo se usa para grandes textos decorativos, detalles o íconos, nunca para texto de lectura.

### Typography

- **Display:** `Fraunces` (Google Fonts, variable, opsz 9–144, pesos 300–700 + itálica). Serif editorial contemporáneo: sofisticado, cálido, moderno. Se usa en H1, H2, H3 grandes y citas.
- **Body / UI:** `Manrope` (Google Fonts, pesos 300–800). Sans geométrica moderna y legible; guarda el ADN geométrico de la Proxima Nova actual de la marca pero con más refinamiento.
- **Fallbacks:** serif → Georgia, serif; sans → system-ui.

Escala base (desktop / mobile):
- H1: `clamp(2.75rem, 5vw + 1rem, 4.25rem)` · Fraunces 450 · lh 1.05 · ls -0.02em
- H2: `clamp(2rem, 3vw, 2.875rem)` · Fraunces 450 · lh 1.1
- H3: `1.5rem` · Fraunces 500 · lh 1.25
- Eyebrow (etiqueta): `0.75rem` · Manrope 700 · uppercase · ls 0.14em
- Lead / intro: `1.25rem` · Manrope 400 · lh 1.6
- Body: `1.0625rem` · Manrope 400 · lh 1.65
- Small / captions: `0.875rem` · Manrope 400 · lh 1.5
- Botones: `0.9375rem` · Manrope 600

### Visual Characteristics

- **Typography personality:** Contraste serif elegante (titulares) + sans limpia (cuerpo). Titulares con "quiet luxury": sin pesos pesados, preferir regular/medium, con kerning cuidado. Eyebrows en mayúsculas espaciadas como firma editorial.
- **Spacing density:** Generosa y editorial. Padding de sección: 112px desktop / 64px mobile. Container max-width 1200px. Gutters 24px. Los espacios amplios transmiten calma y premium.
- **Border radius approach:** Discreto. Cards: 12px. Inputs: 8px. Imágenes: 4px o 0 (limpias). Botones: pill (999px). Nada de cards "infladas" con radios gigantes.
- **Image treatment:** Fotografía cálida, luminosa, real (sonrisas naturales, tecnología, instalaciones). En héroes y bandas oscuras: imagen + overlay degradado navy (opacidad 65–85%) para legibilidad. Cards de staff: retrato con tratamiento en tono cálido, hover con leve escala. Jamás cliparts ni ilustraciones de "diente feliz".
- **Icon style:** Línea fina (stroke 1.5px), trazo consistente, esquinas suaves. SVG inline. Color por defecto `--steel-500`/`--gold-500` según contexto. No icon packs con estilos mixtos.
- **Use of motion:** Sutil y con propósito. Reveal on scroll (fade + 24px), crossfade de hero, hover suaves, acordeones con transición corta. Nada de loop decorativo. Respetar `prefers-reduced-motion`.
- **Visual hierarchy:** 1) Titular serif grande, 2) eyebrow + lead, 3) contenido con listas de check, 4) CTA primario siempre visible en el área. Divisores hairline para ordenar sin ruido.

---

## 5. Website Architecture

### Pages

1. **Inicio** `/` — Presenta el negocio, genera confianza y deriva a la solicitud de turno.
2. **La Clínica** `/clinica` — Instalaciones, filosofía, tecnología y seguridad.
3. **Servicios** `/servicios` — Índice de las 10 especialidades.
4. **Detalle de Servicio** `/servicios/[slug]` — Plantilla reutilizable (10 páginas).
5. **Profesionales** `/profesionales` — Equipo médico y colaboradores.
6. **Obras Sociales** `/obras-sociales` — Obras sociales y medios de pago.
7. **Contacto** `/contacto` — Formulario, datos de contacto y mapa.
8. **Turnos** `/turnos` — Página de conversión primaria: solicitud de turno.
9. **404** `/404` — Página de error mínima con CTA a Inicio y WhatsApp.

Rutas de servicios (slugs):
| Slug | Servicio |
|---|---|
| `odontologia-general` | Odontología General |
| `diseno-de-sonrisa-3d` | Diseño de Sonrisa y Rehabilitación 3D |
| `implantes` | Implantes Dentales |
| `ortodoncia` | Ortodoncia y Odontopediatría |
| `endodoncia` | Endodoncia |
| `periodoncia` | Periodoncia |
| `blanqueamiento` | Blanqueamiento Dental |
| `protesis-cad-cam` | Prótesis CAD CAM |
| `diagnostico-laser` | Diagnóstico Láser |
| `odontologia-minimamente-invasiva` | Odontología Mínimamente Invasiva |

---

## 6. Page Specifications

> Convenciones globales (aplican a todas las páginas):
> - Header y footer globales (ver sección 7).
> - Botón flotante de WhatsApp en todas las páginas.
> - Todas las imágenes llevan `alt` descriptivo; las decorativas llevan `alt=""`.
> - Cada página tiene H1 único, meta title/description y JSON-LD `Dentist`/`LocalBusiness`.

---

### Page: Inicio `/`

**Purpose:** Capturar al visitante en 5 segundos (qué es, qué ofrece, por qué confiar, qué hacer), y derivarlo a la solicitud de turno.

**Primary user action:** Clic en "Pedir turno" → `/turnos`. Secundarias: "Ver especialidades", WhatsApp, tel.

#### Section 1 — Hero
**Purpose:** Impacto inmediato + propuesta de valor + ruta de conversión.
**Content:**
- Eyebrow: "Córdoba Capital · Centro de Especialidades Odontológicas"
- H1: "Tu sonrisa, en manos de especialistas."
- Sub: "Todas las especialidades odontológicas bajo un mismo estándar de excelencia: tecnología digital de vanguardia, diagnóstico certero y un equipo con formación académica."
- CTAs: [Pedir turno] (primario) · [Ver especialidades] (ghost sobre oscuro)
- Chips de info rápida: "Lun a Vie 9–20 · Sáb 9–13", "Dean Funes 1307, Córdoba", "(0351) 422 7901"
- Scroll cue sutil (chevron animado en fade, solo desktop).
**Layout:** Fondo a pantalla completa: slideshow de 3 imágenes (sonrisa natural, tecnología/consultorio, instalaciones) con crossfade (intervalo 7s, fade 1.2s, pausa al hover/focus) + overlay degradado navy (de `--navy-900` opacidad 0.85 hacia 0.6). Texto alineado a la izquierda sobre el overlay; chips en fila debajo del sub.
**Visual priority:** H1 en blanco/marfil sobre imagen oscurecida; CTA primario dorado-navy (ver componente Button) bien contrastado.
**CTA:** "Pedir turno" → `/turnos` (primario). "Ver especialidades" → `/servicios` (ghost).
**Responsive behavior:** Mobile: texto centrado a la izquierda, altura mínima 100svh, chips apilados y algunos ocultos (mantener horario y tel); CTA primario a ancho completo.

#### Section 2 — Barra de confianza (estadísticas)
**Purpose:** Prueba de solidez en números (sin inventar cifras falsas).
**Content:** 4 métricas factuales:
- "4+" — Profesionales especialistas (los 4 nombrados + equipo)
- "10" — Especialidades odontológicas
- "3D / CAD CAM" — Tecnología digital de diagnóstico y tratamiento
- "100%" — Quirófano exclusivo y esterilización certificada por protocolo (el 100% se refiere a la trazabilidad del proceso, ver Assumptions)

Layout: franja blanca con 4 columnas; métrica en Fraunces grande (navy), etiqueta Manrope pequeña; separadores hairline verticales entre columnas en desktop.

#### Section 3 — Introducción / Bienvenida
**Purpose:** Humanizar y contar la filosofía.
**Content:**
- Eyebrow: "Nuestra clínica"
- H2: "El diagnóstico certero es el punto de partida."
- Párrafo: adaptación del copy real — "CEO es un espacio dedicado a las especialidades odontológicas. Ponemos a tu disposición los últimos adelantos tecnológicos para diagnosticar, prevenir y curar, con instalaciones modernas y cálidas."
- Checklist (4): "Diagnóstico certero antes de cualquier tratamiento", "Plan de tratamiento personalizado con presupuesto detallado", "Materiales de última generación aprobados por asociaciones dentales internacionales", "Atención integral: todas las especialidades en un mismo centro"
- Link CTA: "Conocé la clínica →" → `/clinica`
**Layout:** Dos columnas (60/40): izquierda texto; derecha imagen de clínica (16:10) con card flotante solapada (ficha: dirección + horarios + tel). En mobile: imagen debajo del texto, card flotante dentro de la imagen.

#### Section 4 — Especialidades (grid de servicios)
**Purpose:** Mostrar amplitud del centro + enlace a cada servicio.
**Content:** Eyebrow "Especialidades" · H2 "Un centro, todas las especialidades." · Grid de 10 Service Cards (título, descripción de 1 línea, icono, "Ver más"). Orden: 1) Diseño de Sonrisa 3D, 2) Implantes, 3) Ortodoncia y Odontopediatría, 4) Estética y Blanqueamiento, 5) Endodoncia, 6) Periodoncia, 7) Prótesis CAD CAM, 8) Diagnóstico Láser, 9) Odontología General, 10) Odontología Mínimamente Invasiva. CTA bajo el grid: "Ver todas las especialidades" → `/servicios`.
**Layout:** Grid 3 columnas desktop (10 items + CTA celda final), 2 tablet, 1 mobile. Cards con borde hairline, ícono en la esquina superior, hover: borde dorado + elevación 2px.
**Visual priority:** Las dos primeras cards (Diseño 3D, Implantes) pueden destacarse con ícono dorado y título con serif; el resto con ícono steel.

#### Section 5 — Tecnología (banda oscura)
**Purpose:** Posicionar el diferencial tecnológico (principal argumento de venta del cliente).
**Content:**
- Eyebrow (dorado): "Tecnología de vanguardia"
- H2 (marfil): "Diagnóstico y tratamiento en formato digital."
- 4 items con ícono + título + línea: "Diseño de sonrisa 3D" ("Simulación del resultado antes de comenzar"), "Prótesis CAD CAM" ("Precisión milimétrica en laboratorio propio"), "Diagnóstico láser" ("Menos invasivo, mayor confort"), "Implantología" ("Soluciones fijas y duraderas sobre titanio biocompatible")
- Imagen panel derecho: consultorio/equipamiento con frame dorado fino.
**Layout:** Fondo `--navy-900`; grid 2 columnas (texto+items / imagen). Items en lista de 2×2 con hairline superior.
**CTA:** "Conocé la tecnología en la clínica →" → `/clinica#tecnologia`

#### Section 6 — Experiencia / Instalaciones
**Purpose:** Vender la experiencia y las comodidades.
**Content:**
- Eyebrow "Tu experiencia" · H2 "Pensado para que te sientas cuidado."
- Lista con ícono (6): "Sala de espera climatizada y confortable", "Esterilización con protocolo: lavado, desinfección, embolsado individual y autoclave", "Laboratorio propio con protesista", "Tres consultorios con aparatología moderna", "Quirófano exclusivo para cirugías", "Grupo electrógeno propio: atención que no se suspende"
- Collage de 2–3 imágenes (sala de espera, consultorio, quirófano).
**Layout:** Imagen collage izquierda + texto derecha (o invertido en mobile). Botón ghost "La clínica en detalle" → `/clinica`.

#### Section 7 — Profesionales (preview)
**Purpose:** Confianza por reputación académica.
**Content:** Eyebrow "El equipo" · H2 "Excelencia con formación académica." · 4 Staff Cards (foto placeholder, nombre, especialidad, MP) + 1 card de texto "Equipo de colaboradores: secretarias, protesista, asistentes y anestesiólogo". CTA "Conocé al equipo" → `/profesionales`.
**Layout:** Grid 4 columnas desktop (4 cards + 1 celda CTA), 2 tablet, 1 mobile.

#### Section 8 — Testimonios (contenido DEMO)
**Purpose:** Prueba social (ver Assumptions: contenido demo claramente marcado para reemplazo).
**Content:** Eyebrow "Pacientes" · H2 "Lo que valoran nuestros pacientes." · 3 tarjetas de cita (comillas decorativas, cita de 2–3 líneas, inicial + nombre de pila + inicial de apellido + especialidad, 5 estrellas doradas). Demo copy (ver sección 11 para los textos).
**Layout:** Grid 3 columnas; cards sin borde, solo comillas grandes doradas y hairline superior.

#### Section 9 — Obras sociales (strip)
**Purpose:** Ampliar accesibilidad y generar confianza (afiliados).
**Content:** "Trabajamos con obras sociales y prepagas" + marquesina de logos en texto (galeno, ACA Salud, DASPU, Caja de Abogados, OSPRERA, Poder Judicial de la Nación, y otras) en tipografía sobria. CTA "Ver obras sociales" → `/obras-sociales`.
**Layout:** Franja `--bone-100`; logos en texto mono/sans uppercase con opacidad 0.6, marquesina horizontal lenta (o grid estático en reduced-motion).

#### Section 10 — CTA final
**Purpose:** Conversión última antes del footer.
**Content:** Fondo `--navy-900` · H2 marfil "Tu primera consulta empieza con un diagnóstico certero." · Sub: "Contanos qué necesitás y te acompañamos en cada paso." · CTAs: [Pedir turno] (dorado) · [WhatsApp] (outline marfil) · tel link "(0351) 422 7901".
**Layout:** Centrado, padding generoso.

---

### Page: La Clínica `/clinica`

**Purpose:** Profundizar en instalaciones, filosofía, tecnología y seguridad.

**Primary user action:** CTA a `/turnos`.

#### Section 1 — Page hero
**Content:** Breadcrumb (Inicio / La Clínica) · Eyebrow "La clínica" · H1 "Un espacio pensado para tu bienestar." · Lead: "Instalaciones modernas y cálidas, protocolos de seguridad estrictos y tecnología digital en cada consultorio." · CTA primario "Pedir turno".
**Layout:** Compacto (40–50vh), fondo navy con imagen lateral o inferior; patrón general de "page hero" compartido por todas las páginas internas (breadcrumb + título + lead + CTA sobre banda navy clara).

#### Section 2 — Filosofía
**Content:** Dos columnas: texto (filosofía del diagnóstico certero y el tratamiento personalizado, adaptado del sitio real) + 3 valores con ícono: "Diagnóstico certero", "Tratamiento personalizado", "Bienestar y seguridad".

#### Section 3 — Instalaciones (galería)
**Content:** Eyebrow "Instalaciones" · H2 "Cada detalle, cuidado." · Galería 5 imágenes con caption: Sala de espera climatizada · Consultorios con aparatología moderna · Quirófano exclusivo · Laboratorio con protesista · Sala de esterilización.
**Layout:** Masonry/grid asimétrico (2 filas: 1 imagen grande + 2 medianas + 2 pequeñas); captions en overlay inferior con degradado. Hover: leve escala.

#### Section 4 — Seguridad y protocolos
**Content:** H2 "La seguridad no se negocia." · Lista con ícono (6): esterilización por etapas (lavado, desinfección, embolsado individual, autoclave); instrumental manipulado sin contaminación; materiales de última generación aprobados por asociaciones dentales internacionales; quirófano exclusivo; grupo electrógeno propio; atención telefónica continua en administración.

#### Section 5 — Tecnología (id `#tecnologia`)
**Content:** Banda oscura con los mismos 4 items de tecnología de Inicio + énfasis en que el paciente puede "ver el resultado antes de comenzar" (diseño 3D / encerado).
**CTA:** "Pedir turno" + "Conocer especialidades".

#### Section 6 — CTA band + footer global.

---

### Page: Servicios `/servicios`

**Purpose:** Índice de especialidades y respuesta a objeciones frecuentes.

**Primary user action:** Navegar al detalle del servicio o `/turnos`.

#### Section 1 — Page hero
**Content:** Breadcrumb · Eyebrow "Especialidades" · H1 "Todas las especialidades, un mismo estándar." · Lead: "Del diagnóstico general a la rehabilitación completa: un solo centro para cuidar tu sonrisa integralmente."

#### Section 2 — Grid de servicios
**Content:** 10 Service Cards ampliadas (título, descripción de 1–2 líneas, ícono, "Ver más →"). Orden según sección 5.
**Layout:** Grid 2 columnas desktop (cards más generosas con imagen opcional en la cabecera), 1 mobile.

#### Section 3 — Cómo empezamos (proceso)
**Content:** 3 pasos numerados (01 Diagnóstico completo y evaluación · 02 Plan de tratamiento personalizado y presupuesto detallado · 03 Tratamiento con seguimiento y control). Conectados por línea hairline.
**CTA:** "Empezá por tu diagnóstico →" → `/turnos`.

#### Section 4 — FAQ (acordeón)
**Content:** 5–6 preguntas frecuentes (ver textos en sección 11): ¿Cómo saco un turno? · ¿Atienden obras sociales? · ¿Qué medios de pago aceptan? · ¿Los tratamientos duelen? · ¿Cuánto dura un tratamiento de diseño de sonrisa? · ¿Trabajan con urgencias?
**Layout:** Acordeón con un item abierto por vez; transición 300ms; flecha rota 45°.

#### Section 5 — CTA band + footer.

---

### Page: Detalle de Servicio `/servicios/[slug]` (plantilla)

**Purpose:** Explicar la especialidad, generar deseo y pedir turno.

**Primary user action:** "Pedir turno" → `/turnos` (con servicio preseleccionado vía query param si es factible; si no, a `/turnos` plano).

#### Section 1 — Page hero (compacto)
**Content:** Breadcrumb (Inicio / Servicios / [Servicio]) · Eyebrow "Especialidad" · H1 [Nombre del servicio] · Lead [tagline de 1 línea] · CTAs: [Pedir turno] (primario) · [Consultar por WhatsApp] (ghost).

#### Section 2 — Intro
**Content:** Párrafo de introducción (2–3 líneas, tono educativo y cálido) + imagen representativa.

#### Section 3 — En qué consiste
**Content:** 2–4 párrafos o lista de puntos explicando el tratamiento (copy adaptado del sitio real donde existe: Diseño de Sonrisa, Implantes, Odontología General; para el resto, copy educativo estándar — ver sección 11).

#### Section 4 — Beneficios
**Content:** Checklist con check dorado (4–5 beneficios genéricos plausibles: "Diagnóstico preciso y personalizado", "Plan detallado con presupuesto previo", "Materiales de última generación", "Seguimiento post-tratamiento" — sin prometer resultados clínicos específicos no verificables).

#### Section 5 — Proceso (si aplica)
**Content:** Pasos específicos del servicio (p. ej., Diseño de Sonrisa: 1. Registro y modelos · 2. Análisis digital y encerado · 3. Simulación en boca · 4. Validación y plan). Se definen en la tabla de contenido por servicio.

#### Section 6 — Servicios relacionados
**Content:** 3 Service Cards de servicios afines.

#### Section 7 — CTA band + footer.

**Tabla de contenido por servicio (título · tagline · puntos clave):**

1. **Odontología General** — "El punto de partida de tu salud bucal." — Diagnóstico primario; restauración de caries; prevención; derivación interna al especialista correcto.
2. **Diseño de Sonrisa y Rehabilitación 3D** — "Vé el resultado antes de comenzar." — Simulación digital y encerado; análisis cosmético digital y funcional; restauración provisional de alta estética; plan y presupuesto validado por el paciente. Proceso: 4 pasos (registro/modelos → análisis digital → simulación en boca → validación y plan).
3. **Implantes Dentales** — "Raíces artificiales sobre titanio biocompatible." — Tornillos de titanio biocompatible; prótesis sobre implante en distintos materiales; plan según diagnóstico individual; quirófano propio.
4. **Ortodoncia y Odontopediatría** — "Sonrisas alineadas en todas las edades." — Ortodoncia (niños y adultos, brackets y alineadores); odontopediatría preventiva; atención adaptada a cada edad.
5. **Endodoncia** — "Salvá tu diente natural." — Tratamiento de conducto; conservación de la pieza; técnica con diagnóstico por imagen.
6. **Periodoncia** — "La salud de las encías, la base de todo." — Prevención y tratamiento de encías; control del sarro y la inflamación; mantenimiento periodontal.
7. **Blanqueamiento Dental** — "Una sonrisa más luminosa, con seguridad." — Blanqueamiento profesional; evaluación previa del esmalte; resultados graduales y cuidados.
8. **Prótesis CAD CAM** — "Precisión digital, resultado natural." — Diseño y fresado digital; laboratorio propio con protesista; coronas, carillas y prótesis fijas o removibles.
9. **Diagnóstico Láser** — "Tecnología que reduce la invasión." — Diagnóstico asistido por láser; detección temprana; procedimientos menos invasivos.
10. **Odontología Mínimamente Invasiva** — "Conservar más, intervenir menos." — Enfoque preventivo y conservador; restauraciones mínimas; materiales adhesivos de última generación.

---

### Page: Profesionales `/profesionales`

**Purpose:** Confianza a través de la reputación del equipo.

**Primary user action:** "Pedir turno".

#### Section 1 — Page hero
**Content:** Breadcrumb · Eyebrow "El equipo" · H1 "Profesionales con formación académica y vocación." · Lead: "Un equipo dirigido por especialistas con trayectoria docente en la Facultad de Odontología de la UNC."

#### Section 2 — Staff grid
**Content:** 4 Staff Cards detalladas (foto placeholder profesional, nombre, título, credenciales, MP):
- **Od. Federico Busleiman — MP 5175** · Doctor en Odontología · Profesor Adjunto de la cátedra Operatoria II B · Especialista en Implantología y Estética Dental · Dictante de cursos de posgrado · Secretario de Bienestar Estudiantil, Facultad de Odontología, UNC
- **Od. Ada Gutvay — MP 6865** · Docente de la cátedra Operatoria II B · Posgrado en Endodoncia · Especialista en Estética Dental
- **Od. Bárbara Busleimán — MP 6072** · Posgrado en Ortodoncia
- **Lic. Natalia Busleimán — MP 4897** · Licenciada en Psicología · Psicología clínica: familias y adultos
**Layout:** Grid 4 columnas desktop (cards con foto 4:5, nombre serif, credenciales sans).

#### Section 3 — Equipo de colaboradores
**Content:** Franja clara con íconos: Secretarias administrativas · Protesista dental · Asistentes dentales · Médico anestesiólogo.

#### Section 4 — CTA band ("Reservá tu consulta con nuestro equipo → Pedir turno") + footer.

---

### Page: Obras Sociales `/obras-sociales`

**Purpose:** Responder a afiliados y ampliar conversión.

**Primary user action:** Llamada/turno.

#### Section 1 — Page hero
**Content:** Breadcrumb · Eyebrow "Coberturas" · H1 "Particulares y obras sociales." · Lead: "Atendemos pacientes particulares y afiliados a una amplia red de obras sociales y prepagas."

#### Section 2 — Medios de pago
**Content:** 4 cards con ícono: Contado en efectivo · Tarjetas de crédito (Visa, MasterCard, Naranja, Cordobesa, Kadicard y otras) · Tarjetas de débito (Maestro, Visa Electron) · Cheques.

#### Section 3 — Obras sociales
**Content:** Lista completa (del sitio actual) en grid de chips/columnas:
ACA Salud · OSIAD Salud · Agua y Energía (Capital Federal) · MCA (América Servicios) · AMFFA · AMICOS · AMTTAC · Asociación Eclesiástica San Pedro · Asociación Mutual del Círculo de Suboficiales de la Fuerza Aérea · ATSA · Banco de la Provincia de Córdoba · Bancos Oficiales · Caja de Abogados · Caja de Profesionales del Arte de Curar (Prepago) · Caja Notarial · CBA Dental · Complejidad Médica Córdoba · CPCE · DASPU · Fuerza Aérea Argentina · Galeno Argentina · Gráficos · Hércules · IOSE · IPAM · Molinera · Mutual Federada 25 de Junio · Obra Social Empleados de Farmacia · OSCCPTAC · OSFATLYF · OSITAC · OSPACA-ASISTIR SA · OSPEA · OSPEGAP-CONINTEM · OSPERYHRA · OSPF · OSPIA · OSPIL · OSPIM · OSPRERA · OSSEG · Personal y Empleados de Prensa · Personal Sancor · Poder Judicial de la Nación · Policía Federal · Pren-Salud · Prensa PMO · Red Argentina de Salud · SADAIC · SAL · SerVe-Salud · Volkswagen Argentina (Pre-pago) · FOC Salud Bucal (Pre-pago).
Nota bajo la lista: "¿No encontrás tu obra social? Consultanos por WhatsApp y te confirmamos."
**Layout:** Grid 3 columnas de nombres en texto sobrio; la lista larga puede ir en acordeón desplegable "Ver todas las coberturas".

#### Section 4 — CTA band ("Consultá por tu cobertura → WhatsApp") + footer.

---

### Page: Contacto `/contacto`

**Purpose:** Canal de consulta general.

**Primary user action:** Enviar formulario (éxito simulado + derivación a WhatsApp) o llamar.

#### Section 1 — Page hero
**Content:** Breadcrumb · Eyebrow "Contacto" · H1 "Estamos para ayudarte."

#### Section 2 — Info + Formulario
**Content:**
- Columna izquierda (info): Dirección: Dean Funes 1307, Bº Quintas de Santa Ana, Córdoba · Teléfonos: (0351) 422 7901 / 427 0520 · WhatsApp: +54 9 351 766-0580 · Email: consultas@ceo-odontologia.com.ar · Horarios: Lun a Vie 9–20 · Sáb 9–13 · Redes: Instagram y Facebook (links reales del sitio actual).
- Columna derecha (form): Nombre y apellido · Email · Teléfono · Especialidad de interés (select con las 10) · Mensaje. Botón "Enviar consulta".
**Form behavior:** Validación en cliente; al enviar: estado de éxito ("Recibimos tu consulta. Te responderemos a la brevedad o escribinos por WhatsApp para una respuesta inmediata.") + botón "Continuar por WhatsApp" (abre `wa.me/5493517660580` con mensaje prefijado con los datos del form). Sin backend real (demo).
**Layout:** Grid 2 columnas; inputs 8px radius, labels visibles arriba, errores inline.

#### Section 3 — Mapa
**Content:** Google Maps iframe embebido (Dean Funes 1307, Córdoba), lazy-load, con card solapada de dirección + botón "Cómo llegar" (link a Google Maps).
**Layout:** Mapa a ancho completo (altura ~420px desktop, 280px mobile).

#### Section 4 — Footer global.

---

### Page: Turnos `/turnos`

**Purpose:** Conversión primaria del sitio.

**Primary user action:** Completar el formulario de solicitud de turno.

#### Section 1 — Page hero (compacto)
**Content:** Breadcrumb · Eyebrow "Turnos" · H1 "Pedí tu turno." · Lead: "Completá el formulario y te confirmamos por WhatsApp o teléfono. Respondemos en el horario de atención: Lun a Vie 9–20, Sáb 9–13."

#### Section 2 — Formulario de solicitud de turno
**Content (form):**
- Nombre y apellido*
- Teléfono*
- Email
- Especialidad (select con las 10)
- Preferencia horaria (select: Mañana / Tarde / Sin preferencia)
- Obra social o prepaga (texto, opcional)
- Mensaje / motivo de consulta (textarea, opcional)
- Checkbox de consentimiento de datos (obligatorio, texto demo: "Acepto ser contactado/a por la clínica")
- Botón "Solicitar turno"
**Form behavior:** Validación en cliente (nombre, teléfono válido, especialidad). Al enviar: estado de éxito con resumen de la solicitud + dos acciones: "Confirmar por WhatsApp" (abre `wa.me/5493517660580` con mensaje prefijado que resume la solicitud) y "Llamar ahora" (`tel:+5493514227901`). También fallback email. Sin backend real (demo). Al volver a la página, el form se resetea.

#### Section 3 — Sidebar de apoyo
**Content:** Horarios · Teléfonos · WhatsApp · Nota: "¿Tenés obra social? Consultanos antes de tu visita." · Medios de pago mini (íconos de tarjetas).
**Layout:** Grid 2 columnas (form 65% / sidebar 35%); en mobile el sidebar va debajo del form.

#### Section 4 — FAQ mini (3 preguntas: cómo se confirma el turno, qué llevar a la primera consulta, si atienden urgencias) — acordeón.

#### Section 5 — CTA band secundaria ("Preferís llamar? (0351) 422 7901") + footer.

---

### Page: 404 `/404`

**Content:** H1 "Esta página no existe." · Sub: "Pero tu sonrisa sí." · CTAs: [Volver al inicio] · [WhatsApp]. Sin header redundante; con footer.

---

## 7. Navigation

**Desktop navigation:**
Logo (izquierda) → enlaces: Inicio · La Clínica · Servicios ▾ (dropdown con los 10 servicios, 2 columnas) · Profesionales · Obras Sociales · Contacto → CTA "Pedir turno" (derecha).

**Mobile navigation:**
Hamburguesa → panel deslizante desde la derecha (300ms): logo arriba, enlaces apilados grandes, submenú de Servicios colapsable (acordeón), CTA "Pedir turno" a ancho completo, tel y WhatsApp visibles al final del panel. Cerrar con ✕, tap en overlay, o tecla Esc. El body bloquea el scroll cuando está abierto.

**Sticky / static behavior:**
Header sticky. Estado 1 (solo Inicio, sin scroll): transparente, texto marfil. Estado 2 (scroll > 80px o cualquier página interna): fondo `--ivory-50` con blur ligero (backdrop-filter opcional), texto navy, hairline inferior. Transición 250ms.

**Primary navigation CTA:**
"Pedir turno" → `/turnos` (botón primario pill). En estado transparente del header, el botón es dorado con texto navy; en estado sólido, navy con texto marfil.

---

## 8. Components

### Component: Button
**Purpose:** CTA principal del sitio.
**Structure:** `<a>` o `<button>` pill, padding 14px 28px, Manrope 600, 0.9375rem, ícono opcional.
**Variants:**
- `primary` — fondo `--navy-800`, texto marfil; hover: fondo `--navy-900`.
- `primary-gold` — fondo `--gold-500`, texto `--navy-900`; hover: `--gold-300`.
- `ghost-dark` — borde marfil 1px, texto marfil (sobre fondo oscuro); hover: fondo marfil/10%.
- `ghost-light` — borde navy 1px, texto navy (sobre fondo claro); hover: fondo navy/5%.
- `wa` — fondo `--wa-green`, texto blanco (solo para WhatsApp; hover: darken 5%).
**States:** default, hover (fondo/borde), focus-visible (outline 2px `--gold-500` offset 2px), disabled (opacidad 0.5), active (translateY 1px).
**Interaction:** Hover 200ms ease. Sin animaciones extra.
**Responsive:** En mobile, CTAs primarios pueden ir a ancho completo dentro de secciones hero/form.
**Accessibility:** Enfoque visible, contraste AA, `aria-label` cuando el texto no describe la acción (p. ej., botón de tel).

### Component: Logo
**Purpose:** Identidad visual.
**Structure:** Lockup tipográfico: "CEO" en Fraunces 500 (28–32px, `--navy-800`) + subline "CENTRO DE ESPECIALIDADES ODONTOLÓGICAS" en Manrope 700 uppercase 0.6rem ls 0.2em (`--slate-500`). Si el cliente provee el logo real en PNG/SVG, reemplaza el lockup (documentar en Assumptions).
**Variants:** `on-dark` (texto marfil) para header transparente y footer; `on-light` para header sólido y footer claro.
**Interaction:** Link a `/`.
**Responsive:** En mobile, subline opcionalmente oculto (mantener "CEO").

### Component: Header
**Purpose:** Navegación + CTA persistente.
**Structure:** Contenedor sticky; logo, nav, CTA. Nav desktop con dropdown Servicios.
**States:** `transparent` (solo Inicio, sin scroll) / `solid` (con scroll o páginas internas).
**Interaction:** Dropdown al hover/focus (visible con retardo 0ms, oculto 150ms); flecha chevron rota al abrir; aria-expanded. Clic en "Servicios" en desktop abre el dropdown y lo mantiene con foco.
**Responsive:** Desktop: nav completa. Mobile: hamburguesa + panel.
**Accessibility:** Landmark `<header>`, nav con `aria-label`, skip link antes del header ("Saltar al contenido"), contraste en ambos estados, focus-visible en todos los items.

### Component: Mobile Menu
**Purpose:** Navegación móvil.
**Structure:** Panel fijo derecho (100% ancho mobile, 320px tablet), fondo `--ivory-50`, enlaces grandes Fraunces 1.5rem, submenu acordeón, CTA final, tel + WhatsApp.
**States:** closed (translateX 100%, oculto del AT con `aria-hidden` + `visibility:hidden`) / open.
**Interaction:** Abre con hamburguesa; cierra con ✕, overlay, Esc, o navegación. Body scroll lock. 300ms ease.
**Accessibility:** `aria-expanded` en el trigger, `aria-controls`, focus trap dentro del panel, primer foco en el botón cerrar.

### Component: Footer
**Purpose:** Cierre informativo + SEO + confianza.
**Structure:** Fondo `--navy-900`. 4 columnas: 1) Logo on-dark + descripción breve + redes; 2) Especialidades (links a los 10 servicios); 3) Contacto (dirección, tel, WhatsApp, email); 4) Horarios + CTA "Pedir turno". Bajo todo: hairline y fila legal: "© 2026 CEO — Centro de Especialidades Odontológicas · Demo comercial". 
**Interaction:** Links hover marfil; sin animaciones.
**Responsive:** 4 columnas → 2 tablet → 1 mobile (apiladas).

### Component: Eyebrow
**Purpose:** Etiqueta editorial que abre cada sección.
**Structure:** Manrope 700, 0.75rem, uppercase, ls 0.14em, con línea corta decorativa (40px, 1px, `--gold-500`) a la izquierda en desktop (o centrada según sección).
**Variants:** `on-light` (steel/navy), `on-dark` (dorado `--gold-300`).
**Accessibility:** Es texto, no solo decorativo; mantener en el DOM.

### Component: Section
**Purpose:** Unidad de contenido con espaciado consistente.
**Structure:** Padding vertical 112px desktop / 64px mobile; container 1200px; título H2 + eyebrow + lead opcional; divisor hairline opcional entre secciones.
**Variants:** `light` (marfil), `surface` (bone), `dark` (navy), `white`.

### Component: Service Card
**Purpose:** Presentar una especialidad.
**Structure:** Borde hairline, radius 12px, padding 28px. Ícono (28px, stroke 1.5) arriba; título H3 Fraunces 1.25rem; descripción 1–2 líneas Manrope 0.9375rem `--slate-500`; "Ver más →" Manrope 600 navy.
**Variants:** `default` (ícono steel), `featured` (ícono dorado, usado en Diseño 3D e Implantes), `detail-cta` (celda con CTA).
**States:** hover: borde `--gold-500`, translateY(-2px), sombra suave; focus-visible outline.
**Interaction:** Todo el card clickeable (link stretch) → `/servicios/[slug]`.
**Responsive:** Grid: 3 col desktop, 2 tablet, 1 mobile.

### Component: Staff Card
**Purpose:** Presentar un profesional.
**Structure:** Foto 4:5 (placeholder), nombre Fraunces 1.25rem, título Manrope 600 steel, credenciales Manrope 0.875rem `--slate-500`, MP en caption.
**Interaction:** Hover: imagen escala 1.02; sin link.
**Responsive:** Grid 4 col desktop, 2 tablet, 1 mobile.

### Component: Feature Item (check/ícono)
**Purpose:** Lista de diferenciales.
**Structure:** Fila con ícono (check dorado o ícono línea) + título Manrope 600 + texto opcional. Separador hairline entre items.
**Variants:** `check` / `icon`.
**Responsive:** Puede agruparse en grid 2 col tablet.

### Component: Accordion (FAQ)
**Purpose:** Preguntas frecuentes.
**Structure:** Items con borde hairline superior; pregunta Manrope 600 (button full-width); contenido colapsable; chevron rota 45° al abrir.
**States:** collapsed/expanded (solo uno abierto por vez, o independiente — elegir independiente por simplicidad).
**Interaction:** 300ms ease en alto; `aria-expanded`, `aria-controls`, región con `role="region"`/`aria-labelledby`.
**Responsive:** Ancho máximo 760px centrado.

### Component: Booking/Contact Form
**Purpose:** Captura de leads.
**Structure:** Form con inputs 8px radius, fondo blanco, borde hairline, focus border navy + ring suave; labels visibles (Manrope 0.875rem 600); errores inline en `--error` con mensaje textual; select nativo estilizado; checkbox custom accesible.
**States:** default, focus, error, success. Al enviar: spinner breve (300–600ms, simulado) → panel de éxito con resumen y botones de derivación (WhatsApp / tel).
**Interaction:** Validación en `submit` y blur; mensajes con `aria-live="polite"`; nunca deshabilitar el submit en demo.
**Accessibility:** Todos los campos con `<label>` asociado, `autocomplete` correcto, errores anunciados, contraste AA.

### Component: WhatsApp Floating Button
**Purpose:** Canal de conversación permanente.
**Structure:** Botón circular fijo bottom-right (56px), fondo `--wa-green`, ícono de WhatsApp (SVG oficial), sombra suave. A 24px del borde (móvil: 16px, y 88px si hay barra inferior). `aria-label="Chatear por WhatsApp"`, `target="_blank" rel="noopener"`, link `https://wa.me/5493517660580?text=<mensaje prefijado>`.
**Interaction:** Hover: escala 1.05. Opcional: tooltip al primer hover "¿Te ayudamos?".
**Responsive:** Presente en todas las páginas y viewports.

### Component: Page Hero (interno)
**Purpose:** Apertura consistente de páginas internas.
**Structure:** Banda navy (o marfil con imagen), breadcrumb, eyebrow, H1, lead, CTA. Altura compacta (40–55vh).
**Responsive:** Padding reducido en mobile; breadcrumb puede ocultarse parcialmente (mantener "Inicio / [página]").

### Component: Breadcrumb
**Purpose:** Orientación en páginas internas.
**Structure:** "Inicio / Servicios / Diseño de Sonrisa 3D" en Manrope 0.8125rem `--slate-500`, separador "/", último item actual (sin link), `aria-label="Migas de pan"` + `aria-current="page"`.
**Responsive:** En mobile puede truncarse al último nivel.

### Component: CTA Band
**Purpose:** Cierre conversacional de páginas.
**Structure:** Fondo navy, título Fraunces marfil, sub, 2 CTAs (primario-gold + ghost o wa) + tel link opcional. Padding 96px.
**Responsive:** Contenido centrado, CTAs apilados en mobile.

### Component: Testimonial Card (DEMO)
**Purpose:** Prueba social (demo).
**Structure:** Comilla dorada decorativa, cita Manrope 1rem italic, autor (inicial + nombre), especialidad, 5 estrellas doradas. Hairline superior.
**Responsive:** Grid 3 col desktop, 1 mobile.

### Component: Map Embed
**Purpose:** Ubicación.
**Structure:** Iframe Google Maps (lazy), altura 420px desktop / 280px mobile, filtro de tono cálido opcional (CSS `filter: saturate(0.85) sepia(0.08)`), card solapada con dirección + "Cómo llegar".

### Component: Logo Marquee (obras sociales)
**Purpose:** Lista de coberturas en strip.
**Structure:** Franja bone, nombres en Manrope 600 uppercase 0.8125rem `--slate-500` opacidad 0.7, marquesina CSS lenta (duplicar contenido para loop); `prefers-reduced-motion` → grid estático.
**Responsive:** Mobile: grid 2–3 columnas estático (más accesible).

---

## 9. Interactions and Motion

| # | Trigger | Behavior | Resultado | Duración/feel |
|---|---|---|---|---|
| 1 | Scroll (secciones entran al viewport) | Reveal: opacity 0→1 + translateY(24px)→0, stagger 80ms entre elementos del mismo grupo, IntersectionObserver, una sola vez | Las secciones aparecen con calma | 600–800ms ease-out |
| 2 | Hover en Service/Staff Card | Borde dorado, elevación 2px, imagen escala 1.02 | Feedback táctil elegante | 200ms |
| 3 | Hover en botones | Cambio de fondo/borde | Feedback | 200ms |
| 4 | Scroll > 80px (Inicio) | Header transparente → sólido marfil | Legibilidad y contraste | 250ms |
| 5 | Hero slideshow | Crossfade cada 7s; pausa al hover/focus; `prefers-reduced-motion` → imagen estática | Atmósfera sin distraer | 1.2s fade |
| 6 | Clic hamburguesa (mobile) | Panel desliza desde derecha + overlay + scroll lock | Navegación móvil | 300ms ease |
| 7 | Clic en dropdown "Servicios" (desktop) | Panel aparece con fade+4px; cierra al hacer clic fuera o Esc | Acceso a servicios | 150ms |
| 8 | Clic en acordeón FAQ | Expande/colapsa con transición de alto; chevron rota | Respuesta visible | 300ms ease |
| 9 | Submit de formularios | Validación → spinner simulado 400ms → panel de éxito + opciones WhatsApp/tel | Lead capturado (demo) | 400ms |
| 10 | Hover en botón WhatsApp flotante | Escala 1.05 | Aviso de canal activo | 150ms |
| 11 | Clic anchor ("Conocé la tecnología") | Smooth scroll a `#tecnologia` | Navegación interna | 400ms ease (respetar reduced-motion: instantáneo) |

Reglas:
- Todo scroll-reveal y slideshow respetan `prefers-reduced-motion` (sin movimiento, contenido visible de inmediato).
- No hay animaciones de loop decorativo, parallax obligatorio ni micro-interacciones ornamentales.
- Hover states nunca son la única vía de información (funcionan con teclado vía focus-visible).

---

## 10. Responsive Behavior

### Mobile (≤ 767px)
- Navegación: hamburguesa + panel; submenu acordeón; CTA y contactos al final del panel.
- Héroes: altura 100svh (Inicio) o compactos; CTAs a ancho completo; chips de info apilados.
- Grids: 1 columna (servicios, staff, testimonios, obras sociales, footer).
- Formularios: campos apilados; botón submit full-width.
- Tipografía: H1/H2 usan el mínimo del clamp; body 1rem.
- WhatsApp flotante: 16px de borde; si hay barra inferior (no la hay en el diseño), ajustar a 88px.
- Stats: 2×2 grid; ocultar el separador vertical.
- Mapa: 280px de alto.

### Tablet (768–1023px)
- Grids de 2 columnas (servicios, staff, testimonios); hero en 1 columna con imagen detrás.
- Header: nav completa si entra, si no hamburguesa (decisión del desarrollador según corte real, sin cambiar diseño).
- Stats: 4 columnas pueden pasar a 2×2.

### Desktop (≥ 1024px)
- Container 1200px; héroes con composición asimétrica.
- Dropdown de Servicios en 2 columnas bajo el header.
- Grids de 3–4 columnas según componente; bandas oscuras a ancho completo.
- Reveal on scroll activo (en mobile también, pero con movimiento mínimo).

---

## 11. Content

**Idioma:** Español (AR). Tono: cálido, preciso, sereno; sin tecnicismos innecesarios ni superlativos vacíos.

**Copy requerido:** definido en cada sección de la sección 6. Los textos de marca de las secciones clave (hero, filosofía, tecnología, CTA) están especificados arriba con copy casi final; el desarrollador puede pulir microtextos sin cambiar el sentido.

**Copy demo para testimonios (MARCADO COMO DEMO en el contrato, reemplazable):**
- "Me explicaron todo antes de empezar: el diagnóstico, el plan y el presupuesto. Eso me dio una tranquilidad enorme." — M. R., Diseño de sonrisa
- "Profesionales serios, instalaciones impecables y una atención cálida de principio a fin." — C. L., Implantes
- "Por fin una clínica donde todas las especialidades están en el mismo lugar." — A. S., Ortodoncia
> IMPORTANTE: en el código, estas citas se incluyen dentro de un comentario `<!-- CONTENIDO DEMO: reemplazar por testimonios reales -->` y en el documento se listan como demo. No deben presentarse como reviews verificadas.

**Imágenes:**
- Hero: 3 imágenes (sonrisa natural femenina, consultorio con tecnología, instalaciones cálidas).
- Clínica: sala de espera, consultorio, quirófano, laboratorio, esterilización (5).
- Servicios: 1 imagen representativa por servicio (10).
- Staff: 4 retratos placeholder (4:5) — pueden ser avatares sobrios con iniciales si no hay fotos reales.
- Todas con `alt` descriptivo; cargadas con `loading="lazy"` salvo la primera del hero.
- Fuente de imágenes: banco de imágenes libre (Unsplash/Pexels) o generadas; NUNCA hotlinkear los assets de la web Wix actual. Documentado en Assumptions.

**Íconos:** SVG inline de línea fina (1.5px): diente, sonrisa/3D, implante/raíz, brackets, conducto, encía, destello/blanqueamiento, corona, láser, hoja/mínimamente invasivo, check, teléfono, WhatsApp, horario, ubicación, email, tarjeta, cheque, efectivo, obra social/escudo, chevron, hamburguesa, cerrar, estrella, comillas.

**Datos reales del negocio (usar tal cual):**
- Dirección: Dean Funes 1307, Bº Quintas de Santa Ana, Córdoba
- Teléfonos: (0351) 422 7901 · (0351) 427 0520
- WhatsApp: +54 9 351 766-0580 (principal)
- Emails: consultas@ceo-odontologia.com.ar
- Horarios: Lunes a Viernes 9–20 · Sábados 9–13
- Medios de pago y obras sociales: lista completa en `/obras-sociales` (sección 6)
- Redes: Instagram y Facebook (URLs del sitio actual)
- Staff y MP: sección Profesionales (sección 6)

**Logos:** Lockup tipográfico definido en el componente Logo; reemplazable por el logo real si se dispone.

**SEO:** `lang="es"`, title/description únicos por página, Open Graph con imagen, JSON-LD `Dentist` + `LocalBusiness` en Inicio (dirección, tel, horarios).

**Placeholders:** Todas las fotos no provistas por el cliente se marcan en código con comentario `<!-- placeholder: reemplazar por fotografía real -->`.

---

## 12. Functional Requirements

- [x] Navegación completa (desktop dropdown + mobile menu) con links internos funcionales.
- [x] Formulario de solicitud de turno en `/turnos` con validación y estado de éxito simulado + derivación a WhatsApp/tel.
- [x] Formulario de contacto en `/contacto` con validación y éxito simulado + derivación a WhatsApp.
- [x] Botón flotante de WhatsApp en todas las páginas con mensaje prefijado (`wa.me/5493517660580`).
- [x] Links `tel:` y `mailto:` funcionales.
- [x] Mapa de Google Maps embebido (lazy) en Contacto.
- [x] Acordeón FAQ en Servicios y Turnos.
- [x] Header sticky con cambio de estado al hacer scroll.
- [x] Hero con slideshow crossfade (Inicio) con fallback estático por reduced-motion.
- [x] Smooth scroll a anclas internas (`#tecnologia`).
- [x] Página 404 con CTA.
- [x] Meta SEO + Open Graph + JSON-LD.
- [x] Página responsive 320px → 1920px.

---

## 13. Technical Constraints

- Sitio estático recomendado (HTML/CSS/JS vanilla o Astro/Vite). Sin backend, sin CMS, sin base de datos.
- Todo el contenido es datos demo hardcodeados (ver Assumptions).
- Fuentes: Google Fonts (Fraunces + Manrope). Íconos: SVG inline. Imágenes: locales/optimizadas (webp/avif), sin hotlinking.
- No se requieren librerías de UI; animaciones con CSS + IntersectionObserver.
- Sin dependencias de terceros salvo el embed de Google Maps (opcional y con fallback).
- El Agente Desarrollador elige el resto de detalles técnicos (estructura de archivos, build) siempre que respete este contrato.

---

## 14. Assumptions

1. **Demo comercial:** todo el contenido "de relleno" (testimonios, fotos, algunos textos de servicios) es placeholder realista y está marcado en el código con comentarios. Antes de producción real, el cliente debe proveer fotos reales, testimonios verificables y copys finales. Los datos del negocio (dirección, teléfonos, horarios, obras sociales, staff, servicios) son reales y provienen del sitio actual.
2. **Evolución de marca:** la paleta se deriva del azul/navy de la marca actual (#213D4D → navy refinado) y agrega marfil cálido + dorado apagado para el target "silent luxury". Si el cliente lo rechaza, se conserva el sistema de componentes (solo cambian variables de color).
3. **Logo:** no se dispone del archivo del logo real; se usa un lockup tipográfico. Si se consigue el PNG/SVG, reemplaza al lockup sin cambios de layout.
4. **Fotos:** se usarán imágenes de bancos libres (Unsplash/Pexels) o generadas; no se hotlinkean assets de la web actual.
5. **Métrica "100% esterilización":** el 100% refiere a que todo el instrumental pasa por el protocolo de esterilización (lavado → desinfección → embolsado → autoclave), como describe el cliente. No se afirma certificación externa.
6. **Formularios:** sin backend; el "envío" simula éxito y deriva a WhatsApp/tel para el contacto real. Aceptable para la demo; en producción se conectará a un servicio de email/CRM.
7. **Turnos:** no se implementa agenda en línea real (el cliente hoy reserva por teléfono/WhatsApp); el formulario es una solicitud. Si el cliente pide agenda real, es una fase 2.
8. **WhatsApp principal:** se usa +54 9 351 766-0580 (el del header del sitio actual). El teléfono (0351) 422 7901 se usa para CTAs de llamada.
9. **Nombre del negocio:** en el footer/legal se usa "CEO — Centro de Especialidades Odontológicas".

---

## 15. Acceptance Criteria

El proyecto se considera completo cuando:

- [ ] Las 9 rutas están implementadas: `/`, `/clinica`, `/servicios`, `/servicios/[slug]` (10), `/profesionales`, `/obras-sociales`, `/contacto`, `/turnos`, `/404`.
- [ ] Todas las secciones especificadas en la sección 6 están presentes en orden.
- [ ] La ruta de conversión primaria funciona: `/turnos` → validación → éxito simulado → WhatsApp/tel.
- [ ] El formulario de contacto funciona con validación y éxito simulado.
- [ ] La navegación funciona en mobile y desktop (dropdown + panel móvil + estados del header).
- [ ] El botón flotante de WhatsApp funciona con mensaje prefijado en todas las páginas.
- [ ] Los acordeones, el slideshow del hero (con fallback reduced-motion) y los reveals funcionan.
- [ ] El sitio es responsive de 320px a 1920px según la sección 10.
- [ ] La implementación respeta la dirección visual definida (paleta, tipografías, radios, iconos, spacing, motion).
- [ ] Requisitos de accesibilidad clave: skip link, focus-visible, labels en forms, contraste AA, alt text, landmarks, aria en dropdown/acordeón/menú.
- [ ] Meta SEO, Open Graph y JSON-LD presentes en las páginas principales.
- [ ] Los placeholders demo están marcados con comentarios en el código.
- [ ] Cualquier desviación de este contrato queda documentada.
