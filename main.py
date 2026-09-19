import os
import sys
from pathlib import Path
from dotenv import load_dotenv
import higgsfield_client

# Load environment variables from .env.local without exposing credentials
base_dir = Path(__file__).resolve().parent
env_candidates = [
    base_dir / ".env.local",
    base_dir / "next-app" / ".env.local",
    Path.cwd() / ".env.local",
]

for candidate in env_candidates:
    if candidate.exists():
        load_dotenv(dotenv_path=candidate)
        break

credentials = os.getenv("HF_KEY") or os.getenv("HF_CREDENTIALS")

if not credentials:
    print("Error: HF_KEY or HF_CREDENTIALS is not set in .env.local", file=sys.stderr)
    sys.exit(1)

if not os.getenv("HF_KEY") and os.getenv("HF_CREDENTIALS"):
    os.environ["HF_KEY"] = os.getenv("HF_CREDENTIALS")


def main():
    print("Submitting Seedance 2.5 text-to-video request to Higgsfield API...")
    try:
        result = higgsfield_client.subscribe(
            application="bytedance/seedance-2.5/text-to-video",
            arguments={
                "prompt": "A cinematic scene at sunset",
                "duration": 5,
                "resolution": "720p",
                "aspect_ratio": "16:9",
                "output_format": "mp4",
                "generate_audio": True,
            },
        )

        if isinstance(result, dict):
            status = result.get("status", "completed")
            print(f"Status: {status}")

            if status == "completed":
                video = result.get("video")
                video_url = (
                    video.get("url")
                    if isinstance(video, dict)
                    else result.get("url")
                )
                if not video_url and "output" in result and isinstance(result["output"], dict):
                    output_video = result["output"].get("video")
                    video_url = (
                        output_video.get("url")
                        if isinstance(output_video, dict)
                        else result["output"].get("url")
                    )

                if video_url:
                    print(f"Generated video URL: {video_url}")
                    return video_url
                else:
                    print(f"Completed with no video URL: {result}", file=sys.stderr)
                    sys.exit(1)
            elif status == "failed":
                print(f"Request failed: {result.get('error')}", file=sys.stderr)
                sys.exit(1)
            elif status in ("nsfw", "moderated"):
                print("Request was rejected by moderation (NSFW).", file=sys.stderr)
                sys.exit(1)
            elif status in ("cancelled", "canceled"):
                print("Request was canceled.", file=sys.stderr)
                sys.exit(1)
            else:
                print(f"Request finished with status: {status}", file=sys.stderr)
                sys.exit(1)
        else:
            print(f"Result: {result}")
    except Exception as e:
        print(f"Error generating video: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
