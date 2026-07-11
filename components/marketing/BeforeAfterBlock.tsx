"use client";

import React from "react";
import Link from "next/link";

export function BeforeAfterBlock() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Cards Container */}
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
        
        {/* ── Arrow connecting the two blocks (visible on large screens) ── */}
        <div className="absolute left-1/2 top-1/2 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl shadow-black/5 lg:flex z-10">
          <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
          </svg>
        </div>

        {/* ── Before Card (Manual) ── */}
        <div className="flex-1 rounded-3xl border border-red-100 bg-[#FFF8F6] p-8 shadow-sm">
          {/* Header */}
          <div className="mb-8">
            <span className="mb-4 inline-block rounded-md bg-red-100 px-3 py-1 text-xs font-bold tracking-wider text-red-600">
              BEFORE ANALYSIS
            </span>
            <h2 className="font-heading text-3xl font-bold text-ink">
              Manual. Slow. Uncertain.
            </h2>
            <div className="mt-4 h-1 w-12 bg-red-600"></div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            {/* Fake visual stack (left side) */}
            <div className="relative flex h-64 w-full flex-shrink-0 items-center justify-center md:w-56">
              <div className="relative h-48 w-40">
                <div className="absolute bottom-0 left-0 h-40 w-32 -rotate-6 rounded-lg border border-red-200 bg-[#Fdf5e6] shadow-sm"></div>
                <div className="absolute bottom-2 left-2 h-40 w-32 -rotate-3 rounded-lg border border-red-200 bg-[#fef0db] shadow-md"></div>
                <div className="absolute bottom-4 left-4 h-40 w-32 rounded-lg border border-red-200 bg-white shadow-lg p-3">
                   <div className="space-y-2">
                     <div className="h-2 w-full bg-gray-200 rounded"></div>
                     <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                     <div className="h-2 w-4/6 bg-gray-200 rounded"></div>
                     <div className="mt-4 h-2 w-full bg-gray-200 rounded"></div>
                     <div className="h-2 w-full bg-gray-200 rounded"></div>
                   </div>
                </div>
                {/* Big Red X overlay */}
                <div className="absolute -right-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-danger text-white shadow-lg shadow-danger/30">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>

            {/* List (right side) */}
            <div className="flex flex-col gap-5">
              {[
                { title: "120+ page PDF", desc: "Overwhelming and hard to navigate", icon: "📄" },
                { title: "Unstructured content", desc: "No clear organization or hierarchy", icon: "❓" },
                { title: "Difficult to review", desc: "Time-consuming manual checks", icon: "🔍" },
                { title: "High risk of missing gaps", desc: "Critical issues can be overlooked", icon: "⏱️" },
                { title: "Time consuming", desc: "Takes hours or days to complete", icon: "⏳" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-red-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-200 bg-white text-xl shadow-sm text-danger">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">{item.title}</h4>
                    <p className="mt-0.5 text-xs text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── After Card (Automated) ── */}
        <div className="flex-1 rounded-3xl border border-primary-light bg-white p-8 shadow-sm">
          {/* Header */}
          <div className="mb-8">
            <span className="mb-4 inline-block rounded-md bg-primary-light px-3 py-1 text-xs font-bold tracking-wider text-primary">
              AFTER SIRUS ANALYSIS
            </span>
            <h2 className="font-heading text-3xl font-bold text-ink">
              Automated. Structured. Actionable.
            </h2>
            <div className="mt-4 h-1 w-12 bg-primary"></div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            {/* Fake visual app (left side) */}
            <div className="relative flex h-64 w-full flex-shrink-0 items-center justify-center md:w-56">
              <div className="relative h-56 w-44 rounded-2xl border border-border-light bg-white p-4 shadow-[0_10px_40px_-10px_rgba(79,57,246,0.2)]">
                {/* Brand inside app */}
                <div className="mb-4 flex items-center gap-2 text-sm font-bold text-ink">
                  <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  SIRUS
                </div>
                
                {/* Mock pie chart / stats */}
                <div className="mb-4 text-xs font-semibold text-text-secondary">Compliance Score</div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="text-3xl font-bold text-primary">92%</div>
                  <div className="h-10 w-10 rounded-full border-[5px] border-border border-r-success border-t-success border-b-success"></div>
                </div>

                {/* Mock stat rows */}
                <div className="space-y-2.5">
                  {[
                    { label: "Risks Identified", val: "3", color: "bg-danger text-white" },
                    { label: "Recommendations", val: "7", color: "bg-warning text-white" },
                    { label: "Missing Documents", val: "4", color: "bg-primary text-white" },
                    { label: "Compliant Areas", val: "12", color: "bg-success text-white" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-border-light pb-1.5 last:border-0">
                      <span className="text-[10px] text-text-secondary font-medium">{stat.label}</span>
                      <span className={`flex h-4 w-5 items-center justify-center rounded text-[9px] font-bold ${stat.color}`}>{stat.val}</span>
                    </div>
                  ))}
                </div>

                {/* Shield Check overlay */}
                <div className="absolute -right-3 -bottom-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light border-2 border-white text-primary shadow-lg shadow-primary/20">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* List (right side) */}
            <div className="flex flex-col gap-5">
              {[
                { title: "Compliance Score", desc: "Instant overall compliance assessment", icon: "📊", iconColor: "text-primary", bg: "bg-primary-light" },
                { title: "Risks Identified", desc: "AI detects gaps, inconsistencies & high-risk areas", icon: "⚠️", iconColor: "text-primary", bg: "bg-primary-light" },
                { title: "Missing Clauses Highlighted", desc: "Know exactly what's missing or incomplete", icon: "📑", iconColor: "text-primary", bg: "bg-primary-light" },
                { title: "Executive Summary", desc: "Clear, structured insights in seconds", icon: "📈", iconColor: "text-primary", bg: "bg-primary-light" },
                { title: "Ready-to-Review Report", desc: "Actionable, audit-ready output instantly", icon: "✅", iconColor: "text-primary", bg: "bg-primary-light" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-border-light pb-4 last:border-0 last:pb-0">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl shadow-sm ${item.bg} ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-ink">{item.title}</h4>
                    <p className="mt-0.5 text-xs text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom CTA Banner ── */}
      <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-[#FFFaf5] p-8 shadow-sm md:flex-row md:px-12">
        <div className="flex items-center gap-6">
          <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md sm:flex text-3xl">
            📅
          </div>
          <div>
            <h3 className="text-xl font-bold text-ink">Ready to turn your reports into compliance intelligence?</h3>
            <p className="mt-1 text-sm text-text-secondary">Book a consultation and see how SIRUS can streamline your compliance workflow.</p>
          </div>
        </div>
        <Link 
          href="/#pricing" 
          className="shrink-0 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
        >
          Book Your Consultation <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
}
