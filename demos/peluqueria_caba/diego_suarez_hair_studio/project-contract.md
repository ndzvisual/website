# Project Contract — Diego Suarez Hair Studio

> Contrato de diseño e implementación. Fuente de verdad única para el sitio.
> El Web Developer Agent implementa este documento. No debe tomar decisiones de UX, UI,
> color, tipografía o estructura de página: todo está resuelto acá.
>
> Actualizar en este mismo archivo cuando cambie algo. No crear un segundo contrato.

**Fecha:** septiembre 2026
**Origen:** `sales-contract.md` (mismo directorio) — §10 Design Handoff
**Estado del diseño:** cerrado. Sin decisiones pendientes para el developer.

---

## 1. Contexto

Peluquería boutique en Caballito, CABA. **32 años de operación (desde 1994).** Trabajo de color
e iluminación de alto nivel técnico, cortes, alisados y tratamientos capilares. Atendido por
Diego Suarez, con identidad de oficio fuerte.

El sitio actual es un single-page estático de Mobirise v5.4.1, en AMP, congelado en junio 2023,
que funciona como un cartel que redirige. Tiene un problema objetivo: **los horarios del sitio
(10:00–19:00) contradicen los de la plataforma donde realmente se reserva (9:30–20:30)**, y el
catálogo real, las reglas del negocio y la información de señas viven en Wonoma, no en el dominio
propio.

### Objetivo del sitio

Que la web propia pase de cartel a **el lugar donde la clienta decide y reserva**: ver el catálogo
real, entender las reglas, ver trabajo real, y encontrar la hora exacta, sin contradicciones.

### Hipótesis de conversión

**Hoy:** quien llega ve una página de 2023, con horarios que no coinciden con los de reserva y sin
fotos propias. Sale, o entra a Wonoma sin contexto.

**Propuesta:** quien llega ve trabajo real, un catálogo honesto con sus reglas, el horario correcto
y una vía directa para reservar. La fricción entre "quiero esto" y "tengo turno" baja.

> No se promete aumento de reservas. La hipótesis es de **claridad y confianza**, que es lo que un
> sitio puede honestamente mejorar.

### Posicionamiento

> **"32 años de oficio en Caballito. Trabajo de color con diagnóstico, no con receta."**

El diferenciador no es el producto premium —cualquiera lo compra— es el **oficio de 32 años** y la
**honestidad técnica**: se declara qué no se hace, qué requiere seña, y qué lleva formol.

---

## 2. Alcance

### Qué es

**Una página. Una pantalla larga, no un sitio multipágina.**

Secciones, en orden:

1. Hero
2. Servicios
3. El trabajo (galería)
4. Compromiso
5. Horario y contacto

Más barra de reserva sticky en móvil y footer.

### Qué NO es

- No es e-commerce. No hay carrito, pagos, cuentas ni checkout.
- No es un blog.
- No es un sistema de reservas propio. **La vía de reserva existente (Wonoma) se conserva
  íntegra.** La web informa y deriva, no reemplaza.
- No hay landing pages ni páginas de campaña adicionales.

### Conversión

Una sola, y todo el diseño empuja a ella:

> **Reservar turno.**

Secundaria: **escribir por WhatsApp.**

Cero elementos que compitan con esa acción. Si un componente no acerca a una de las dos, no va.

---

## 3. Audiencia

| Segmento | Peso | Qué necesita |
|---|---|---|
| Mujeres 35–65, Caballito / centro-norte de CABA | Principal | Ver trabajo real antes de comprometerse a un color técnico. Confianza en el oficio. |
| Hombres (corte caballero, color hombre) | Secundario | Rapidez para reservar, horarios claros. |
| Clienta de mantenimiento | Recurrente | Confirmar que el lugar sigue ahí y sacar turno rápido. Es el mayor valor del negocio: vuelve cada 6–8 semanas. |
| Clienta nueva | Adquisición | Ver fotos, entender reglas, encontrar la hora. Llega por recomendación, Google o Instagram. |

**Resuelve desde el celular.** Es el caso por defecto. La clienta está en el barrio, probablemente
de pie, probablemente con una sola mano.

---

## 4. Dirección de diseño

Tres principios. Gobiernan cualquier decisión que el developer tenga que tomar.

**1. Editorial, no catálogo.**
Referencia: revista de oficio, cuaderno de trabajo de salón. No una landing de SaaS, no un
template de belleza. La foto manda; la interfaz desaparece.

**2. La foto es el producto.**
En peluquería, sin fotos el sitio no vende. El sistema existe, ante todo, para que la fotografía
de trabajo real se vea bien. Todo lo demás se subordina a eso.

**3. Honestidad como estética.**
El salón declara qué no hace, qué lleva seña, qué lleva formol. El sistema tiene que poder mostrar
eso con dignidad, sin disimularlo ni esconderlo en letra chica.

### Lo que este sitio explícitamente no es

- Sin degradados, salvo el único justificado en §5.7.
- Sin glassmorphism, sin blobs, sin glow, sin neón.
- Sin tarjetas flotantes con sombra suave. La separación es por hairline.
- Sin tipografía display gigante ni hero de altura completa.
- Sin iconos decorativos. Los que existen, son de función.
- Sin modo oscuro. Las fotos reales y el contexto de salón se leen mejor en claro, y un modo oscuro
  inventado sobre fotos reales es un castigo visual.
- Sin badges, premios, certificaciones, reseñas ni logos de stock.

---

## 5. Design system

### 5.1 Color

**Base neutra fría + violeta amatista como acento único.**

