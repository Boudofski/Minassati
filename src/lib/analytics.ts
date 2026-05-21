"use client";

import { track } from "@vercel/analytics";

function safe(fn: () => void) {
  if (typeof window === "undefined") return;
  try { fn(); } catch { /* no-op */ }
}

type GtagFn = (cmd: string, ...args: unknown[]) => void;

function gtag(eventName: string, params?: Record<string, unknown>) {
  const w = window as unknown as { gtag?: GtagFn };
  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, params);
  }
}

export function trackStartJourneyClick(source = "unknown") {
  safe(() => {
    track("start_journey_click", { source });
    gtag("start_journey_click", { source });
  });
}

export function trackDailyOpen() {
  safe(() => {
    track("daily_open");
    gtag("daily_open");
  });
}

export function trackQuranSurahOpen(surahNumber: number) {
  safe(() => {
    track("quran_surah_open", { surah: surahNumber });
    gtag("quran_surah_open", { surah_number: surahNumber });
  });
}

export function trackAudioPlay(reciterId: string) {
  safe(() => {
    track("audio_play", { reciter: reciterId });
    gtag("audio_play", { reciter_id: reciterId });
  });
}

export function trackQuizCompleted(quizSlug: string, score: number) {
  safe(() => {
    track("quiz_completed", { quiz: quizSlug, score });
    gtag("quiz_completed", { quiz_slug: quizSlug, score });
  });
}

export function trackShareClick(platform: string, url: string) {
  safe(() => {
    track("share_click", { platform, url });
    gtag("share_click", { platform, content_url: url });
  });
}

export function trackArticleRead(articleSlug: string) {
  safe(() => {
    track("article_read", { article: articleSlug });
    gtag("article_read", { article_slug: articleSlug });
  });
}

export function trackCtaClick(ctaId: string, params: Record<string, string> = {}) {
  safe(() => {
    track("cta_click", { cta: ctaId, ...params });
    gtag("cta_click", { cta_id: ctaId, ...params });
  });
}

export function trackLeadFormSubmit(status: "success" | "failure" | "fallback", params: Record<string, string> = {}) {
  safe(() => {
    track("lead_form_submit", { status, ...params });
    gtag("lead_form_submit", { status, ...params });
  });
}

export function trackCourseInterest(courseSlug: string, status = "submitted") {
  safe(() => {
    track("course_interest", { course: courseSlug, status });
    gtag("course_interest", { course_slug: courseSlug, status });
  });
}

export function trackInstructorInterest(status = "submitted") {
  safe(() => {
    track("instructor_interest", { status });
    gtag("instructor_interest", { status });
  });
}

export function trackResourceRequest(resourceSlug: string, status = "submitted") {
  safe(() => {
    track("resource_request", { resource: resourceSlug, status });
    gtag("resource_request", { resource_slug: resourceSlug, status });
  });
}
