import Image from "next/image";

export const Searchbar = () => {
  return (
    <div
      className="
        bg-white w-fit rounded-2xl p-5 flex gap-10 flex-row mt-[22.6vw] absolute font-poppins
        max-md:flex-col max-md:gap-5 max-md:w-[90vw] max-md:left-1/2 max-md:-translate-x-1/2
        max-md:mt-[50vw]
      "
    >
      {/* Location */}
      <div className="relative min-w-[20vw] max-md:w-full">
        <Image
          src="/location.svg"
          alt="search"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Location"
          className="pl-10 pr-4 py-2 outline-0 w-full max-md:border max-md:rounded-lg"
        />
      </div>

      {/* Date */}
      <div className="relative min-w-[20vw] max-md:w-full">
        <Image
          src="/date.svg"
          alt="search"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
        <input
          type="date"
          placeholder="Travel Date"
          className="pl-10 pr-4 py-2 outline-0 w-full max-md:border max-md:rounded-lg"
        />
      </div>

      {/* Experience */}
      <div className="relative min-w-[20vw] max-md:w-full">
        <Image
          src="/leaf.svg"
          alt="search"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Experience"
          className="pl-10 pr-4 py-2 outline-0 w-full max-md:border max-md:rounded-lg"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="max-md:w-full max-md:flex max-md:justify-center"
      >
        <Image
          src={"/Vector.svg"}
          width={100}
          height={100}
          alt="search"
          className="
            w-10 bg-black p-3 rounded-full hover:scale-110 duration-300
            max-md:w-14
          "
        />
      </button>
    </div>
  );
};
