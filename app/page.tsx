"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
import GalleryModal from "../components/GalleryModal";
import { useLanguage } from "./context/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { useSeo } from "../app/il8n/useSeo";

/* ---------------------------------- */
/* Content                            */
/* ---------------------------------- */

const content = {
  hero: {
    en: "A private nature retreat nestled near Rancamaya — where modern comfort meets mountain serenity.",
    id: "Villa pribadi bernuansa alam di dekat Rancamaya — keseimbangan antara kenyamanan modern dan ketentraman pegunungan.",
    ar: "ملاذ خاص وسط الطبيعة بالقرب من رانشامايا — حيث تلتقي الراحة العصرية بهدوء الجبال。",
    zh: "坐落于兰查玛雅附近的私人自然度假别墅——现代舒适与山林宁静的完美融合。",
    ja: "ランチャマヤ近郊に佇むプライベートな自然の隠れ家——現代的な快適さと山の静けさが調和します。",
  },
  ctaExplore: {
    en: "Explore the Villa",
    id: "Jelajahi Villa",
    ar: "اكتشف الفيلا",
    zh: "探索别墅",
    ja: "ヴィラを見る",
  },
  ctaBook: {
    en: "Book Now",
    id: "Pesan Sekarang",
    ar: "احجز الآن",
    zh: "立即预订",
    ja: "今すぐ予約",
  },
} as const;

type FeatureItem = {
  image: string;
  title: string;
  desc: string;
  details: string;
  gallery: string[];
};

/* ---------------------------------- */
/* Features (unchanged data)          */
/* ---------------------------------- */

const features: Record<string, FeatureItem[]> = {
  en: [
    {
      image: "/private.jpg",
      title: "Private & Exclusive",
      desc: "Make your special event completely yours, without distractions.",
      details:
        "The villa is fully reserved for your group only — ideal for weddings, family gatherings, and private celebrations.",
      gallery: ["/private.jpg", "/living-room.jpg", "/hall.jpg"],
    },
    {
      image: "/nature.jpg",
      title: "Nature-Centered Living",
      desc: "Surrounded by greenery, fresh air, and peaceful mountain views.",
      details:
        "Wake up to fresh mountain air, rice field views, and the calming scenery of Mount Salak.",
      gallery: ["/nature.jpg","/mountain.jpg", "/rice-field.jpg", "/durian.jpg"],
    },
    {
      image: "/location.jpg",
      title: "Accessible Location",
      desc: "Minutes from Bogor City and close to the highway.",
      details:
        "Easily accessible by car or bus, with a large parking area suitable for big groups.",
      gallery: ["/location.jpg", "/parking.jpg"],
    },
    {
      image: "/facilities.jpg",
      title: "Complete Facilities",
      desc: "Comfortable rooms, pool, and communal areas.",
      details:
        "Includes 3 bedrooms with private bathrooms, swimming pool, prayer room, meeting hall, and outdoor activities.",
      gallery: ["/facilities.jpg","/swimming-pool.jpg", "/sink.jpg", "/mushalla.jpg"],
    },
  ],
  id: [
    {
      image: "/private.jpg",
      title: "Privat & Eksklusif",
      desc: "Acara spesial Anda sepenuhnya privat tanpa gangguan.",
      details:
        "Seluruh area vila dikhususkan hanya untuk rombongan Anda — cocok untuk acara keluarga dan perayaan.",
      gallery: ["/private.jpg", "/living.jpg", "/hall.jpg"],
    },
    {
      image: "/nature.jpg",
      title: "Selaras dengan Alam",
      desc: "Dikelilingi kehijauan dan udara segar.",
      details:
        "Nikmati suasana pegunungan, sawah, dan panorama Gunung Salak yang menenangkan.",
      gallery: ["/nature.jpg", "/mountain.jpg", "/ricefield.jpg"],
    },
    {
      image: "/location.jpg",
      title: "Lokasi Strategis",
      desc: "Dekat Bogor dan akses mudah.",
      details:
        "Mudah dijangkau dengan kendaraan pribadi maupun bus, tersedia area parkir luas.",
      gallery: ["/location.jpg", "/parking.jpg"],
    },
    {
      image: "/facilities.jpg",
      title: "Fasilitas Lengkap",
      desc: "Fasilitas lengkap untuk kenyamanan.",
      details:
        "3 kamar tidur dengan kamar mandi dalam, kolam renang, mushalla, aula pertemuan, dan area outdoor.",
      gallery: ["/pool.jpg", "/bedroom.jpg", "/mushalla.jpg"],
    },
  ],
  ar: [
    {
      image: "/private.jpg",
      title: "خصوصية تامة",
      desc: "مكانك الخاص دون أي إزعاج.",
      details:
        "يتم حجز الفيلا بالكامل لمجموعتك فقط — مثالية لحفلات الزفاف والمناسبات الخاصة.",
      gallery: ["/private.jpg", "/living-room.jpg", "/hall.jpg"],
    },
    {
      image: "/nature.jpg",
      title: "العيش وسط الطبيعة",
      desc: "محاطة بالخضرة والمناظر الجبلية.",
      details:
        "استمتع بالهواء النقي ومناظر الحقول وإطلالة جبل سالاك الهادئة.",
      gallery: ["/mountain.jpg", "/rice-field.jpg", "/durian.jpg"],
    },
    {
      image: "/location.jpg",
      title: "موقع مميز",
      desc: "قريب من بوجور والطريق السريع.",
      details:
        "سهولة الوصول مع موقف سيارات واسع مناسب للمجموعات.",
      gallery: ["/location.jpg", "/parking.jpg"],
    },
    {
      image: "/facilities.jpg",
      title: "مرافق متكاملة",
      desc: "راحة كاملة أثناء الإقامة.",
      details:
        "3 غرف نوم بحمامات خاصة، مسبح، مصلى، قاعة اجتماعات، ومساحات خارجية.",
      gallery: ["/swimming-pool.jpg", "/sink.jpg", "/mushalla.jpg"],
    },
  ],
  zh: [
    {
      image: "/private.jpg",
      title: "私密与专属",
      desc: "完全属于您的专属空间，不受打扰。",
      details:
        "整栋别墅仅供您的团队使用，非常适合婚礼、家庭聚会和私人庆典。",
      gallery: ["/private.jpg", "/living-room.jpg", "/hall.jpg"],
    },
    {
      image: "/nature.jpg",
      title: "亲近自然的生活方式",
      desc: "被绿意、清新空气和山景所环绕。",
      details:
        "在清新的山间空气中醒来，欣赏稻田景色与萨拉克山的宁静风光。",
      gallery: ["/mountain.jpg", "/rice-field.jpg", "/durian.jpg"],
    },
    {
      image: "/location.jpg",
      title: "便利的地理位置",
      desc: "靠近茂物市，交通便利。",
      details:
        "可轻松驾车或乘坐巴士抵达，设有适合大型团队的宽敞停车区。",
      gallery: ["/location.jpg", "/parking.jpg"],
    },
    {
      image: "/facilities.jpg",
      title: "完善的设施",
      desc: "舒适的客房、泳池和公共空间。",
      details:
        "包括3间带独立浴室的卧室、游泳池、祈祷室、会议厅及户外活动空间。",
      gallery: ["/swimming-pool.jpg", "/sink.jpg", "/mushalla.jpg"],
    },
  ],

  ja: [
    {
      image: "/private.jpg",
      title: "完全プライベート",
      desc: "周囲を気にせず、あなただけの特別な時間を。",
      details:
        "ヴィラ全体を一組限定でご利用いただけます。結婚式や家族の集まり、プライベートイベントに最適です。",
      gallery: ["/private.jpg", "/living-room.jpg", "/hall.jpg"],
    },
    {
      image: "/nature.jpg",
      title: "自然と調和した暮らし",
      desc: "緑豊かな自然と澄んだ空気に囲まれて。",
      details:
        "山の新鮮な空気、田園風景、サラク山の穏やかな景色をお楽しみください。",
      gallery: ["/mountain.jpg", "/rice-field.jpg", "/durian.jpg"],
    },
    {
      image: "/location.jpg",
      title: "アクセス良好",
      desc: "ボゴール市から近く便利な立地。",
      details:
        "車やバスで簡単にアクセス可能。大型グループ向けの広い駐車場を完備。",
      gallery: ["/location.jpg", "/parking.jpg"],
    },
    {
      image: "/facilities.jpg",
      title: "充実した設備",
      desc: "快適な客室、プール、共有スペース。",
      details:
        "専用バスルーム付きの寝室3室、プール、礼拝室、会議ホール、屋外エリアを完備。",
      gallery: ["/swimming-pool.jpg", "/sink.jpg", "/mushalla.jpg"],
    },
  ],
};

