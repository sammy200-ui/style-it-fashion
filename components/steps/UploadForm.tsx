"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { StepTracker } from "@/components/ui/StepTracker";

export function UploadForm() {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [meetingName, setMeetingName] = useState("");
  const [meetingLocation, setMeetingLocation] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [meetingDate, setMeetingDate] = useState("");

  const isFormValid =
    files.length > 0 &&
    meetingName.trim() !== "" &&
    meetingLocation.trim() !== "" &&
    meetingType !== "" &&
    meetingDate !== "";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      // Navigate to the processing animation step (Chunk 6)
      router.push("/processing");
    }
  };

  return (
    <div className="flex flex-col">
      {/* ── Main Form Container ────────────────────────────────────── */}
      <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
        
        <form onSubmit={handleStart}>
          {/* ── Dropzone ────────────────────────────────────────────── */}
          <div className="mb-8">
            <h3 className="mb-3 text-sm font-bold text-ink">Upload File</h3>
            <label
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border-light bg-bg-tint/50 transition-all hover:border-primary/40 hover:bg-primary-light/20"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                <svg className="mb-4 h-8 w-8 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <p className="mb-2 text-sm font-bold text-ink">
                  Click or drag and drop your meeting file.
                </p>
                {files.length > 0 && (
                  <div className="mt-2 text-xs font-medium text-primary">
                    {files.length} file(s) selected
                  </div>
                )}
              </div>
              <input 
                type="file" 
                className="hidden" 
                multiple 
                onChange={handleFileChange} 
                accept="audio/*,video/*,.pdf,.doc,.docx"
              />
            </label>
          </div>

          {/* ── Metadata Grid ────────────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-text-secondary">
                Meeting Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                required
                value={meetingName}
                onChange={(e) => setMeetingName(e.target.value)}
                placeholder="Enter Meeting Name"
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-text-secondary">
                Meeting Location <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                required
                value={meetingLocation}
                onChange={(e) => setMeetingLocation(e.target.value)}
                placeholder="Enter Meeting Location"
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-text-secondary">
                Meeting Type <span className="text-danger">*</span>
              </label>
              <select
                required
                value={meetingType}
                onChange={(e) => setMeetingType(e.target.value)}
                className="w-full appearance-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="" disabled>Select Meeting Type</option>
                <option value="monthly">Monthly Recurring</option>
                <option value="extraordinary">Extraordinary Session</option>
                <option value="annual">Annual Review</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-text-secondary">
                Date & Time <span className="text-danger">*</span>
              </label>
              <input
                type="datetime-local"
                required
                value={meetingDate}
                onChange={(e) => setMeetingDate(e.target.value)}
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

          </div>

          {/* ── Action Bar ───────────────────────────────────────────── */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              disabled={!isFormValid}
              className="flex items-center justify-center gap-2 rounded-xl bg-ink px-10 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-ink/90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            >
              Start
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* ── Progress Tracker ─────────────────────────────────────── */}
      <div className="mt-6">
        <StepTracker currentStep={1} />
      </div>
    </div>
  );
}
