import type { Locale } from "@/i18n/config";

export type TranslatedSample = {
  slug: string;
  title: string;
  excerpt: string;
  href: string;
};

type NonArabicLocale = Exclude<Locale, "ar">;

export const translatedLessonSamples: Record<NonArabicLocale, TranslatedSample[]> = {
  en: [
    { slug: "what-is-iman", title: "What does Iman mean?", excerpt: "Faith lives in the heart, words, and actions. Children learn it through gratitude and trust in Allah.", href: "/learn/aqeedah/what-is-iman" },
    { slug: "why-do-we-pray", title: "Why do we pray?", excerpt: "Salah is a daily connection with Allah and a peaceful rhythm for the family.", href: "/learn/fiqh/why-do-we-pray" },
    { slug: "start-learning-quran", title: "How to begin with the Qur’an", excerpt: "Start with a short, steady time, listening, repetition, and no pressure.", href: "/learn/quran/start-learning-quran" },
    { slug: "truthfulness", title: "Truthfulness", excerpt: "Truth builds trust even when it feels difficult.", href: "/learn/akhlaq/truthfulness" },
    { slug: "character-of-prophet", title: "The Prophet’s character", excerpt: "Mercy, honesty, and gentleness are taught through Seerah moments.", href: "/learn/seerah/character-of-prophet" },
    { slug: "morning-adhkar-lesson", title: "Morning adhkar", excerpt: "A calm beginning to the day with remembrance and gratitude.", href: "/learn/duaa/morning-adhkar-lesson" },
  ],
  fr: [
    { slug: "what-is-iman", title: "Que signifie l’Iman ?", excerpt: "La foi se vit dans le cœur, les paroles et les actes, avec gratitude et confiance en Allah.", href: "/learn/aqeedah/what-is-iman" },
    { slug: "why-do-we-pray", title: "Pourquoi prions-nous ?", excerpt: "La Salah relie l’enfant à Allah et donne un rythme paisible à la famille.", href: "/learn/fiqh/why-do-we-pray" },
    { slug: "start-learning-quran", title: "Commencer avec le Coran", excerpt: "Un temps court, régulier, avec écoute et répétition sans pression.", href: "/learn/quran/start-learning-quran" },
    { slug: "truthfulness", title: "La sincérité", excerpt: "Dire la vérité construit la confiance, même lorsque c’est difficile.", href: "/learn/akhlaq/truthfulness" },
    { slug: "character-of-prophet", title: "Le caractère du Prophète", excerpt: "La miséricorde, l’honnêteté et la douceur se découvrent dans la Seerah.", href: "/learn/seerah/character-of-prophet" },
    { slug: "morning-adhkar-lesson", title: "Adhkar du matin", excerpt: "Commencer la journée avec rappel d’Allah et gratitude.", href: "/learn/duaa/morning-adhkar-lesson" },
  ],
  es: [
    { slug: "what-is-iman", title: "¿Qué significa Iman?", excerpt: "La fe vive en el corazón, las palabras y las acciones, con gratitud y confianza en Allah.", href: "/learn/aqeedah/what-is-iman" },
    { slug: "why-do-we-pray", title: "¿Por qué rezamos?", excerpt: "La Salah conecta al niño con Allah y da a la familia un ritmo tranquilo.", href: "/learn/fiqh/why-do-we-pray" },
    { slug: "start-learning-quran", title: "Empezar con el Corán", excerpt: "Un tiempo corto y constante, con escucha, repetición y sin presión.", href: "/learn/quran/start-learning-quran" },
    { slug: "truthfulness", title: "La sinceridad", excerpt: "La verdad construye confianza incluso cuando cuesta.", href: "/learn/akhlaq/truthfulness" },
    { slug: "character-of-prophet", title: "El carácter del Profeta", excerpt: "La misericordia, la honestidad y la gentileza se aprenden en la Seerah.", href: "/learn/seerah/character-of-prophet" },
    { slug: "morning-adhkar-lesson", title: "Adhkar de la mañana", excerpt: "Un comienzo del día con recuerdo de Allah y gratitud.", href: "/learn/duaa/morning-adhkar-lesson" },
  ],
};

