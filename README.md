# SIRUS Style-it Fashion Prototype

This is a high-fidelity frontend prototype built with Next.js 16 (App Router), React, and Tailwind CSS. It demonstrates the proposed UI/UX for the SIRUS AI compliance reporting platform.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Environment Variables:**
   To enable the real AI integration for the Speaker Analysis tab, create a `.env.local` file in the root directory and add your Groq API key:
   ```
   GROQ_API_KEY=your_api_key_here
   ```
   *(Note: If no API key is provided, the application will gracefully fall back to mock data.)*

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Architecture Overview (Mock vs. Real)

This prototype is designed to provide a fast, reliable demonstration of the UI flow while proving that real AI integration is possible. 

### What is Mocked
Most of the application relies on hardcoded data fixtures to ensure a perfect presentation every time:
- The **Dashboard (`/analyzer`)** uses comprehensive mock data located in `lib/mock-data/analyzer.ts` for the Compliance & Risk tab and Numerical Data tab.
- The **Upload flow** and **Processing animation** simulate the delay and file handling of an actual pipeline.
- The **Admin folder list** and **Quotation** steps use localized state and static data.

### What is Real (AI Integration)
The **Speaker Analysis tab** on the dashboard features a "Regenerate with AI" button. When clicked (and if `GROQ_API_KEY` is configured), this triggers a real API route (`app/api/generate-analysis/route.ts`). This route takes a hardcoded excerpt of the CSE meeting raw transcript and sends it to the Groq API (using the `llama-3.3-70b-versatile` model). The LLM processes the transcript according to a strict system prompt, returning a structured JSON object containing speaker roles, engagement levels, and a scorecard, which is then dynamically rendered in the UI.
