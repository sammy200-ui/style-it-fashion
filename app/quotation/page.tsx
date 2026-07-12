"use client";

import React, { useState } from "react";
import Link from "next/link";

/* ── Tier definitions ─────────────────────────────────────────────────── */
const tiers = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Core compliance coverage",
    colorClass: "text-primary",
    borderActive: "border-primary bg-primary-light/20 shadow-primary/10",
    features: [
      "Basic compliance report",
      "Risk & gap identification",
      "Standard speaker analysis",
      "PDF export",
    ],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "scope",
    name: "Scope",
    tagline: "Extended analysis & insights",
    colorClass: "text-primary",
    borderActive: "border-primary bg-primary-light/20 shadow-primary/10",
    features: [
      "Everything in Essential",
      "Deep-dive compliance analysis",
      "Cross-reference checking",
      "Priority support",
      "Custom report branding",
    ],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polygon points="12 2 22 12 12 22 2 12 12 2" />
      </svg>
    ),
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Full enterprise solution",
    colorClass: "text-warning",
    borderActive: "border-warning bg-warning/10 shadow-warning/10",
    features: [
      "Everything in Scope",
      "AI-powered recommendations",
      "Real-time compliance monitoring",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function QuotationPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTier) {
      setSubmitted(true);
    }
  };

  /* ── Confirmation State ──────────────────────────────────────────── */
  if (submitted) {
    const chosenTier = tiers.find((t) => t.id === selectedTier);
    return (
      <div className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-success/5 blur-3xl" />
          <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-lg px-4 text-center">
          <div className="rounded-3xl border border-border bg-white p-10 shadow-lg">
            {/* Animated Check */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success text-white shadow-lg shadow-success/30 animate-bounce" style={{ animationDuration: '1.5s', animationIterationCount: '2' }}>
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-black text-ink">Request Sent to Our Team</h2>
            <p className="mt-3 text-text-secondary">
              We've received your quotation request for the{" "}
              <span className={`font-bold ${chosenTier?.colorClass}`}>{chosenTier?.name}</span> tier.
              Our team will review your requirements and get back to you shortly.
            </p>

            <div className="mt-8 rounded-xl border border-border-light bg-bg-tint p-4 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold text-text-secondary">Selected Tier</span>
                <span className={`font-bold ${chosenTier?.colorClass}`}>{chosenTier?.name}</span>
              </div>
              {notes.trim() && (
                <div className="mt-3 border-t border-border-light pt-3 text-left">
                  <span className="font-semibold text-text-secondary">Notes:</span>
                  <p className="mt-1 text-ink">{notes}</p>
                </div>
              )}
            </div>

            <Link
              href="/analyzer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-ink px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-ink/90 hover:-translate-y-0.5"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ── Form State ──────────────────────────────────────────────────── */
  return (
    <div className="relative min-h-screen overflow-hidden pb-24 pt-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[500px] w-[500px] rounded-full bg-muted-violet/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <Link href="/analyzer" className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary hover:text-primary transition-colors">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><polyline points="15 18 9 12 15 6" /></svg>
            Back to Compliance Snapshot
          </Link>
          <h1 className="text-3xl font-black text-ink sm:text-4xl">Request a Quotation</h1>
          <p className="mt-3 text-base text-text-secondary max-w-md mx-auto">
            Select the tier that best fits your compliance needs and submit your request. Our team will respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Tier Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-10">
            {tiers.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTier(tier.id)}
                  className={`group relative flex flex-col rounded-2xl border-2 bg-white p-6 text-left shadow-sm transition-all hover:shadow-md hover:-translate-y-1 ${
                    isSelected
                      ? `${tier.borderActive} shadow-md`
                      : "border-border-light hover:border-primary/20"
                  }`}
                >
                  {/* Selected Badge */}
                  {isSelected && (
                    <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}

                  {/* Tier Header */}
                  <div className={`mb-3 flex items-center gap-2 text-xl font-bold ${tier.colorClass}`}>
                    <span className="flex items-center justify-center">{tier.icon}</span>
                    {tier.name}
                  </div>
                  <p className="mb-5 text-sm text-text-secondary">{tier.tagline}</p>

                  {/* Feature List */}
                  <ul className="flex-1 space-y-2.5">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-ink">
                        <svg className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.colorClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

          {/* Notes */}
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm mb-8">
            <label className="mb-2 block text-sm font-bold text-ink">
              Additional Notes <span className="text-text-tertiary font-normal">(optional)</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="Tell us about your specific requirements, timeline, or any questions..."
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-all resize-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!selectedTier}
              className="flex items-center justify-center gap-2 rounded-2xl bg-ink px-12 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-ink/90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              Submit Request
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
