import { Accordions } from "./components/Accordions";
import { BestDealsSection } from "./components/BestDealsSection";
import { Carousel } from "./components/Carousel";
import { Slider } from "./components/Slider";
import { StoryTellComponent } from "./components/StoryTellComponent";
import { SubFooter } from "./components/SubFooter";

export default function Home() {
  return (
    <div className="">
      <div className="flex md:flex-row flex-col w-full gap-2 justify-between my-[8%]">
        <div className="font-montserrat font-semibold md:text-4xl text-2xl">
          <h1>Your Journey to</h1>
          <h1>Bali’s Hidden Paradise</h1>
        </div>
        <h2 className="md:w-[400px] md:text-xl text-sm font-poppins text-[#6B7280]">
          Explore Bali’s untouched places where peace, nature, and authenticity
          unite in hidden harmony.
        </h2>
      </div>
      <Carousel></Carousel>
      <div className="md:my-[10vw] my-0 md:mt-[10vw] mt-[50vw] md:mb-[10vw] mb-[10vw]">
        <div className="text-center flex-col flex w-full items-center gap-2 justify-center">
          <div className="">
            <h1 className="md:text-4xl text-2xl font-poppins font-semibold">
              Discover the Best Travel
            </h1>
            <h1 className="md:text-4xl text-2xl font-poppins font-semibold">
              Deals of the Month
            </h1>
          </div>
          <p className="md:w-[400px] w-full md:text-base text-sm font-poppins text-[#6B7280]">
            Explore our travel packages for every traveler. Whether a beach
            gateway, mountain trek, or city exploration, we have something
            special!
          </p>
        </div>
      </div>
      <article className="w-full flex md:mt-0 mt-0 items-center justify-center">
        <BestDealsSection></BestDealsSection>
      </article>
      <div className="my-[20vw] md:px-[6vw] px-0 flex flex-col gap-2">
        <div className="mb-[2vw]">
          <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between">
            <h1 className="font-poppins md:text-4xl text-2xl font-semibold">
              Somewhere beyond the map, your Bali awaits.
            </h1>
            <button className="bg-white md:my-0 my-5 px-6 md:w-fit w-full py-2 rounded-full border-2 font-montserrat text-base">
              See all
            </button>
          </div>
          <p className="font-poppins text-[#6B7280] text-base">
            Explore untouched places, feel real Bali.
          </p>
        </div>
        <div className="flex items-center ">
          <Slider></Slider>
        </div>
      </div>
      <div className="md:mb-[15vw] mb-[40vw] reveal">
        <StoryTellComponent></StoryTellComponent>
      </div>
      <div className="md:mb-[15vw] mb-[40vw] reveal">
        <div className="text-center flex-col gap-2 flex w-full items-center justify-center">
          <div className="">
            <h1 className="md:text-4xl text-2xl  font-poppins font-semibold">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="font-poppins text-[#6B7280] md:w-[400px] w-full md:text-base text-sm">
            <p className="">Curious about your hidden journey?</p>
            <p className="">
              Discover all you need to know before exploring Bali.
            </p>
          </div>
        </div>
        <Accordions></Accordions>
      </div>
      <SubFooter></SubFooter>
    </div>
  );
}
