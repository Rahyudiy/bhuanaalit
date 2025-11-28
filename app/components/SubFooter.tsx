import Image from "next/image";

export const SubFooter = () => {
  return (
    <div className='bg-[url("/slides1.webp")] w-full md:h-[35vw] h-screen md:p-5 p-2 flex flex-col items-center gap-6 justify-center rounded-2xl bg-cover '>
      <div className="text-center font-semibold text-white md:text-4xl text-2xl">
        <h1 className="font-montserrat ">Get Ready Your Thrilling</h1>
        <h1 className="font-montserrat ">Journey Into Nature Today</h1>
      </div>
      <p className="text-base font-poppins md:w-[400px] w-full text-center text-white">
        Excited to plan your next adventure? Let’s explore details to make it an
        unforgettable experience!
      </p>
      <button className="bg-white px-6 py-3 rounded-full font-montserrat text-base hover:bg-black hover:text-white gap-4 w-fit flex items-center duration-200">
        Get Started Now
        <Image
          src={"arrow-right.svg"}
          width={200}
          height={200}
          alt="img"
          className="w-2 "
        ></Image>
      </button>
    </div>
  );
};
