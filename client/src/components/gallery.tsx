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

export default function Gallery() {
  const { data: config, isLoading, error } = useQuery({
    queryKey: ["site-content"],
    queryFn: async () => {
      const res = await fetch("/content/config.json");
      if (!res.ok) throw new Error("Failed to load config.json");
      return res.json();
    },
  });

  const artworks: Artwork[] = config?.artworks || [];

  if (isLoading) return <p>Loading gallery...</p>;
  if (error) return <p>Failed to load gallery. Please try again later.</p>;

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="group relative">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="mt-2">
              <h3 className="text-lg font-semibold">{artwork.title}</h3>
              <p className="text-sm text-gray-500">
                {artwork.medium}, {artwork.year}
              </p>
              <p className="text-sm mt-1">{artwork.description}</p>
              {artwork.available ? (
                <p className="text-sm mt-1">Available</p>
              ) : (
                <p className="text-sm mt-1">Sold</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
