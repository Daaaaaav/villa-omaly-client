"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from "react";
import { useSeo } from "../il8n/useSeo";
import {
  Sofa,
  Users,
  Waves,
  Mountain,
  Target,
  Trees,
  Building,
} from "lucide-react";

/* ===============================
   Animations
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

const listItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function VillaDetails() {
  const { lang } = useLanguage();
  const seo = useSeo("details");
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);


  const content = {
  en: {
    title: "Villa Omaly – Facilities & Spaces",
    subtitle:
      "Designed for comfort, large gatherings, and a nature-centered experience.",
    sections: [
      {
        title: "Living & Event Spaces",
        items: [
          {
            icon: <Sofa size={18} />,
            text: "Large interconnected living room with 6 sofas",
            image: "/living-room.jpg",
            alt: "Large living room with sofas at Villa Omaly",
          },
          {
            icon: <Building size={18} />,
            text: "Communal meeting hall for up to 400 guests",
            image: "/hall.jpg",
            alt: "Large event hall at Villa Omaly",
          },
        ],
      },
      {
        title: "Outdoor Entertainment",
        items: [
          {
            icon: <Target size={18} />,
            text: "Putt-putt golf driving range",
            image: "/golf.jpg",
            alt: "Mini golf driving range at Villa Omaly",
          },
          {
            icon: <Waves size={18} />,
            text: "Swimming pool",
            image: "/swimming-pool.jpg",
            alt: "Swimming pool at Villa Omaly",
          },
        ],
      },
      {
        title: "One with Nature",
        items: [
          {
            icon: <Mountain size={18} />,
            text: "Mount Salak, Gede Pangrango, & Pancar views",
            image: "/mountain.jpg",
            alt: "Mountain views from Villa Omaly",
          },
          {
            icon: <Trees size={18} />,
            text: "Rice fields backyard",
            image: "/rice-field.jpg",
            alt: "Rice field backyard of Villa Omaly",
          },
          {
            icon: <Trees size={18} />,
            text: "12 durian trees",
            image: "/durian.jpg",
            alt: "Durian trees surrounding Villa Omaly",
          },
        ],
      },
      {
        title: "Supporting Facilities",
        items: [
          {
            icon: <Users size={18} />,
            text: "Prayer place (mushalla)",
            image: "/mushalla.jpg",
            alt: "Prayer room at Villa Omaly",
          },
        ],
      },
    ],
  },

  id: {
    title: "Villa Omaly – Fasilitas & Area",
    subtitle:
      "Dirancang untuk kenyamanan, acara besar, dan pengalaman menyatu dengan alam.",
    sections: [
      {
        title: "Ruang Keluarga & Acara",
        items: [
          {
            icon: <Sofa size={18} />,
            text: "Ruang keluarga besar dengan 6 sofa",
            image: "/livingroom.jpg",
            alt: "Ruang keluarga besar Villa Omaly",
          },
          {
            icon: <Building size={18} />,
            text: "Aula pertemuan hingga 400 tamu",
            image: "/hall.jpg",
            alt: "Aula pertemuan Villa Omaly",
          },
        ],
      },
      {
        title: "Rekreasi Luar Ruangan",
        items: [
          {
            icon: <Target size={18} />,
            text: "Putt-putt golf driving range",
            image: "/golf.jpg",
            alt: "Area golf Villa Omaly",
          },
          {
            icon: <Waves size={18} />,
            text: "Kolam renang",
            image: "/swimming-pool.jpg",
            alt: "Kolam renang Villa Omaly",
          },
        ],
      },
      {
        title: "Alam Sekitar",
        items: [
          {
            icon: <Mountain size={18} />,
            text: "Pemandangan Gunung Salak, Gede Pangrango, & Pancar",
            image: "/mountain.jpg",
            alt: "Pemandangan gunung dari Villa Omaly",
          },
          {
            icon: <Trees size={18} />,
            text: "Halaman belakang persawahan",
            image: "/rice-field.jpg",
            alt: "Persawahan di belakang Villa Omaly",
          },
        ],
      },
      {
        title: "Fasilitas Pendukung",
        items: [
          {
            icon: <Users size={18} />,
            text: "Mushalla / tempat ibadah",
            image: "/mushalla.jpg",
            alt: "Mushalla Villa Omaly",
          },
        ],
      },
    ],
  },

  ar: {
    title: "فيلا أومالي – المرافق والمساحات",
    subtitle:
      "مصممة للراحة، والتجمعات الكبيرة، وتجربة معيشة متناغمة مع الطبيعة.",
    sections: [
      {
        title: "مساحات المعيشة والفعاليات",
        items: [
          {
            icon: <Sofa size={18} />,
            text: "غرفة معيشة واسعة مترابطة مع 6 أرائك",
            image: "/living-room.jpg",
            alt: "غرفة معيشة واسعة في فيلا أومالي",
          },
          {
            icon: <Building size={18} />,
            text: "قاعة اجتماعات تتسع حتى 400 ضيف",
            image: "/hall.jpg",
            alt: "قاعة مناسبات في فيلا أومالي",
          },
        ],
      },
      {
        title: "الترفيه الخارجي",
        items: [
          {
            icon: <Target size={18} />,
            text: "مضمار غولف مصغر",
            image: "/golf.jpg",
            alt: "منطقة غولف في فيلا أومالي",
          },
          {
            icon: <Waves size={18} />,
            text: "مسبح",
            image: "/swimming-pool.jpg",
            alt: "مسبح في فيلا أومالي",
          },
        ],
      },
      {
        title: "الطبيعة المحيطة",
        items: [
          {
            icon: <Mountain size={18} />,
            text: "إطلالات على جبال سالاك وغيدي بانغرانغو وبانكار",
            image: "/mountain.jpg",
            alt: "إطلالة جبلية من فيلا أومالي",
          },
          {
            icon: <Trees size={18} />,
            text: "حديقة خلفية من حقول الأرز",
            image: "/rice-field.jpg",
            alt: "حقول الأرز خلف فيلا أومالي",
          },
          {
            icon: <Trees size={18} />,
            text: "12 شجرة دوريان",
            image: "/durian.jpg",
            alt: "أشجار دوريان في فيلا أومالي",
          },
        ],
      },
      {
        title: "مرافق إضافية",
        items: [
          {
            icon: <Users size={18} />,
            text: "مصلى / مكان للصلاة",
            image: "/mushalla.jpg",
            alt: "مصلى في فيلا أومالي",
          },
        ],
      },
    ],
  },

  zh: {
    title: "奥马利别墅 – 设施与空间",
    subtitle:
      "为舒适住宿、大型聚会以及亲近自然的体验而设计。",
    sections: [
      {
        title: "起居与活动空间",
        items: [
          {
            icon: <Sofa size={18} />,
            text: "宽敞连通的客厅，配有6张沙发",
            image: "/living-room.jpg",
            alt: "奥马利别墅宽敞的客厅",
          },
          {
            icon: <Building size={18} />,
            text: "可容纳多达400人的公共会议厅",
            image: "/hall.jpg",
            alt: "奥马利别墅活动大厅",
          },
        ],
      },
      {
        title: "户外娱乐",
        items: [
          {
            icon: <Target size={18} />,
            text: "迷你高尔夫练习场",
            image: "/golf.jpg",
            alt: "奥马利别墅高尔夫区",
          },
          {
            icon: <Waves size={18} />,
            text: "游泳池",
            image: "/swimming-pool.jpg",
            alt: "奥马利别墅游泳池",
          },
        ],
      },
      {
        title: "自然景观",
        items: [
          {
            icon: <Mountain size={18} />,
            text: "萨拉克山、盖德邦朗戈山及潘查尔山景观",
            image: "/mountain.jpg",
            alt: "奥马利别墅山景",
          },
          {
            icon: <Trees size={18} />,
            text: "稻田后院",
            image: "/rice-field.jpg",
            alt: "奥马利别墅稻田",
          },
          {
            icon: <Trees size={18} />,
            text: "12棵榴莲树",
            image: "/durian.jpg",
            alt: "奥马利别墅榴莲树",
          },
        ],
      },
      {
        title: "配套设施",
        items: [
          {
            icon: <Users size={18} />,
            text: "祈祷室（穆沙拉）",
            image: "/mushalla.jpg",
            alt: "奥马利别墅祈祷室",
          },
        ],
      },
    ],
  },

  ja: {
    title: "ヴィラ・オマリー – 施設と空間",
    subtitle:
      "快適さ、大規模な集まり、自然と調和した滞在のために設計されています。",
    sections: [
      {
        title: "リビング・イベントスペース",
        items: [
          {
            icon: <Sofa size={18} />,
            text: "6台のソファを備えた広々としたリビングルーム",
            image: "/living-room.jpg",
            alt: "ヴィラ・オマリーの広いリビングルーム",
          },
          {
            icon: <Building size={18} />,
            text: "最大400名収容可能な共有ホール",
            image: "/hall.jpg",
            alt: "ヴィラ・オマリーのイベントホール",
          },
        ],
      },
      {
        title: "屋外エンターテイメント",
        items: [
          {
            icon: <Target size={18} />,
            text: "パターゴルフ練習場",
            image: "/golf.jpg",
            alt: "ヴィラ・オマリーのゴルフエリア",
          },
          {
            icon: <Waves size={18} />,
            text: "スイミングプール",
            image: "/swimming-pool.jpg",
            alt: "ヴィラ・オマリーのプール",
          },
        ],
      },
      {
        title: "自然との調和",
        items: [
          {
            icon: <Mountain size={18} />,
            text: "サラック山、ゲデ・パングランゴ山、パンチャルの眺望",
            image: "/mountain.jpg",
            alt: "ヴィラ・オマリーの山の景色",
          },
          {
            icon: <Trees size={18} />,
            text: "稲田に囲まれた裏庭",
            image: "/rice-field.jpg",
            alt: "ヴィラ・オマリーの稲田",
          },
          {
            icon: <Trees size={18} />,
            text: "12本のドリアンの木",
            image: "/durian.jpg",
            alt: "ヴィラ・オマリーのドリアンの木",
          },
        ],
      },
      {
        title: "付帯設備",
        items: [
          {
            icon: <Users size={18} />,
            text: "礼拝スペース（ムシャラ）",
            image: "/mushalla.jpg",
            alt: "ヴィラ・オマリーの礼拝室",
          },
        ],
      },
    ],
  },
} as const;


  const t = content[lang];

  // useEffect(() => {
  //   document.title = seo.title;
  //   const metaDesc = document.querySelector('meta[name="description"]');
  //   if (metaDesc) metaDesc.setAttribute("content", seo.description);
  // }, [seo]);

  useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveImage(null);
  };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh]">
        <Image
          src="/hall-night.jpg"
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
            <h1 className="text-4xl font-bold tracking-tight">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90">
              {t.subtitle}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {t.sections.map((section, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <h3 className="mb-5 text-xl font-semibold text-gray-900">
                {section.title}
              </h3>

              <div className="grid gap-4">
                {section.items.map((item, j) => (
                  <motion.div
                    key={j}
                    variants={listItem}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="relative h-36"
                    >
                    <button
                      onClick={() =>
                        setActiveImage({ src: item.image, alt: item.alt })
                      }
                      className="relative h-36 w-full cursor-zoom-in overflow-hidden"
                    >
                      <motion.div layoutId={item.image} className="relative h-full w-full">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </button>
                    </motion.div>

                    <div className="flex items-start gap-3 p-4 text-sm text-gray-700">
                      <motion.span
                        whileHover={{ scale: 1.15 }}
                        className="text-gray-600"
                      >
                        {item.icon}
                      </motion.span>
                      <span>{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
        {activeImage && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={() => setActiveImage(null)}
      >
        <motion.div
          layoutId={activeImage.src}
          className="relative max-h-[90vh] max-w-5xl w-full cursor-zoom-out"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            width={1600}
            height={900}
            priority
            className="h-auto w-full rounded-2xl object-contain shadow-2xl"
          />

          {/* Close button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur hover:bg-black"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    )}
      <Footer />
    </main>
  );
}
