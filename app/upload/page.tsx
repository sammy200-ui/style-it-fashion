import Link from "next/link";
import { UploadForm } from "@/components/steps/UploadForm";

export default function UploadPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24 pt-8">
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[500px] w-[500px] rounded-full bg-muted-violet/5 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Confirmed Selection Bar ── */}
        <div className="mb-6 flex items-center justify-between rounded-xl border border-border bg-white px-6 py-4 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-bold text-ink">
              <svg className="h-4 w-4 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              CSE
            </div>
            <div className="h-4 w-px bg-border-light" />
            <div className="flex items-center gap-2 text-sm font-semibold text-text-secondary">
              <span className="text-base">🇮🇳</span> {/* Using India flag temporarily as it matched the screenshot, although it says English */}
              English
            </div>
          </div>
          <Link
            href="/"
            className="text-xs font-bold text-ink transition-colors hover:text-primary"
          >
            CHANGE PROCESSING TYPE
          </Link>
        </div>

        {/* ── Upload Form ── */}
        <UploadForm />

      </div>
    </div>
  );
}
