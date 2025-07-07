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
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
          Abstract art comes from what it inspires within you- your feelings, thoughts, and personal response. The space between the artwork and your experience is where the art truly lives.
        </p>
      </div>
    </section>
  );
}
