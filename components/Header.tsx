"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../app/context/LanguageContext";
import { LANGUAGES } from "../app/context/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { lang, setLang } = useLanguage();
  const current = LANGUAGES.find((l) => l.code === lang)!;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLabels = {
    en: {
      home: "Home",
      details: "Details",
      contact: "Contact",
    },
    id: {
      home: "Beranda",
      details: "Detail",
      contact: "Kontak",
    },
    ar: {
      home: "الرئيسية",
      details: "التفاصيل",
      contact: "التواصل",
    },
    "zh": {
      home: "首页",
      details: "详情",
      contact: "联系",
    },
    ja: {
      home: "ホーム",
      details: "詳細",
      contact: "お問い合わせ",
    },
  } as const;

  const t = navLabels[lang] ?? navLabels.en;

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full transition-all duration-300
        ${
          scrolled
            ? "bg-gradient-to-b from-gray-50/90 to-gray-100/80 backdrop-blur-md shadow-sm"
            : "bg-gradient-to-b from-black/40 to-black/10"
        }
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Villa Omaly Logo"
            width={56}
            height={56}
            priority
          />

          <div className="hidden sm:block">
            <span
              className={`block text-lg font-semibold tracking-wide transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Villa Omaly
            </span>
            <span
              className={`block text-xs tracking-wide ${
                scrolled ? "text-gray-500" : "text-white/70"
              }`}
            >
              Private Nature Retreat
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {[
            { href: "/", label: t.home },
            { href: "/details", label: t.details },
            { href: "/contact", label: t.contact },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative text-sm font-medium transition-colors
                ${
                  scrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                }
                after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                after:w-0 after:bg-gray-800 after:transition-all after:duration-300
                hover:after:w-full
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
            className={`
              flex items-center gap-2 rounded-full border px-4 py-1.5
              text-sm font-medium transition-all duration-300
              ${
                scrolled
                  ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "border-white/60 text-white hover:bg-white/20"
              }
            `}
          >
            {current.label}
          </button>

          {open && (
            <ul
              role="listbox"
              className="
                absolute right-0 z-50 mt-2 w-52 overflow-hidden
                rounded-xl bg-white shadow-lg ring-1 ring-black/5
              "
            >
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <button
                    role="option"
                    aria-selected={lang === l.code}
                    onClick={() => {
                      setLang(l.code);
                      setOpen(false);
                    }}
                    className={`
                      w-full px-4 py-2 text-left text-sm transition
                      hover:bg-gray-100
                      ${
                        lang === l.code
                          ? "font-semibold text-gray-900"
                          : "text-gray-700"
                      }
                    `}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
