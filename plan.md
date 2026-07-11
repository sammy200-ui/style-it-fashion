# Meeting Management Platform — Build Plan

**Context:** Internship assignment (single evaluation round — no second chance, so scope precision matters more than raw feature count). Built with Antigravity, one chunk at a time, committing to GitHub after each chunk before starting the next.

This doc is the single source of truth for the build. Everything below is pulled directly from the material the hiring manager sent — the proposal doc, the workflow deck, the raw transcript sample, the design template, the actual generated report, the speaker-analysis sample, and the 5 product screenshots. Nothing here is invented; where something is genuinely unclear, it's flagged as an open question instead of guessed at.

---

## 1. What this project actually is (one paragraph)

An AI-powered platform that turns a meeting recording/transcript into a compliance-ready, formatted minutes report — starting with French works-council meetings (CSE) as the launch vertical. A visitor signs up, fills in meeting metadata, uploads a recording (+ optional supporting docs), instantly sees a **read-only AI preview** of 5 fixed outputs (compliance status, risks/gaps, speaker analysis, numerical data, recommendations), and — to get the actual editable/downloadable report — submits a quotation request. From there it's handled by an admin/consultancy side: real transcription, AI report generation, manual editing, lock-in, and delivery.

There are two sides to the product: **client-facing** (the part the hiring manager explicitly wants you to focus on) and **admin-side** (lower priority for this round — see Section 6).

---

## 2. Source materials — what each file told us

| File | What it is | What we pulled from it |
|---|---|---|
| `Meeting_Management_Tasks_Proposal.docx` | Full 21-section product spec (earlier draft) | User journey, tiers, functional requirements, tech approach |
| `Meeting_Management_Tasks_Workflow.pptx` | Slide-deck version of the same product (**newer, more refined** — treat as the source of truth wherever it conflicts with the docx) | Cleaned-up flow, renamed "Instant Compliance Snapshot," 5 fixed outputs (not 3), voice agent detail, admin client-cards/broadcast feature |
| `CSE_Rockefeller_..._raw_transcription.docx` | Real sample input: messy French speaker-labelled transcript of an actual CSE meeting | What "raw input" looks like — multiple speakers, cross-talk, no structure |
| `Report_Design_Template_Blue.html` | Blank, reusable HTML component library (blue theme) | The exact CSS classes/tokens for the **final report document** (kv-table, exec-card, speaker bubble, alert callout, vote block, timeline) |
| `CSE_Rockefeller_..._Actual_Report_Generation.pdf` | The Rockefeller transcript run fully through that template — 148 pages | Gold-standard example of the finished, locked report the admin pipeline produces |
| `speaker_analysis_report.pdf` | A second sample output — "Speaker Analysis" for a different (CBS Montpellier) CSE meeting | Shows exactly what the Speaker Analysis prompt-library output contains: role mapping, engagement scoring, decision-power ranking, comparison table, vote outcome, scorecard |
| `reference/01-05.png` (renamed from `1.png`–`5.png`) | Screenshots of an existing product called **SIRUS** | Concrete, pixel-level UI reference for 4 of your 5-6 core screens (see Section 5) — **put these actual files in the repo, see note below** |

**Important:** the screenshots are branded "SIRUS" — this is almost certainly a reference product the hiring manager is showing you ("how it comes across," in their words) to demonstrate quality bar and interaction pattern, not necessarily the name you must ship under. Treat it as the visual/UX reference, not a branding mandate (see Open Questions).

**A note on how to actually use this doc with Antigravity:** this file describes what's in each screenshot in enough detail to work from text alone, but Antigravity will build a much closer match if it can actually *see* the images, not just read a description of them. Copy the 5 PNGs into the repo as `reference/01-landing-metadata-step.png`, `reference/02-upload-step.png`, `reference/03-before-after-marketing.png`, `reference/04-report-analyzer-dashboard.png`, `reference/05-document-editor.png` (I've renamed and included them alongside this file — see the delivered `reference/` folder), and attach the relevant one directly in the Antigravity chat when you get to the chunk that builds that screen. References like "screenshot 4" below are just shorthand for those same files — not labels Antigravity can resolve on its own without the actual image in front of it.

