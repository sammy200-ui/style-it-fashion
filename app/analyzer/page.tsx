"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ComplianceRiskTab } from "@/components/analyzer/ComplianceRiskTab";
import { SpeakerAnalysisTab } from "@/components/analyzer/SpeakerAnalysisTab";
import { NumericalDataTab } from "@/components/analyzer/NumericalDataTab";

export default function AnalyzerDashboard() {
  const [activeTab, setActiveTab] = useState<"compliance" | "speaker" | "numerical">("compliance");

  return (
    <div className="min-h-screen bg-bg-tint pb-24">
      {/* ── Top Header Bar ── */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/upload" className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-tertiary transition-colors hover:bg-bg-tint hover:text-ink">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-ink">Compliance Snapshot</h1>
            <span className="flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-2.5 py-0.5 text-xs font-semibold text-warning">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Preview Only
            </span>
          </div>
        </div>
        
        {/* Main Navigation Tabs */}
        <div className="flex items-center rounded-lg bg-bg-tint p-1">
          <button
            onClick={() => setActiveTab("compliance")}
            className={`rounded-md px-4 py-1.5 text-sm font-semibold transition-all ${
              activeTab === "compliance"
                ? "bg-white text-primary shadow-sm"
                : "text-text-secondary hover:text-ink"
            }`}
          >
            Compliance & Risk
          </button>
          <button
            onClick={() => setActiveTab("speaker")}
            className={`rounded-md px-4 py-1.5 text-sm font-semibold transition-all ${
              activeTab === "speaker"
                ? "bg-white text-primary shadow-sm"
                : "text-text-secondary hover:text-ink"
            }`}
          >
            Speaker Analysis
          </button>
          <button
            onClick={() => setActiveTab("numerical")}
            className={`rounded-md px-4 py-1.5 text-sm font-semibold transition-all ${
              activeTab === "numerical"
                ? "bg-white text-primary shadow-sm"
                : "text-text-secondary hover:text-ink"
            }`}
          >
            Numerical Data
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/quotation"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-deep hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
            Request Quotation
          </Link>
          <button className="flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white shadow-sm opacity-50 cursor-not-allowed">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Report
          </button>
        </div>
      </header>

      {/* ── Main Content Area ── */}
      <main className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        {activeTab === "compliance" && <ComplianceRiskTab />}
        {activeTab === "speaker" && <SpeakerAnalysisTab />}
        {activeTab === "numerical" && <NumericalDataTab />}
      </main>

    </div>
  );
}