El cobre, terracota y dorado cálido quedan descartados: son el registro por defecto de las
plantillas generadas. El violeta tiene justificación de ofício — en colorimetría es el color que
neutraliza amarillos y naranjas en un balayage y el primer paso del pastel-ization. No es un acento
decorativo: es el color con el que trabaja un colorista.

#### Escala neutra

| Token | Valor | Uso |
|---|---|---|
| `ink` | `#14131A` | Texto principal, secciones invertidas, footer. Negro con velo violáceo, **no** `#000`. |
| `ink-soft` | `#2A2833` | Fondo de bloques dentro de secciones oscuras. |
| `gray-700` | `#55525E` | Texto secundario fuerte, descripciones. |
| `gray-500` | `#837F8B` | Metadatos, labels, weekdays. |
| `gray-300` | `#B5B1BC` | Texto deshabilitado, placeholder. |
| `line` | `#E4E2E7` | Hairlines, bordes de input, separadores. |
| `paper` | `#F5F4F3` | Fondo global. Casi blanco, no blanco puro. |
| `white` | `#FFFFFF` | Superficies elevadas sobre `paper`, barra sticky. |

#### Escala violeta

| Token | Valor | Uso |
|---|---|---|
| `violet-700` | `#4B2E70` | Gradiente, violeta sobre superficie clara que necesita más peso. |
| `violet-500` | `#6B4A9E` | **Acento funcional.** Botones, enlaces, foco, estados activos. |
| `violet-300` | `#B9A3D9` | Violeta sobre `ink`. |
| `violet-100` | `#EDE7F5` | Wash, fondos de estado, zonas-BY. |
| `violet-deep` | `#2E1B45` | Fondos oscuros de acento, sombras de violeta. |

#### Reglas de uso del acento

1. **Funcional por defecto.** Violeta solo donde hay acción o dato: botón, enlace, foco de teclado,
   fila de "hoy" del horario, filete de la nota honesta.
2. **Máximo dos momentos expresivos por página.** El racimo hexagonal del hero y la cifra "32".
   Ambos declarados, ninguno decorativo.
3. **Nunca en bloques grandes.** Un panel violeta de altura considerable o una sección entera
   violeta convierte el acento en tema, y ahí empieza a verse marca de cosmetics.
4. **Nunca violeta saturado como texto chico sobre `paper` para links.** Se usa `gray-700` con
   subrayado, y el violeta aparece en el subrayado o en hover.
5. **Nunca violeta + brillo.** Si algo brilla, es el foco de teclado o un hover, y brilla en
   `violet-500` a secas.

#### Contraste (verificado)

| Combinación | Ratio | AA |
|---|---|---|
| `ink` sobre `paper` | 15.8:1 | Sí |
| `gray-700` sobre `paper` | 6.9:1 | Sí |
| `violet-500` sobre `white` (texto de botón) | 6.8:1 | Sí |
| `violet-500` sobre `paper` | 6.1:1 | Sí |
| `violet-300` sobre `ink` | 7.9:1 | Sí |

> El developer debe re-verificar estos ratios al implementar, medidos contra el fondo con patrón
> hexagonal renderizado donde aplique. Ver §9.3.

### 5.2 Tipografía

Dos familias. Ninguna más.

**`Fraunces`** (variable, soft-serif) — display.
Titulares, cifras, el nombre del salón. Tiene calor y un punto de artesanía sin caer en lo
gótico. Weight 400–500.
- Display: `clamp(2.25rem, 6vw, 4rem)`
- `letter-spacing: -0.02em`
- `line-height: 1.05`

**`Inter`** — texto, UI, tablas, etiquetas.
Weight 400–600.
- Cuerpo: `1rem` móvil (nunca menos) / `1.0625rem` desktop
- `line-height: 1.6`
- Dígitos tabulares activados en toda la tabla de horario

**Tercer rol, no tercera familia: el label.**
`Inter`, `text-transform: uppercase`, `letter-spacing: 0.14em`, `0.6875rem`, weight 600, color
`gray-500`. Reemplaza al eyebrow. Se usa para `HORARIO`, `DESDE 1994`, `CATEGORÍA`, `DESDE $0`.

> **Regla central:** el cuerpo nunca baja de `1rem` en móvil, y los titulares de sección no pasan de
> `2.5rem`. El exceso de tamaño es lo que hace que una peluquería de barrio parezca una app de
> fitness.

Ambas familias soportan español rioplatense con tildes y `ñ` correctas. Verificar el subset antes de
publicar.

### 5.3 Espaciado

