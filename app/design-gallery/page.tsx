"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "../../components/image-modal";

const categories = ["Branding", "Packaging", "Illustration"];
const images = {
  branding: [
    { src: "/images/branding1.png", alt: "Branding 1" },
    { src: "/images/branding2.png", alt: "Branding 2" },
    { src: "/images/branding3.png", alt: "Branding 3" },
    { src: "/images/branding4.png", alt: "Branding 4" },
    { src: "/images/branding5.gif", alt: "Branding 5" },
    // { src: "/images/branding6.png", alt: "Branding 6" },
    { src: "/images/branding7.png", alt: "Branding 7" },
    { src: "/images/branding8.png", alt: "Branding 8" },
    { src: "/images/branding9.png", alt: "Branding 9" },
    { src: "/images/branding10.png", alt: "Branding 10" },
  ],
  packaging: [
    { src: "/images/packaging1.gif", alt: "Packaging 1" },
    { src: "/images/packaging2.png", alt: "Packaging 2" },
    { src: "/images/packaging3.png", alt: "Packaging 3" },
    { src: "/images/packaging4.gif", alt: "Packaging 4" },
    { src: "/images/packaging5.png", alt: "Packaging 5" },
    { src: "/images/packaging6.png", alt: "Packaging 6" },
  ],
  illustration: [
    { src: "/images/illustration1.png", alt: "Illustration 1" },
    { src: "/images/illustration2.png", alt: "Illustration 2" },
    { src: "/images/illustration3.png", alt: "Illustration 3" },
    { src: "/images/illustration4.png", alt: "Illustration 4" },
    { src: "/images/illustration5.png", alt: "Illustration 5" },
    { src: "/images/illustration6.png", alt: "Illustration 6" },
    { src: "/images/illustration7.png", alt: "Illustration 7" },
    { src: "/images/illustration7-1.png", alt: "Illustration 7-1" },
    { src: "/images/illustration13.png", alt: "Illustration 13" },
    { src: "/images/illustration13-1.png", alt: "Illustration 13-1" },
    { src: "/images/illustration14.png", alt: "Illustration 14" },
    { src: "/images/illustration15.png", alt: "Illustration 15" },
    { src: "/images/illustration16.png", alt: "Illustration 16" },
    { src: "/images/illustration12-1.png", alt: "Illustration 12-1" },
    { src: "/images/illustration16-1.png", alt: "Illustration 16-1" },
    { src: "/images/illustration8.png", alt: "Illustration 8" },
    { src: "/images/illustration9.png", alt: "Illustration 9" },
    { src: "/images/illustration10.png", alt: "Illustration 10" },
    // { src: "/images/illustration11.png", alt: "Illustration 11" },

    // { src: "/images/illustration12-1.png", alt: "Illustration 12-1" },
    // { src: "/images/illustration13-1.png", alt: "Illustration 13-1" },
    // { src: "/images/illustration13.png", alt: "Illustration 13" },

    // { src: "/images/illustration14.png", alt: "Illustration 14" },
    // { src: "/images/illustration15.png", alt: "Illustration 15" },
    // { src: "/images/illustration16-1.png", alt: "Illustration 16-1" },
    // { src: "/images/illustration16.png", alt: "Illustration 16" },
    { src: "/images/illustration12.png", alt: "Illustration 12" },
    { src: "/images/illustration17.png", alt: "Illustration 17" },
    { src: "/images/illustration18.png", alt: "Illustration 18" },
  ],
};

export default function DesignGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Branding");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Extragem doar imaginile din categoria selectată
  const filteredImages =
    images[selectedCategory.toLowerCase() as keyof typeof images] || [];

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
    <section className="text-center my-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Design Gallery</h1>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 rounded-full shadow-md transition-all ${
              selectedCategory === category
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-900"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img: { src: string; alt: string }, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            layout="responsive"
            width={500} // O valoare maximă sugerată
            height={500}
            className="rounded-lg shadow-md cursor-pointer w-full h-auto"
            onClick={() => openModal(index)}
          />
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
