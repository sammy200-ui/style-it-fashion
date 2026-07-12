"use client";

import React from "react";

interface StepTrackerProps {
  currentStep?: number; // 1-indexed, defaults to 1
}

const steps = [
  {
    num: "01",
    label: "Upload Recordings",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "AI Transcribes Audio",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Reformulate & Edit Minutes",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
  },
  {
    num: "04",
    label: "Compliance Check",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    num: "05",
    label: "Report Ready to Distribute",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export function StepTracker({ currentStep = 1 }: StepTrackerProps) {
  return (
    <div className="w-full rounded-2xl border border-border-light bg-white/80 p-6 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            {/* Step Item */}
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all ${
                  i + 1 <= currentStep
                    ? "gradient-primary text-white shadow-md shadow-primary/20"
                    : "bg-primary-light text-primary"
                }`}
              >
                {step.icon}
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <span
                  className={`text-[11px] font-bold ${
                    i + 1 <= currentStep ? "text-primary" : "text-text-tertiary"
                  }`}
                >
                  {step.num}
                </span>
                <span className="max-w-[100px] text-center text-[11px] font-medium leading-tight text-ink/60">
                  {step.label}
                </span>
              </div>
            </div>

            {/* Arrow Separator */}
            {i < steps.length - 1 && (
              <div className="hidden flex-shrink-0 px-1 text-border sm:block">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
