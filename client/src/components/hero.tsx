export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/Video Project_1751915436061.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-white">
          The Elements
          <span className="block font-semibold">Art</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
          Abstract art isn't about spoon-feeding you meaning. It's about handing you the keys and stepping back. The space it creates invites you to decide what it means, what it feels like. That's where the art truly lives.
        </p>
        
        <p className="text-base text-gray-200">
          Vienna, Austria
        </p>
      </div>
    </section>
  );
}
