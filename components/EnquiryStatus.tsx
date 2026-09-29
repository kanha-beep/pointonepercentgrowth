"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type StatusState = { type: "" | "success" | "error"; message: string };
type EnquiryContextValue = {
  status: StatusState;
  setStatus: (status: StatusState) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<StatusState>({ type: "", message: "" });
  const value = useMemo(() => ({ status, setStatus }), [status]);

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>;
}

export function useEnquiryStatus() {
  const context = useContext(EnquiryContext);
  if (!context) throw new Error("useEnquiryStatus must be used inside EnquiryProvider.");
  return context;
}

export function StatusBanner() {
  const { status } = useEnquiryStatus();
  if (!status.message) return null;

  return (
    <div className={`px-5 py-3 text-center text-sm font-semibold tracking-wide ${status.type === "success" ? "bg-emerald-600 text-white shadow-sm" : "bg-rose-600 text-white shadow-sm"}`}>
      {status.message}
    </div>
  );
}
