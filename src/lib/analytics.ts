"use client";

import { track } from "@vercel/analytics";

function safe(fn: () => void) {
  if (typeof window === "undefined") return;
  try { fn(); } catch { /* no-op */ }
}

function gtag(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (cmd: string, ...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (cmd: string, ...args: unknown[]) => void }).gtag("event", eventName, params);
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