Escala base **4px**: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`.

| Contexto | Valor |
|---|---|
| Padding de sección, vertical | `64px` móvil / `128px` desktop |
| Padding lateral de página | `20px` móvil / `24px` desktop |
| Gap entre filas de servicio | `24px` |
| Padding de celda de servicio | `20px` vertical |
| Gap entre bloques internos | `48px` móvil / `64px` desktop |

El ritmo vertical es lo que hace que el sitio se vea armado. Es constante en todas las secciones,
sin excepciones.

### 5.4 Grilla

- **Móvil (base):** 4 columnas, gutter `20px`, padding lateral `20px`.
- **Desktop `≥1024px`:** 12 columnas, gutter `24px`, ancho máximo `1240px`, centrado.

**Regla de composición:** página de columna editorial de `640–720px` de ancho con imágenes que
salen del texto a ancho completo. Full-bleed de foto + columna de texto angosta. Es el patrón de
revista y es lo que separa esto de una página de template.

### 5.5 Superficie, radio, sombra

- **Radio: `2px`** en botones e inputs. `0` en imágenes y hr. `999px` solo en el pill de estado de
  servicio.
- **Sombras: ninguna.** La separación es por `line` de 1px y por cambio de superficie
  (`paper` ↔ `white` ↔ `ink`).
- **Única excepción:** la barra sticky de móvil, con borde superior `1px line`, sin sombra difusa.
- **Nunca `box-shadow` decorativa.** Si un componente necesita profundidad, es porque no es una
  superficie elevada.

### 5.6 Foco

```css
:focus-visible {
  outline: 2px solid #6B4A9E;
  outline-offset: 2px;
}
```

Obligatorio en **todo** elemento interactivo, sin excepción. Esto corrige directamente el
`*:focus { outline: none }` global que tiene el sitio actual.

Nunca se debe escribir un `outline: none` sin reemplazo. Si un componente no quiere anillo visible
en un estado, se usa `:focus-visible`, no `:focus`.

### 5.7 Patrón hexagonal

El local tiene una hexagonada en las paredes. Se replica como background de la landing.

> **Regla que decide si funciona: el hexágono es el sustrato, nunca el sujeto.**
> La foto de trabajo real es la protagonista. El patrón existe para que el sitio tenga textura de
> lugar. **No aparece nunca detrás de una foto de trabajo.**

#### Construcción

- **Hexágonos rellenos, no contorneados.** Los rellenos a baja opacidad leen como textura
  (azulejada). Los contornos leen como diagrama, y aparece de golpe el registro crypto/tech.
  Esta decisión sola evita la mayor parte de los errores.
- **Nunca hexágonos con borde `violet`.** Ni un solo caso.
- Un solo `<pattern>` SVG flat, reutilizado vía `background-image`. Nada de PNG base64 (se ve borroso
  en retina) ni de gradientes CSS para hexagonal (las uniones no cierran).
- **Mínimo `64px` de ancho de hexágono.** Por debajo de ~56px, en pantalla 2x/3x, los rellenos a
  baja opacidad se convierten en ruido. En móvil los hexágonos van **más grandes en proporción**,
  nunca más chicos.
- Estático. Sin morph, sin drift, sin crossfade al hacer scroll.
- `pointer-events: none`. Marcado como decorativo.
- Sin `background-attachment: fixed` en mobile.

#### Dos intensidades, y solo dos

| Nivel | Opacidad | Tamaño de hex | Dónde |
|---|---|---|---|
| `hex-micro` | 2–4% | `64–96px` | Secciones largas, bloques secundarios, footer. Se siente, no se ve. |
| `hex-soft` | 6–8% | `160–220px` | Hero sobre superficie plana, panel puntual. |

Nunca más de 8%. A partir de ahí deja de ser textura y pasa a ser patrón decorativo.

| Fondo | Color del relleno |
|---|---|
| `paper` | `gray-500` al 3% |
| `ink` | `violet-300` al 6% |

#### El racimo — el único gradiente permitido

Un grupo de **5 a 7 hexágonos agrupados**, con gradiente vertical individual de `violet-700` a
`violet-300` — oscurecimiento en la raíz, luz en las puntas. Es un balayage dibujado: mismo gesto de
luz concentrada sobre fondo que el trabajo del salón.

Aparece **una sola vez**, en el hero, sangrando por el borde derecho, con la base a ~85% de opacidad.
En el footer puede reaparecer en versión chica para marcar continuidad, sin más momentos
expresivos.

> Es el único gradiente del sistema, y está justificado porque *deporta la técnica*. Un violeta
> plano es template; un gradiente que dibuja una raíz oscura y una punta clara es oficio.

#### Mapa de ubicación

| Zona | Patrón |
|---|---|
| Hero (fondo plano) | `hex-soft` + racimo `violet-700 → violet-300` |
| Servicios | **Nada** — `paper` liso, filas con hairline |
| El trabajo / galería | **Nada** — fotos sobre `paper` |
| Compromiso | `hex-micro`, alternativa a un panel sólido |
| Horario | **Nada** — la tabla necesita fondo plano |
| Formulario | **Nada** |
| Footer | `hex-micro` + versión chica del racimo |
| Barra sticky | **Nunca** — legibilidad |

### 5.8 Movimiento

Casi nada, y bien hecho.

- Entrada de contenido: **fade + 8px de desplazamiento, `240ms`, `cubic-bezier(.2,.6,.2,1)`**,
  disparado por `IntersectionObserver`, una sola vez. No se repite al volver a hacer scroll.
- Hover: `120ms` solo en color y borde. Nunca escalado.
- **Cero animación vinculada al scroll. Cero parallax. Cero brillo.** Un local de 32 años no se
  anima como una landing de startup.
- Bajo `prefers-reduced-motion: reduce`: sin transformaciones, sin fades.

---

## 6. Estructura de página

Orden fijo. Cada bloque indica su contenido, su regla de layout y su comportamiento responsive.

### 6.1 Header

- Fijo en desktop, pegado arriba. En móvil no ocupa header fijo: **la barra sticky hace ese
  trabajo** y un header fijo + barra sticky dejarían 100px de cromo en una pantalla de 640px.
- Contenido: nombre del salón a la izquierda, dos acciones a la derecha.
- Fondo `paper` con borde inferior `1px line` que aparece al hacer scroll (no siempre).
- Actions: `Reservar turno` (botón primario) + icono de WhatsApp con `aria-label` descriptivo.

### 6.2 Hero

**Layout:** dos columnas en desktop (`1.05fr / 1fr`), apilado en móvil con foto primero.

**Contenido:**
- Label: `DESDE 1994 · CABALLITO`
- H1: `Diego Suarez Hair Studio` en Fraunces
- Bajada: una frase de propuesta de valor, en primera persona de Diego. Ejemplo de encuadre:
  *Color e iluminación con diagnóstico previo. Caballito, desde 1994.*
- Dos acciones: `Reservar turno` (primario) + `Escribinos por WhatsApp` (secundario)
- Cifra insignia: **32** en Fraunces, `3.5–4rem`, con label `años en Caballito` en `violet-500`.
  Es uno de los dos momentos expresivos del sistema.
- Fondo: `paper` con `hex-soft` y el racimo hexagonal en `violet-700 → violet-300` sangrando por el
  borde derecho.

**Restricción dura:** el hero **no lleva fotografía de fondo**. La fotografía real del salón, si la
hay, va a体内的 en la sección de galería. El hero es color + tipografía + patrón.

> No usar fotografía de campaña de L'Oréal ni ninguna imagen de marca de producto. Es un problema
> de credibilidad y de derechos.

**Móvil:** H1 a `2.25rem`, botones full-width apilados, racimo reducido a 4 hexágonos o escondido
si compite con el texto.

### 6.3 Servicios

**Layout:** bloques por categoría, sin grid de tarjetas. Filas apiladas a ancho de columna.

**Contenido:** el catálogo real de **~16 servicios** tomado de Wonoma, agrupado por intención:

| Categoría | Servicios |
|---|---|
| **Corte** | Caballero · Dama · Flequillo |
| **Color** | Color · Color hombre · Color y mechas simultáneas · Baño de luz / remontación |
| **Iluminación** | Balayage / baby light y derivados · Reflejos con gorra · Reflejos con papel |
| **Tratamientos** | Bótox · Shock · Disciplinador · Hair spa · Lavados nutritivos |
| **Alisados** | Según tipo de cabello, con o sin formol y/o derivados |

**Presentar los servicios como filas, no como cards.** Cada fila lleva nombre, duración cuando
conozcamos el dato real, y el pill de estado correspondiente: `CON SEÑA`, `SIN TURNO` o
`SEGÚN DIAGNÓSTICO`.

> **No publicar precios.** No hay ninguno publicado en ninguna fuente. Dejar el espacio listo para
> que el cliente los cargue, o directamente no mostrarlo. Si aparecen, el formato es
> `DESDE $ 0.000` en `gray-500` a la derecha de la fila.

**Cierre de sección:** la nota honesta sobre lo que no se hace (§7.4), en `violet-100` con filete
`2px violet-500`.

### 6.4 El trabajo — galería

**Layout:** grilla asimétrica en desktop, scroll horizontal con snap en móvil.

> **Esta es la sección que más falta hace y la que más vende.** Es el producto. Le corresponde el
> mayor espacio vertical de la página.

**Desktop:** grilla de 2 filas asimétricas — una imagen ancha, una angosta, y un slot vertical más
alto que rompe la retícula. Nunca una grilla de 3 iguales: se ve template.

**Móvil:** carrusel horizontal, una foto por viewport y un 20% de la siguiente. Así se ve que hay
más sin que la página se alargue.

**Contenido:** con fotos reales, antes/después de balayage, mechas, color, alisado, bótox. Caption
por foto en `gray-500`, 0.875rem, discreta.

**Si no hay fotos:** el developer construye los **marcos de placeholder** definidos en §7.5. No
deja rectángulos grises genéricos.

**Cada foto es real del salón o un placeholder marcado como tal. Nunca stock presentada como
trabajo de clienta real.**

### 6.5 Compromiso

**Layout:** columna angosta (`560–640px`), centrada, con mucho aire. Fondo `paper` con `hex-micro`.

**Contenido:** versión pulida del texto "Mi compromiso" del sitio actual, **conservando la voz en
primera persona del titular**. Es la mejor pieza de contenido que tiene el negocio: exclusividad,
privacidad, diagnóstico previo, salud del cabello antes que resultado, producto premium.

> **Regla de voz:** el texto habla como Diego, no como el negocio. *mi diagnóstico*, *atiendo*,
> *trabajo con* — nunca *se ofrece*, *se realiza*, *contamos con*.
>
> Tono: cercano, profesional, sin exageración, sin adjectives de marketing.

**Cierre:** label `PRODUCTOS` con `Wella · Tigi · L'Oréal · Schwarzkopf` en `Inter` 0.8125rem
`gray-500`, separados por hairline vertical. **Sin logo salvo que el cliente entregue los archivos
con permiso escrito.** Por ahora, texto.

