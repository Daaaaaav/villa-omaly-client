"use client";

import { Instagram, Phone } from "lucide-react";
import { useLanguage } from "../app/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  const content = {
    en: {
      description:
        "Only 45 minutes away from Jakarta, this warm modern villa is designed for family gatherings and meaningful celebrations.",
      locationTitle: "Location",
      contactTitle: "Contact",
    },
    id: {
      description:
        "Hanya 45 menit dari Jakarta, vila modern yang nyaman ini dirancang untuk berkumpul bersama keluarga dan perayaan istimewa.",
      locationTitle: "Lokasi",
      contactTitle: "Kontak",
    },
    ar: {
      description:
        "على بُعد 45 دقيقة فقط من جاكرتا، تم تصميم هذه الفيلا الحديثة والدافئة للتجمعات العائلية والاحتفالات المميزة.",
      locationTitle: "الموقع",
      contactTitle: "التواصل",
    },
    zh: {
      description:
        "距离雅加达仅45分钟车程，这座温馨现代的别墅专为家庭聚会和有意义的庆祝活动而设计。",
      locationTitle: "位置",
      contactTitle: "联系方式",
    },
    ja: {
      description:
        "ジャカルタから車でわずか45分。家族の集まりや特別なイベントのために設計された、温かみのあるモダンなヴィラです。",
      locationTitle: "所在地",
      contactTitle: "お問い合わせ",
    },
  } as const;

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Villa Omaly
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              {content[lang].description}
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-white">
              {content[lang].locationTitle}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Jl. Bojong Pesantren No.9, Bojongkerta
              <br />
              Bogor, Jawa Barat, Indonesia
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white">
              {content[lang].contactTitle}
            </h4>

            <a
              href="tel:+628211032208"
              className="mt-3 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <Phone size={16} />
              +62 821-1032-208
            </a>

            <a
              href="tel:+6287899968338"
              className="mt-2 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <Phone size={16} />
              +62 878-9996-8338
            </a>

            <a
              href="https://instagram.com/villa_omaly"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <Instagram size={16} />
              @villa_omaly
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-gray-700">
            <iframe
              title="Villa Omaly Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8274470116744!2d106.8393032!3d-6.668293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c90048a01c23%3A0xea744a71e6a354e4!2sVilla%20OMALY!5e0!3m2!1sen!2sid!4v1766386337512!5m2!1sen!2sid"
              className="h-[220px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Villa Omaly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
