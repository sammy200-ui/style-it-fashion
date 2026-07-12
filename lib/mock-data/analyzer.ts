export const analyzerMockData = {
  // ── Overview ──
  complianceScore: 92,
  status: "Compliant",
  subScores: [
    { label: "Labor Law Compliance", score: 95 },
    { label: "Documentation Quality", score: 88 },
    { label: "Risk Exposure", score: 21 },
    { label: "Data Completeness", score: 91 },
  ],
  riskSummary: {
    criticalRisks: 3,
    recommendations: 7,
    compliantAreas: 12,
    missingDocuments: 4,
    riskExposureLevel: 35, // Percentage for slider (e.g. Low to Medium)
    riskExposureText: "Low to Medium",
  },

  // ── Findings (for the table & right sidebar) ──
  // Sections mapped to colors for the minimap: 
  // e.g., 'Procedural' = red, 'Documentation' = yellow, 'Training' = yellow, 'Compliance' = green
  findings: [
    {
      id: "f1",
      title: "Missing Mandatory Clause in CSE Minutes",
      description: "CSE meeting minutes do not include voting details as required by Art. L.2315-34.",
      reference: "Labor Code Art. L.2315-34",
      riskLevel: "High", // High, Medium, Low
      impact: 5, // out of 5
      confidence: 92,
      category: "Procedural", // for minimap mapping
      status: "Open",
    },
    {
      id: "f2",
      title: "Inconsistent Policy Reference",
      description: "Policy section on working hours contradicts Labor Code Art. L.3121-27.",
      reference: "Labor Code Art. L.3121-27",
      riskLevel: "Medium",
      impact: 3,
      confidence: 78,
      category: "Documentation",
      status: "Open",
    },
    {
      id: "f3",
      title: "Incomplete Training Records",
      description: "Training documentation for safety protocols is incomplete.",
      reference: "Labor Code Art. R.4141-3",
      riskLevel: "Medium",
      impact: 3,
      confidence: 75,
      category: "Training",
      status: "Open",
    },
    {
      id: "f4",
      title: "Unjustified Exclusion from Job Board",
      description: "Management acknowledged it could not provide post-by-post justification for exclusions.",
      reference: "Labor Code Art. L1226-2",
      riskLevel: "High",
      impact: 5,
      confidence: 95,
      category: "Procedural",
      status: "Open",
    },
    {
      id: "f5",
      title: "Causal Link Not Investigated",
      description: "Unfitness ruling suggests a connection to working environment, but was not investigated.",
      reference: "SSCT Guidelines",
      riskLevel: "Medium",
      impact: 4,
      confidence: 82,
      category: "Compliance",
      status: "Open",
    },
  ],

  // ── Speaker Analysis (from PDF) ──
  speakerAnalysis: {
    roles: [
      { id: "Intervenant 4", role: "HR Representative / Management Spokesperson", phase: "Entire session", votingBloc: "Management (does not vote)" },
      { id: "Intervenant 6", role: "Elected Member — CGT or CFDT", phase: "Substantive debate phase", votingBloc: "CGT/CFDT — Unfavourable" },
      { id: "Intervenant 5", role: "Elected Member — CGT", phase: "Substantive debate phase", votingBloc: "CGT — Unfavourable" },
      { id: "Intervenant 17", role: "Elected Member — CFDT or CGT", phase: "Substantive debate phase — opening questioner", votingBloc: "CFDT/CGT — Unfavourable" },
      { id: "Intervenant 8", role: "Secretary of the CSE / CFDT member", phase: "Roll call + procedural", votingBloc: "CFDT — Unfavourable" },
    ],
    engagement: [
      { id: "Intervenant 4", count: "Very High (15+)", level: 5, nature: "Presents case, defends HR process...", interest: "Institutional (obligatory)" },
      { id: "Intervenant 6", count: "High (5–6)", level: 5, nature: "Persistent challenger; references job board...", interest: "Very High — Employee advocacy" },
      { id: "Intervenant 5", count: "Medium (3–4)", level: 4, nature: "Raises causal link between working conditions...", interest: "High — Substantive challenge" },
      { id: "Intervenant 17", count: "Medium (2–3)", level: 3, nature: "Opens formal questioning...", interest: "Medium-High — Procedural rigour" },
      { id: "Intervenant 8", count: "Low-Medium (2)", level: 2, nature: "Announces agenda; asks one procedural question...", interest: "Medium — Procedural / secretarial" },
    ],
    scorecard: [
      { id: "Intervenant 4", volume: 5, quality: 4, power: 5, impact: 5, overall: 19 },
      { id: "Intervenant 6", volume: 4, quality: 5, power: 3, impact: 5, overall: 17 },
      { id: "Intervenant 5", volume: 3, quality: 5, power: 3, impact: 4, overall: 15 },
      { id: "Intervenant 17", volume: 3, quality: 4, power: 2, impact: 3, overall: 12 },
      { id: "Intervenant 8", volume: 2, quality: 3, power: 2, impact: 2, overall: 9 },
    ]
  },

  // ── Numerical Data (simple charts data) ──
  numericalData: {
    speakingTime: [
      { label: "Management", percentage: 65, color: "bg-primary" },
      { label: "CGT/CFDT", percentage: 25, color: "bg-danger" },
      { label: "SNB", percentage: 5, color: "bg-warning" },
      { label: "Other", percentage: 5, color: "bg-text-tertiary" },
    ],
    sentiment: [
      { label: "Neutral/Procedural", value: 45 },
      { label: "Constructive", value: 20 },
      { label: "Tense/Adversarial", value: 35 },
    ]
  }
};