### 6.6 Horario y contacto

**Layout:** dos columnas en desktop. Izquierda: horario + mapa. Derecha: dirección, WhatsApp y
formulario.

> **Esta sección es la que demuestra el argumento comercial sin decirlo.** El horario
> `9:30 – 20:30` tiene que ser legible, correcto y el elemento visual más sólido de la página.

**Horario** — componente tabla, con weekdays y horas en `Inter` con dígitos tabulares:

| Día | Horario |
|---|---|
| Lunes | Cerrado |
| **Martes a sábado** | **9:30 – 20:30** |
| Domingo | Cerrado |

Con `2px` de filete `violet-500` a la izquierda de la fila del día actual, y `gray-300` en las filas
de cerrado.

**Bloques de información:**
- `DIRECCIÓN` — Av. Juan Bautista Alberdi 624, 1° A, entre Riglos y Calazans, Caballito, CABA
- `TURNOS` — Solo con cita previa. Link a Wonoma (se conserva la vía existente).
- `WHATSAPP` — 11 2865 9698, **solo mensajes, para reservas**
- `LAVADOS NUTRITIVOS Y HAIR SPA` — se hacen sin turno, se piden al llegar al local
- `SEÑAS` — Requieren seña: balayage y baby light, color con mechas simultáneas, reflejos con
  gorra o papel, alisados