---

## 3. Confirmed end-to-end flow

**Client side:**
0. Homepage — sample report library (browse without login)
1. Sign up (hard gate — no upload/preview without an account)
2. Company & meeting metadata — region, compliance type, language
3. Upload — meeting recording (+ optional supporting docs: policies, contracts, prior minutes)
4. **Instant Compliance Snapshot** — a small/lightweight LLM (not the full transcription model) reads the upload(s) together and produces 5 fixed, read-only outputs: Compliance Status, Risk & Gap Findings, Speaker Analysis, Numerical Data, Recommendations. Not editable, not downloadable. Same 5 outputs regardless of file type or tier — only the depth of the *real* report later differs by tier.
5. Tier selection (Essential / Scope / Premium) + Quotation request → sent to admin

**Admin side (lower priority, see Section 6):**
6. Client folder intake
7. Real Deepgram transcription + e-book-style review/edit
8. Tier-specific AI report generation (large-context LLM — DeepSeek/Kimi suggested, but "any model can be used")
9. Document Editor — page-based, formatting tools, edits against client notes
10. Lock-in → unlocks download → Dispatch to client
11. Ongoing multilingual voice/text assistant

**Service tiers** (Essential / Scope / Premium) differ in: transcription depth, formatting, compliance-check depth, editing scope, voting/decision log, output formats, signature/approval, turnaround. Full breakdown is in the proposal doc §5 — don't re-derive it, just reference it when building the tier-comparison cards.

---

## 4. The 5 fixed Compliance Snapshot outputs, explained

The workflow deck is explicit that this is a fixed set, always these 5, regardless of tier or file type:

1. **Compliance Status** — an overall score/verdict
2. **Risk & Gap Findings** — what's missing or non-compliant
3. **Speaker Analysis** — who spoke, how much, what they pushed for (see `speaker_analysis_report.pdf` for exact depth: role mapping, engagement level, decision-making power, most/least involved ranking, a scorecard table)
4. **Numerical Data** — any figures/metrics from the meeting, shown as charts, not plain numbers
5. **Recommendations** — actionable next steps

The **Report Analyzer dashboard** (`reference/04-report-analyzer-dashboard.png`) is the best concrete reference for how to lay out #1, #2, and #5 together (compliance score ring, risk summary tiles, filterable findings table). Speaker Analysis (#3) and Numerical Data (#4) don't have a screenshot reference — build them as additional tabs/pages in the same viewer, using the `speaker_analysis_report.pdf` content structure for #3, and simple bar/line/donut charts for #4.

---

## 5. Screenshot-by-screenshot UI reference

These are your literal build targets for the client-facing screens. Colors were sampled directly from the PNGs (see Section 7 for the final token list) so you're not eyeballing hex codes. File names below match the `reference/` folder delivered with this plan — feed the actual PNG to Antigravity when building each one, don't rely on the text description alone.

**`reference/01-landing-metadata-step.png` — Landing / Create Meeting Report (metadata step)**
- Left: marketing panel — "AI POWERED" pill, headline "Turn Meeting into Compliance Ready Report" (second line in the primary indigo color), sub-copy, "Trusted by 500+ Enterprises" with avatar stack
- Center: white card — region/country selector (flag cards, only France active, rest "Coming soon"), compliance-type selector (carousel of cards with a "?" icon placeholder, dot pagination, only CSE active among CSE/AG/CSSCT/CSEE/QVCT), a dark pill "Continue →" button and a light lavender "Report Analyzer" button, and a 5-step horizontal progress tracker (Upload Recordings → AI Transcribes Audio → Reformulate & Edit Minutes → Compliance Check → Report Ready to Distribute)
- Right: 3 stacked tier cards (Essential/Scope/Premium) each with a mini report-preview thumbnail

