export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 px-6 bg-white">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-6">Contact</h2>
        <p className="text-lg mb-4">
          For commissions, inquiries, or exhibitions contact us at:
        </p>
        <div className="space-y-2">
          <p className="text-gray-700">theelementsart@gmail.com</p>
          <p className="text-gray-700">Vienna, Austria</p>
          <p className="text-gray-700">Instagram: @theelements.art</p>
        </div>
        <div className="mt-6">
          <a
            href="#gallery"
            className="inline-block border-2 border-black bg-transparent text-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
          >
            Back to Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
