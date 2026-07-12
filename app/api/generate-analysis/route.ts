import { NextResponse } from "next/server";
import { analyzerMockData } from "@/lib/mock-data/analyzer";

/* ── Raw transcript excerpt (hardcoded from CSE meeting) ──────────── */
const RAW_TRANSCRIPT = `
Intervenant 8 (Secretary): I now open the extraordinary session of the Comité Social et Économique. Today's agenda concerns the mandatory consultation on the proposed dismissal of an employee declared medically unfit. Before we begin, I will proceed with the roll call. Members present: ...

Intervenant 4 (HR Representative): Thank you. I will now present the case. The employee in question was declared unfit by the occupational physician on March 15th, 2026. Following this declaration, the company undertook a thorough reclassification search in accordance with Article L.1226-2 of the Labor Code. We examined all available positions within the company and across affiliated entities...

Intervenant 17 (Elected Member): Before you continue, I have a procedural question. Can you confirm that the employee was informed of the reclassification search and given the opportunity to respond?

Intervenant 4: Yes, absolutely. The employee was notified by registered letter on March 20th, and we received their response on March 28th, in which they indicated their preferences regarding potential reclassification positions.

Intervenant 6 (Elected Member - CGT): I would like to challenge the scope of the reclassification search. Looking at the internal job board, I notice several positions were posted during this period that appear compatible with the employee's qualifications. Specifically, positions in the administrative support department and the customer service team. Were these positions considered?

Intervenant 4: We did review all positions posted during the relevant period. However, the medical restrictions specified by the occupational physician ruled out positions requiring prolonged standing or repetitive manual tasks, which eliminated several of the positions you're referring to.

Intervenant 6: That's precisely my concern. The job board posting for the administrative support position - reference number ADM-2026-047 - is primarily a desk-based role. I fail to see how the medical restrictions would apply to that specific position. Can you provide a post-by-post justification for each exclusion?

Intervenant 4: I understand your concern. While I can speak generally to the criteria applied, I would need to consult the detailed reclassification file to provide the specific post-by-post analysis you're requesting.

Intervenant 5 (Elected Member - CGT): I'd like to raise another point. The medical unfitness declaration mentions that the condition "may be linked to working conditions." Has any investigation been conducted into whether the employee's condition is connected to their work environment? If so, this would trigger additional obligations under the SSCT framework.

Intervenant 4: The occupational physician's declaration is the authoritative medical document in this matter. The company's obligation is to conduct the reclassification search based on the restrictions identified, which we have done.

Intervenant 5: With respect, that doesn't answer my question. Article R.4141-3 requires that when there's a potential causal link to working conditions, the employer must investigate and document the findings. Has this been done?
`;

/* ── System prompt for structured extraction ──────────────────────── */
const SYSTEM_PROMPT = `You are an expert compliance analyst. Given a raw meeting transcript, produce a JSON object with exactly this structure:

{
  "roles": [
    { "id": "Speaker ID", "role": "Inferred Role", "phase": "Session phase active", "votingBloc": "Voting bloc" }
  ],
  "engagement": [
    { "id": "Speaker ID", "count": "Intervention count description", "level": 1-5, "nature": "Brief description of contribution nature", "interest": "Interest level description" }
  ],
  "scorecard": [
    { "id": "Speaker ID", "volume": 1-5, "quality": 1-5, "power": 1-5, "impact": 1-5, "overall": sum }
  ]
}

Rules:
- Extract ALL speakers from the transcript.
- Use the exact speaker IDs from the transcript (e.g., "Intervenant 4").
- For engagement level, 5 = highest engagement, 1 = minimal.
- For the scorecard, each dimension is 1-5, overall is the sum (max 20).
- Return ONLY valid JSON, no markdown fences, no explanation.`;

export async function POST() {
  const apiKey = process.env.GROQ_API_KEY;

  // If no API key, return mock data gracefully
  if (!apiKey) {
    return NextResponse.json({
      source: "mock",
      data: analyzerMockData.speakerAnalysis,
    });
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Analyze this meeting transcript:\n\n${RAW_TRANSCRIPT}` },
        ],
        temperature: 0.3,
        max_tokens: 2048,
      }),
    });

    if (!response.ok) {
      console.error("Groq API error:", response.status, await response.text());
      return NextResponse.json({
        source: "mock",
        data: analyzerMockData.speakerAnalysis,
      });
    }

    const result = await response.json();
    const content = result.choices?.[0]?.message?.content ?? "";

    // Parse the JSON from the LLM response
    const parsed = JSON.parse(content);

    return NextResponse.json({
      source: "ai",
      data: parsed,
    });
  } catch (error) {
    console.error("AI generation failed, falling back to mock:", error);
    return NextResponse.json({
      source: "mock",
      data: analyzerMockData.speakerAnalysis,
    });
  }
}
