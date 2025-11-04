const CardProps = [
  {
    image: "/slides1.webp",
    title: "NyangNyang Beach",
    desc: "Escape to golden sands and cliffside views where the ocean meets silence, perfect for reflection and solitude.",
  },
  {
    image: "/slides2.webp",
    title: "NyangNyang Beach",
    desc: "Escape to golden sands and cliffside views where the ocean meets silence, perfect for reflection and solitude.",
  },
  {
    image: "/slides3.webp",
    title: "NyangNyang Beach",
    desc: "Escape to golden sands and cliffside views where the ocean meets silence, perfect for reflection and solitude.",
  },
  {
    image: "/slides3.webp",
    title: "NyangNyang Beach",
    desc: "Escape to golden sands and cliffside views where the ocean meets silence, perfect for reflection and solitude.",
  },
];

export const Card = ({}) => {
  return (
    <div className="w-fit flex flex-col h-fit gap-2">
      <div className="w-fit gap-5 justify-center items-center grid grid-cols-2">
        {CardProps.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
