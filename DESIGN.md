# Dirección de Diseño — Variedades Isaías + El Palacio de la Sublimación

> **Principio rector:** transformar la experiencia visual de una tienda electrónica genérica en una experiencia editorial de estudio textil y personalización, donde la inspiración conduce naturalmente al descubrimiento, la configuración y la cotización.

Este documento define cómo debe sentirse y verse el producto. La especificación funcional, dominio y roadmap viven en `PRODUCT_SPEC.md`.

## 1. Qué estamos diseñando

No es un clon de Shopify ni un SaaS.

Es una experiencia híbrida entre:

- estudio textil;
- marca de moda;
- catálogo editorial;
- taller de producción;
- herramienta sencilla para configurar pedidos.

La personalidad buscada es:

**Premium · editorial · textil · táctil · contemporánea · sobria · local · humana**

La sensación debe ser:

> "Aquí hay personas que saben fabricar esto."

No:

> "Aquí hay una plantilla de ecommerce bonita."

### Flujo principal

```text
INSPIRACIÓN
    ↓
DESCUBRIMIENTO
    ↓
CATÁLOGO
    ↓
PRODUCTO
    ↓
PERSONALIZACIÓN
    ↓
COTIZACIÓN
    ↓
WHATSAPP
```

---

## 2. Principios visuales

### Producto antes que interfaz

La fotografía, el material, el estampado y el acabado son protagonistas.

Prioridad:

1. fotografía real;
2. producto/material;
3. composición;
4. tipografía;
5. información técnica;
6. interacción;
7. decoración.

No invertir este orden.

### Editorial, no ecommerce genérico

El catálogo debe sentirse curado, no como una cuadrícula infinita de SKU.

Evitar:

- cards pequeñas y saturadas;
- precios gigantes;
- exceso de badges;
- grids uniformes cuando una composición editorial sea mejor;
- lenguaje de marketplace;
- checkout como protagonista;
- efectos que oculten el producto.

### Realismo antes que artificio

Usar primero los assets reales del negocio. No sustituirlos por imágenes artificiales.

La textura puede expresarse con:

- fotografía macro;
- crops de alta resolución;
- zoom controlado;
- movimiento sutil;
- cambios de encuadre;
- comparaciones visuales de técnicas.

---

## 3. Sistema visual

### Color

```text
--background: #0B0B0C
--surface: #141416
--foreground: #F4F1EA
--muted: #8E8E93
--accent: #C8A96E
--border: rgba(255,255,255,0.08)
```

El fondo oscuro es un lienzo. El champagne/oro se usa con moderación para jerarquía, acciones y detalles.

No introducir gradientes brillantes como recurso principal.

### Tipografía

**Display:** titulares grandes, expresivos y editoriales.

**Sans/UI:** navegación, formularios, controles y contenido funcional.

**Monospace/técnico:** únicamente para códigos, gramajes, temperaturas, medidas y especificaciones cuando aporte carácter.

No convertir toda la interfaz en una ficha técnica.

---

## 4. Homepage: historia comercial

La homepage debe responder progresivamente las preguntas del cliente:

```text
01 HERO
02 QUÉ PUEDES CREAR
03 CATÁLOGO DESTACADO
04 TÉCNICAS DE PERSONALIZACIÓN
05 EXPERIENCIA DE MATERIALES
06 HECHO AQUÍ
07 PROYECTOS / GALERÍA
08 EMPRESAS / DOTACIONES
09 CÓMO FUNCIONA
10 CTA FINAL / COTIZACIÓN
```

### 01 — Hero

Pregunta: **¿Qué hacen y qué puedo hacer aquí?**

El hero actual puede conservarse como base visual. Debe priorizar la propuesta de valor sobre la presentación de los logos.

Debe comunicar:

- personalización;
- productos;
- técnicas;
- identidad de las dos empresas;
- siguiente acción.

CTAs:

**Explorar catálogo** · **Solicitar cotización**

No hacer del carrito una acción dominante.

### 02 — Qué puedes crear

Pregunta: **¿Qué puedo personalizar?**

Entradas visuales grandes hacia:

- ropa;
- sublimación;
- accesorios;
- dotaciones;
- merchandising.

### 03 — Catálogo destacado

Pregunta: **¿Qué productos tienen?**

Mostrar selección curada. Cada producto comunica fotografía, nombre, material relevante, técnicas y acción para ver/configurar.

### 04 — Técnicas

Pregunta: **¿Cómo pueden personalizarlo?**

