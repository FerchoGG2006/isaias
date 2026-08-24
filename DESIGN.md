# Sistema de Diseño y Dirección de Arte: Variedades Isaías
*Guiado por las habilidades de Emil Kowalski, Impeccable y Taste-Skill*

## 1. Filosofía de Diseño: Moda Editorial & Estudio Textil

Transformamos la experiencia visual de **Variedades Isaías** de una tienda electrónica genérica a una **landing y catálogo editorial de alta costura textil**.

### Principios Fundamentales
1. **Fotografía & Textura sobre Efectos Innecesarios**: La materia prima (telas realistas, estampados DTF reflectivos, bordados 3D Wilcom) es la protagonista.
2. **Espacio Negativo & Ritmo Editorial**: Titulares amplios, composiciones asimétricas y separadores finos.
3. **Movimiento Intencional y Físico**: Micro-interacciones suaves con dinámicas de muelle (springs) inspiradas en Apple e ingeniería de diseño de Emil Kowalski.
4. **Hechos de Producto Reales y Técnicos**:
   - Piel de durazno spandex — 220 g.
   - DTF reflectivo — curado a 160 °C.
   - Bordado 3D computarizado Wilcom — sobre algodón piqué.
   - Sublimación fotográfica — 4K, 200 °C.

---

## 2. Paleta de Colores & Tipografía

### Paleta Croma Sofisticada
- **Fondo Principal (Obsidian Studio)**: `#0B0B0C`
- **Superficie de Tarjetas & Paneles**: `#141416`
- **Texto Principal (Estudio Off-White)**: `#F4F1EA`
- **Texto Secundario (Gris Técnico)**: `#8E8E93`
- **Acento Técnico (Oro Atenuado / Champagne)**: `#C8A96E`
- **Bordes & Líneas Finas**: `rgba(255, 255, 255, 0.08)`

### Tipografía
- **Titulares**: Serif contemporáneo o Sans de gran impacto (ej. `Syne` / `Playfair Display`).
- **Cuerpo & Labels Técnicos**: Monospaced / Sans limpios (ej. `Inter` / `JetBrains Mono`).

---

## 3. Arquitectura de Componentes & Componentes Clave

### A. Hero Fotográfico Fullscreen (con Parallax y Profundidad)
- Imagen de fondo en ultra-alta resolución con viñeta sutil.
- Tipografía principal de gran escala con animación de revelado por líneas.
- Badge técnico flotante con especificaciones de tejido.

### B. Macro Material Explorer (Lente de Aumento Tactil 10x)
- Visor circular interactivo que se desplaza suavemente siguiendo el cursor/touch.
- Muestra el detalle micro-fotográfico de las fibras (spandex 220g, relieve bordado Wilcom 3D).
- Interpolación de movimiento con muelles de alta precisión (`stiffness: 250, damping: 25`).

### C. Product Stage Editorial (Sin tarjetas de e-commerce genéricas)
- Presentación asimétrica de cada prenda/técnica.
- Selector interactivo de muestras textiles (Textile Palette).
- Especificaciones técnicas claras (temperatura de curado, gramaje, hilo).

### D. Galería Asimétrica con Lightbox Accesible
- Layout dinámico de imágenes tomadas del directorio `extracted/`.
- Lightbox desplegable con navegación por teclado (`Escape`, `Flechas`), trampa de foco y etiquetas `aria-label`.

### E. Flujo de Cotización por WhatsApp Integrado
- Botón de cotización directo que abre un modal de solicitud con opciones preconfiguradas.
- Genera un mensaje formateado listo para enviar a WhatsApp.

---

## 4. Estado de Implementación en `next-app/`

Todos los componentes modulares se ubican en `next-app/src/components/sections/` y se alimentan de datos centralizados y tipados en `next-app/src/data/`.
