import dotenv from "dotenv";
import path from "path";
import { config, higgsfield } from "@higgsfield/client/v2";

// Load environment variables from .env.local without exposing credentials
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config({ path: path.resolve(__dirname, ".env.local") });
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const credentials = process.env.HF_CREDENTIALS || process.env.HF_KEY;

if (!credentials) {
  console.error("Error: HF_CREDENTIALS or HF_KEY is not set in .env.local");
  process.exit(1);
}

config({
  credentials,
});

async function main() {
  console.log("Submitting Seedance 2.5 text-to-video request to Higgsfield API...");

  try {
    const result = await higgsfield.subscribe(
      "bytedance/seedance-2.5/text-to-video",
      {
        input: {
          prompt: "A cinematic scene at sunset",
          duration: 5,
          resolution: "720p",
          aspect_ratio: "16:9",
          output_format: "mp4",
          generate_audio: true,
        },
        withPolling: true,
      }
    );

    console.log(`Request ID: ${result.request_id}`);
    console.log(`Status: ${result.status}`);

    if (result.status === "completed") {
      const videoUrl =
        result.video?.url ||
        (result as any).output?.video?.url ||
        (result as any).url;

      if (videoUrl) {
        console.log(`Generated video URL: ${videoUrl}`);
        return videoUrl;
      } else {
        console.error(
          "Request completed but no video URL found in response:",
          JSON.stringify(result, null, 2)
        );
        process.exit(1);
      }
    } else if (result.status === "failed") {
      console.error("Request failed:", (result as any).error || "Unknown error");
      process.exit(1);
    } else if (result.status === "nsfw") {
      console.error("Request was rejected by moderation (NSFW).");
      process.exit(1);
    } else if (result.status === "canceled" || (result.status as any) === "cancelled") {
      console.error("Request was canceled.");
      process.exit(1);
    } else {
      console.error(`Request finished with status: ${result.status}`);
      process.exit(1);
    }
  } catch (error: any) {
    if (error.response?.data) {
      console.error("API error response:", error.response.data);
    } else {
      console.error("Error generating video:", error.message || error);
    }
    process.exit(1);
  }
}

main();
