"use client";

import Image from "next/image";
import { useState } from "react";
export const Accordions = () => {
  const qstList = [
    {
      qst: "What makes this travel experience different?",
      ans: "We focus on exploring hidden gems of Bali — untouched beaches, secret waterfalls, and quiet villages away from the crowds. It’s not just a trip, it’s a journey into the real Bali. 🌿",
    },
    {
      qst: "Are these destinations safe to visit?",
      ans: "Yes, all locations are carefully selected and guided by locals who know the area well. Safety and comfort are our top priorities. ✅",
    },
    {
      qst: "Can I customize my travel package?",
      ans: "Yes, you can! We offer flexible packages that can be adjusted to your preferences — whether it’s private tours, small groups, or special experiences. ✨",
    },
    {
      qst: "When is the best time to visit?",
      ans: "The best time is between April to October, during Bali’s dry season. The weather is perfect for outdoor exploration and photography. ☀️",
    },
  ];

  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="w-full p-4 flex flex-col gap-2 font-poppins ">
      {qstList.map((item, index) => (
        <div key={index} className="mt-4 p-6 rounded-xl bg-white">
          <button
            onClick={() => toggleAccordion(index)}
            className="text-left flex justify-between w-full text-base cursor-pointer font-semibold"
          >
            {item.qst}
            <Image
              src={"arrow-down.svg"}
              width={300}
              height={300}
              alt="img"
              className="w-5"
            ></Image>
          </button>
          {open === index && <p className="mt-4 text-gray-600">{item.ans}</p>}
        </div>
      ))}
    </div>
  );
};
