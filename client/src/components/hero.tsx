export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        {/* Mystical Keywords */}
        <div className="mystical-text text-gray-600 text-sm md:text-base mb-12 uppercase tracking-wider">
          ETHEREAL . TRANSCENDENT . SUBLIME . INFINITE . VOID . ESSENCE . CONSCIOUSNESS . DIMENSION . FLOW . EMERGENCE
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
          Abstract
          <span className="block font-semibold">Expressions</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Exploring the boundaries between reality and imagination through 
          minimalist compositions that speak to the soul.
        </p>
        
        <a 
          href="#gallery" 
          className="inline-block border-2 border-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
        >
          View Gallery
        </a>
      </div>
    </section>
  );
}
