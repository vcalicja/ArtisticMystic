import { useQuery } from "@tanstack/react-query";
import { type Artwork } from "@shared/schema";
import { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { data: config, isLoading, error } = useQuery({
    queryKey: ["site-content"],
    queryFn: async () => {
      const res = await fetch("/content/config.json");
      if (!res.ok) throw new Error("Failed to load config.json");
      return res.json();
    },
  });

  const artworks: Artwork[] = config?.artworks || [];

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex(
          selectedIndex === artworks.length - 1 ? 0 : selectedIndex + 1
        );
      if (e.key === "ArrowLeft")
        setSelectedIndex(
          selectedIndex === 0 ? artworks.length - 1 : selectedIndex - 1
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, artworks.length]);

  if (isLoading) {
    return (
      <section id="gallery" className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-light mb-4">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="gallery" className="py-20 md:py-32 px-6 text-center text-red-600">
        Failed to load gallery. Please try again later.
      </section>
    );
  }

  const selectedArtwork =
    selectedIndex !== null ? artworks[selectedIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="bg-gray-100 overflow-hidden">
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-lg">{artwork.title}</h3>
                <p className="text-gray-600 text-sm">
                  {artwork.medium}, {artwork.year}
                </p>
                {artwork.description && (
                  <p className="text-gray-500 text-sm mt-1">{artwork.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 transition-opacity duration-500"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-8 text-white text-4xl font-light hover:opacity-70 transition-opacity duration-300"
          >
            ×
          </button>

          {/* Arrows */}
          <button
            className="absolute left-6 text-white text-5xl font-thin hover:opacity-70 select-none"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                selectedIndex === 0 ? artworks.length - 1 : selectedIndex - 1
              );
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-6 text-white text-5xl font-thin hover:opacity-70 select-none"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                selectedIndex === artworks.length - 1 ? 0 : selectedIndex + 1
              );
            }}
          >
            ›
          </button>

          {/* Zoomable Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <Zoom>
              <img
                src={selectedArtwork.imageUrl}
                alt={selectedArtwork.title}
                className="max-w-[95vw] max-h-[90vh] object-contain shadow-2xl"
              />
            </Zoom>
          </div>

          {/* Caption */}
          <div className="absolute bottom-12 text-center text-white max-w-[80vw]">
            <h3 className="text-xl font-light">{selectedArtwork.title}</h3>
            <p className="text-sm text-gray-300 mt-1">
              {selectedArtwork.medium}
              {selectedArtwork.year && `, ${selectedArtwork.year}`}
            </p>
            {selectedArtwork.description && (
              <p className="text-xs text-gray-400 mt-2">{selectedArtwork.description}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
