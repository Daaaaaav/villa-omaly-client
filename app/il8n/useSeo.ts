"use client";

import { useLanguage } from "../context/LanguageContext";
import { seoContent } from "../il8n/seo";

export function useSeo(page: keyof typeof seoContent) {
  const { lang } = useLanguage();
  return seoContent[page][lang];
}
