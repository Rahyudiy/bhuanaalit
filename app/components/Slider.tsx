"use client";

import { useEffect } from "react";
import { revealAnimation } from "../lib/gsap";
import { Card } from "./Card";

const CardProps = [
  {
    image: "/bukitcampuhan.jpg",
    title: "Campuhan Hills",
    description:
      "Campuhan Hill Gianyar offers scenic ridge walks, lush valleys, sunrise views, peaceful atmosphere, and authentic Bali nature escape.",
  },
  {
    image: "/penglipuran.jpg",
    title: "Penglipuran Bamboo Forest",
    description:
      "Penglipuran Bamboo Forest showcases towering bamboo trees, cool air, and a calming ambiance reflecting Bali’s traditional and sustainable culture.",
  },
  {
    image: "/tibubana.jpg",
    title: "Tibumana Waterfall",
    description:
      "Tibumana Waterfall features a graceful single cascade, crystal-clear pool, and tranquil forest setting, perfect for relaxation and nature lovers.",
  },
  {
    image: "/les.jpg",
    title: "Les Waterfall",
    description:
      "Les Waterfall offers a serene natural escape with cascading streams, lush jungle surroundings, and a peaceful atmosphere in North Bali.",
  },
];

export const Slider = () => {
  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <div className="flex gap-10 overflow-y-auto w-full reveal">
      {CardProps.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
};
