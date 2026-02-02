"use client";

import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

/* ===============================
   Animation Variants
=============================== */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function ContactPage() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Contact & Booking",
      subtitle: "Get in touch with us for reservations and inquiries.",
      emailTitle: "Email Booking",
      emailDesc:
        "Send us an email and we’ll get back to you as soon as possible.",
      whatsappTitle: "WhatsApp",
      whatsappDesc:
        "Chat directly with us for fast booking confirmation.",
      emailSubject: "Villa Omaly Booking Inquiry",
      emailBody: `Hello Villa Omaly Team,

I would like to inquire about booking Villa Omaly.

Preferred dates:
Number of guests:
Event type (optional):

Thank you.`,
      whatsappMessage:
        "Hello Villa Omaly, I would like to inquire about booking.",
    },

    id: {
      title: "Kontak & Pemesanan",
      subtitle: "Hubungi kami untuk pemesanan dan pertanyaan.",
      emailTitle: "Pemesanan via Email",
      emailDesc:
        "Kirim email kepada kami dan kami akan segera membalas.",
      whatsappTitle: "WhatsApp",
      whatsappDesc:
        "Chat langsung dengan kami untuk konfirmasi cepat.",
      emailSubject: "Permintaan Pemesanan Villa Omaly",
      emailBody: `Halo Tim Villa Omaly,

Saya ingin menanyakan ketersediaan dan pemesanan Villa Omaly.

Tanggal menginap:
Jumlah tamu:
Jenis acara (opsional):

Terima kasih.`,
      whatsappMessage:
        "Halo Villa Omaly, saya ingin menanyakan pemesanan.",
    },

    ar: {
      title: "التواصل والحجز",
      subtitle: "تواصل معنا للحجوزات والاستفسارات.",
      emailTitle: "الحجز عبر البريد الإلكتروني",
      emailDesc:
        "أرسل لنا بريدًا إلكترونيًا وسنرد عليك في أقرب وقت ممكن.",
      whatsappTitle: "واتساب",
      whatsappDesc:
        "تواصل معنا مباشرة عبر واتساب لتأكيد الحجز بسرعة.",
      emailSubject: "استفسار حجز فيلا أومالي",
      emailBody: `مرحبًا فريق فيلا أومالي،

أرغب في الاستفسار عن حجز فيلا أومالي.

التواريخ المفضلة:
عدد الضيوف:
نوع المناسبة (اختياري):

شكرًا لكم.`,
      whatsappMessage:
        "مرحبًا فيلا أومالي، أود الاستفسار عن الحجز.",
    },

    "zh": {
      title: "联系与预订",
      subtitle: "欢迎联系我们进行预订和咨询。",
      emailTitle: "电子邮件预订",
      emailDesc:
        "请通过电子邮件联系我们，我们会尽快回复。",
      whatsappTitle: "WhatsApp",
      whatsappDesc:
        "通过 WhatsApp 与我们直接联系，快速确认预订。",
      emailSubject: "Villa Omaly 预订咨询",
      emailBody: `您好，Villa Omaly 团队：

我想咨询 Villa Omaly 的预订事宜。

首选日期：
入住人数：
活动类型（可选）：

谢谢。`,
      whatsappMessage:
        "您好 Villa Omaly，我想咨询预订事宜。",
    },

    ja: {
      title: "お問い合わせ・ご予約",
      subtitle: "ご予約やお問い合わせはお気軽にご連絡ください。",
      emailTitle: "メールでのご予約",
      emailDesc:
        "メールをお送りいただければ、できるだけ早くご返信いたします。",
      whatsappTitle: "WhatsApp",
      whatsappDesc:
        "WhatsAppで直接ご連絡いただき、迅速にご予約確認が可能です。",
      emailSubject: "Villa Omaly ご予約のお問い合わせ",
      emailBody: `Villa Omaly ご担当者様

Villa Omalyの予約についてお問い合わせいたします。

ご希望の日程：
ご利用人数：
イベント内容（任意）：

よろしくお願いいたします。`,
      whatsappMessage:
        "こんにちは、Villa Omaly の予約について問い合わせたいです。",
    },
  } as const;

  const t = content[lang] ?? content.en;

  const mailtoLink = `mailto:villaomaly@gmail.com?subject=${encodeURIComponent(
    t.emailSubject
  )}&body=${encodeURIComponent(t.emailBody)}`;

  const whatsappLink1 = `https://wa.me/6287868570007?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;

  const whatsappLink2 = `https://wa.me/6287899968338?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;

  return (
    <main className="min-h-screen bg-green-50">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh]">
        <Image
          src="/details-hero.jpg"
          alt="Villa Omaly facilities"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white"
        >
          <div>
            <motion.h1 variants={fadeUp} className="text-4xl font-bold">
              {t.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 text-gray-100">
              {t.subtitle}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {/* Email */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 text-gray-700">
              <Mail size={20} />
              <h3 className="text-lg font-semibold">{t.emailTitle}</h3>
            </div>

            <p className="mt-3 text-sm text-gray-600">{t.emailDesc}</p>

            <a
              href={mailtoLink}
              className="mt-6 inline-block rounded-lg bg-gray-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Email Booking
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 text-gray-700">
              <Phone size={20} />
              <h3 className="text-lg font-semibold">{t.whatsappTitle}</h3>
            </div>

            <p className="mt-3 text-sm text-gray-600">{t.whatsappDesc}</p>

            <a
              href={whatsappLink1}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-lg bg-gray-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              WhatsApp Booking 1
            </a>

            <a
              href={whatsappLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-lg bg-gray-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              WhatsApp Booking 2
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
