import { ContactCard } from "@/app/components/ContactCard";
import MapPreview from "@/app/components/MapPreview";
import { RatingCard } from "@/app/components/RatingCard";
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
    <section className="grid grid-cols-1 lg:grid-cols-[8fr_3fr] gap-8 mt-10">
      <main>{children}</main>

      <aside className="space-y-6">
        <ContactCard></ContactCard>
        <RatingCard></RatingCard>
        <MapPreview lat={data.lat} lng={data.lng} />
      </aside>
    </section>
  );
}