Mostrar editorialmente DTF, sublimación, bordado y estampado. Educar sin parecer una ficha industrial.

### 05 — Materiales

Pregunta: **¿Por qué confiar en la calidad?**

Usar macrofotografía y datos reales.

Especificaciones autorizadas:

- Piel de durazno spandex — 220 g.
- DTF reflectivo — curado a 160 °C.
- Bordado 3D computarizado Wilcom — sobre algodón piqué.
- Sublimación fotográfica — 4K, 200 °C.

No inventar características adicionales.

### 06 — Hecho aquí

Pregunta: **¿Realmente lo producen ustedes?**

Mostrar máquinas, procesos, personas, prendas en producción, acabados y pedidos reales.

### 07 — Proyectos / Galería

Pregunta: **¿Cómo queda el trabajo terminado?**

Usar composición tipo revista: tamaños variables, espacio negativo, detalles ampliados, filtros simples y lightbox accesible.

Filtros posibles:

`TODO · ROPA · DTF · SUBLIMACIÓN · BORDADO · EMPRESARIAL`

### 08 — Empresas / Dotaciones

Pregunta: **¿Pueden producir para mi empresa o grupo?**

Presentar dotaciones, uniformes, merchandising, eventos, equipos y producción por volumen.

CTA: **Cotización empresarial**

### 09 — Cómo funciona

```text
01 — ELIGE
Explora el catálogo.

02 — CONFIGURA
Producto, variante, talla, técnica y cantidad.

03 — COTIZA
Adjunta diseño e instrucciones.

04 — PRODUCIMOS
El equipo continúa el proceso contigo.
```

### 10 — CTA final

> **¿Qué vamos a crear?**
>
> Cuéntanos qué necesitas. Nosotros te ayudamos a convertirlo en producto.

CTA: **Solicitar cotización por WhatsApp**

---

## 5. Navegación

Preferencia:

```text
CATÁLOGO
PERSONALIZA
SERVICIOS
PROYECTOS
NOSOTROS
```

Acción destacada:

```text
COTIZAR
```

WhatsApp puede permanecer como acceso rápido.

Evitar llenar el navbar con destinos secundarios.

---

## 6. Catálogo

El catálogo funciona como una galería comercial.

```text
Categoría
    ↓
Productos
    ↓
Producto
    ↓
Configuración
```

Categorías iniciales:

- Ropa
- Accesorios
- Sublimación
- Dotaciones
- Merchandising

La `ProductCard` debe priorizar fotografía, nombre, información breve, técnicas y CTA.

El CTA preferido es **Ver producto** o **Configurar**, no **Añadir al carrito**.

El precio puede ser fijo, "desde" o por cotización. No debe dominar visualmente cuando el producto requiere configuración.

---

## 7. Página de producto

Debe ser el puente entre catálogo y configurador.

```text
GALERÍA
 ↓
PRODUCTO
 ↓
MATERIAL
 ↓
VARIANTES
 ↓
TALLAS
 ↓
TÉCNICAS
 ↓
PERSONALIZACIÓN
 ↓
CANTIDAD
 ↓
DISEÑO
 ↓
NOTAS
 ↓
RESUMEN
 ↓
COTIZAR
```

La galería tiene mucho peso visual. La información técnica debe poder escanearse rápidamente.

El configurador debe sentirse parte del producto, no un formulario administrativo pegado debajo.

---

## 8. Configurador

El configurador es una herramienta de decisión, no un formulario complejo.

Debe mostrar únicamente las opciones aplicables al producto.

Opciones posibles:

- variante;
- color;
- talla;
- distribución de tallas;
- técnica;
- cantidad;
- archivo de diseño;
- notas.

Secuencia recomendada:

```text
Producto → Variante → Color → Tallas → Técnica → Cantidad → Diseño → Notas → Resumen → Cotizar
```

Validar que la distribución de tallas coincida con la cantidad total.

En desktop puede existir resumen persistente. En mobile debe convertirse en un bloque compacto y fácil de revisar.

---

## 9. Cotización y WhatsApp

La cotización no debe parecer checkout.

Lenguaje preferido:

- Configurar
- Solicitar cotización
- Revisar solicitud
- Enviar solicitud
- Hablar por WhatsApp

Evitar:

- Comprar ahora
- Checkout
- Pagar ahora
- Añadir al carrito
- Cupón

WhatsApp debe recibir contexto estructurado:

```text
Producto
Cantidad
Variantes
Tallas
Técnica
Diseño
Notas
Código de producto
```

Nunca utilizar números falsos ni placeholders visibles.

---

