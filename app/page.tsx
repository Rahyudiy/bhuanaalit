import { BestDealsSection } from "./components/BestDealsSection";
import { Carousel } from "./components/Carousel";
import { Navbar } from "./components/Navbar";
import { Slider } from "./components/Slider";

export default function Home() {
  return (
    <div className="py-4 px-20">
      <Navbar></Navbar>
      <div className="flex w-full justify-between my-[8%]">
        <div className="font-montserrat font-semibold text-4xl">
          <h1>Your Journey to</h1>
          <h1>Bali’s Hidden Paradise</h1>
        </div>
        <h2 className="w-[400px] text-xl font-poppins text-[#6B7280]">
          Explore Bali’s untouched places where peace, nature, and authenticity
          unite in hidden harmony.
        </h2>
      </div>
      <Carousel></Carousel>
      <div className="my-[10vw]">
        <div className="text-center flex-col flex w-full items-center justify-center">
          <div className="">
            <h1 className="text-4xl font-poppins font-semibold">
              Discover the Best Travel
            </h1>
            <h1 className="text-4xl font-poppins font-semibold">
              Deals of the Month
            </h1>
          </div>
          <p className="w-[400px] text-base font-poppins text-[#6B7280]">
            Explore our travel packages for every traveler. Whether a beach
            gateway, mountain trek, or city exploration, we have something
            special!
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <BestDealsSection></BestDealsSection>
      </div>
      <div className="my-[15vw] px-[1vw] flex flex-col gap-2">
        <div className="mb-[2vw]">
          <div className="flex items-center w-full justify-between">
            <h1 className="font-poppins text-4xl font-semibold">
              Somewhere beyond the map, your Bali awaits.
            </h1>
            <button className="bg-white px-6 py-2 rounded-full border-2 font-montserrat text-base">
              See all
            </button>
          </div>
          <p className="font-poppins">
            Explore untouched places, feel real Bali.
          </p>
        </div>
        <div className="flex items-center ">
          <Slider></Slider>
        </div>
      </div>
    </div>
  );
}
