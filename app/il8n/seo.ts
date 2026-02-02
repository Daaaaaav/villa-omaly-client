import type { Lang } from "../context/LanguageContext";

type SeoContent = {
  title: string;
  description: string;
};

export const seoContent: Record<
  string,
  Record<Lang, SeoContent>
> = {
  home: {
    en: {
      title: "Villa Omaly – Private Nature Villa near Rancamaya, Bogor",
      description:
        "Villa Omaly is a private nature retreat near Rancamaya, Bogor. Ideal for family stays, events, and serene mountain getaways.",
    },
    id: {
      title: "Villa Omaly – Villa Pribadi Bernuansa Alam di Bogor",
      description:
        "Villa Omaly adalah villa pribadi bernuansa alam dekat Rancamaya, Bogor. Cocok untuk keluarga, acara, dan liburan tenang.",
    },
    ar: {
      title: "فيلا أومالي – فيلا خاصة وسط الطبيعة قرب بوغور",
      description:
        "فيلا أومالي هي ملاذ خاص وسط الطبيعة بالقرب من رانشامايا، بوغور. مثالية للعائلات، الفعاليات، والاستجمام الهادئ.",
    },
    zh: {
      title: "奥马利别墅 – 靠近茂物的私密自然别墅",
      description:
        "奥马利别墅是一处位于茂物兰查玛雅附近的私密自然度假别墅，适合家庭入住、活动举办与静谧度假。",
    },
    ja: {
      title: "ヴィラ・オマリー – ボゴール近郊の自然派プライベートヴィラ",
      description:
        "ヴィラ・オマリーは、ボゴールのランチャマヤ近郊にある自然に囲まれたプライベートヴィラ。家族旅行やイベント、静かな滞在に最適です。",
    },
  },

  details: {
    en: {
      title: "Villa Details – Facilities & Scenic Views | Villa Omaly",
      description:
        "Explore Villa Omaly facilities including bedrooms, swimming pool, Mount Salak views, and spacious event halls.",
    },
    id: {
      title: "Detail Villa – Fasilitas & Pemandangan | Villa Omaly",
      description:
        "Jelajahi fasilitas Villa Omaly seperti kamar tidur, kolam renang, pemandangan Gunung Salak, dan aula acara luas.",
    },
    ar: {
      title: "تفاصيل الفيلا – المرافق والمناظر الطبيعية | فيلا أومالي",
      description:
        "اكتشف مرافق فيلا أومالي بما في ذلك غرف النوم، المسبح، إطلالات جبل سالاك، وقاعات الفعاليات الواسعة.",
    },
    zh: {
      title: "别墅详情 – 设施与自然景观 | 奥马利别墅",
      description:
        "探索奥马利别墅的各类设施，包括卧室、游泳池、萨拉克山景观以及宽敞的活动大厅。",
    },
    ja: {
      title: "ヴィラ詳細 – 設備と絶景 | ヴィラ・オマリー",
      description:
        "ヴィラ・オマリーの設備をご紹介。客室、プール、サラック山の眺望、広々としたイベントホールをご覧ください。",
    },
  },

  contact: {
    en: {
      title: "Contact & Booking – Villa Omaly",
      description:
        "Contact Villa Omaly for bookings, inquiries, and private events near Rancamaya, Bogor.",
    },
    id: {
      title: "Kontak & Reservasi – Villa Omaly",
      description:
        "Hubungi Villa Omaly untuk reservasi, pertanyaan, dan acara pribadi di dekat Rancamaya, Bogor.",
    },
    ar: {
      title: "التواصل والحجز – فيلا أومالي",
      description:
        "تواصل مع فيلا أومالي للحجوزات، الاستفسارات، وتنظيم الفعاليات الخاصة قرب رانشامايا، بوغور.",
    },
    zh: {
      title: "联系与预订 – 奥马利别墅",
      description:
        "欢迎联系奥马利别墅进行预订、咨询及举办私人活动，地点靠近茂物兰查玛雅。",
    },
    ja: {
      title: "お問い合わせ・予約 – ヴィラ・オマリー",
      description:
        "ヴィラ・オマリーへのご予約・お問い合わせはこちら。ボゴール近郊でのプライベートイベントにも対応しています。",
    },
  },
};
