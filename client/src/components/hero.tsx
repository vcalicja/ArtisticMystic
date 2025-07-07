export default function Hero() {
  return (
    <>
      {/* Video Section */}
      <section id="home" className="relative h-screen overflow-hidden">
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
        </div>
      </section>
      
      {/* Text Section Below Video */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <p className="text-lg md:text-xl leading-relaxed font-light text-gray-800 tracking-wide">
            Abstract art comes from what it inspires within you- your feelings, thoughts, and personal response. The space between the artwork and your experience is where the art truly lives.
          </p>
        </div>
      </section>
    </>
  );
}