**`reference/02-upload-step.png` — Upload step**
- Confirmed selection bar (CSE + English + "Change Processing Type" link)
- Large dashed dropzone ("Click or drag and drop your meeting file")
- 2×2 form grid: Meeting Name*, Meeting Location*, Meeting Type* (dropdown), Date & Time*
- "Start →" button, same 5-step tracker at the bottom

**`reference/03-before-after-marketing.png` — Before/After marketing block** (matches the workflow deck's messaging almost verbatim — this is landing-page copy, not a separate screen to build, just reuse the messaging on your homepage/hero)

**`reference/04-report-analyzer-dashboard.png` — Report Analyzer dashboard** — your main reference for the Compliance Snapshot screen:
- Compliance Score donut (e.g. 92% Compliant) + 4 labeled progress bars underneath
- Risk Summary: 4 stat tiles (Critical Risks / Recommendations / Compliant Areas / Missing Documents) + a Risk Exposure Level slider (Low–Medium–High)
- Findings panel: 4 tabs (Risks / Missing Documents / Compliance References / Recommendations), each item showing a risk-level pill, description, and a legal-article citation
- Findings Overview table: sortable/paginated, columns for Risk Title, Description, Risk Level, Impact (bar), Confidence (%), Action
- Filter sidebar: Risk Level / Category / Compliance Area / Status dropdowns + Apply Filters

**`reference/05-document-editor.png` — Document Editor** (admin-side, lower priority, but well-specified so cheap to build if time allows):
- Previewer/Editor toggle, Appendix/Comments buttons
- Full rich-text toolbar (bold/italic/underline, fonts, lists, tables, "AI Assist" button, print/preview/fullscreen/code-view)
- Document content rendered as a bordered key-value table — this should literally use the `.kv-table` class from `Report_Design_Template_Blue.html`, not a new component
- Char/word count + Save Changes button

---

## 6. Scope for this round: Must-Build vs Stretch

Given it's one round and the explicit instruction is "focus especially on the UI," prioritize like this:

**Must-build (this is what gets judged):**
1. Landing/marketing page (`01` left panel + `03` before/after block)
2. Sign up / login (can be minimal — doesn't need real auth backend, but should look and behave real)
3. Metadata + compliance selection step (`01` center panel)
4. Upload step (`02`)
5. Compliance Snapshot preview — all 5 outputs, read-only, using `04`'s dashboard as the primary layout
6. Quotation form (tier selection + notes) with a confirmation state
7. Tier comparison (Essential/Scope/Premium cards, reusable — landing page + quotation step)

**Stretch (build only if the must-build list is fully polished first):**
8. Document Editor (`05`) — well-specified, good ROI if you have time
9. Admin panel — client folder list + status (skip the drag-and-drop broadcast workspace and full CRM; too much for the time available)
10. Homepage sample-report library (nice-to-have, not core to proving UI competence)
11. Voice assistant UI — pptx describes voice-driven corrections, note-taking, email-sending; this is a lot of surface area for a stretch item, so at most build a chat-widget shell, don't try to wire real speech

**Deliberately out of scope for this round** (call this out explicitly if asked, don't silently skip): real Deepgram integration, real multilingual voice agent, admin CRM/broadcast workspace, actual payment/pricing logic.

**On the AI part specifically:** the message says "any model can be used" for transcription→report generation, which suggests they do want to see *some* real AI call, not just static mock UI. Recommended approach: hardcode realistic-looking mock JSON for the default demo path (so the reviewer sees a complete, fast, reliable flow), but wire one real LLM call (e.g., Groq/Llama or any free-tier API) behind an actual "Generate" action for at least the Speaker Analysis output, using the provided raw transcript as the real input. That gives you a genuine "transcription/document → AI → structured output" moment to point to, without betting the whole demo on an API call succeeding live.

---

## 7. Design tokens (sampled from the actual screenshots + the report template)

Two separate visual systems — don't blend them:

**A. Product/App UI (the SIRUS-style screens — landing, upload, dashboard, editor chrome)**
```
--primary:        #4F39F6   /* main indigo-violet — buttons, active states, AI Assist */
--primary-deep:    #4E2AC8   /* darker variant used in chart/ring fills */
--ink:             #0F172B   /* near-black navy — dark CTA buttons, headings */
--bg-tint:         #F5F3FF   /* very light lavender page background */
--success:         #20C06F   /* compliant / low risk */
--danger:          #EC482F   /* critical risk */
--warning:         #F2BB19   /* medium risk / premium-tier gold accent */
--muted-violet:    #887AF8   /* secondary labels, tier-card headings */
```

**B. Report/Document theme (the actual generated report content — used inside the Document Editor content pane, and anywhere you render a "finished report")**
Pulled directly from `Report_Design_Template_Blue.html` — reuse these classes/variables as-is, don't reinvent them:
```
--accent:      #2F69FF
--accent-dark: #101936
--accent-gold: #F6BF2F
--ink:         #101936
--ink-soft:    #25304B
--muted:       #9AA8C2
--line:        #E2E8F3
--bg-tint:     #F5F8FD
--ok:          #198C61
--warn:        #B98313
--danger:      #D94B4B
--info:        #7A5AF8
```
Reusable classes already defined in that file: `.kv-table`, `.exec-card`, `.data-table`, `.speaker` (+ `.role-a/.role-b/.role-neutral`), `.alert` (+ `.alert-decision/-unresolved/-tension/-projection`), `.timeline`, `.vote-block`, `.section-label`.

---

## 8. Open questions (don't block on these — proceed with the assumptions below, but raise them if you get a founder call)

1. **Branding** — ship as "SIRUS" or pick your own name? *Assumption: use a placeholder name of your own (e.g. keep it simple/generic), theme it entirely via CSS variables so renaming later is a 2-minute job.*
2. **Real AI calls vs. mocked** — is a live API call expected, or is polished mock data enough? *Assumption: mock-first, one real call as a bonus (Section 6).*
3. **Multi-file upload** — the workflow deck says the snapshot engine reads "meeting + supporting documents" together, but `02` shows a single dropzone. *Assumption: build the dropzone to accept multiple files, but keep the primary UX framed around "your meeting file."*
4. **Admin panel** — expected at all for this round, or purely a stretch? *Assumption: stretch, per Section 6.*
5. **Language** — the actual sample report is entirely in formal French; is English acceptable for the demo? *Assumption: English UI, keep the CSE/French terminology (compliance names, article references) since that's the real domain vocabulary and shows you understood the source material.*

---

## 9. Tech stack

Matches what's already suggested in the proposal's "Suggested Technical Approach" section, and what you already know:
- **Frontend:** Next.js (App Router) + Tailwind CSS
- **Charts:** Recharts (for the Numerical Data output + dashboard bars/rings)
- **Rich text editor** (Document Editor, stretch item): Tiptap or Lexical — don't hand-roll a rich text editor
- **State/mock data:** local JSON fixtures + React state; no real DB needed for this round unless you want to add one later
- **Optional real AI call:** Groq (Llama) or any free-tier LLM API, called from a simple API route

---

## 10. Chunked build plan

Each chunk ends with a **commit + push to GitHub** before starting the next one. Keep commits scoped to what's listed — don't bundle chunks together.

### Chunk 1 — Project scaffold
- `npx create-next-app` (App Router, Tailwind, TypeScript optional per your comfort level)
- Set up folder structure: `/app`, `/components`, `/lib/mock-data`, `/styles/tokens.css`
- Add both token sets from Section 7 as CSS variables
- Add a basic layout shell (nav placeholder, container widths)
- **Commit:** `initial and design tokens`

### Chunk 2 — Landing page
- Hero section (`01` left panel copy/layout)
- Before/After block (`03`)
- Tier comparison cards (reusable component — you'll need this again in Chunk 4 and 6)
- **Commit:** `feat: landing page`

### Chunk 3 — Auth shell
- Sign up / Login pages (form only, client-side validation, fake "session" via local state or cookie)
- Route guard: uploads/preview pages redirect to sign up if not "logged in"
- **Commit:** `feat: auth pages + route gate`

### Chunk 4 — Metadata & compliance selection step
- Region/country selector (flag cards, only France enabled)
- Compliance-type carousel (only CSE enabled, rest show "?" placeholder + disabled state)
- 5-step progress tracker component (reusable across steps 4/5/6)
- Tier sidebar cards
- **Commit:** `feat: meeting metadata + compliance selection step`

### Chunk 5 — Upload step
- Dropzone (multi-file, accept audio/video/doc types)
- Meeting Name/Location/Type/Date-time form fields
- Wire "Start" to move to the next step once required fields are valid
- **Commit:** `feat: upload step`

### Chunk 6 — Compliance Snapshot (the centerpiece screen)
- Build the dashboard layout from `04`: Compliance Score ring, Risk Summary tiles, Risk Exposure slider, Findings tabs + table, Filter sidebar
- Add two more tabs/sections: Speaker Analysis (structure it after `speaker_analysis_report.pdf` — role table, engagement table, comparison table, scorecard) and Numerical Data (2-3 simple charts)
- Populate everything from a mock JSON fixture that looks like real LLM output
- Mark the whole screen visibly read-only (watermark/lock icon, no download button)
- **Commit:** `feat: compliance snapshot preview (5 fixed outputs)`

### Chunk 7 — Quotation request flow
- Form: tier selection (reuse tier cards) + notes field
- Submit → confirmation screen ("Request sent to our team")
- **Commit:** `feat: quotation request flow`

### Chunk 8 — Real AI call (optional but recommended)
- One API route that takes the raw transcript sample, calls a real LLM, and returns a Speaker Analysis JSON matching your Chunk 6 shape
- Wire a "Regenerate with AI" button on the Speaker Analysis tab to hit it live
- **Commit:** `feat: live AI speaker-analysis generation`

### Chunk 9 — Document Editor (stretch)
- Previewer/Editor toggle
- Rich text toolbar (Tiptap) with a subset of the buttons in `05` — don't try to replicate every icon
- Render report content using `.kv-table` / `.exec-card` / `.speaker` classes from the Blue Design Template
- Save Changes (local state is fine)
- **Commit:** `feat: document editor (admin)`

### Chunk 10 — Admin panel basics (stretch)
- Simple client-folder list with status pills (Awaiting Transcription / In Editing / Locked / Dispatched)
- Click into a folder → shows the Document Editor from Chunk 9
- **Commit:** `feat: admin panel — client folder list`

### Chunk 11 — Polish pass
- Responsive check (at least tablet width, screenshots suggest desktop-first is fine)
- Loading/empty/error states on the upload → snapshot transition
- README with setup steps + a one-paragraph explanation of what's mocked vs. real
- **Commit:** `chore: polish, states, README`

---

## 11. Final submission checklist

- [ ] Every Must-Build item from Section 6 is done and looks intentional, not placeholder-y
- [ ] Colors/spacing consistent with Section 7 tokens throughout — no default Tailwind blue/gray leaking in
- [ ] Compliance Snapshot clearly reads as "preview only" (no way to download/edit it)
- [ ] README explains: what's real AI vs. mocked, how to run it, and what you'd build next given more time
- [ ] Repo has a clean chunked commit history matching Section 10 — this itself is a signal to the reviewer that you work in reviewable increments