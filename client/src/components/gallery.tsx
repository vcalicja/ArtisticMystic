import { useQuery } from "@tanstack/react-query";
import { type Artwork } from "@shared/schema";
import { useState } from "react";

export default function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const { data: config, isLoading, error } = useQuery({
    queryKey: ["site-content"],
    queryFn: async () => {
      const res = await fetch("/content/config.json");
      if (!res.ok) throw new Error("Failed to load config.json");
      return res.json();
    },
  });

  const artworks: Artwork[] = config?.artworks || [];

  if (isLoading) {
    return (
      <section id="gallery" className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Gallery</h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-gray-200"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="gallery" className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Gallery</h2>
            <p className="text-red-600">
              Failed to load gallery. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artworks?.map((artwork) => (
            <div
              key={artwork.id}
              className="gallery-item cursor-pointer"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="bg-gray-100 overflow-hidden">
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-lg">{artwork.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {artwork.medium}, {artwork.year}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {artwork.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 cursor-zoom-out transition-opacity duration-500"
          onClick={() => setSelectedArtwork(null)}
        >
          <button
            onClick={() => setSelectedArtwork(null)}
            className="absolute top-6 right-8 text-white text-4xl font-light hover:opacity-70 transition-opacity duration-300 z-10"
          >
            ×
          </button>

          <div className="relative w-screen h-screen flex items-center justify-center">
            <img
              src={selectedArtwork.imageUrl}
              alt={selectedArtwork.title}
              className="w-full h-full object-contain transform scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-10 left-0 right-0 text-center text-white/80 text-sm tracking-wide">
            {selectedArtwork.title && (
              <p className="font-light">{selectedArtwork.title}</p>
            )}
            {(selectedArtwork.medium || selectedArtwork.year) && (
              <p className="font-extralight text-xs mt-1">
                {selectedArtwork.medium}{" "}
                {selectedArtwork.year && `• ${selectedArtwork.year}`}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
