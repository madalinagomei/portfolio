// components/ImageModal.tsx
import { useEffect } from "react";
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
      <img
        src={image}
        alt="Selected"
        className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
      />
      <button className="absolute right-5 text-white" onClick={onNext}>
        <ChevronRight size={40} />
      </button>
    </div>
  );
}

// export default function ImageModal({ image, onClose, onNext, onPrev }) {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//       <div className="relative max-w-4xl">
//         <button className="absolute top-4 right-4 text-white" onClick={onClose}>
//           <XMarkIcon className="w-8 h-8" />
//         </button>
//         <button
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
//           onClick={onPrev}
//         >
//           <ChevronLeftIcon className="w-10 h-10" />
//         </button>
//         <img
//           src={image}
//           alt="Gallery"
//           className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
//         />
//         <button
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
//           onClick={onNext}
//         >
//           <ChevronRightIcon className="w-10 h-10" />
//         </button>
//       </div>
//     </div>
//   );
// }
