import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import About from "@/components/about";
import Contact from "@/components/contact";
import Lightbox from "@/components/lightbox";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavigation = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black smooth-scroll">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © 2024 The Elements Art. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <Lightbox />
    </div>
  );
}
