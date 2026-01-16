import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("slug:", slug);

  const data = destinations.find((d) => d.slug === slug);

  if (!data) notFound();

  return (
    <article className=" ">
      <div className="w-full  bg-white p-8 rounded-md">
        <div className="flex flex-row gap-4 items-center">
          <img
            height="800"
            width="800"
            className="rounded-lg w-[50vw] h-[30vw] object-cover"
            src={data.image}
            alt={data.title}
          />
          <div className="flex flex-col gap-4">
            <img
              height="800"
              width="800"
              className="rounded-lg object-cover h-[15vw] w-[15vw]"
              src={data.image}
              alt={data.title}
            />
            <img
              height="800"
              width="800"
              className="rounded-lg object-cover h-[15vw] w-[15vw]"
              src={data.image}
              alt={data.title}
            />
          </div>
        </div>
        <h1 className=" text-2xl font-semibold  font-montserrat">
          {data.title}
        </h1>
        <div className="flex-row flex gap-10 font-poppins font-medium text-md mt-10">
          <p>3days</p>
          <p>Adventure</p>
          <p>1 person/trip</p>
        </div>
      </div>
      <div className="w-full  bg-white p-8 rounded-md mt-5 font-poppins">
        <h2 className="text-xl font-medium">Information</h2>
        <pre className="whitespace-pre-line font-poppins">{data.details}</pre>
      </div>
    </article>
  );
}
