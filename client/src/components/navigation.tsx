import { useState } from "react";
import { Menu, X, Instagram, Mail } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-lg font-light tracking-wider">
            <a href="#home" className="hover:opacity-70 transition-opacity">
              THE ELEMENTS ART
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#gallery" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
              Gallery
            </a>
            <a href="#contact" className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
              Contact
            </a>
            <div className="flex items-center space-x-4 ml-6">
              <a 
                href="https://instagram.com/theelements.art" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:theelementsart@gmail.com"
                className="hover:opacity-70 transition-opacity"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:opacity-70 transition-opacity"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#gallery" 
                className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href="https://instagram.com/theelements.art" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:theelementsart@gmail.com"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
