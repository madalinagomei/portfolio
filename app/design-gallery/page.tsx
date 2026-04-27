"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ImageModal from "../../components/image-modal";
import {
  designGalleryCategories,
  designGalleryImages,
} from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

type GalleryCategoryKey = keyof typeof designGalleryImages;

export default function DesignGallery() {
  const { setActiveSection } = useActiveSectionContext();
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategoryKey>("branding");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    setActiveSection("Gallery");

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const matchedCategory = designGalleryCategories.find(
      (item) => item.key === category
    );

    if (matchedCategory) {
      setSelectedCategory(matchedCategory.key);
    }
  }, [setActiveSection]);

  const filteredImages = designGalleryImages[selectedCategory] || [];

  const openModal = (index: number) => {
    setModalImage(filteredImages[index].src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex !== null && currentIndex < filteredImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setModalImage(filteredImages[currentIndex + 1].src);
    }
  };

  const prevImage = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setModalImage(filteredImages[currentIndex - 1].src);
    }
  };

  return (
    <section className="mx-auto my-16 w-full max-w-[78rem] px-4 text-center sm:my-24 sm:px-6">
      <div className="mx-auto max-w-[44rem]">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Design Gallery
        </h1>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {designGalleryCategories.map((category) => (
          <button
            key={category.key}
            className={`rounded-full px-6 py-3 shadow-md transition-all ${
              selectedCategory === category.key
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white/80"
            }`}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredImages.map((img, index) => (
          <button
            key={img.src}
            type="button"
            className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white text-left shadow-lg shadow-black/[0.03] transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20"
            onClick={() => openModal(index)}
          >
            <div className="relative min-h-[18rem]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="cursor-pointer object-cover"
                priority={index < 3}
                unoptimized={img.src.endsWith(".gif")}
                sizes="(max-width: 1280px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold tracking-tight">{img.title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-white/65">
                {img.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {modalImage && (
        <ImageModal
          image={modalImage}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
}