- Mapa embebido de la dirección

**Formulario de contacto propio** — 3 campos, ver §7.6. Es la primera captura real del sitio.

### 6.7 Footer

Fondo `ink`, texto `white`, con `hex-micro` en `violet-300` al 6% y la versión chica del racimo
marcando continuidad con el hero.

Contenido: nombre del salón, `Desde 1994`, dirección, WhatsApp, y links a Instagram y Facebook.
Año **2026** en `gray-500`. **Sin franja de publicidad de builder, sin marca de builder.**

---

## 7. Componentes

Especificación completa. El developer no necesita interpretar nada acá.

### 7.1 Botón primario

- Fondo `violet-500`, texto `white`, sin borde, radio `2px`, sin sombra.
- Alto: `48px` móvil / `52px` desktop. Padding horizontal `24px`.
- Tipografía: `Inter` 0.9375rem, weight 600.
- Full-width en móvil.
- Hover: fondo `violet-700`, `120ms`.
- Transiciones solo de color. Nunca escalado.
- Único botón primario por bloque visible. Nunca dos primarios lado a lado.

### 7.2 Botón secundario

- Fondo transparente, borde `1px line`, texto `ink`, radio `2px`, sin sombra.
- Mismas medidas que el primario.
- Hover: borde `gray-500`, texto `violet-700`.

### 7.3 Barra sticky de reserva — móvil

**Es el elemento de conversión más importante del sistema.**

- Fija abajo, solo visible en `< 1024px`.
- Fondo `white`, borde superior `1px line`. **Sin violeta de fondo, sin sombra difusa.**
- Contiene: botón primario `Reservar turno` (flex 1) + botón de icono WhatsApp (48×48, mismo
  radio y borde que el secundario, `aria-label="Escribinos por WhatsApp"`).
- Alto total `64px`. Se compensa con `padding-bottom` del body para que no tape contenido.
- Aparece al hacer scroll pasado el hero, con fade de `240ms`. Se oculta en el hero, donde ya
  están las dos acciones.
- **Nunca lleva patrón hexagonal.**
- El target táctil mínimo es `48px` de alto en toda la barra.

### 7.4 Nota honesta

Para "qué no se hace", "qué lleva formol", "qué requiere seña". Es lo que diferencia este sitio de
un template.

- Fondo `violet-100`, filete izquierdo `2px` `violet-500`, padding `20px 24px`, radio `2px`.
- Texto `ink`, 0.9375rem, `line-height: 1.6`.
- Label en `Inter` uppercase `0.6875rem` weight 600 `gray-500`.
- Máximo **dos por página**, para que se lea como decisión y no como relleno.

### 7.5 Marco de foto — placeholder

- Fondo `paper`, borde `1px` punteado `gray-300`, radio `0`.
- Label en esquina superior izquierda: `Inter` uppercase `0.6875rem` `gray-500`.
- Descriptor debajo, `Inter` 0.8125rem `gray-500`, en la posición donde irá el `alt` real.
- Proporción fija para no generar layout shift: `4/5` en móvil, `3/2` en horizontal, `2/3` en el
  slot vertical.
- **Nunca un rectángulo gris genérico sin etiqueta.** Un placeholder bien hecho vende la idea de lo
  que falta.

### 7.6 Fila de servicio

**La pieza central de la sección de servicios. No es una card.**

```
┌──────────────────────────────────────────────────────┐
│ Balayage y baby light                    [CON SEÑA]  │
│ Diagnóstico previo en color y condición.             │
└──────────────────────────────────────────────────────┘
  ↑ nombre: Inter 17px, ink        ↑ pill: 11px, uppercase
    descripción: Inter 14px, gray-700
```

- Grid de 2 columnas: `1fr auto`. Alineado, sin floats.
- Separación entre filas: `1px line`. Sin card, sin fondo, sin radio, sin sombra.
- Nombre: `Inter` `1.0625rem` weight 500 `ink`.
- Descripción: `Inter` 0.875rem `gray-700`, `line-height: 1.5`. Máximo 2 líneas.
- Pill de estado: `Inter` uppercase `0.6875rem` weight 600, tracking `0.14em`, padding `4px 10px`,
  radio `999px`.
  - `CON SEÑA` → fondo `violet-100`, texto `violet-700`
  - `SIN TURNO` → fondo `gray-500` al 12%, texto `gray-700`
  - `SEGÚN DIAGNÓSTICO` → fondo `gray-500` al 12%, texto `gray-700`
- Precio (solo si el cliente lo provee): a la derecha del nombre, `Inter` 0.875rem `gray-500`.

### 7.7 Tabla de horario

- Grid de 2 columnas, `1fr auto`. `Inter` con `font-variant-numeric: tabular-nums`.
- Días en `gray-700`, peso 500. Horas en `ink`, peso 600.
- Filas de cerrado: `gray-300` en ambos campos, sin filete.
- Fila del día actual: filete izquierdo `2px` `violet-500`, padding-left `16px`.
- Altura de fila `44px` mínimo, para el target táctil.
- Sin bordes verticales, sin zebra, sin zebra gris. Solo hairline inferior `1px line`.

