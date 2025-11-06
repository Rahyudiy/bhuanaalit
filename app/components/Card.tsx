import Image from "next/image";
import { Button } from "./Button";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="w-fit flex flex-col gap-2">
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className="w-full h-[15vw] rounded-2xl object-cover"
      />
      <h2 className="font-montserrat font-semibold text-2xl">{title}</h2>
      <p className="font-poppins w-[400px]">{description}</p>
      <Button></Button>
    </div>
  );
};