## 10. Productos y servicios

Son dos intenciones distintas.

**Producto:** "Quiero esta camiseta personalizada."

**Servicio:** "Tengo 50 camisas y quiero bordarles el logo."

Servicios iniciales:

- DTF;
- sublimación;
- bordado;
- estampado;
- diseño;
- dotaciones empresariales;
- producción por volumen.

Los servicios tienen páginas y CTAs de cotización propios.

---

## 11. Multiempresa

Las dos marcas comparten plataforma, pero no deben parecer dos páginas pegadas.

```text
PLATAFORMA
│
├── Variedades Isaías
└── El Palacio de la Sublimación
```

Comparten componentes, configurador, catálogo, cotización, accesibilidad e interacción.

Pueden variar logo, contenido, fotografía, contacto, productos, servicios y configuración comercial.

---

## 12. Movimiento

El movimiento debe comunicar calidad física y orientar.

### Sí

- reveal suave;
- parallax sutil;
- scale pequeño al hover;
- transiciones de imagen;
- desplazamientos editoriales;
- springs cuando aporten naturalidad;
- transiciones de estado claras.

### No

- animar todo;
- scroll hijacking;
- efectos constantes;
- cientos de listeners;
- desplazamientos que dificulten leer;
- animaciones que compitan con la fotografía.

Respetar `prefers-reduced-motion` y adaptar cursor/hover a touch.

---

## 13. Responsive y accesibilidad

Mobile no es desktop reducido.

Desktop puede usar composiciones asimétricas, dos columnas y grandes fotografías. Mobile debe priorizar lectura, fotografía, controles táctiles, CTA claro y menos movimiento.

Requisitos:

- teclado;
- foco visible;
- `aria-label` cuando sea necesario;
- alt text útil;
- contraste;
- botones reales;
- Escape para overlays;
- lightbox navegable;
- no depender solo del color;
- `prefers-reduced-motion`.

---

## 14. Arquitectura visual

Organizar por responsabilidad:

```text
components/
├── ui/
├── catalog/
│   ├── ProductCard
│   ├── CatalogGrid
│   ├── CategoryNav
│   └── CatalogFilters
├── product/
│   ├── ProductGallery
│   ├── ProductInfo
│   ├── VariantSelector
│   ├── SizeSelector
│   └── ProductSpecs
├── customization/
│   ├── CustomizationPanel
│   ├── TechniqueSelector
│   ├── QuantitySelector
│   ├── SizeDistribution
│   └── FileUploader
├── quote/
│   ├── QuoteSummary
│   ├── QuoteBuilder
│   └── WhatsAppQuoteButton
└── sections/
    ├── Hero
    ├── Categories
    ├── FeaturedCatalog
    ├── Techniques
    ├── Materials
    ├── Workshop
    ├── Projects
    ├── Business
    ├── Process
    └── FinalCTA
```

Evitar componentes gigantes que controlen toda la experiencia.

---

## 15. Datos y contenido

La presentación nunca debe ser la fuente del catálogo.

Mantener productos, servicios, categorías, técnicas y configuración centralizados y tipados.

No inventar precios, materiales, capacidades, temperaturas, gramajes, tiempos, certificaciones ni características técnicas.

Cuando un dato no esté confirmado, no presentarlo como hecho.

Los assets reales del negocio deben conservarse y reutilizarse.

---

## 16. Referencias y límites

Se pueden estudiar Apple por claridad y espacio, marcas de moda por dirección editorial, estudios textiles por materialidad y plataformas de personalización por claridad del configurador. Rush Order Tees puede servir como referencia para conectar producto, personalización y conversión.

Las referencias son principios de aprendizaje, no elementos para copiar.

No reproducir layouts, textos, identidad, animaciones específicas, componentes propietarios ni branding de terceros.

---

## 17. Regla de decisión

Ante cualquier decisión:

> **¿Esto ayuda al cliente a descubrir, entender, configurar o cotizar?**

Si no, probablemente sobra.

Después:

> **¿Esto hace que el producto se vea mejor o sea más comprensible?**

Si tampoco, no añadirlo.

### Definición de éxito

El usuario debe poder entender rápidamente:

1. qué hacen;
2. qué puede personalizar;
3. qué técnicas ofrecen;
4. qué productos existen;
5. qué producto le interesa;
6. cómo configurarlo;
7. qué información necesita enviar;
8. cómo solicitar una cotización.

La experiencia debe dejar una conclusión sencilla:

> **"Sé qué quiero. Sé cómo configurarlo. Sé cómo pedirlo."**
