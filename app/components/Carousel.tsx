"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Searchbar } from "./Searchbar";

export const Carousel = () => {
  const slides = ["/slides1.webp", "/slides4.webp", "/slides3.webp"];

  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(
    new Array(slides.length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // Changed to 3000ms = 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-[25vw] overflow-hidden rounded-2xl bg-gray-100">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              fill
              src={slide}
              alt={`Slide ${index + 1}`}
              className="object-cover"
              priority={index === 0} // Prioritize first image
              onLoadingComplete={() => {
                setLoaded((prev) => {
                  const newLoaded = [...prev];
                  newLoaded[index] = true;
                  return newLoaded;
                });
              }}
            />
          </div>
        ))}
      </div>
      <Searchbar></Searchbar>
    </div>
  );
};