/* ---------------------------------- */
/* Page                               */
/* ---------------------------------- */

export default function Home() {
  const { lang } = useLanguage();
  const seo = useSeo("home");

  const safeLang = features[lang] ? lang : "en";

  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const detailsRef = useRef<HTMLDivElement | null>(null);

  /* SEO */
  useEffect(() => {
    if (!seo) return;

    document.title = seo.title;
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (meta) meta.content = seo.description;
  }, [seo]);

  /* Scroll to details */
  useEffect(() => {
    if (activeFeature === null || !detailsRef.current) return;

    const offset = 96;
    const top =
      detailsRef.current.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({ top, behavior: "smooth" });
  }, [activeFeature]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh]">
        <Image src="/hero.jpg" alt="Villa Omaly" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex h-full items-center"
        >
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h1 className="text-5xl font-bold">Villa Omaly</h1>
            <p className="mt-6 text-xl">{content.hero[safeLang]}</p>

            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/details"
                className="rounded-lg bg-gray-600 px-8 py-3 text-lg font-semibold hover:bg-green-700 transition"
              >
                {content.ctaExplore[safeLang]}
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-green-800 transition"
              >
                {content.ctaBook[safeLang]}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {features[safeLang].map((feature, index) => (
            <Feature
              key={index}
              {...feature}
              isActive={activeFeature === index}
              onClick={() => {
                setActiveFeature(index);
                setGalleryImages(feature.gallery);
                setGalleryOpen(true);
              }}
            />
          ))}
        </div>

        <motion.div ref={detailsRef} className="overflow-hidden">
          {activeFeature !== null && (
            <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold">
                {features[safeLang][activeFeature].title}
              </h3>
              <p className="mt-4">
                {features[safeLang][activeFeature].details}
              </p>
            </div>
          )}
        </motion.div>
      </section>

      <Chatbot />
      <Footer />

      {/* Gallery Modal */}
      <GalleryModal
        open={galleryOpen}
        images={galleryImages}
        onClose={() => setGalleryOpen(false)}
      />
    </main>
  );
}

/* ---------------------------------- */
/* Feature Card                       */
/* ---------------------------------- */

type FeatureProps = FeatureItem & {
  isActive: boolean;
  onClick: () => void;
};

function Feature({
  image,
  title,
  desc,
  isActive,
  onClick,
}: FeatureProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6 }}
      className={`cursor-pointer overflow-hidden rounded-xl bg-white transition ${
        isActive ? "ring-2 ring-gray-800" : ""
      }`}
    >
      <div className="relative h-40 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
      </div>
    </motion.div>
  );
}
