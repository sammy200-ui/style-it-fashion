export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* ── Background decoration ─────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-muted-violet/5 blur-3xl" />
      </div>

      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* AI badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          AI POWERED
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Turn Meetings into{" "}
          <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
            Compliance Ready
          </span>{" "}
          Reports
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
          Upload your meeting recording and get an instant AI-powered compliance
          snapshot — risk analysis, speaker insights, and actionable
          recommendations, all in one place.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="/signup"
            className="gradient-primary inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Started
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="/analyzer"
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-8 py-4 text-base font-semibold text-ink transition-all hover:border-primary/30 hover:bg-primary-light hover:text-primary hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Report Analyzer
          </a>
        </div>

        {/* Trust signal */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="flex -space-x-2">
            {[
              "bg-primary",
              "bg-muted-violet",
              "bg-success",
              "bg-warning",
              "bg-primary-deep",
            ].map((color, i) => (
              <div
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-full ${color} ring-2 ring-white text-[10px] font-bold text-white`}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm text-text-tertiary">
            Trusted by{" "}
            <span className="font-semibold text-ink">500+ Enterprises</span>
          </p>
        </div>

        {/* ── 5-step process tracker ──────────────────────────────── */}
        <div className="mt-20 w-full max-w-4xl">
          <div className="rounded-2xl border border-border-light bg-white/60 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              {[
                { icon: "⬆️", label: "Upload Recordings" },
                { icon: "🎙️", label: "AI Transcribes Audio" },
                { icon: "✏️", label: "Reformulate & Edit" },
                { icon: "✅", label: "Compliance Check" },
                { icon: "📄", label: "Report Ready" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 sm:flex-col sm:gap-2">
                  <div className="flex items-center gap-2 sm:flex-col sm:gap-1.5">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg ${
                        i === 0
                          ? "gradient-primary text-white shadow-md shadow-primary/20"
                          : "bg-primary-light text-primary"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span className="text-xs font-medium text-ink/70 sm:text-center">
                      {step.label}
                    </span>
                  </div>
                  {i < 4 && (
                    <div className="hidden h-px w-12 bg-border sm:block lg:w-16" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature cards (quick visual proof tokens work) ─────────── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Compliance Status",
              desc: "Instant overall compliance score with detailed assessment.",
              color: "bg-success/10 text-success",
              icon: "✅",
            },
            {
              title: "Risk & Gap Analysis",
              desc: "Identify missing documents and non-compliant areas.",
              color: "bg-danger/10 text-danger",
              icon: "⚠️",
            },
            {
              title: "Speaker Analysis",
              desc: "Who spoke, how much, and what they advocated for.",
              color: "bg-primary/10 text-primary",
              icon: "🎙️",
            },
            {
              title: "Numerical Data",
              desc: "Key figures and metrics visualized as interactive charts.",
              color: "bg-warning/10 text-warning",
              icon: "📊",
            },
            {
              title: "Recommendations",
              desc: "Actionable next steps prioritized by impact and urgency.",
              color: "bg-muted-violet/10 text-muted-violet",
              icon: "💡",
            },
            {
              title: "AI-Powered Reports",
              desc: "Full compliance-ready reports generated in minutes, not days.",
              color: "bg-primary-deep/10 text-primary-deep",
              icon: "🤖",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/20 hover:-translate-y-1"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl ${card.color}`}
              >
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
