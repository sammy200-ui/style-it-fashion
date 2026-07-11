"use client";

import React from "react";

interface TierCardProps {
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  className?: string;
}

export function TierCard({ title, icon, colorClass, className = "" }: TierCardProps) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm border border-border-light transition-all hover:shadow-md hover:border-primary/20 ${className}`}
    >
      {/* Header */}
      <div className={`mb-4 flex items-center gap-2 text-xl font-bold ${colorClass}`}>
        <span className="flex items-center justify-center">{icon}</span>
        {title}
      </div>

      {/* Placeholder for the Report Thumbnail */}
      <div className="relative flex-1 rounded-xl border border-border-light bg-bg-tint p-4 transition-transform group-hover:scale-[1.02]">
        {/* Fake Report UI inside the thumbnail */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
             <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-primary" stroke="currentColor" strokeWidth={2}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            SIRUS
          </div>
          <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 text-text-tertiary" stroke="currentColor" strokeWidth={2}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
        
        {/* Mock content lines */}
        <div className="space-y-2">
           <div className="h-1.5 w-3/4 rounded-full bg-border"></div>
           <div className="h-1.5 w-1/2 rounded-full bg-border"></div>
           <div className="mt-4 flex gap-2">
             <div className="h-6 flex-1 rounded-md bg-white border border-border-light"></div>
             <div className="h-6 w-8 rounded-md bg-primary/10"></div>
           </div>
           <div className="mt-2 space-y-1">
             <div className="h-1 w-full rounded-full bg-border-light"></div>
             <div className="h-1 w-full rounded-full bg-border-light"></div>
             <div className="h-1 w-5/6 rounded-full bg-border-light"></div>
           </div>
        </div>
      </div>
    </div>
  );
}
