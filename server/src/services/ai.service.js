import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY
});

if(!process.env.GOOGLE_API_KEY){
  console.error("API Error")
}

async function main() {

  const response = await ai.models.generateContent({
    model: "Gemini-2.5-flash",
    contents: "Hii there | qoute for the day"
  })

  console.log(response.text)
}

export default main