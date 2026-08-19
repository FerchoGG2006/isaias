# Variedades Isaías — instrucciones de proyecto

## Objetivo

Transformar la aplicación en una landing y catálogo editorial premium de personalización textil. La experiencia debe sentirse como una marca de moda y un estudio textil: fotográfica, táctil, contemporánea y sobria. La conversión principal es solicitar una cotización por WhatsApp.

## Estado del repositorio

- La aplicación objetivo es `next-app/` (Next.js + React + TypeScript + Tailwind CSS).
- Antes de editar o ejecutar la app, confirma que ese directorio y sus dependencias existen en el árbol de trabajo. No restaures, borres ni sobrescribas cambios de Git sin autorización expresa.
- Las fotografías reales son el activo visual principal. Se encuentran principalmente en `extracted/` y deben conservarse; no generar imágenes artificiales para sustituirlas.
- No mover, duplicar ni recomprimir assets de forma masiva sin un inventario y una razón concreta.

## Dirección de arte

- Priorizar fotografía, composición editorial, espacio negativo, tipografía y ritmo de movimiento sobre la cantidad de efectos.
- Evitar estética SaaS, dashboards, cyberpunk, neón, glassmorphism excesivo, grids uniformes y cards ecommerce genéricas.
- Usar una navegación limpia, titulares grandes, labels técnicos y captions discretos.
- Las animaciones deben ser intencionales, suaves y respetar `prefers-reduced-motion`.

## Hechos de producto autorizados

Usar únicamente estas especificaciones cuando correspondan:

- Piel de durazno spandex — 220 g.
- DTF reflectivo — curado a 160 °C.
- Bordado 3D computarizado Wilcom — sobre algodón piqué.
- Sublimación fotográfica — 4K, 200 °C.

No inventar materiales, precios, prestaciones, propiedades técnicas ni especificaciones. Si falta una correspondencia entre producto y fotografía, marcarla como pendiente de confirmación.

## Arquitectura

- Mantener componentes pequeños y reutilizables. No construir la página completa en un único archivo.
- Centralizar productos y su información en `src/data/` y tiparlos. La presentación no debe contener productos hardcodeados.
- Organizar funcionalidades nuevas en áreas equivalentes a `components/`, `sections/`, `ui/`, `animations/`, `catalog/`, `products/`, `data/`, `config/` y `lib/`, adaptándose a la estructura existente.
- Usar `next/image` para fotografías locales cuando sea compatible con la interacción. Mantener rutas y tipos centralizados.
- Preferir GSAP + ScrollTrigger para secuencias de scroll por sección. Evitar cientos de listeners o triggers aislados.
- No introducir Three.js/WebGL. Lenis solo si mejora perceptiblemente la experiencia y no empeora accesibilidad ni rendimiento.

## Alcance funcional esperado

- Hero fotográfico fullscreen con profundidad y parallax sutil.
- Macro Viewer circular de material (aprox. 10x) con movimiento interpolado y uso táctil adaptado.
- Material Explorer para DTF reflectivo, piel de durazno spandex y bordado 3D.
- Product Stage editorial, Textile Palette de muestras textiles, galería asimétrica con filtros animados y lightbox accesible.
- CTA de cotización que conserve la integración de WhatsApp existente. No publicar un número de teléfono de ejemplo como dato real.

## Calidad y accesibilidad

- Mantener teclado, foco visible, `aria-label`, textos alternativos útiles, contraste y cierre con Escape para overlays/modales.
- En móvil, simplificar el movimiento y adaptar las interacciones de cursor a touch; no limitarse a escalar el desktop.
- En cada fase ejecutable: lint, typecheck si existe, build cuando corresponda y verificación en navegador. Corregir errores antes de avanzar.
- Medir antes de optimizar; usar listeners pasivos, `requestAnimationFrame` o GSAP ticker solo cuando sea necesario y limpiar animaciones/listeners al desmontar.

## Seguridad de cambios

- El repositorio puede contener trabajo del usuario sin confirmar. Preservar cambios ajenos y limitar cada edición al alcance solicitado.
- Antes de agregar dependencias, comprobar si la capacidad ya está instalada. Antes de cambiar dependencias, verificar versión y compatibilidad.
