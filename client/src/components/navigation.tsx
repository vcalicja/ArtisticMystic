import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 100) {
          // Show navbar when scrolled down past 100px
          setIsVisible(true);
        } else {
          // Hide navbar when at top
          setIsVisible(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0 bg-white bg-opacity-95 backdrop-blur-sm' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className={`text-lg font-light tracking-wider ${isVisible ? 'text-black' : 'text-white'}`}>
            <a href="#home" className="hover:opacity-70 transition-opacity">
              THE ELEMENTS ART
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#gallery" className={`text-sm uppercase tracking-wider hover:opacity-70 transition-opacity ${isVisible ? 'text-black' : 'text-white'}`}>
              Gallery
            </a>
            <a href="#contact" className={`text-sm uppercase tracking-wider hover:opacity-70 transition-opacity ${isVisible ? 'text-black' : 'text-white'}`}>
              Contact
            </a>
            <a 
              href="https://instagram.com/theelements.art" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:opacity-70 transition-opacity ${isVisible ? 'text-black' : 'text-white'}`}
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`hover:opacity-70 transition-opacity ${isVisible ? 'text-black' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t border-opacity-20 pt-4 ${isVisible ? 'border-black' : 'border-white'}`}>
            <div className="flex flex-col space-y-4">
              <a 
                href="#gallery" 
                className={`text-sm uppercase tracking-wider hover:opacity-70 transition-opacity ${isVisible ? 'text-black' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className={`text-sm uppercase tracking-wider hover:opacity-70 transition-opacity ${isVisible ? 'text-black' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href="https://instagram.com/theelements.art" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`hover:opacity-70 transition-opacity ${isVisible ? 'text-black' : 'text-white'}`}
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
