"use client";

import Image from "next/image";
import { useEffect } from "react";
import { destinations } from "../../data/destinations";
import { revealAnimation } from "../lib/gsap";
import { Card } from "./Card";

export const BestDealsSection = () => {
  useEffect(() => {
    revealAnimation();
  }, []);
  const CardProps = destinations.slice(0, 4);

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
