import {
  higgsfield,
  config,
  type DoPImage2VideoInput,
  type SoulText2ImageInput,
  type SpeakVideoInput,
  type V2Response,
} from "@higgsfield/client/v2";

/**
 * Cliente configurado de Higgsfield AI para Next.js (Server-side).
 * Requiere variables de entorno:
 * - HF_CREDENTIALS="KEY_ID:KEY_SECRET" o
 * - HF_API_KEY y HF_API_SECRET
 */

if (process.env.HF_CREDENTIALS) {
  config({
    credentials: process.env.HF_CREDENTIALS,
  });
} else if (process.env.HF_API_KEY && process.env.HF_API_SECRET) {
  config({
    apiKey: process.env.HF_API_KEY,
    apiSecret: process.env.HF_API_SECRET,
  });
}

export interface GenerateImageOptions {
  prompt: string;
  widthAndHeight?: string; // ej: "1024x1024", "1024x1792", etc.
  quality?: "720p" | "1080p";
  batchSize?: 1 | 4;
  enhancePrompt?: boolean;
  referenceImageUrl?: string;
  seed?: number;
}

export interface AnimateImageOptions {
  imageUrl: string;
  prompt: string;
  model?: "dop-lite" | "dop-turbo" | "dop-standard";
  seed?: number;
  enhancePrompt?: boolean;
}

export interface SpeakVideoOptions {
  imageUrl: string;
  audioUrl: string;
  prompt: string;
  quality?: "mid" | "high";
  duration?: 5 | 10 | 15;
}

/**
 * Genera imágenes de alta definición con el modelo Soul de Higgsfield.
 */
export async function generateHiggsfieldImage(options: GenerateImageOptions): Promise<{
  success: boolean;
  urls: string[];
  requestId?: string;
  status: string;
}> {
  const input: SoulText2ImageInput = {
    prompt: options.prompt,
    width_and_height: options.widthAndHeight ?? "1024x1024",
    quality: options.quality ?? "1080p",
    batch_size: options.batchSize ?? 1,
    enhance_prompt: options.enhancePrompt ?? true,
    seed: options.seed,
    ...(options.referenceImageUrl
      ? {
          image_reference: {
            type: "image_url",
            image_url: options.referenceImageUrl,
          },
        }
      : {}),
  };

  const response: V2Response = await higgsfield.subscribe("/v1/text2image/soul", {
    input,
    withPolling: true,
  });

  const urls = (response.images ?? []).map((img) => img.url);

  return {
    success: response.status === "completed" && urls.length > 0,
    urls,
    requestId: response.request_id,
    status: response.status,
  };
}

/**
 * Anima una imagen (mockup de producto, modelo con ropa) para convertirla en video usando Higgsfield DoP.
 */
export async function animateHiggsfieldImage(options: AnimateImageOptions): Promise<{
  success: boolean;
  videoUrl?: string;
  requestId?: string;
  status: string;
}> {
  const input: DoPImage2VideoInput = {
    model: options.model ?? "dop-turbo",
    prompt: options.prompt,
    input_images: [
      {
        type: "image_url",
        image_url: options.imageUrl,
      },
    ],
    seed: options.seed,
    enhance_prompt: options.enhancePrompt ?? true,
  };

  const response: V2Response = await higgsfield.subscribe("/v1/image2video/dop", {
    input,
    withPolling: true,
  });

  return {
    success: response.status === "completed" && !!response.video?.url,
    videoUrl: response.video?.url,
    requestId: response.request_id,
    status: response.status,
  };
}

/**
 * Genera un video con avatar parlante a partir de una imagen y un audio (Higgsfield Speak).
 */
export async function generateHiggsfieldSpeak(options: SpeakVideoOptions): Promise<{
  success: boolean;
  videoUrl?: string;
  requestId?: string;
  status: string;
}> {
  const input: SpeakVideoInput = {
    input_image: {
      type: "image_url",
      image_url: options.imageUrl,
    },
    input_audio: {
      type: "audio_url",
      audio_url: options.audioUrl,
    },
    prompt: options.prompt,
    quality: options.quality ?? "high",
    duration: options.duration ?? 5,
  };

  const response: V2Response = await higgsfield.subscribe("/v1/speak/higgsfield", {
    input,
    withPolling: true,
  });

  return {
    success: response.status === "completed" && !!response.video?.url,
    videoUrl: response.video?.url,
    requestId: response.request_id,
    status: response.status,
  };
}

export { higgsfield };
