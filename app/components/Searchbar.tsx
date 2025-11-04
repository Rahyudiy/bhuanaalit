import Image from "next/image";

export const Searchbar = () => {
  return (
    <div className="bg-white w-fit rounded-2xl p-5 flex gap-10 flex-row mt-[22.6vw] absolute">
      <input className="min-w-[20vw]" type="text" />
      <input className="min-w-[20vw]" type="text" />
      <input className="min-w-[20vw]" type="text" />
      <button type="submit">
        <Image
          src={"/Vector.svg"}
          width={100}
          height={100}
          alt="search"
          className="w-10 bg-black p-3 rounded-full"
        ></Image>
      </button>
    </div>
  );
};