### 7.8 Cifra insignia "32"

- `Fraunces` weight 500, `clamp(3.5rem, 8vw, 4rem)`, `line-height: 1`, `letter-spacing: -0.02em`.
- Color `ink`.
- Label debajo: `Inter` uppercase `0.6875rem` weight 600 `violet-500`, tracking `0.14em`.
- **Nunca** en `violet-500` sólido. Es la cifra de trayectoria, y el peso lo tiene que llevar la
  tinta; el violeta sostiene el label.

### 7.9 Barra de productos

`Wella · Tigi · L'Oréal · Schwarzkopf`
`Inter` 0.8125rem `gray-500`, separados por `1px line` vertical.
**Sin logo** hasta que el cliente entregue los archivos con permiso escrito.

### 7.10 Formulario de contacto

Tres campos, en este orden:

1. **Nombre** — `text`, `autocomplete="name"`
2. **Teléfono o WhatsApp** — `tel`, `autocomplete="tel"`
3. **Qué necesitás** — `select`: `Reservar turno` · `Consulta por un servicio` · `Lavado o hair
   spa (sin turno)` · `Otro`

- Label **arriba** del campo, `Inter` 0.8125rem `gray-700`, `3px` de gap.
- Input: alto `48px`, radio `2px`, borde `1px line`, fondo `white`, texto `ink`.
- Placeholder: `gray-300`.
- Foco: borde `violet-500` + anillo de foco §5.6. Nunca se quita el anillo.
- Error: texto bajo el campo, `Inter` 0.8125rem `ink`, con ícono. **Nunca rojo genérico** — el
  rojo rompe la paleta y además no survives bien el contexto.
  - Nota: el estado de error necesita peso visual. Se resuelve con el ícono y el borde del campo,
    no con un color ajeno a la escala.
- Submit: botón primario, full-width en móvil, `Enviar consulta`.
- Confirmación de éxito: mensaje en `violet-100` con filete `2px violet-500`, reemplaza al formulario
  sin recargar la página.
- `action` y método a definir por el developer. **El contrato no especifica backend.**

---

## 8. Responsive

Mobile-first. El móvil es el diseño base, no una reducción del desktop.

| Elemento | Móvil `< 768px` | Tablet `768–1023px` | Desktop `≥ 1024px` |
|---|---|---|---|
| Grilla | 4 col, gutter 20, padding 20 | 8 col, gutter 20 | 12 col, gutter 24, max 1240 |
| Header | Sin header fijo — solo barra sticky | Fijo, sin barra sticky | Fijo, sin barra sticky |
| Hero | Apilado. H1 `2.25rem`. Botones full-width apilados. | 2 col, ratio `1fr 1fr` | 2 col, `1.05fr 1fr` |
| Servicios | Filas apiladas, pill debajo del nombre | Filas | Filas en 2 columnas por categoría |
| Galería | Carrusel horizontal con snap, 1 foto por viewport + 20% | Grilla de 2 | Grilla asimétrica 2 filas |
| Horario y contacto | 1 columna: horario, datos, formulario, mapa | 2 columnas | 2 columnas `1fr 1fr` |
| Barra sticky | Visible, `64px` | Oculta | Oculta |
| Patrón hex | Hexágonos **más grandes** en proporción | Tamaño de tablet | Tamaño de desktop |
| Formulario | Labels arriba, full-width | 2 col | 1 col |

**Reglas transversales:**

- Cuerpo nunca bajo `1rem` en móvil.
- Targets táctiles ≥ `48px` de alto en todo lo interactivo, **incluidas las filas del horario**.
- Un solo ítem del carrusel de galería visible a la vez, con peek de la siguiente.
- Sin hover-dependent en táctil. Todo lo que se revela en hover tiene equivalente en tap, o no
  depende de hover.
- La imagen de la galería nunca se estira: `object-fit: cover` con proporciones fijas por breakpoint.

---

## 9. Fotografía

No es un token, pero es la mitad del sistema.

### Dirección

- **Luz natural de ventana, sin flash, sin retoque de marca.** El brillo de un balayage bien
  iluminado es más creíble que un pelo perfecto de campaña.
- **Encuadre a la altura de los ojos**, pelo como sujeto, fondo del salón reconocible. Si no se ve
  que es un local real de barrio, no sirve: **el local es la prueba de que existe hace 32 años.**
- Consistencia entre fotos: mismo tratamiento, mismo fondo, misma distancia. La galería debe leerse
  como un mismo trabajo sostenido en el tiempo.
- Nada de foto de campaña de marca de producto. Nada de stock genérico.

### Textos alternativos

Cada foto lleva `alt` descriptivo del trabajo, no del archivo:

```
alt="Balayage con raíz natural sobre cabello castaño — Diego Suarez Hair Studio, Caballito"
```

> **Prohibido** `alt="Mobirise"`, nombres de archivo (`unnamed-1-1076x942.jpg`), o descripciones
> genéricas. Es un defecto del sitio actual y una falla de accesibilidad al mismo tiempo.

---

## 10. Accesibilidad

No es un extra. Son tokens del sistema.

