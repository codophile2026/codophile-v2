"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT_ID, ADSENSE_DEFAULT_SLOT } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdSenseDisplayProps = {
  className?: string;
  /** Ad unit slot from AdSense (defaults to Google’s sample slot for the test publisher). */
  adSlot?: string;
};

export default function AdSenseDisplay({
  className = "",
  adSlot = ADSENSE_DEFAULT_SLOT,
}: AdSenseDisplayProps) {
  const clientId = ADSENSE_CLIENT_ID;
  const pushed = useRef(false);
  const insRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (pushed.current || !insRef.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* Ad blockers or network failures */
    }
  }, []);

  if (!clientId || !adSlot) return null;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] ${className}`}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={clientId}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
