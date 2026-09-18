import { NextResponse } from "next/server";
import {
  generateHiggsfieldImage,
  animateHiggsfieldImage,
  generateHiggsfieldSpeak,
} from "@/lib/higgsfield";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action } = body;

    if (!process.env.HF_CREDENTIALS && !process.env.HF_API_KEY) {
      return NextResponse.json(
        {
          error:
            "Higgsfield no está configurado. Por favor define HF_CREDENTIALS o HF_API_KEY en tus variables de entorno.",
        },
        { status: 500 }
      );
    }

    if (action === "text-to-image") {
      const { prompt, widthAndHeight, quality, batchSize, referenceImageUrl } = body;
      if (!prompt) {
        return NextResponse.json({ error: "El campo 'prompt' es requerido." }, { status: 400 });
      }

      const result = await generateHiggsfieldImage({
        prompt,
        widthAndHeight,
        quality,
        batchSize,
        referenceImageUrl,
      });
      return NextResponse.json(result);
    }

    if (action === "image-to-video") {
      const { imageUrl, prompt, model } = body;
      if (!imageUrl) {
        return NextResponse.json({ error: "El campo 'imageUrl' es requerido." }, { status: 400 });
      }

      const result = await animateHiggsfieldImage({
        imageUrl,
        prompt: prompt ?? "Subtle dynamic camera pan showcasing the garment",
        model,
      });
      return NextResponse.json(result);
    }

    if (action === "speak") {
      const { imageUrl, audioUrl, prompt, quality, duration } = body;
      if (!imageUrl || !audioUrl) {
        return NextResponse.json(
          { error: "Los campos 'imageUrl' y 'audioUrl' son requeridos." },
          { status: 400 }
        );
      }

      const result = await generateHiggsfieldSpeak({
        imageUrl,
        audioUrl,
        prompt: prompt ?? "Talking avatar",
        quality,
        duration,
      });
      return NextResponse.json(result);
    }

    return NextResponse.json(
      { error: "Acción no reconocida. Opciones: 'text-to-image', 'image-to-video', 'speak'." },
      { status: 400 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Error procesando la solicitud en Higgsfield";
    console.error("[Higgsfield API Error]:", error);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