export const translatedQuestionSamples: Record<NonArabicLocale, TranslatedSample[]> = {
  en: [
    { slug: "who-created-allah-child-answer", title: "Who created Allah?", excerpt: "Allah is not like created things. He is the Creator and has no beginning.", href: "/qa/who-created-allah-child-answer" },
    { slug: "does-allah-love-me", title: "Does Allah love me?", excerpt: "Yes. Allah loves goodness, honesty, mercy, and sincere attempts to improve.", href: "/qa/does-allah-love-me" },
    { slug: "why-pray-five-times-child", title: "Why do we pray five times?", excerpt: "Prayer gives the heart repeated moments of closeness to Allah.", href: "/qa/why-pray-five-times-child" },
    { slug: "how-start-quran-memorization-child", title: "How do we start memorizing Qur’an?", excerpt: "Begin with one short ayah, listening, repetition, and joy in trying.", href: "/qa/how-start-quran-memorization-child" },
    { slug: "why-love-prophet-child", title: "Why do we love the Prophet ﷺ?", excerpt: "Because he taught us worship, mercy, honesty, and how to draw close to Allah.", href: "/qa/why-love-prophet-child" },
    { slug: "what-is-amanah-for-child", title: "What is amanah?", excerpt: "Amanah means caring for what people trust you with and doing what is right.", href: "/qa/what-is-amanah-for-child" },
    { slug: "how-choose-good-friend-child", title: "How do I choose a good friend?", excerpt: "A good friend helps you do good and respects you.", href: "/qa/how-choose-good-friend-child" },
    { slug: "why-tell-truth-if-hard", title: "Why tell the truth when it is hard?", excerpt: "Truth builds trust and helps fix mistakes.", href: "/qa/why-tell-truth-if-hard" },
    { slug: "what-do-when-afraid-child", title: "What should I do when I am afraid?", excerpt: "Remember Allah, breathe calmly, and go to a trusted adult.", href: "/qa/what-do-when-afraid-child" },
    { slug: "why-muslims-fast-ramadan-child", title: "Why do Muslims fast Ramadan?", excerpt: "Fasting teaches obedience, patience, gratitude, and mercy.", href: "/qa/why-muslims-fast-ramadan-child" },
    { slug: "how-make-dua-child", title: "How do I make du’a?", excerpt: "Speak to Allah with honest words and ask for good.", href: "/qa/how-make-dua-child" },
    { slug: "what-is-jannah-for-child", title: "What is Jannah?", excerpt: "Jannah is the home of Allah’s mercy and joy that does not end.", href: "/qa/what-is-jannah-for-child" },
  ],
  fr: [],
  es: [],
};

translatedQuestionSamples.fr = translatedQuestionSamples.en.map((item) => ({ ...item, title: item.title, excerpt: "Exemple traduit disponible. La traduction complète de cette réponse est prévue dans la feuille de route." }));
translatedQuestionSamples.es = translatedQuestionSamples.en.map((item) => ({ ...item, title: item.title, excerpt: "Muestra traducida disponible. La traducción completa está prevista en la hoja de ruta." }));

export const translatedArticleSamples: Record<NonArabicLocale, TranslatedSample[]> = {
  en: [
    { slug: "kaifa-uallim-tifly-alsalah", title: "How do I teach my child Salah?", excerpt: "A parent-first guide to teaching prayer with love, routine, and patience.", href: "/articles/kaifa-uallim-tifly-alsalah" },
    { slug: "afdal-tariqa-litalim-alatfal-alquran", title: "The best way to teach children Qur’an", excerpt: "Short sessions, listening, meaning, and gentle review.", href: "/articles/afdal-tariqa-litalim-alatfal-alquran" },
    { slug: "kaifa-nuhabbib-alatfal-fi-aldeen-bidun-daght", title: "How to make children love religion without pressure", excerpt: "Love, example, and small habits before long lectures.", href: "/articles/kaifa-nuhabbib-alatfal-fi-aldeen-bidun-daght" },
    { slug: "khutat-10-daqaiq-yawmiyan", title: "A 10-minute daily plan", excerpt: "A realistic family routine for daily Islamic learning.", href: "/articles/khutat-10-daqaiq-yawmiyan" },
  ],
  fr: [],
  es: [],
};

translatedArticleSamples.fr = translatedArticleSamples.en.map((item) => ({ ...item, excerpt: "Résumé traduit disponible. La version intégrale sera traduite par étapes." }));
translatedArticleSamples.es = translatedArticleSamples.en.map((item) => ({ ...item, excerpt: "Resumen traducido disponible. La versión completa se traducirá por etapas." }));
