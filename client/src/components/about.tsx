export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">About</h2>
          <div className="w-16 h-px bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Artist's minimalist studio space"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              My work explores the intersection of consciousness and form, 
              creating visual meditations that transcend the boundaries of 
              traditional representation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through minimalist compositions and monochromatic palettes, 
              I seek to distill emotion and experience into their purest 
              visual essence. Each piece is an invitation to contemplation, 
              a doorway to inner dimensions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Based in the quiet spaces between thoughts, my studio practice 
              embraces the philosophy of less as more, finding infinite 
              possibilities within constraint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
