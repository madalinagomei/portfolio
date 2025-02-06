"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    text: "Madalina is an extraordinary team player.",
    author: "Cezara, LinkedIn",
    image: "/public/recomandare-cezara.png",
    link: "https://www.linkedin.com/in/madalina-gomei/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    text: "It was always a pleasure to work with you. Your kindness, your loving way of handling the little ones, and our nice conversations will be dearly missed.",
    author: "Levana, Linda and Claudia, Educators",
    image: "/felicitare1.png",
    link: "",
  },
  {
    text: "Her dedication to client satisfaction, exceptional work quality, and commitment to continuous improvement make her an invaluable asset to any team.",
    author: "Diana, Recruiter, Linkedin",
    image: "/recomandare-diana.png",
    link: "https://www.linkedin.com/in/madalina-gomei/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    text: "We could always rely on you! We wish you all the best on your future path!",
    author: "Clarissa, Educator",
    image: "/felicitare2.png",
    link: "",
  },
  {
    text: "Mădălina Gomei was always eager to learn and to be up to date with everything that is new in the specialized field, but also in adjacent fields.",
    author: "Roxana, Linkedin",
    image: "/recomandare-roxana.png",
    link: "https://www.linkedin.com/in/madalina-gomei/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    text: "Thank you so much for your reliable, dedicated, and loving support! It&apos;s a pity that you are moving on. I wish you and your family all the best in your new home – many happy hours filled with joy, community, and a true sense of belonging!",
    author: "Moni, Educator",
    image: "/felicitare3.png",
    link: "", //
  },
];

export default function TestimonialsCarousel() {
  return (
    <section id="recommendations" className="my-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Recommendations</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="max-w-2xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center text-center flex-col items-center w-full"
          >
            <div className="w-full flex flex-col items-center">
              <p className="text-lg italic text-center max-w-lg">{`"${testimonial.text}"`}</p>
              <p className="mt-4 font-bold">{testimonial.author}</p>
            </div>
            <div className="mt-6 mb-10 flex justify-center items-center text-center w-full">
              <Image
                src={testimonial.image}
                alt={testimonial.author}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            {testimonial.link && (
              <Link
                href={testimonial.link}
                target="_blank"
                className="mt-20 relative z-10 bg-white text-gray-900 rounded-full shadow-md hover:bg-gray-700 px-4 py-2"
              >
                See recommendation on LinkedIn
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
