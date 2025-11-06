import Image from "next/image";
import { Card } from "./Card";

const CardProps = [
  {
    image: "/slides1.webp",
    title: "NyangNyang Beach",
    description:
      "Escape to golden sands and cliffside views where the ocean meets silence, perfect for reflection and solitude.",
  },
  {
    image: "/slides2.webp",
    title: "NyangNyang Beach",
    description:
      "Escape to golden sands and cliffside views where the ocean meets silence, perfect for reflection and solitude.",
  },
  {
    image: "/slides3.webp",
    title: "NyangNyang Beach",
    description:
      "Escape to golden sands and cliffside views where the ocean meets silence, perfect for reflection and solitude.",
  },
  {
    image: "/slides3.webp",
    title: "NyangNyang Beach",
    description:
      "Escape to golden sands and cliffside views where the ocean meets silence, perfect for reflection and solitude.",
  },
];

export const BestDealsSection = () => {
  return (
    <div className="flex-row flex w-full items-center justify-center gap-10">
      <Image
        src={"/slides2.webp"}
        width={400}
        height={400}
        className="rounded-2xl md:h-[55vw] h-[60vw] w-[25vw] object-cover"
        alt="image"
      ></Image>
      <div className="w-fit gap-10 justify-center items-center grid grid-cols-2">
        {CardProps.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
