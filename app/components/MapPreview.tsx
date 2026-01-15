// components/MapPreview.tsx
export default function MapPreview({ lat, lng }: { lat: number; lng: number }) {
  return (
    <iframe
      width="100%"
      height="250"
      loading="lazy"
      className="rounded-xl"
      src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
    />
  );
}
