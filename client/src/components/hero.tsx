export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        {/* Philosophy Keywords */}
        <div className="mystical-text text-gray-600 text-sm md:text-base mb-12 uppercase tracking-wider">
          SPACE . BALANCE . FREEDOM . SIMPLICITY . PRESENCE . ESSENCE . CLARITY . BEING . MOMENT . OPENNESS
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
          The Elements
          <span className="block font-semibold">Art</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Where space opens the mind and simplicity reveals clarity.
        </p>
        
        <p className="text-base text-gray-500 mb-12">
          Vienna, Austria
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
