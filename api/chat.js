export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { contents } = req.body;

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    return res.status(500).json({
      error: "GEMINI_API_KEY is not configured.",
    });
  }

  const GEMINI_MODEL = "gemini-2.0-flash";

  const SYSTEM_PROMPT = `You are the friendly assistant for Trend Code, a premium digital solutions agency run by Artur Wagner.
Trend Code builds custom websites, corporate sites, landing pages, brand identity, and UI/UX design—no templates, senior-only execution.
Keep replies brief (2–4 sentences), warm, and not robotic.
Never invent pricing. Redirect pricing questions to the contact form (#contact) or trendcode@hotmail.com.
If asked something unrelated to Trend Code's services, politely steer the conversation back to how Trend Code can help.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Sorry, I couldn't generate a response.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Failed to get reply.",
    });
  }
}
