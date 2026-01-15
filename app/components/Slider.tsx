"use client";

import { useEffect } from "react";
import { destinations } from "../../data/destinations";
import { revealAnimation } from "../lib/gsap";
import { Card } from "./Card";

export const Slider = () => {
  useEffect(() => {
    revealAnimation();
  }, []);

  return (
    <div className="flex gap-10 overflow-y-auto w-full reveal">
      {destinations.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
};
