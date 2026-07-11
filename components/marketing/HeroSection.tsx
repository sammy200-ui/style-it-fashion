"use client";

import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8 xl:py-24">
      {/* AI badge */}
      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary-light/50 px-4 py-1.5 text-xs font-bold text-primary shadow-sm backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        AI POWERED
      </div>

      {/* Headline */}
      <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-6xl">
        Turn Meeting into <br className="hidden sm:block" />
        <span className="text-primary">Compliance Ready</span> <br className="hidden sm:block" />
        <span className="text-primary">Report</span>
      </h1>

      {/* Subheading */}
      <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary sm:text-xl">
        Enterprise grade reports that capture every risks, insights, and recommendations. Select compliance and let the system do the work.
      </p>

      {/* Trust signal */}
      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex -space-x-3">
           <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-bg-tint bg-gray-200">
             {/* Fake avatar 1 */}
             <div className="h-full w-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
           </div>
           <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-bg-tint bg-gray-200">
             {/* Fake avatar 2 */}
             <div className="h-full w-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
           </div>
           <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-bg-tint bg-gray-200">
             {/* Fake avatar 3 */}
             <div className="h-full w-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
           </div>
        </div>
        <p className="text-sm font-semibold text-text-secondary">
          Trusted by <span className="text-ink">500+ Enterprises</span>
        </p>
      </div>
    </div>
  );
}
