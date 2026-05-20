# Minassati Translation Roadmap

## Fully Translated Now

- Core multilingual architecture for `ar`, `en`, `fr`, and `es`.
- Locale routes for homepage, start, daily, learn, Q&A, Quran, audio, articles, parents, methodology, content review, privacy, and contact.
- Header language switcher and footer language switcher.
- Homepage copy in Arabic, English, French, and Spanish.
- Core page metadata for locale routes.
- Quran reader controls and translation selector.
- Quran translation support for English, French, and Spanish through remote APIs with fallback handling.

## Current Technical i18n Limitation

Minassati keeps the existing Arabic App Router tree at the root for SEO continuity, and adds locale-aware routes under `/ar`, `/en`, `/fr`, and `/es`. Because Next.js App Router renders the root `app/layout.tsx` `<html>` element once for the whole tree, the current phased implementation server-renders `<html lang="ar" dir="rtl">` and then `HtmlLangSync` updates `lang` and `dir` for localized routes after hydration.

This is stable for users and avoids a large route migration, but it is not a perfect server-rendered locale document for `/en`, `/fr`, and `/es`. A future full migration should move localized pages into a top-level locale layout that owns the `<html>` element, while preserving Arabic root routes, canonicals, and redirects carefully.

## Partially Translated Now

- Learning, Q&A, and article pages show translated interface copy and selected translated samples.
- The full Arabic content library remains available and indexed.
- Non-Arabic pages clearly note that detailed content is being translated in phases.

## Arabic-Only For Now

- The full 120 lessons.
- The full 207 Q&A items.
- The full 24 articles.
- Most activities, stories, challenges, badges, and detailed parent notes.

## Safe Translation Process

1. Translate one content type at a time: lessons, then Q&A, then articles.
2. Use a glossary before translating.
3. Review child safety and tone after translation.
4. Preserve Arabic Islamic source terms where helpful.
5. Add translated slugs only after editorial review.
6. Avoid publishing raw machine translation without human revision.

## Glossary

- Salah: ritual prayer.
- Wudu: ablution before prayer.
- Iman: faith.
- Tawhid: Allah's oneness.
- Adhkar: remembrances and supplications.
- Seerah: Prophetic biography.
- Surah: chapter of the Qur'an.
- Ayah: verse/sign in the Qur'an.

## Translation Quality Rules

- Keep language simple for families and children.
- Avoid fear-based phrasing.
- Avoid complex jurisprudential disputes.
- Do not flatten Islamic terms into inaccurate secular equivalents.
- Keep Qur'an and Hadith references careful and modest.
- Prefer warm parent-guided phrasing over lecture-style copy.
