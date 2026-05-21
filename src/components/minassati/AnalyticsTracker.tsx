"use client";

import { useEffect } from "react";
import { trackCtaClick } from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const element = target.closest<HTMLElement>("[data-cta-id]");
      if (!element) return;
      const ctaId = element.dataset.ctaId;
      if (!ctaId) return;
      trackCtaClick(ctaId, {
        source: element.dataset.ctaSource || "",
        course: element.dataset.courseSlug || "",
        resource: element.dataset.resourceSlug || "",
        path: window.location.pathname,
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
