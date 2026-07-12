"use client";

import React, { useState } from "react";
import Link from "next/link";
import "@/styles/editor.css";

export default function EditorPage() {
  const [mode, setMode] = useState<"previewer" | "editor">("editor");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  // Approximate character/word counts for the report content
  const charCount = 57808;
  const wordCount = 10886;

  return (
    <div className="min-h-screen bg-[#EDF1F8]">
      {/* ── Top Toolbar ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
        {/* Row 1: Mode Tabs + Right Actions */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setMode("previewer")}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-all ${
                mode === "previewer" ? "bg-bg-tint text-primary" : "text-text-secondary hover:text-ink"
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
              Previewer
            </button>
            <button
              onClick={() => setMode("editor")}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-all ${
                mode === "editor" ? "bg-primary-light text-primary" : "text-text-secondary hover:text-ink"
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
              Editor
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-text-secondary transition-all hover:border-primary/30 hover:text-ink">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              Appendix
            </button>
            <button className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-text-secondary transition-all hover:border-primary/30 hover:text-ink">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              Comments
            </button>
          </div>
        </div>

        {/* Row 2: Formatting Toolbar (only in editor mode) */}
        {mode === "editor" && (
          <div className="flex flex-wrap items-center gap-0.5 border-t border-border-light px-3 py-1.5">
            {/* Text formatting */}
            {[
              { label: "B", style: "font-black" },
              { label: "I", style: "italic" },
              { label: "U", style: "underline" },
              { label: "S", style: "line-through" },
            ].map((btn) => (
              <button key={btn.label} className="flex h-7 w-7 items-center justify-center rounded text-sm text-ink/70 hover:bg-bg-tint hover:text-ink transition-colors">
                <span className={btn.style}>{btn.label}</span>
              </button>
            ))}

            <div className="mx-1 h-5 w-px bg-border-light" />

            {/* Highlight & color */}
            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
            </button>
            <button className="flex h-7 items-center justify-center rounded px-1 text-xs font-bold text-ink/70 hover:bg-bg-tint">
              A<span className="ml-0.5 text-[8px]">▼</span>
            </button>
            <button className="flex h-7 w-7 items-center justify-center rounded hover:bg-bg-tint">
              <span className="text-xs font-bold text-ink/70">T₁</span>
            </button>

            <div className="mx-1 h-5 w-px bg-border-light" />

            {/* Lists */}
            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
            </button>
            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="10" y1="6" x2="21" y2="6" /><line x1="10" y1="12" x2="21" y2="12" /><line x1="10" y1="18" x2="21" y2="18" /><path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" /></svg>
            </button>

            <div className="mx-1 h-5 w-px bg-border-light" />

            {/* Alignment */}
            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="17" y1="10" x2="3" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="14" x2="3" y2="14" /><line x1="17" y1="18" x2="3" y2="18" /></svg>
            </button>

            <div className="mx-1 h-5 w-px bg-border-light" />

            {/* Table & media */}
            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /></svg>
            </button>
            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
            </button>

            <div className="mx-1 h-5 w-px bg-border-light" />

            {/* SIRUS AI Assist */}
            <button className="flex items-center gap-1.5 rounded-lg bg-primary-light/50 px-2.5 py-1 text-xs font-bold text-primary transition-all hover:bg-primary-light">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2v20M17 5l-10 14M7 5l10 14M2 12h20" />
              </svg>
              SIRUS AI Assist
            </button>

            <div className="mx-1 h-5 w-px bg-border-light" />

            {/* Superscript / subscript */}
            <button className="flex h-7 w-7 items-center justify-center rounded text-xs font-bold text-ink/70 hover:bg-bg-tint">
              x²
            </button>
            <button className="flex h-7 w-7 items-center justify-center rounded text-xs font-bold text-ink/70 hover:bg-bg-tint">
              x₂
            </button>
          </div>
        )}

        {/* Row 3: Sub-toolbar */}
        {mode === "editor" && (
          <div className="flex items-center gap-2 border-t border-border-light px-3 py-1.5">
            <button className="flex h-7 w-7 items-center justify-center rounded text-sm font-black text-ink/70 hover:bg-bg-tint">G</button>
            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
            </button>
            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>
            </button>

            <div className="mx-1 h-5 w-px bg-border-light" />

            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>
            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>
            </button>

            <div className="mx-1 h-5 w-px bg-border-light" />

            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
            </button>
            <span className="text-xs font-semibold text-text-secondary">fullsize</span>
            <button className="flex h-7 w-7 items-center justify-center rounded text-ink/70 hover:bg-bg-tint">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
            </button>
          </div>
        )}
      </header>

      {/* ── Content Pane ── */}
      <main className="mx-auto w-full max-w-[950px] py-10 px-4">
        <div className={`report-content bg-white shadow-sm ${mode === "editor" ? "border border-border" : ""}`} style={{ padding: '46px 66px 42px 66px', minHeight: '80vh' }}>
          
          {/* ── Report Content (kv-table from screenshot 05) ── */}
          <table className="kv-table">
            <tbody>
              <tr>
                <td className="k">Company</td>
                <td className="v">Styleit Fashion Pvt Ltd</td>
              </tr>
              <tr>
                <td className="k">Address</td>
                <td className="v">SECTOR 15-CBD, Navi Mumbai Belapur</td>
              </tr>
              <tr>
                <td className="k">Meeting Date</td>
                <td className="v">24 June 2026</td>
              </tr>
              <tr>
                <td className="k">Location</td>
                <td className="v">Mumbai</td>
              </tr>
              <tr>
                <td className="k">Meeting Type</td>
                <td className="v">Extraordinary</td>
              </tr>
              <tr>
                <td className="k">Prepared By</td>
                <td className="v">Mohit Dandwani</td>
              </tr>
              <tr>
                <td className="k">Report Generated</td>
                <td className="v">24/06/2026</td>
              </tr>
              <tr>
                <td className="k">Compliance Instance</td>
                <td className="v">CSE</td>
              </tr>
            </tbody>
          </table>

          {/* Executive Summary */}
          <div className="section-label" style={{ marginTop: '40px' }}>Section 1</div>
          <h2 className="section-title">Executive Summary</h2>

          <div className="exec-card">
            <div className="label">Purpose of Session</div>
            <div className="text">
              Extraordinary session of the CSE convened to deliver the mandatory advisory opinion on the proposed dismissal of an employee declared medically unfit for their position, pursuant to Articles L.1226-2 and L.1226-12 of the French Labor Code.
            </div>
          </div>

          <p className="body-text">
            The session was attended by five elected representatives (CGT, CFDT, and SNB affiliations) and one management representative (HR). The consultation followed the standard CSE procedure, with formal roll call, agenda presentation, and structured debate.
          </p>

          {/* Attendance Data Table */}
          <h3 className="part-title">Attendance Record</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Affiliation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Intervenant 4</td>
                <td>HR Representative</td>
                <td>Management</td>
                <td>Present</td>
              </tr>
              <tr>
                <td>Intervenant 6</td>
                <td>Elected Member</td>
                <td>CGT/CFDT</td>
                <td>Present</td>
              </tr>
              <tr>
                <td>Intervenant 5</td>
                <td>Elected Member</td>
                <td>CGT</td>
                <td>Present</td>
              </tr>
              <tr>
                <td>Intervenant 17</td>
                <td>Elected Member</td>
                <td>CFDT/CGT</td>
                <td>Present</td>
              </tr>
              <tr>
                <td>Intervenant 8</td>
                <td>Secretary</td>
                <td>CFDT</td>
                <td>Present</td>
              </tr>
            </tbody>
          </table>

          {/* Discussion Log with Speaker Bubbles */}
          <div className="section-label" style={{ marginTop: '40px' }}>Section 2</div>
          <h2 className="section-title">Discussion Log</h2>

          <div className="speaker">
            <div className="badge">I8</div>
            <div className="bubble">
              <div className="who">Intervenant 8 — Secretary</div>
              <div className="said">I now open the extraordinary session of the Comité Social et Économique. Today&rsquo;s agenda concerns the mandatory consultation on the proposed dismissal of an employee declared medically unfit.</div>
            </div>
          </div>

          <div className="speaker">
            <div className="badge">I4</div>
            <div className="bubble">
              <div className="who">Intervenant 4 — HR Representative</div>
              <div className="said">Thank you. The employee was declared unfit by the occupational physician on March 15th, 2026. We undertook a thorough reclassification search in accordance with Article L.1226-2 of the Labor Code.</div>
            </div>
          </div>

          <div className="speaker role-b">
            <div className="badge">I6</div>
            <div className="bubble">
              <div className="who">Intervenant 6 — Elected Member (CGT)</div>
              <div className="said">I would like to challenge the scope of the reclassification search. The job board shows positions that appear compatible with the employee&rsquo;s qualifications. Can you provide a post-by-post justification?</div>
            </div>
          </div>

          {/* Alert Callouts */}
          <div className="alert alert-tension">
            <div className="alert-label">⚠ Tension Point</div>
            <div>Management could not provide post-by-post justification for exclusions from the reclassification search. This constitutes a significant procedural gap.</div>
          </div>

          <div className="alert alert-unresolved">
            <div className="alert-label">⏳ Unresolved</div>
            <div>Causal link between working conditions and medical unfitness was raised but not investigated. SSCT framework obligations may apply.</div>
          </div>

          <div className="alert alert-decision">
            <div className="alert-label">✓ Decision</div>
            <div>The CSE rendered an unfavourable advisory opinion (4 against, 0 in favour, 1 abstention) on the proposed dismissal for medical unfitness.</div>
          </div>

        </div>
      </main>

      {/* ── Footer Bar ── */}
      <footer className="sticky bottom-0 z-50 flex items-center justify-between border-t border-border bg-white px-6 py-3 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/analyzer" className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-primary transition-colors">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="15 18 9 12 15 6" /></svg>
            Back to Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xs font-semibold text-text-tertiary">
            CHARS: {charCount.toLocaleString()} &nbsp; WORDS: {wordCount.toLocaleString()}
          </span>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl bg-danger px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-danger/90 hover:-translate-y-0.5"
          >
            {saved ? (
              <>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><polyline points="20 6 9 17 4 12" /></svg>
                Saved!
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </footer>
    </div>
  );
}
