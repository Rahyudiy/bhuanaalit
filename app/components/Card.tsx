import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

interface CardProps {
  slug: string;
  image: string;
  title: string;
  description: string;
}

export const Card = ({ slug, image, title, description }: CardProps) => {
  return (
    <div className="">
      <Link key={slug} href={`/details/${slug}`}>
        <div className="w-fit md:min-w-fit min-w-full flex flex-col gap-2 group">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt={title}
            className="md:w-[25vw] md:h-[15vw] w-full min-w-[20vw]  h-[50vw] rounded-2xl object-cover group-hover:scale-105 duration-300"
          />
          <h2 className="font-montserrat font-semibold text-2xl">{title}</h2>
          <p className="font-poppins md:w-[400px] text-[#6B7280] md:text-base text-sm">
            {description}
          </p>
          <div className="w-full flex justify-end">
            <Button></Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
