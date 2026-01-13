"use client";

import Image from "next/image";
import { useEffect } from "react";
import { revealAnimation } from "../lib/gsap";
import { Card } from "./Card";

const CardProps = [
  {
    image: "/hidden01.jpg",
    title: "Tukad Cepung Waterfall",
    description:
      "A surreal waterfall hidden inside a cave where sunlight beams slice through mist, creating a heavenly glow unlike anywhere else in Bali.",
  },
  {
    image: "/hidden02.jpg",
    title: "Gunung Payung Secret Beach",
    description:
      "A calm white-sand beach tucked under towering cliffs, perfect for peaceful swims, quiet sunsets, and escaping the island crowds.",
  },
  {
    image: "/hidden03.jpg",
    title: "Sambangan Blue Lagoon",
    description:
      "A turquoise natural pool deep inside the rainforest—perfect for cliff jumping, refreshing swims, or relaxing in untouched nature.",
  },
  {
    image: "/hidden04.jpg",
    title: "NyangNyang Beach",
    description:
      "Escape to golden sands and cliffside views where the ocean meets silence, perfect for reflection and solitude.",
  },
];

export const BestDealsSection = () => {
  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <div className="md:flex-row flex-col flex w-full items-center justify-center gap-10 reveal">
      <Image
        src={"/slides2.webp"}
        width={400}
        height={400}
        className="rounded-2xl md:h-[55vw] h-screen w-full  md:w-[25vw] object-cover"
        alt="image"
      ></Image>
      <div className="w-fit gap-10 justify-center items-center grid md:grid-cols-2 grid-cols-1">
        {CardProps.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
