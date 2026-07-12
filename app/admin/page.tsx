"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

// Mock client folders
const clientFolders = [
  {
    id: "f-101",
    clientName: "Styleit Fashion Pvt Ltd",
    meetingType: "Extraordinary CSE Session",
    date: "24 June 2026",
    status: "Locked", // Matches our Document Editor state
    docs: 4,
    lastActive: "2 hrs ago",
  },
  {
    id: "f-102",
    clientName: "Acme Corp",
    meetingType: "Annual General Meeting",
    date: "22 June 2026",
    status: "In Editing",
    docs: 2,
    lastActive: "1 day ago",
  },
  {
    id: "f-103",
    clientName: "Globex Industries",
    meetingType: "Q3 Board Meeting",
    date: "20 June 2026",
    status: "Dispatched",
    docs: 5,
    lastActive: "3 days ago",
  },
  {
    id: "f-104",
    clientName: "Initech",
    meetingType: "SSCT Committee",
    date: "26 June 2026",
    status: "Awaiting Transcription",
    docs: 1,
    lastActive: "Just now",
  },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-bg-app font-sans">
      <Navbar />

      <main className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-black text-ink">Client Folders</h1>
            <p className="mt-2 text-text-secondary">Manage and review generated reports for all clients.</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-deep hover:-translate-y-0.5">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            New Folder
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-tint">
                  <th className="px-6 py-4 font-bold text-ink">Client</th>
                  <th className="px-6 py-4 font-bold text-ink">Meeting Detail</th>
                  <th className="px-6 py-4 font-bold text-ink">Date</th>
                  <th className="px-6 py-4 font-bold text-ink">Status</th>
                  <th className="px-6 py-4 font-bold text-ink">Docs</th>
                  <th className="px-6 py-4 font-bold text-ink text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {clientFolders.map((folder) => {
                  // Determine status pill style
                  let statusStyle = "bg-border-light text-text-secondary";
                  if (folder.status === "Awaiting Transcription") statusStyle = "bg-warning/10 text-warning";
                  if (folder.status === "In Editing") statusStyle = "bg-primary/10 text-primary";
                  if (folder.status === "Locked") statusStyle = "bg-danger/10 text-danger";
                  if (folder.status === "Dispatched") statusStyle = "bg-success/10 text-success";

                  return (
                    <tr key={folder.id} className="group hover:bg-bg-tint/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-ink">
                        {folder.clientName}
                      </td>
                      <td className="px-6 py-4 text-text-secondary">
                        {folder.meetingType}
                      </td>
                      <td className="px-6 py-4 text-ink font-medium">
                        {folder.date}
                        <div className="text-xs font-normal text-text-tertiary mt-0.5">{folder.lastActive}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${statusStyle}`}>
                          {folder.status === "Locked" && (
                            <svg className="mr-1 h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                          )}
                          {folder.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-text-secondary font-medium">
                        {folder.docs}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href="/editor"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-bold text-ink shadow-sm transition-colors hover:border-primary/30 hover:bg-bg-tint hover:text-primary"
                        >
                          Open Editor
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 18l6-6-6-6"/></svg>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
