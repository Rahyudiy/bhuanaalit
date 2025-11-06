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

export const Slider = () => {
  return (
    <div className="flex gap-10 overflow-y-auto">
      {CardProps.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
};
