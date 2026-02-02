"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  open: boolean;
  onClose: () => void;
};

export default function GalleryModal({ images, open, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    if (!open) setIndex(0);
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  if (!open || images.length === 0) return null;

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        {/* Modal */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
        >
          {/* Image Carousel */}
          <div className="relative h-[70vh] w-full overflow-hidden">
            <AnimatePresence custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction * 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction * -40,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[index]}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full
                       bg-white/80 px-4 py-3 text-gray-800
                       shadow-md backdrop-blur
                       transition hover:bg-white hover:text-gray-900 active:scale-95"
            aria-label="Previous image"
          >
            ◀
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full
                       bg-white/80 px-4 py-3 text-gray-800
                       shadow-md backdrop-blur
                       transition hover:bg-white hover:text-gray-900 active:scale-95"
            aria-label="Next image"
          >
            ▶
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full
                       bg-white/80 px-3 py-1.5 text-gray-800
                       shadow-md backdrop-blur
                       transition hover:bg-white hover:text-gray-900 active:scale-95"
            aria-label="Close gallery"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