| Requisito | Especificación |
|---|---|
| `lang` | `es-AR` en `<html>`. **Ausente hoy en el sitio actual.** |
| Foco visible | Anillo `2px violet-500` + `2px` offset en todo elemento interactivo (§5.6) |
| Contraste | AA mínimo en todo texto, verificado contra el fondo **con patrón renderizado** |
| Targets | ≥ `48px` de alto en todo lo interactivo |
| Alt | Descriptivo y real en toda imagen con contenido |
| Orden de tabulación | Sigue el orden visual. Sin `tabindex` positivo. |
| Formulario | `<label>` asociada por `for`/`id`, no placeholder como label. Errores con `aria-live`. |
| `prefers-reduced-motion` | Respetado. Sin transformaciones ni fades (§5.8). |
| Landmarks | `header`, `main`, `footer`, `nav` donde aplique. **El sitio actual no tiene ninguno.** |
| Enlaces | Distinguibles del texto por subrayado, no solo por color. |

> El `*:focus { outline: none }` global y el `a { text-decoration: none }` global del sitio actual
> son defectos que este diseño corrige explícitamente.

---

## 11. Requisitos técnicos

Todo lo que hay que corregir del sitio actual.

| Ítem | Estado actual | Requisito |
|---|---|---|
| `<title>` | `"Home"` | `Diego Suarez Hair Studio — Peluquería en Caballito desde 1994` |
| `meta description` | `"Somos un salón de belleza con mas 26 años..."` | `Peluquería y color en Caballito desde 1994. Balayage, mechas, alisados y tratamientos con diagnóstico previo. Turnos por WhatsApp.` |
| `lang` | ausente | `es-AR` |
| Open Graph | ausente | `og:title`, `og:description`, `og:image`, `og:type`, `og:locale=es_AR`, `og:url` |
| Twitter card | ausente | `summary_large_image` |
| `robots.txt` | no existe | Crear. Permitir todo. |
| `sitemap.xml` | no existe | Crear con la URL raíz. |
| Datos estructurados | ausentes | JSON-LD `HairSalon` |
| Favicon | el del builder | **Racimo hexagonal en `violet-500` sobre `ink`** (SVG). Es una marca mínima propia. |
| Año en footer | 2023 | **2026**, generado dinámicamente |
| `outline: none` | global | Eliminar |
| `a { text-decoration: none }` | global | Eliminar |
| `alt="Mobirise"` | ambas imágenes | Reemplazar |
| Clave de API de Maps expuesta | visible en el HTML | Restringir por dominio o referrer |
| Formato AMP | `<html amp>` | **Quitar.** AMP fue pensado para contenido editorial; en 2026 no aporta nada y es la señal visible de plantilla vieja. |
| Marca del builder | "Made with Mobirise" en el pie | **Eliminar.** |

### JSON-LD mínimo

`@type: "HairSalon"` con: `name`, `description`, `foundingDate: "1994"`, `address` completo en
`Alberdi 624, 1° A, Caballito, Ciudad Autónoma de Buenos Aires`, `telephone`, `openingHours`
`Tu-Sa 09:30-20:30`, `priceRange` **solo si el cliente lo define**, `url`.

> `priceRange` se omite hasta que haya precios reales. No inventar.

---

## 12. Contenido

### Datos verificados — usar con confianza

- **Nombre:** Diego Suarez Hair Studio
- **Antigüedad:** desde 1994 (32 años). **Unificar.** El sitio actual dice "1994" en el H1 y "más de
  26 años" en la meta description, y se contradice.
- **Dirección:** Av. Juan Bautista Alberdi 624, 1° A, entre Riglos y Calazans, Caballito, CABA
- **Horario:** martes a sábado, **9:30 – 20:30**. Lunes y domingo cerrados.
- **Turnos:** solo con cita previa, vía Wonoma
- **WhatsApp:** 11 2865 9698 — solo mensajes, para reservas
- **Servicios:** el catálogo de ~16 servicios de Wonoma (§6.3)
- **Sin turno:** lavados nutritivos y hair spa, se piden al llegar
- **Con seña:** balayage/baby light, color con mechas simultáneas, reflejos con gorra o papel,
  alisados
- **No se hacen:** peinados de fiesta, recogido, semi-recogidos, trenzas
- **Productos:** Wella, Tigi, L'Oréal, Schwarzkopf
- **Alisados:** según tipo de cabello, con o sin formol y/o derivados como la formalina

### Texto "Mi compromiso"

Texto actual del sitio, a pulir conservando la voz en primera persona. No descartar, no reescribir
desde cero. Es la mejor pieza de contenido que tiene el negocio.

**Regla de voz:** *mi diagnóstico*, *atiendo*, *trabajo con* — nunca *se ofrece*, *se realiza*,
*contamos con*.

### Ortografía

**Todo en español rioplatense, con tildes y `ñ` correctas.** El sitio actual tiene errores
("mas" sin tilde, "Bótox" mal escrito, mayúsculas inconsistentes). Corregir en todo el sitio.

### Prohibiciones de contenido

- **No inventar precios.** No hay ninguno publicado. Dejar el espacio listo o no mostrarlo.
- **No inventar reseñas, testimonios, premios,_certificaciones ni años de clienta.**
- **No publicar reseñas.**
- **No afirmar que hacen peinados de fiesta, recogido, semi-recogidos ni trenzas.**
- **No usar la imagen de campaña de L'Oréal** ni foto de stock genérica como si fuera trabajo del
  salón.
- **No inventar servicios** que no estén en el catálogo de Wonoma.
- **No cambiar la dirección ni el número de WhatsApp.**
- **No quitar la vía de reserva de Wonoma** mientras la transición no esté resuelta.

### Placeholders en demo

Todo texto que el developer necesite inventar para la demo va marcado como tal. Nada de lorem ipsum:
los textos de demo son **realistas y del rubro**, para que el cliente se proyecte. La única
excepción son los **marcos de foto**, que sí van marcados explícitamente como placeholder (§7.5).

