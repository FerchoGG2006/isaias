# Variedades Isaías — instrucciones de proyecto

## Objetivo del producto

Transformar la aplicación en un **catálogo digital especializado en personalización y producción bajo pedido**, manteniendo una dirección editorial premium.

Principio rector:

> Transformar la experiencia visual de Variedades Isaías de una tienda electrónica genérica a una landing y catálogo editorial de alta costura textil.

La experiencia no debe convertirse en un clon de Shopify. La conversión principal es:

`Landing → Catálogo → Producto → Configurador → Cotización → WhatsApp`

La especificación funcional completa vive en `PRODUCT_SPEC.md`. Léela antes de implementar cambios estructurales.

## Estado del repositorio

- La aplicación objetivo es `next-app/` (Next.js + React + TypeScript + Tailwind CSS).
- Mantener la stack existente salvo necesidad real.
- No reescribir la aplicación desde cero.
- Preservar trabajo existente y cambios ajenos.
- Antes de editar o ejecutar la app, confirma que `next-app/` y sus dependencias existen.
- No restaures, borres ni sobrescribas cambios de Git sin autorización expresa.

## Dirección de producto

El sistema debe evolucionar desde una landing con catálogo visual y carrito hacia:

```text
Landing editorial
      ↓
Catálogo
      ↓
Producto configurable
      ↓
Solicitud de cotización
      ↓
WhatsApp
```

Futuro:

```text
                         ┌─────────────┐
                         │    ADMIN    │
                         └──────┬──────┘
                                │
                                ▼
Cliente → Catálogo → Producto → Configurador → Cotización → WhatsApp
```

## Dominio

Separar explícitamente:

- `Business`: Variedades Isaías / El Palacio de la Sublimación.
- `Category`: agrupación comercial.
- `Product`: producto físico.
- `Material`: material/sustrato.
- `Technique`: DTF, sublimación, bordado, estampado, etc.
- `ProductVariant`: color, modelo u otra variante.
- `Customization`: configuración solicitada por el cliente.
- `Service`: servicio de producción que puede solicitarse sin comprar un producto.
- `QuoteRequest`: solicitud comercial estructurada.

No mezclar producto, material, técnica y servicio en una sola entidad.

## Multiempresa

Construir un solo motor reutilizable para las dos marcas. Los productos y cotizaciones deben poder asociarse a `businessId`.

No duplicar componentes ni aplicaciones para cada empresa.

## Catálogo

La navegación pública debe evolucionar hacia:

```text
/catalogo
/catalogo/[category]
/catalogo/[category]/[product]
/servicios
/servicios/[service]
/personaliza
/cotizar
```

Las categorías comerciales iniciales pueden incluir ropa, sublimación, accesorios, dotaciones y merchandising, pero solo deben publicarse productos realmente confirmados.

## Producto configurable

La página de producto debe priorizar fotografía y permitir, cuando el producto lo soporte:

- variante/color;
- talla o distribución de tallas;
- técnica de personalización;
- cantidad;
- carga de diseño;
- ubicación/tamaño si está definido;
- notas;
- resumen de cotización.

El configurador debe ser **capability-driven**: un producto declara qué opciones soporta. No duplicar configuradores por tipo de producto.

El CTA principal es `Solicitar cotización`, no `Comprar ahora`.

## Cotización y WhatsApp

La cotización debe ser un objeto estructurado y el mensaje de WhatsApp debe generarse desde esos datos.

No enviar mensajes vagos cuando existe información de producto/configuración.

El número real de WhatsApp debe provenir de configuración de la empresa. Nunca publicar `573000000000` ni ningún otro placeholder como dato real.

No implementar checkout/pagos en el MVP salvo requerimiento explícito.

## Datos y veracidad

No inventar materiales, precios, prestaciones o especificaciones.

Especificaciones autorizadas cuando correspondan:

- Piel de durazno spandex — 220 g.
- DTF reflectivo — curado a 160 °C.
- Bordado 3D computarizado Wilcom — sobre algodón piqué.
- Sublimación fotográfica — 4K, 200 °C.

Los precios actuales del catálogo deben considerarse provisionales hasta confirmación comercial.

## Arquitectura de componentes

Preferir:

```text
components/
├── catalog/
├── product/
├── customization/
├── quote/
├── services/
└── ui/
```

Mantener componentes pequeños y reutilizables. La presentación no debe contener catálogos hardcodeados.

## Diseño

Mantener la identidad editorial existente, pero no tratarla como una camisa de fuerza.

Prioridades:

1. Producto y fotografía.
2. Material y textura.
3. Jerarquía tipográfica.
4. Espacio negativo.
5. Claridad comercial.
6. Movimiento sutil e intencional.
7. Rendimiento y accesibilidad.

Evitar:

- estética SaaS;
- dashboards en la experiencia pública;
- cyberpunk/neón;
- glassmorphism excesivo;
- grids uniformes sin intención;
- cards ecommerce genéricas;
- efectos que compitan con el producto.

Las animaciones deben respetar `prefers-reduced-motion`. GSAP + ScrollTrigger ya está disponible; no introducir nuevas librerías de animación sin justificación.

## Assets

Las fotografías reales son activos prioritarios. Conservarlas y no sustituirlas por imágenes artificiales.

No mover, duplicar ni recomprimir assets masivamente sin inventario y motivo.

Usar `next/image` cuando sea compatible con la interacción.

## Migración del carrito

El `CartContext` existente representa una etapa anterior del producto. No eliminarlo de forma abrupta si todavía hay dependencias. Evolucionarlo gradualmente hacia una semántica de **quote/cart de cotización**, donde cada item conserve su configuración completa.

Un item de cotización debe poder representar:

```text
producto
variante
opciones de personalización
tallas
cantidad
diseño/notas
```

No calcular precios dinámicos no verificados.

## Calidad

Después de cada fase significativa:

- lint;
- typecheck si existe;
- build cuando corresponda;
- verificación en navegador.

Corregir errores antes de avanzar.

En móvil no limitarse a escalar desktop: adaptar navegación, configurador, carga de archivos y movimiento.

## Seguridad de cambios

- Trabajar por fases pequeñas.
- Preferir ramas y PRs para cambios grandes.
- No tocar producción/main innecesariamente.
- No eliminar funcionalidad existente sin comprobar dependencias.
- Antes de agregar dependencias, comprobar si ya existe una capacidad equivalente.
