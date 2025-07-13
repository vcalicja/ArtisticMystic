import React from "react";
import { useQuery } from "@tanstack/react-query";

type Artwork = {
  id: number;
  title: string;
  medium: string;
  year: number;
  description: string;
  imageUrl: string;
  available: boolean;
  featured: boolean;
};

type SiteContent = {
  artworks: Artwork[];
};

export default function Gallery() {
  const { data: config, isLoading, error } = useQuery<SiteContent>({
    queryKey: ["site-content"],
    queryFn: async () => {
      const res = await fetch("/content/config.json");
      if (!res.ok) {
        throw new Error("Failed to load config.json");
      }
      return res.json();
    },
  });

  const artworks = config?.artworks || [];

  if (isLoading) return <p>Loading gallery...</p>;
  if (error) return <p>Failed to load gallery. Please try again later.</p>;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {artworks.map((art) => (
        <div
          key={art.id}
          className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
        >
          <img
            src={art.imageUrl}
            alt={art.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">{art.title}</h3>
            <p className="text-sm text-gray-600">
              {art.medium} • {art.year}
            </p>
            <p className="text-sm mt-2">{art.description}</p>
            {art.available ? (
              <p className="mt-2 text-green-600 font-medium">Available</p>
            ) : (
              <p className="mt-2 text-red-500 font-medium">Sold</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
