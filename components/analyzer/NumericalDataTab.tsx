"use client";

import React from "react";
import { analyzerMockData } from "@/lib/mock-data/analyzer";

export function NumericalDataTab() {
  const { numericalData } = analyzerMockData;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        
        {/* 1. SPEAKING TIME DISTRIBUTION */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2 border-b border-border-light pb-4">
             <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <h2 className="text-lg font-bold text-ink">Speaking Time Distribution</h2>
          </div>

          <div className="flex flex-col justify-center space-y-6 pt-4">
            {numericalData.speakingTime.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-ink">{item.label}</span>
                  <span className="font-semibold text-text-secondary">{item.percentage}%</span>
                </div>
                <div className="h-4 w-full rounded-full bg-border-light overflow-hidden">
                  <div className={`h-full rounded-full ${item.color} transition-all duration-1000`} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. OVERALL SENTIMENT ANALYSIS */}
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm flex flex-col">
          <div className="mb-6 flex items-center gap-2 border-b border-border-light pb-4">
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            <h2 className="text-lg font-bold text-ink">Overall Sentiment Flow</h2>
          </div>

          <div className="flex flex-1 flex-col justify-center items-center">
            {/* Simple CSS donut chart */}
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-[16px] border-bg-tint">
              {/* This is a visual approximation since true multi-segment donuts are complex in pure CSS without SVGs */}
              <div className="absolute inset-0 rounded-full border-[16px] border-primary" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 50% 50%)' }}></div>
              <div className="absolute inset-0 rounded-full border-[16px] border-danger" style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 100%, 50% 50%)' }}></div>
              <div className="absolute inset-0 rounded-full border-[16px] border-success" style={{ clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)' }}></div>
              
              <div className="flex flex-col items-center">
                <span className="text-sm font-bold text-ink">Sentiment</span>
              </div>
            </div>

            <div className="mt-8 grid w-full grid-cols-3 gap-2 text-center">
               <div className="flex flex-col items-center">
                 <div className="h-3 w-3 rounded-full bg-primary mb-1"></div>
                 <span className="text-xs font-semibold text-ink">Neutral/Procedural</span>
                 <span className="text-xs text-text-secondary">45%</span>
               </div>
               <div className="flex flex-col items-center">
                 <div className="h-3 w-3 rounded-full bg-success mb-1"></div>
                 <span className="text-xs font-semibold text-ink">Constructive</span>
                 <span className="text-xs text-text-secondary">20%</span>
               </div>
               <div className="flex flex-col items-center">
                 <div className="h-3 w-3 rounded-full bg-danger mb-1"></div>
                 <span className="text-xs font-semibold text-ink">Tense</span>
                 <span className="text-xs text-text-secondary">35%</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
