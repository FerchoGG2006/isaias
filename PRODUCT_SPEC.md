# Variedades Isaías — Product Specification

## Product vision

Transform the current editorial landing page into a specialized digital catalog for customization and made-to-order production.

Core principle:

> Transformar la experiencia visual de Variedades Isaías de una tienda electrónica genérica a una landing y catálogo editorial de alta costura textil.

This is **not** a Shopify clone. The primary customer journey is:

```text
Landing editorial
      ↓
Catálogo
      ↓
Producto
      ↓
Configurador
      ↓
Solicitud de cotización
      ↓
WhatsApp
```

Future operating model:

```text
                         ┌─────────────┐
                         │    ADMIN    │
                         └──────┬──────┘
                                │
                                ▼
Cliente → Catálogo → Producto → Configurador → Cotización → WhatsApp
```

## Business model

The platform supports two brands with one reusable product engine:

- Variedades Isaías
- El Palacio de la Sublimación

Products, services, quotes, media and configuration capabilities must be associated with a business/brand. Do not duplicate the application for each company.

## Domain model

### Business

- id
- slug
- name
- logo
- whatsapp
- visual configuration
- active

### Category

A commercial catalog grouping, not a technical production method.

Examples:

- Ropa
- Sublimación
- Accesorios
- Dotaciones
- Merchandising

### Product

A physical item that can be ordered/customized.

Required concepts:

- id
- businessId
- categoryId
- slug
- name
- description
- basePrice or priceFrom when verified
- material references
- supported techniques
- variants
- sizes
- images
- availability/status

### Material

Describes the physical substrate/fabric independently from the product.

Known verified specifications may include:

- Piel de durazno spandex — 220 g.
- Algodón piqué for applicable embroidered products.

Do not invent technical specifications.

### Technique

A production/personalization method, independent from the product.

Examples:

- DTF
- DTF reflectivo
- Sublimación
- Bordado 3D
- Estampado

Known verified specifications may include:

- DTF reflectivo — curado a 160 °C.
- Bordado 3D computarizado Wilcom — sobre algodón piqué.
- Sublimación fotográfica — 4K, 200 °C.

### ProductVariant

A selectable product variation such as color, model or material option.

### Customization

The configuration requested by the customer. It is not a product itself.

Possible fields/capabilities:

- technique
- color
- size distribution
- quantity
- design file
- placement
- notes

The configurator must be capability-driven so products can expose only the options they support.

### Service

A production service that can be requested without selecting a catalog product.

Examples:

- DTF
- Bordado
- Sublimación
- Estampado
- Diseño gráfico
- Dotaciones empresariales

### QuoteRequest

A structured commercial request containing:

- business
- customer contact information
- one or more quote items
- product configuration
- attachments
- notes
- status
- timestamps

Suggested status lifecycle:

`PENDING → CONTACTED → QUOTED → APPROVED → COMPLETED`

Alternative terminal status: `REJECTED`.

## Catalog information architecture

```text
Inicio

Catálogo
├── Ropa
│   ├── Camisetas
│   ├── Suéteres
│   ├── Hoodies
│   └── Camisas / Polos
├── Sublimación
├── Accesorios
├── Dotaciones
└── Merchandising

Técnicas
├── DTF
├── Sublimación
├── Bordado
└── Estampado

Servicios

Personaliza

Proyectos

Cotizar
```

The exact categories must reflect verified inventory; do not manufacture unavailable products.

## Product page

Every product page should prioritize:

1. Product photography.
2. Product name and concise value proposition.
3. Material and technical information.
4. Available variants.
5. Supported personalization techniques.
6. Size/quantity configuration where applicable.
7. Design upload.
8. Notes/instructions.
9. Structured quote summary.
10. WhatsApp quote CTA.

The primary CTA is **Solicitar cotización**, not generic **Comprar ahora**.

## Configurator

The configurator is the core interaction layer.

```text
Producto
  ↓
Variante / color
  ↓
Talla(s)
  ↓
Técnica
  ↓
Cantidad
  ↓
Diseño
  ↓
Notas
  ↓
Resumen
  ↓
Solicitar cotización
```

Do not require customer accounts for the MVP.

Do not implement a payment checkout unless a later business requirement explicitly requires it.

## WhatsApp handoff

The WhatsApp message must be generated from structured quote data. Never send a vague message such as "quiero información" when configuration data is available.

Example:

```text
Hola, quiero solicitar una cotización.

Producto:
Camiseta Oversize

Cantidad:
25 unidades

Color:
Negro

Tallas:
M: 10
L: 10
XL: 5

Técnica:
DTF

Diseño:
Adjunto

Código:
CAM-OV-001
```

The real WhatsApp number must come from business configuration. Never use a fake/example number in production.

## Pricing

Pricing must support:

- fixed price when verified;
- price from;
- quote required;
- future volume pricing rules.

Do not invent prices. Existing hardcoded prices must be treated as provisional catalog data until confirmed by the business.

## UX and visual direction

Keep the editorial visual language. The catalog should feel like a textile/fashion studio, not SaaS or a generic ecommerce template.

Priorities:

- photography first;
- material and texture;
- typography;
- whitespace;
- clear hierarchy;
- subtle motion;
- strong mobile adaptation;
- accessible interactions.

Avoid:

- generic ecommerce cards;
- dashboard aesthetics in the customer experience;
- excessive glassmorphism;
- neon/cyberpunk styling;
- unnecessary effects;
- UI that hides the product.

## Component architecture

Prefer reusable domain-oriented components:

```text
components/
├── catalog/
├── product/
├── customization/
├── quote/
├── services/
└── ui/
```

Product data must not be hardcoded into presentation components.

## Routing target

The target information architecture should support:

```text
/catalogo
/catalogo/[category]
/catalogo/[category]/[product]
/servicios
/servicios/[service]
/personaliza
/cotizar
```

Admin is a future phase and should not contaminate the public customer experience.

## Migration rules

- Preserve existing visual assets unless there is a concrete reason to replace them.
- Do not rewrite the application from scratch.
- Do not remove working visual sections merely to fit the new architecture.
- Replace the current cart-first interaction gradually with configuration + quote semantics.
- Keep the current Next.js/React/TypeScript/Tailwind stack unless a dependency is genuinely necessary.
- Validate with lint, typecheck if available, build, and browser verification after each meaningful phase.
