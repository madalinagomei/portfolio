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
    image: "/images/linkedin-review1.png", // Screenshot recomandare LinkedIn
    link: "https://www.linkedin.com/in/madalina-gomei/details/recommendations/?detailScreenTabIndex=0", // Link spre recomandare
  },
  {
    text: "It was always a pleasure to work with you. Your kindness, your loving way of handling the little ones, and our nice conversations will be dearly missed.",
    author: "Levana, Linda und Claudia",
    image: "/images/felicitare1.png", // Poză cu felicitarea fizică
    link: "", // Nu are link
  },
  {
    text: "Un adevărat profesionist! A lucrat excelent în echipă.",
    author: "Diana, Recruiter, Linkedin",
    image: "/recomandare-roxana.png", // Screenshot altă recomandare LinkedIn
    link: "https://www.linkedin.com/in/madalina-gomei/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    text: "We could always rely on you! We wish you all the best on your future path!",
    author: "Clarissa",
    image: "/images/felicitare2.png", // Poză cu felicitarea fizică
    link: "", // Nu are link
  },
  {
    text: "Un adevărat profesionist! A lucrat excelent în echipă.",
    author: "Diana, Recruiter, Linkedin",
    image: "/images/recomandare-diana.png", // Screenshot altă recomandare LinkedIn
    link: "https://www.linkedin.com/in/madalina-gomei/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    text: "Thank you so much for your reliable, dedicated, and loving support! It&apos;s a pity that you are moving on. I wish you and your family all the best in your new home – many happy hours filled with joy, community, and a true sense of belonging!",
    author: "Moni",
    image: "/images/felicitare3.png", // Poză cu felicitarea fizică
    link: "", // Nu are link
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="my-16 px-4 text-center">
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
          <SwiperSlide key={index} className="flex flex-col items-center">
            <p className="text-lg italic max-w-lg">{`"${testimonial.text}"`}</p>
            <p className="mt-4 font-bold">{testimonial.author}</p>
            <div className="mt-6">
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
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800 transition-all"
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