---

## 13. Variables abiertas

Dos valores pendientes de confirmación. **No bloquean la implementación:** afectan tokens, no
arquitectura.

| Variable | Default asumido | Cómo se cierra |
|---|---|---|
| Temperatura del gris de la pared | `gray` neutro, escala actual de §5.1 | Foto del local, o preguntar a Diego |
| Orientación de la hexagonada | Punta arriba (los mosaicos hexagonales de pared suelen serlo) | Foto del local |

**Si el gris de la pared resultara cálido** (arena, gris cemento), no se pelea: se baja la
temperatura del gris del sitio un par de pasos y deja que el violeta resuelva el conjunto. **La foto
calienta sola.**

---

## 14. Antes de publicar

Estos ítems no se pueden resolver sin el cliente:

- [ ] **Estado de Google Business Profile** — no se pudo verificar que exista. Requiere verificación
      manual.
- [ ] **Instagram** `@diegosuarezhairstudio` — no verificado (login wall). Si está activo, es la fuente
      natural de fotos de trabajo.
- [ ] **Facebook** `diegosuarezhairstudio` — no verificado (HTTP 400). Puede no existir.
- [ ] **Precios** — no publicados en ninguna fuente. Definir o confirmar que no se muestran.
- [ ] **Otros profesionales en el local** — no está confirmado que sea unipersonal.
- [ ] **Fotos propias** — sin ellas la galería queda en placeholders. Es el punto que más falta
      hace.
- [ ] **Permiso de uso de logos de producto** para Wella / Tigi / L'Oréal / Schwarzkopf.
- [ ] **Confirmar el horario 9:30–20:30** con Diego. Es el dato que motivated todo.

---

## 15. Criterios de aceptación

### Contenido

- [ ] El horario dice **9:30 – 20:30, martes a sábado**, en todas las piezas. Cero menciones a
      10:00–19:00.
- [ ] "Desde 1994" unificado. Cero apariciones de "26 años".
- [ ] El catálogo completo de ~16 servicios está presente, agrupado por intención.
- [ ] Los pills de estado son correctos: qué lleva seña, qué es sin turno.
- [ ] La nota de "qué no se hace" está presente y es visible, no una nota al pie.
- [ ] La declaración sobre formol en alisados está presente.
- [ ] Cero precios inventados.
- [ ] Cero reseñas, premios o credenciales inventadas.
- [ ] Todo en español rioplatense, con tildes y `ñ` correctas. Cero "mas" sin tilde.
- [ ] La vía de reserva de Wonoma sigue funcionando y es accesible.

### Diseño

- [ ] La paleta es exactamente la de §5.1. Cobre, terracota o dorado no aparecen.
- [ ] Solo dos familias tipográficas.
- [ ] Ningún hexágono aparece detrás de una foto de trabajo.
- [ ] El racimo hexagonal aparece **una sola vez** en el hero, con gradiente `violet-700 →
      violet-300`.
- [ ] El único gradiente del sistema es el del racimo.
- [ ] Cero sombras decorativas. Cero `box-shadow` salvo la barra sticky, que usa borde.
- [ ] Radio `2px` en botones e inputs, `0` en imágenes.
- [ ] Ningún componente usa "mucho rounded card con sombra".
- [ ] El patrón hexagonal es estático y no se anima con el scroll.
- [ ] No hay modo oscuro.

### Responsive

- [ ] Barra sticky visible solo en `< 1024px`, con `Reservar turno` + WhatsApp.
- [ ] El body tiene `padding-bottom` para que la barra no tape contenido.
- [ ] La galería en móvil es carrusel con snap y peek.
- [ ] La fila del día actual en el horario se distingue claramente.
- [ ] Los hexágonos en móvil son más grandes en proporción, no más chicos.
- [ ] Objetivos táctiles ≥ `48px` en todo lo interactivo.
- [ ] Cuerpo nunca bajo `1rem` en móvil.

### Accesibilidad

- [ ] `lang="es-AR"`.
- [ ] Anillo de foco `2px violet-500` visible en todo elemento interactivo.
- [ ] Cero `outline: none` sin reemplazo.
- [ ] Los enlaces se distinguen del texto por subrayado.
- [ ] Toda imagen con contenido tiene `alt` descriptivo real.
- [ ] El formulario tiene `<label>` asociada, no placeholder como label.
- [ ] Contraste AA verificado **contra el fondo con patrón renderizado**.
- [ ] `prefers-reduced-motion` respetado.
- [ ] Landmarks `header` / `main` / `footer` presentes.

### Técnico

- [ ] `<title>` y `meta description` reales, sin "Home" ni "26 años".
- [ ] Open Graph y Twitter card completos.
- [ ] `robots.txt` y `sitemap.xml` existen.
- [ ] JSON-LD `HairSalon` válido, con `foundingDate: "1994"` y `openingHours` correctos.
- [ ] Favicon propio desde el racimo hexagonal.
- [ ] Año del footer generado dinámicamente.
- [ ] Formato AMP eliminado.
- [ ] Cero branding del builder.
- [ ] Clave de API de Maps restringida o movida.
- [ ] Sin `alt="Mobirise"` en ninguna imagen.
- [ ] Los dos archivos con nombre de trabajo sucio (`logo-...-mesa-de-trabajo-1-copia`,
      `unnamed-1`) no se referencian.

---

## 16. Resumen en una línea

Neutros fríos como estructura, violeta amatista como acento funcional de oficio, y un único
gradiente en todo el sitio — el racimo hexagonal, que dibuja un balayage.
