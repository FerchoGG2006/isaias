---
name: higgsfield
description: "Genera imágenes y videos cinematográficos de alta calidad usando Higgsfield AI (Soul, DoP, Seedream, Speak)"
risk: safe
date_added: "2026-09-18"
---

# Higgsfield AI Skill

## Descripción General
Este skill permite interactuar con la plataforma y API oficial de **Higgsfield AI** para la generación de imágenes hiperrealistas, animación cinematográfica de prendas y modelos (Image-to-Video con DoP), y creación de avatares hablantes (Speak).

## Cuándo Usar Este Skill
- Cuando el usuario solicite generar imágenes de productos, prendas, modelos humanos consistentes o fondos comerciales.
- Cuando se requiera animar una foto o mockup (ej. un modelo luciendo un suéter o chaqueta) para crear un video publicitario de redes sociales (Reels, TikTok, Instagram).
- Cuando se desarrollen endpoints o integraciones en aplicaciones Next.js/Node.js o scripts de Python con Higgsfield.

## Configuración de Credenciales
Higgsfield requiere credenciales de API obtenidas en [Higgsfield Cloud](https://cloud.higgsfield.ai/):
- `HF_CREDENTIALS="KEY_ID:KEY_SECRET"` o bien:
- `HF_API_KEY="KEY_ID"` y `HF_API_SECRET="KEY_SECRET"`

En PowerShell:
```powershell
$env:HF_CREDENTIALS = "tu_key_id:tu_key_secret"
# O por separado:
$env:HF_API_KEY = "tu_key_id"
$env:HF_API_SECRET = "tu_key_secret"
```

## Modelos Principales y Endpoints

### 1. Animación y Video (Image-to-Video)
- **Endpoint:** `/v1/image2video/dop`
- **Modelo:** `dop-turbo` (o `dop-standard`, `dop-lite`)
- **Parámetros:**
  - `input_images`: Array con objeto `{ type: 'image_url', image_url: string }`
  - `prompt`: Descripción del movimiento y estilo (ej: *"Cinematic slow motion pan of model walking in fashion boutique"*).
  - `enhance_prompt`: `true`

### 2. Generación de Imagen (Text-to-Image / Soul)
- **Endpoint:** `/v1/text2image/soul`
- **Parámetros:**
  - `prompt`: Descripción detallada.
  - `width_and_height`: `"1024x1024"`, `"1024x1792"` (9:16 vertical), `"1792x1024"` (16:9).
  - `quality`: `"720p"` o `"1080p"`.
  - `batch_size`: `1` o `4`.

### 3. Video con Avatar Parlante (Speak)
- **Endpoint:** `/v1/speak/higgsfield`
- **Parámetros:**
  - `input_image`: `{ type: 'image_url', image_url: string }`
  - `input_audio`: `{ type: 'audio_url', audio_url: string }`
  - `prompt`: Instrucciones gestuales
  - `duration`: `5`, `10` o `15` segundos.

## Uso en Proyectos del Entorno

### Next.js (`@higgsfield/client`)
Ubicación del helper: `src/lib/higgsfield.ts`
```typescript
import { animateHiggsfieldImage, generateHiggsfieldImage } from "@/lib/higgsfield";

// Animar producto a video:
const videoResult = await animateHiggsfieldImage({
  imageUrl: "https://tudominio.com/mockup.jpg",
  prompt: "Model posing gently showing front design of embroidered sweater",
  model: "dop-turbo",
});
```

### Python (`higgsfield-client`)
Ubicación del helper: `isaias/imagenes-ia/higgsfield_generator.py`
```bash
python higgsfield_generator.py animate --image "https://.../sueter.jpg" --prompt "Modelo caminando en la calle"
python higgsfield_generator.py generate --prompt "Suéter de lana tejido azul exhibido en maniquí de madera"
```
