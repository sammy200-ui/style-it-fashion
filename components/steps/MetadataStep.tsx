"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StepTracker } from "@/components/ui/StepTracker";

/* ── Country data ─────────────────────────────────────────────────────── */
const countries = [
  { code: "FR", name: "France", flag: "🇫🇷", enabled: true },
  { code: "DE", name: "Germany", flag: "🇩🇪", enabled: false },
  { code: "ES", name: "Spain", flag: "🇪🇸", enabled: false },
  { code: "IT", name: "Italy", flag: "🇮🇹", enabled: false },
  { code: "GB", name: "UK", flag: "🇬🇧", enabled: false },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", enabled: false },
];

/* ── Compliance types ─────────────────────────────────────────────────── */
const complianceTypes = [
  { id: "CSE", label: "Comité Social et Économique (CSE)", enabled: true },
  { id: "AG", label: "Accountability and Governance (AG)", enabled: false },
  { id: "CSSCT", label: "CSSCT", enabled: false },
  { id: "CSEE", label: "CSEE", enabled: false },
  { id: "QVCT", label: "QVCT", enabled: false },
];

export function MetadataStep() {
  const [selectedCountry, setSelectedCountry] = useState("FR");
  const [selectedCompliance, setSelectedCompliance] = useState("CSE");
  const [carouselPage, setCarouselPage] = useState(0);
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to the upload step (Chunk 5)
    router.push("/upload");
  };

  return (
    <div className="flex flex-col">
      {/* ── Card Container ────────────────────────────────────────── */}
      <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
        {/* Header row */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-ink sm:text-2xl">
              Create Meeting Report
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Choose your compliance to begin.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Language selector pill */}
            <button className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
              <span className="text-base">🇬🇧</span>
              English
              <svg className="h-3.5 w-3.5 text-text-tertiary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {/* Search Meeting History */}
            <button className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
              <svg className="h-4 w-4 text-text-tertiary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              Search Meeting History
            </button>
          </div>
        </div>

        {/* ── Select Region / Country ──────────────────────────────── */}
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink">
            <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Select Region / Country
          </div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {countries.map((country) => {
              const isSelected = selectedCountry === country.code;
              return (
                <button
                  key={country.code}
                  onClick={() => country.enabled && setSelectedCountry(country.code)}
                  disabled={!country.enabled}
                  className={`group relative flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                    isSelected
                      ? "border-primary bg-primary-light/30 shadow-md shadow-primary/10"
                      : country.enabled
                      ? "border-border-light bg-white hover:border-primary/30 hover:shadow-sm"
                      : "border-border-light bg-white/60 opacity-70 cursor-not-allowed"
                  }`}
                >
                  {/* Checkmark badge */}
                  {isSelected && (
                    <div className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}

                  <span className="text-3xl">{country.flag}</span>
                  <span className={`text-xs font-semibold ${isSelected ? "text-primary" : "text-ink"}`}>
                    {country.name}
                  </span>
                  {!country.enabled && (
                    <span className="text-[10px] font-medium text-warning">
                      Coming soon
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Select Compliance ────────────────────────────────────── */}
        <div className="mb-6">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-ink">
            <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
            Select Compliance
          </div>

          {/* Carousel container */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => setCarouselPage(Math.max(0, carouselPage - 1))}
              className="absolute -left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-text-tertiary shadow-sm transition-all hover:border-primary/30 hover:text-primary"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Cards */}
            <div className="overflow-hidden px-4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {complianceTypes.map((type) => {
                  const isSelected = selectedCompliance === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => type.enabled && setSelectedCompliance(type.id)}
                      disabled={!type.enabled}
                      className={`group relative flex flex-col items-center gap-3 rounded-xl border-2 p-5 transition-all ${
                        isSelected
                          ? "border-primary bg-primary-light/30 shadow-md shadow-primary/10"
                          : type.enabled
                          ? "border-border-light bg-white hover:border-primary/30 hover:shadow-sm"
                          : "border-border-light bg-white/60 opacity-60 cursor-not-allowed"
                      }`}
                    >
                      {/* Checkmark badge for selected */}
                      {isSelected && (
                        <div className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-success text-white shadow-sm">
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      )}

                      {/* Icon */}
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                        isSelected
                          ? "border-primary text-primary"
                          : "border-border text-text-tertiary"
                      }`}>
                        {type.enabled ? (
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <polyline points="9 12 11 14 15 10" />
                          </svg>
                        ) : (
                          <span className="text-xl font-bold">?</span>
                        )}
                      </div>

                      {/* Label */}
                      <span className={`text-center text-xs font-semibold leading-tight ${
                        isSelected ? "text-primary" : "text-ink/70"
                      }`}>
                        {type.enabled ? type.label : type.id}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={() => setCarouselPage(Math.min(1, carouselPage + 1))}
              className="absolute -right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-text-tertiary shadow-sm transition-all hover:border-primary/30 hover:text-primary"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dot pagination */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {[0, 1, 2, 3, 4].map((dot) => (
              <div
                key={dot}
                className={`h-2 rounded-full transition-all ${
                  dot === 0 ? "w-5 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Action Buttons ───────────────────────────────────────── */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleContinue}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-ink px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-ink/90 hover:-translate-y-0.5 active:translate-y-0"
          >
            Continue
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <Link
            href="/analyzer"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-primary-light/40 px-8 py-4 text-base font-semibold text-ink transition-all hover:border-primary/30 hover:bg-primary-light hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Report Analyzer
          </Link>
        </div>
      </div>

      {/* ── Progress Tracker ─────────────────────────────────────── */}
      <div className="mt-6">
        <StepTracker currentStep={1} />
      </div>
    </div>
  );
}
