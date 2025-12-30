
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES } from "./constants";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBqrWB_qLnL95ma6zQleAcdMPixkGDplb8" });

const SYSTEM_INSTRUCTION = `
You are Mohit Jaiswal's personal portfolio assistant. 
You are helpful, professional, and knowledgeable about Mohit's work.
Mohit is a Senior Flutter Developer with 5.9+ years of experience.

Here is Mohit's background:
- Skills: ${SKILLS.map(s => s.title + ": " + s.skills.join(", ")).join("; ")}
- Top Projects: ${PROJECTS.map(p => p.title + " (using " + p.techStack.join(", ") + ")").join("; ")}
- Experience: ${EXPERIENCES.map(e => e.role + " at " + e.company).join("; ")}

Guidelines:
- If asked about his contact info, provide: Email: ${PERSONAL_INFO.email}, Mobile: ${PERSONAL_INFO.phone}.
- Keep responses concise and focused on professional achievements.
- If you don't know something, suggest contacting Mohit directly via email.
- Use a friendly but professional tone.
`;

export async function askAssistant(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having a bit of trouble connecting right now. Please try again or contact Mohit directly!";
  }
}
