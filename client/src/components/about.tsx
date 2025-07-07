export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Philosophy</h2>
          <div className="w-16 h-px bg-black mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          <div className="text-center">
            <p className="text-lg text-gray-500 mb-8">Vienna, Austria</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Space</h3>
                <p className="text-gray-600 leading-relaxed">
                  Space is where everything begins. In art, it opens the mind, offering room for new vision.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Balance</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <em>Unforced equilibrium</em>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Balance isn't something to strive for, it's something to notice. It's present in nature, in the way things just are. My work plays with this sense of balance - not through symmetry, but through a feeling that everything has its place.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Freedom in Openness</h3>
                <p className="text-gray-600 leading-relaxed">
                  True freedom emerges from creating space—both physically and mentally—for authentic expression to unfold naturally.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Simplicity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Simplicity is an aesthetic choice and a way of seeing. When we strip things back to their essence, we find clarity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Presence</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <em>The art of being</em>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Presence is about being fully in the moment, experiencing life as it unfolds. In art, this translates to capturing the essence of the now through forms and colors that evoke immediacy and reality. It's less about creating a detailed representation and more about embodying the feeling of being right here, right now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
