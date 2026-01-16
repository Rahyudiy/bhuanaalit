import Image from "next/image";

export const Button = () => {
  return (
    <div>
      <button className="bg-white md:px-6 px-4 py-2 rounded-full gap-2  border-2 font-montserrat text-base hover:bg-black hover:text-white w-fit justify-between flex items-center duration-200">
        Details
        <Image
          src={"/arrow-right.svg"}
          width={200}
          height={200}
          alt="img"
          className="w-2 "
        ></Image>
      </button>
    </div>
  );
};
