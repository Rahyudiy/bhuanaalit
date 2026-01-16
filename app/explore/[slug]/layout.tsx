import { ContactCard } from "@/app/components/ContactCard";
import MapPreview from "@/app/components/MapPreview";
import { RatingCard } from "@/app/components/RatingCard";
import { Slider } from "@/app/components/Slider";
import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = destinations.find((d) => d.slug === slug);
  if (!data) notFound();

  return (
    <div className="">
      <section className="grid grid-cols-1 lg:grid-cols-[8fr_3fr] gap-8 mt-10">
        <main>{children}</main>

        <aside className="space-y-6">
          <ContactCard></ContactCard>
          <RatingCard></RatingCard>
          <MapPreview lat={data.lat} lng={data.lng} />
        </aside>
      </section>
      <div className="my-[10vw] flex flex-col gap-2">
        <div className="mb-[2vw]">
          <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between">
            <h1 className="font-poppins md:text-4xl text-2xl font-semibold">
              More like this
            </h1>
          </div>
          <p className="font-poppins text-[#6B7280] text-base">
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
