import { useState } from "react";

const categories = [
  { id: "branding", name: "Branding" },
  { id: "packaging", name: "Packaging" },
  { id: "illustration", name: "Illustration" },
];

const images = {
  branding: [
    { src: "/images/branding1.jpg", alt: "Branding 1" },
    { src: "/images/branding2.jpg", alt: "Branding 2" },
    { src: "/images/branding3.jpg", alt: "Branding 3" },
    { src: "/images/branding4.jpg", alt: "Branding 4" },
    { src: "/images/branding5.jpg", alt: "Branding 5" },
    { src: "/images/branding6.jpg", alt: "Branding 6" },
    { src: "/images/branding7.jpg", alt: "Branding 7" },
    { src: "/images/branding8.jpg", alt: "Branding 8" },
    { src: "/images/branding9.jpg", alt: "Branding 9" },
    { src: "/images/branding10.jpg", alt: "Branding 10" },
  ],
  packaging: [
    { src: "/images/packaging1.jpg", alt: "Packaging 1" },
    { src: "/images/packaging2.jpg", alt: "Packaging 2" },
    { src: "/images/packaging3.jpg", alt: "Packaging 3" },
    { src: "/images/packaging4.jpg", alt: "Packaging 4" },
    { src: "/images/packaging5.jpg", alt: "Packaging 5" },
    { src: "/images/packaging6.jpg", alt: "Packaging 6" },
  ],
  illustration: [
    { src: "/images/illustration1.jpg", alt: "Ilustrație 1" },
    { src: "/images/illustration2.jpg", alt: "Ilustrație 2" },
    { src: "/images/illustration3.jpg", alt: "Ilustrație 3" },
    { src: "/images/illustration4.jpg", alt: "Ilustrație 4" },
    { src: "/images/illustration5.jpg", alt: "Ilustrație 5" },
    { src: "/images/illustration6.jpg", alt: "Ilustrație 6" },
    { src: "/images/illustration7.jpg", alt: "Ilustrație 7" },
    { src: "/images/illustration7-1.jpg", alt: "Ilustrație 7-1" },
    { src: "/images/illustration8.jpg", alt: "Ilustrație 8" },
    { src: "/images/illustration9.jpg", alt: "Ilustrație 9" },
    { src: "/images/illustration10.jpg", alt: "Ilustrație 10" },
    { src: "/images/illustration11.jpg", alt: "Ilustrație 11" },
    { src: "/images/illustration12.jpg", alt: "Ilustrație 12" },
    { src: "/images/illustration13.jpg", alt: "Ilustrație 13" },
    { src: "/images/illustration14.jpg", alt: "Ilustrație 14" },
    { src: "/images/illustration15.jpg", alt: "Ilustrație 15" },
    { src: "/images/illustration16.jpg", alt: "Ilustrație 16" },
    { src: "/images/illustration17.jpg", alt: "Ilustrație 17" },
    { src: "/images/illustration18.jpg", alt: "Ilustrație 18" },
    { src: "/images/illustration19.jpg", alt: "Ilustrație 19" },

    //mai multe imagini pentru ilustrație
  ],
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("branding");

  return (
    <div>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={activeCategory === category.id ? "active" : ""}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {images[activeCategory].map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
