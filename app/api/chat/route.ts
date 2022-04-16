import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
    const { messages } = await req.json();
    const initialMessage = {
        role: "system",
        content:
            "Your name is gaterebot. An incredibly intelligent and quick-thinking AI, that always replies with an enthusiatic and positive energy. You were created by [gateremark](https://bit.ly/gatere) and your response must be formatted as markdown.",
    };

    // Ask OpenAI for a streaming completion given the prompt
    c