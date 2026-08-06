# NDZ VISUAL — Landing Page

Landing page de NDZ VISUAL, una agencia de diseño y desarrollo web especializada en profesionales y pequeños comercios.

## Características

- **Vanilla**: HTML, CSS y JavaScript sin frameworks ni dependencias.
- **Diseño responsive** y completamente funcional en todos los dispositivos.
- **Animaciones AOS-style** al entrar y salir del viewport.
- **Navegación parallax** con efectos de profundidad.
- Formulario de contacto con confirmación y contadores animados.
- Menú móvil con overlay y barra de progreso de scroll.
- Respeto de `prefers-reduced-motion`.

## Estructura

```
index.html    Estructura y contenido de la página
styles.css    Estilos, animaciones y diseño responsive
script.js     Interacciones: menú, parallax, reveals, formulario
```

## Puesta en marcha

Abre `index.html` en tu navegador. No requiere build ni instalación.

## Personalización

### Colores

Definidos en `styles.css` dentro de `:root`:

```css
--color-main:  #ff006e;  /* color principal */
--color-bg:    #fefefe;  /* fondo */
--color-text:  #141301;  /* texto */
```

### Secciones

Los contenidos se editan directamente en `index.html`:

- **Quiénes somos** — textos y estadísticas (contadores en `data-count`).
- **Qué hacemos** — tarjetas de servicios.
- **Precios** — las 3 tarjetas de planes.
- **Contacto** — formulario e información de contacto (`hola@ndzvisual.com`, teléfono y redes sociales).

## Notas

- El formulario es de demostración: muestra un mensaje de confirmación sin enviar datos. Conéctalos a un backend o servicio (Formspree, Netlify Forms, etc.) cuando esté listo.
- Ajusta los enlaces de redes sociales en la sección de contacto.
