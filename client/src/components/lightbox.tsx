import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description: string;
}

export default function Lightbox({ isOpen, onClose, imageUrl, title, description }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-95 lightbox z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity z-10"
        >
          <X size={32} />
        </button>
        <img 
          src={imageUrl} 
          alt={title}
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-sm opacity-75 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
