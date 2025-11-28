"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { revealAnimation } from "../lib/gsap";

export const StoryTellComponent = () => {
  const slides = ["/slides1.webp", "/slides4.webp", "/slides3.webp"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    revealAnimation();

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reveal">
      <h1 className="md:text-4xl text-md font-poppins md:w-[800px] w-full">
        With endless travel inspiration, planning still feels overwhelming - too
        many tabs, scattered ideas, and group chats asking "where are we going?"
        turn excitement into exhaustion.
      </h1>

      <div className="flex w-full md:flex-row flex-col justify-center md:items-start items-center md:my-0 my-10">
        <div className="relative md:h-[30vw] h-[80vw] md:w-[22vw] w-[60vw] object-cover -rotate-6 overflow-hidden rounded-4xl bg-gray-100">
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
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div>
          <h1 className="md:text-6xl text-4xl font-medium font-hedvigserif">
            500+
          </h1>
          <p className="text-base font-poppins">Places to go</p>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <h1 className="md:text-4xl text-md font-poppins md:w-[800px] w-full">
          <span className="font-hedvigserif">BhuanaAlit</span> makes travel
          effortless. Answer 3 quick questions and get a trip tailored to your
          vibe, goals, and schedule - no stress, just wanderlust.
        </h1>
      </div>
    </div>
  );
};
