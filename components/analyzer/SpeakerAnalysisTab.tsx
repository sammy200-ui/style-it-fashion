"use client";

import React from "react";
import { analyzerMockData } from "@/lib/mock-data/analyzer";

export function SpeakerAnalysisTab() {
  const { speakerAnalysis } = analyzerMockData;

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
        <div className="mb-6 border-b border-border-light pb-4">
          <h2 className="text-lg font-bold text-ink">Speaker Engagement & Contribution Analysis</h2>
          <p className="text-sm text-text-secondary mt-1">
            Extraordinary CSE Session — Medical unfitness procedure consultation.
          </p>
        </div>

        {/* 1. SPEAKER IDENTIFICATION & ROLE MAPPING */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-4">1. Speaker Identification & Role Mapping</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-bg-tint border-b border-border">
                  <th className="py-3 px-4 font-bold text-ink">Speaker ID</th>
                  <th className="py-3 px-4 font-bold text-ink">Inferred Role / Affiliation</th>
                  <th className="py-3 px-4 font-bold text-ink">Session Phase Active</th>
                  <th className="py-3 px-4 font-bold text-ink">Voting Bloc</th>
                </tr>
              </thead>
              <tbody>
                {speakerAnalysis.roles.map((role, idx) => (
                  <tr key={idx} className="border-b border-border-light/50 hover:bg-bg-tint/30 transition-colors">
                    <td className="py-3 px-4 font-semibold text-primary">{role.id}</td>
                    <td className="py-3 px-4 text-ink">{role.role}</td>
                    <td className="py-3 px-4 text-text-secondary">{role.phase}</td>
                    <td className="py-3 px-4 text-ink">{role.votingBloc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. SPEAKER CONTRIBUTION VOLUME & ENGAGEMENT LEVEL */}
        <div className="mb-10">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-4">2. Speaker Contribution Volume & Engagement Level</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-bg-tint border-b border-border">
                  <th className="py-3 px-4 font-bold text-ink">Speaker</th>
                  <th className="py-3 px-4 font-bold text-ink text-center">Intervention Count</th>
                  <th className="py-3 px-4 font-bold text-ink text-center">Engagement Level</th>
                  <th className="py-3 px-4 font-bold text-ink w-1/3">Nature of Contributions</th>
                  <th className="py-3 px-4 font-bold text-ink">Interest Shown</th>
                </tr>
              </thead>
              <tbody>
                {speakerAnalysis.engagement.map((eng, idx) => (
                  <tr key={idx} className="border-b border-border-light/50 hover:bg-bg-tint/30 transition-colors">
                    <td className="py-3 px-4 font-semibold text-primary">{eng.id}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${eng.level >= 4 ? 'bg-success/20 text-success' : 'bg-bg-tint text-text-secondary'}`}>
                        {eng.count}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center gap-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <svg key={star} className={`h-4 w-4 ${star <= eng.level ? 'text-warning fill-warning' : 'text-border fill-transparent'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-text-secondary">{eng.nature}</td>
                    <td className="py-3 px-4 text-ink font-medium">{eng.interest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. SPEAKER SUMMARY SCORECARD */}
        <div>
          <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-4">3. Speaker Summary Scorecard</h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-center border-collapse text-sm">
              <thead>
                <tr className="bg-bg-tint border-b border-border">
                  <th className="py-4 px-4 font-bold text-ink text-left">Speaker</th>
                  <th className="py-4 px-4 font-bold text-ink">Contribution Volume</th>
                  <th className="py-4 px-4 font-bold text-ink">Engagement Quality</th>
                  <th className="py-4 px-4 font-bold text-ink">Decision Power</th>
                  <th className="py-4 px-4 font-bold text-ink">Session Impact</th>
                  <th className="py-4 px-4 font-bold text-ink bg-bg-tint/80 border-l border-border">Overall (/20)</th>
                </tr>
              </thead>
              <tbody>
                {speakerAnalysis.scorecard.map((score, idx) => (
                  <tr key={idx} className="border-b border-border-light/50 hover:bg-bg-tint/30 transition-colors">
                    <td className="py-4 px-4 font-semibold text-primary text-left">{score.id}</td>
                    <td className="py-4 px-4">{score.volume}/5</td>
                    <td className="py-4 px-4">{score.quality}/5</td>
                    <td className="py-4 px-4">{score.power}/5</td>
                    <td className="py-4 px-4">{score.impact}/5</td>
                    <td className="py-4 px-4 font-black border-l border-border bg-bg-tint/30">
                      <span className={`inline-block px-3 py-1 rounded ${score.overall >= 15 ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
                        {score.overall}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
