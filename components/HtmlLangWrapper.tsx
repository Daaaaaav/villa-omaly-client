"use client";

import { useEffect } from "react";
import { useLanguage } from "../app/context/LanguageContext";

export default function HtmlLangWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lang, dir } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return <>{children}</>;
}
