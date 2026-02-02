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
  },
};
