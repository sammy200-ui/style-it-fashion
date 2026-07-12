"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { StepTracker } from "@/components/ui/StepTracker";

export default function ProcessingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Advance through the 5 steps
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= 5) {
          clearInterval(interval);
          // Wait a short moment on step 5, then redirect
          setTimeout(() => {
            router.push("/analyzer");
          }, 1000);
          return 5;
        }
        return prev + 1;
      });
    }, 1200); // 1.2 seconds per step

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center overflow-hidden pb-24">
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[500px] w-[500px] rounded-full bg-muted-violet/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-4 text-center sm:px-6 lg:px-8">
        
        {/* Pulsing Central Icon */}
        <div className="mb-12 flex flex-col items-center justify-center">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-primary-light shadow-inner">
            {/* Tailwind's animate-ping and animate-pulse create a nice "working" effect */}
            <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-20" style={{ animationDuration: '2s' }}></div>
            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20"></div>
            
            {/* SIRUS Star Icon */}
            <svg className="relative z-10 h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 2v20M17 5l-10 14M7 5l10 14M2 12h20" />
            </svg>
          </div>
          
          <h2 className="mt-8 text-2xl font-bold text-ink sm:text-3xl">
            SIRUS is analyzing your meeting
          </h2>
          <p className="mt-3 text-base text-text-secondary">
            Applying compliance frameworks and structuring findings...
          </p>
        </div>

        {/* Live StepTracker */}
        <div className="mx-auto w-full max-w-4xl transition-all duration-500 ease-in-out">
          <StepTracker currentStep={currentStep} />
        </div>

      </div>
    </div>
  );
}
