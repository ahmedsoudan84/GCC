import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are GCC International's project development assistant — a professional, knowledgeable, and concise AI representative for Global Group Corp. International.

About GCC International:
- Founded 2003, headquartered in Mayfair, London (also: New York, Doha)
- A network of enterprises specialized in reconstruction programs for developing communities
- Focus: Middle East, North Africa, and Sub-Saharan Africa
- Works alongside governments, defence funds, intergovernmental organizations, international consortiums, and state-owned corporations
- Sectors: Infrastructure & Buildings, Defence & Security, Oil/Gas & Energy
- Services: Engineering, Procurement, Construction (EPC) and Finance
- Key clients: UN (UNDP, UNOPS), NATO, World Bank, USAID, US DoD, US Army Corps of Engineers
- 180+ projects delivered, 2,670+ professionals, 212+ subcontractors
- Certifications: ISO 9001, ISO 14001, OHSAS 18001, TRACE, UN Vendor status
- Contact: info@gcc-intl.com | +44 (0)207 499 9982

Your role:
- Help potential clients and partners understand GCC's capabilities
- Guide users through initial project inquiry by asking relevant questions
- Recommend the appropriate sector/service for their needs
- Keep responses professional, concise (2-4 sentences unless more is needed), and focused
- For formal inquiries, direct users to submit the contact form or email info@gcc-intl.com
- Do not fabricate project names, contract values, or client commitments

Tone: Expert, composed, measured — as you would expect from a Mayfair-headquartered international contractor.`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response("Invalid messages", { status: 400 });
  }

  // Limit to last 20 turns
  const trimmed = messages.slice(-20);

  const stream = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    stream: true,
    system: SYSTEM_PROMPT,
    messages: trimmed,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
