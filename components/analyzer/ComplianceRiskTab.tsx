"use client";

import React, { useState } from "react";
import { analyzerMockData } from "@/lib/mock-data/analyzer";

export function ComplianceRiskTab() {
  const { complianceScore, subScores, riskSummary, findings } = analyzerMockData;
  const [activeTab, setActiveTab] = useState("Risks");

  // Helper to map risk levels to colors
  const getRiskColor = (level: string) => {
    switch (level) {
      case "High": return "text-danger bg-danger/10 border-danger/20";
      case "Medium": return "text-warning bg-warning/10 border-warning/20";
      case "Low": return "text-success bg-success/10 border-success/20";
      default: return "text-text-secondary bg-bg-tint border-border";
    }
  };

  // Helper to map category to a color for the minimap
  const getMinimapColor = (category: string) => {
    switch (category) {
      case "Procedural": return "bg-danger"; // Red
      case "Documentation": return "bg-warning"; // Yellow
      case "Training": return "bg-warning"; // Yellow
      case "Compliance": return "bg-success"; // Green
      default: return "bg-border";
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ── Top Row ── */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        
        {/* 1. COMPLIANCE SCORE */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm xl:col-span-3 flex flex-col items-center">
          <div className="w-full flex items-center gap-2 mb-6">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h2 className="text-sm font-bold text-primary tracking-wide uppercase">Compliance Score</h2>
          </div>
          
          {/* Ring Chart Mock */}
          <div className="relative mb-6 flex h-48 w-48 items-center justify-center rounded-full border-[12px] border-primary-light">
            <div className="absolute inset-0 rounded-full border-[12px] border-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 60%)' }}></div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-ink">{complianceScore}<span className="text-2xl text-ink/50">%</span></span>
              <span className="text-sm font-bold text-success mt-1">Compliant</span>
            </div>
            {/* Shield Icon overlapping */}
            <div className="absolute -bottom-4 bg-primary text-white p-2 rounded-xl shadow-lg border-2 border-white">
               <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
          </div>
          
          <p className="text-center text-xs text-text-secondary mb-6 px-4">
            Overall compliance score based on AI analysis of uploaded report.
          </p>

          <div className="w-full space-y-4 mt-auto">
            {subScores.map(sub => (
              <div key={sub.label} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-bg-tint text-text-tertiary">
                   <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-ink flex-1">{sub.label}</span>
                <div className="h-1.5 w-16 rounded-full bg-border-light relative overflow-hidden">
                  <div className={`absolute top-0 left-0 h-full rounded-full ${sub.score < 50 ? 'bg-warning' : 'bg-primary'}`} style={{ width: `${sub.score}%` }}></div>
                </div>
                <span className="text-xs font-bold text-ink w-8 text-right">{sub.score}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. RISK SUMMARY */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm xl:col-span-4 flex flex-col">
          <div className="w-full flex items-center gap-2 mb-6">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h2 className="text-sm font-bold text-primary tracking-wide uppercase">Risk Summary</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-danger/20 bg-danger/5 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-danger text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <span className="text-3xl font-black text-danger">{riskSummary.criticalRisks}</span>
              </div>
              <h3 className="text-sm font-bold text-ink">Critical Risks</h3>
              <p className="text-xs text-text-secondary mt-1">Require immediate attention</p>
            </div>
            
            <div className="rounded-xl border border-warning/20 bg-warning/5 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a5 5 0 0 1 5 5c0 2.2-1.2 4.1-3 5.1V15a2 2 0 0 1-4 0v-2.9C8.2 11.1 7 9.2 7 7a5 5 0 0 1 5-5z"/></svg>
                </div>
                <span className="text-3xl font-black text-warning">{riskSummary.recommendations}</span>
              </div>
              <h3 className="text-sm font-bold text-ink">Recommendations</h3>
              <p className="text-xs text-text-secondary mt-1">Improve compliance</p>
            </div>

            <div className="rounded-xl border border-success/20 bg-success/5 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <span className="text-3xl font-black text-success">{riskSummary.compliantAreas}</span>
              </div>
              <h3 className="text-sm font-bold text-ink">Compliant Areas</h3>
              <p className="text-xs text-text-secondary mt-1">Meeting requirements</p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary-light/30 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <span className="text-3xl font-black text-primary">{riskSummary.missingDocuments}</span>
              </div>
              <h3 className="text-sm font-bold text-ink">Missing Documents</h3>
              <p className="text-xs text-text-secondary mt-1">Important files not found</p>
            </div>
          </div>

          <div className="mt-auto rounded-xl border border-primary-light bg-bg-tint/50 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center text-primary">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xs font-bold text-text-secondary">Risk Exposure Level</h3>
                <p className="text-lg font-black text-primary mb-3">{riskSummary.riskExposureText}</p>
                <div className="relative h-1.5 w-full rounded-full bg-border-light">
                  <div className="absolute top-0 left-0 h-full rounded-full bg-primary" style={{ width: `${riskSummary.riskExposureLevel}%` }}></div>
                  <div className="absolute top-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-primary shadow" style={{ left: `${riskSummary.riskExposureLevel}%`, height: '16px', width: '16px', marginLeft: '-8px' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-semibold text-text-tertiary">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. FINDINGS (Quick List) */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm xl:col-span-5 flex flex-col">
          <div className="w-full flex items-center gap-2 mb-4">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <h2 className="text-sm font-bold text-primary tracking-wide uppercase">Findings</h2>
          </div>

          <div className="flex gap-6 border-b border-border mb-4">
            {["Risks", "Missing Documents", "Compliance References", "Recommendations"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-xs font-bold transition-all border-b-2 ${
                  activeTab === tab ? "border-primary text-primary" : "border-transparent text-text-secondary hover:text-ink"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto pr-2" style={{ maxHeight: '400px' }}>
            {findings.slice(0,3).map(finding => (
              <div key={finding.id} className="group flex items-start gap-3 rounded-xl border border-border-light bg-bg-tint/30 p-4 transition-colors hover:border-primary/20 hover:bg-primary-light/10 cursor-pointer">
                <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${finding.riskLevel === 'High' ? 'bg-danger' : 'bg-warning'}`} />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h4 className="text-sm font-bold text-ink leading-tight">{finding.title}</h4>
                    <span className={`ml-2 flex-shrink-0 rounded px-2 py-0.5 text-[10px] font-bold border ${getRiskColor(finding.riskLevel)}`}>
                      {finding.riskLevel} Risk
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-text-secondary line-clamp-2">{finding.description}</p>
                  <p className="mt-2 text-[10px] text-text-tertiary">Related: {finding.reference}</p>
                </div>
                <div className="flex h-6 w-6 items-center justify-center text-text-tertiary opacity-0 transition-opacity group-hover:opacity-100">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-deep transition-colors">
            View all findings
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>

      </div>

      {/* ── Bottom Row ── */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        
        {/* FINDINGS OVERVIEW & RISK MINIMAP */}
        <div className="rounded-2xl border border-border bg-white shadow-sm xl:col-span-9 flex flex-col">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-2 mb-4">
              <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
              </svg>
              <h2 className="text-sm font-bold text-primary tracking-wide uppercase">Findings Overview</h2>
            </div>
            
            <div className="flex gap-6">
              <button className="pb-3 text-xs font-bold border-b-2 border-primary text-primary">Risks (5)</button>
              <button className="pb-3 text-xs font-bold border-b-2 border-transparent text-text-secondary">Missing Documents (4)</button>
              <button className="pb-3 text-xs font-bold border-b-2 border-transparent text-text-secondary">Compliance References (8)</button>
              <button className="pb-3 text-xs font-bold border-b-2 border-transparent text-text-secondary">Recommendations (7)</button>
            </div>
          </div>

          <div className="flex flex-1">
            {/* Risk Minimap (Creative Addition #2) */}
            <div className="w-3 flex-shrink-0 bg-bg-tint border-r border-border rounded-bl-2xl flex flex-col overflow-hidden py-4 px-1 gap-0.5">
              {findings.map((f, idx) => (
                <button
                  key={`minimap-${f.id}`}
                  title={`Jump to: ${f.category} - ${f.riskLevel} Risk`}
                  className={`w-full flex-1 rounded-sm opacity-80 hover:opacity-100 hover:scale-125 transition-all ${getMinimapColor(f.category)}`}
                />
              ))}
            </div>

            {/* Table */}
            <div className="flex-1 overflow-x-auto p-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border-light text-xs font-bold text-text-secondary">
                    <th className="py-3 px-4 w-1/4">Risk Title</th>
                    <th className="py-3 px-4 w-2/5">Description</th>
                    <th className="py-3 px-4">Risk Level</th>
                    <th className="py-3 px-4 text-center">Impact</th>
                    <th className="py-3 px-4">Confidence</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {findings.map(finding => (
                    <tr key={finding.id} className="border-b border-border-light/50 transition-colors hover:bg-bg-tint/30">
                      <td className="py-4 px-4 align-top">
                        <div className="flex items-start gap-2">
                          <svg className={`mt-0.5 h-4 w-4 flex-shrink-0 ${finding.riskLevel === 'High' ? 'text-danger' : 'text-warning'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                          <span className="text-xs font-bold text-ink">{finding.title}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <p className="text-xs text-text-secondary">{finding.description}</p>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <span className={`inline-block rounded px-2 py-0.5 text-[10px] font-bold border ${getRiskColor(finding.riskLevel)}`}>
                          {finding.riskLevel}
                        </span>
                      </td>
                      <td className="py-4 px-4 align-top text-center">
                        <div className="flex items-center justify-center gap-0.5">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className={`h-1.5 w-4 rounded-sm ${i <= finding.impact ? (finding.riskLevel === 'High' ? 'bg-danger' : 'bg-warning') : 'bg-border-light'}`} />
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-ink w-6">{finding.confidence}%</span>
                          <div className="h-1.5 w-16 rounded-full bg-border-light overflow-hidden">
                            <div className="h-full rounded-full bg-primary" style={{ width: `${finding.confidence}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 align-top text-right">
                        <button className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-[10px] font-bold text-primary transition-all hover:border-primary hover:bg-primary-light/20">
                          View Details
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="9 18 15 12 9 6"/></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 text-[10px] font-medium text-text-tertiary">
                Showing 1 to {findings.length} of {findings.length} risks
              </div>
            </div>
          </div>
        </div>

        {/* FILTER FINDINGS */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm xl:col-span-3 flex flex-col">
          <div className="w-full flex items-center gap-2 mb-6">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            <h2 className="text-sm font-bold text-primary tracking-wide uppercase">Filter Findings</h2>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <label className="mb-1.5 block text-[11px] font-bold text-ink">Risk Level</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-border bg-white px-3 py-2 text-xs text-text-secondary outline-none focus:border-primary">
                  <option>All Levels</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-bold text-ink">Category</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-border bg-white px-3 py-2 text-xs text-text-secondary outline-none focus:border-primary">
                  <option>All Categories</option>
                  <option>Procedural</option>
                  <option>Documentation</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-bold text-ink">Compliance Area</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-border bg-white px-3 py-2 text-xs text-text-secondary outline-none focus:border-primary">
                  <option>All Areas</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-[11px] font-bold text-ink">Status</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-xl border border-border bg-white px-3 py-2 text-xs text-text-secondary outline-none focus:border-primary">
                  <option>All Status</option>
                  <option>Open</option>
                  <option>Resolved</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-auto w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-primary-deep hover:-translate-y-0.5">
            Apply Filters
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
