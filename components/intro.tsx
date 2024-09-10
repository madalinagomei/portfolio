import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section>
      <div className="flex item-center justify-center">
        <div>
          <Image
            src="/Madalina_Gomei.png"
            alt="Madalina portrait"
            width="192" // Adaugă lățimea dorită
            height="192"
            quality="95"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
