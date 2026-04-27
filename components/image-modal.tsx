import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  image: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageModal({
  image,
  onClose,
  onNext,
  onPrev,
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <button className="absolute top-5 right-5 text-white" onClick={onClose}>
        <X size={30} />
      </button>
      <button className="absolute left-5 text-white" onClick={onPrev}>
        <ChevronLeft size={40} />
      </button>
      <div className="relative h-[80vh] w-[min(90vw,48rem)]">
        <Image
          src={image}
          alt="Selected"
          fill
          className="rounded-lg object-contain shadow-lg"
          unoptimized={image.endsWith(".gif")}
        />
      </div>
      <button className="absolute right-5 text-white" onClick={onNext}>
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
