import { GoogleGenAi } from "@google/genai"

const ai = new GoogleGenAi({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})