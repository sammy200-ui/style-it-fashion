import { HeroSection } from "@/components/marketing/HeroSection";
import { BeforeAfterBlock } from "@/components/marketing/BeforeAfterBlock";
import { TierCard } from "@/components/ui/TierCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24">
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[500px] w-[500px] rounded-full bg-muted-violet/5 blur-3xl" />
      </div>

      {/* ── Top Section (Matches layout of Screenshot 01) ── */}
      <div className="mx-auto w-full max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          
          {/* Left Column: Hero (Marketing) */}
          <div className="lg:col-span-4 xl:col-span-3">
            <HeroSection />
          </div>

          {/* Center Column: App Action Placeholder (To be built in Chunk 4) */}
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col justify-center">
            <div className="rounded-3xl border border-border bg-white/60 p-8 shadow-sm backdrop-blur-sm min-h-[600px] flex flex-col items-center justify-center text-center">
              <div className="mb-4 text-4xl">📄</div>
              <h2 className="text-2xl font-bold text-ink">Create Meeting Report</h2>
              <p className="mt-2 text-text-secondary max-w-sm">
                Metadata and upload steps will live here. (To be built in Chunk 4 & 5)
              </p>
              <Link href="/analyzer" className="mt-8 rounded-xl bg-primary-light px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20">
                Go to Report Analyzer Preview →
              </Link>
            </div>
          </div>

          {/* Right Column: Tier Cards */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-center space-y-4" id="pricing">
             <TierCard
               title="Essential"
               icon={
                 <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                   <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                 </svg>
               }
               colorClass="text-primary"
             />
             <TierCard
               title="Scope"
               icon={
                 <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                   <polygon points="12 2 22 12 12 22 2 12 12 2" />
                 </svg>
               }
               colorClass="text-primary"
             />
             <TierCard
               title="Premium"
               icon={
                 <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                   <path d="M2 4h20v2H2z" />
                   <path d="M2 8l4 12h12l4-12z" />
                 </svg>
               }
               colorClass="text-warning"
             />
          </div>

        </div>
      </div>

      {/* ── Middle Section: Before/After Block (Matches Screenshot 03) ── */}
      <div className="mt-12 w-full border-t border-border-light bg-white pt-12">
        <BeforeAfterBlock />
      </div>

    </div>
  );
}
