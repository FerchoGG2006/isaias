#!/usr/bin/env python3
"""
Higgsfield AI Generator Utility for Isaias & Creative Projects
--------------------------------------------------------------
Permite generar imágenes y videos cinematográficos usando la API de Higgsfield.

Requisitos:
    - Variable de entorno HF_KEY="tu_key_id:tu_key_secret" o
      HF_API_KEY="tu_key_id" y HF_API_SECRET="tu_key_secret".

Uso:
    # Generar video a partir de una imagen existente (mockup/modelo):
    python higgsfield_generator.py animate --image "modelo_diseno1_amor.jpg" --prompt "Modelo sonriendo y caminando lentamente en boutique"

    # Generar nueva imagen:
    python higgsfield_generator.py generate --prompt "Chaqueta elegante de lana exhibida en estudio minimalista con iluminación suave"
"""

import os
import sys
import argparse
import urllib.request
from pathlib import Path
import higgsfield_client

def verify_credentials():
    hf_key = os.environ.get("HF_KEY")
    api_key = os.environ.get("HF_API_KEY")
    api_secret = os.environ.get("HF_API_SECRET")

    if not hf_key and not (api_key and api_secret):
        print("[AVISO] Variables de entorno de Higgsfield no encontradas.")
        print("Por favor configura una de las siguientes opciones:")
        print('  $env:HF_KEY = "tu_key_id:tu_key_secret"')
        print('  o $env:HF_API_KEY="key" ; $env:HF_API_SECRET="secret"')
        return False
    return True

def download_file(url: str, output_path: Path):
    print(f"Descargando resultado desde: {url}")
    urllib.request.urlretrieve(url, output_path)
    print(f"Guardado exitosamente en: {output_path}")

def generate_image(prompt: str, resolution: str = "2K", aspect_ratio: str = "9:16", output_dir: Path = None):
    if not verify_credentials():
        return None

    output_dir = output_dir or Path(__file__).parent
    print(f"Generando imagen con prompt: '{prompt}'...")

    result = higgsfield_client.subscribe(
        "bytedance/seedream/v4/text-to-image",
        arguments={
            "prompt": prompt,
            "resolution": resolution,
            "aspect_ratio": aspect_ratio,
            "camera_fixed": False
        }
    )

    if result and "images" in result and len(result["images"]) > 0:
        image_url = result["images"][0]["url"]
        output_file = output_dir / f"higgsfield_gen_{int(Path().stat().st_mtime if Path().exists() else 0)}.png"
        download_file(image_url, output_file)
        return output_file
    else:
        print("[ERROR] No se pudo generar la imagen:", result)
        return None

def animate_image(image_url_or_path: str, prompt: str = "Subtle cinematic movement", model: str = "dop-turbo", output_dir: Path = None):
    if not verify_credentials():
        return None

    output_dir = output_dir or Path(__file__).parent
    print(f"Animando imagen con modelo {model}...")

    # Si es ruta local, Higgsfield requiere URL pública o subida
    # Si la URL es directa HTTP/HTTPS:
    arguments = {
        "model": model,
        "prompt": prompt,
        "input_images": [
            {
                "type": "image_url",
                "image_url": image_url_or_path
            }
        ]
    }

    result = higgsfield_client.subscribe(
        "/v1/image2video/dop",
        arguments=arguments
    )

    if result and "video" in result and "url" in result["video"]:
        video_url = result["video"]["url"]
        output_file = output_dir / "higgsfield_video_output.mp4"
        download_file(video_url, output_file)
        return output_file
    else:
        print("[ERROR] No se pudo generar el video:", result)
        return None

def main():
    parser = argparse.ArgumentParser(description="Higgsfield AI Generator")
    subparsers = parser.add_subparsers(dest="command")

    gen_parser = subparsers.add_parser("generate", help="Generar nueva imagen")
    gen_parser.add_argument("--prompt", required=True, help="Descripción de la imagen")
    gen_parser.add_argument("--aspect", default="9:16", help="Aspect ratio (1:1, 9:16, 16:9)")

    anim_parser = subparsers.add_parser("animate", help="Animar imagen a video")
    anim_parser.add_argument("--image", required=True, help="URL de la imagen")
    anim_parser.add_argument("--prompt", default="Cinematic realistic movement", help="Instrucción de movimiento")

    args = parser.parse_args()

    if args.command == "generate":
        generate_image(prompt=args.prompt, aspect_ratio=args.aspect)
    elif args.command == "animate":
        animate_image(image_url_or_path=args.image, prompt=args.prompt)
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
