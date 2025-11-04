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
      <div className="my-[8%]">
        <div className="text-center flex-col flex w-full items-center justify-center">
          <div className="">
            <h1 className="text-4xl font-montserrat font-semibold">
              Discover the Best Travel
            </h1>
            <h1 className="text-4xl font-montserrat font-semibold">
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
      <Slider></Slider>
    </div>
  );
}
