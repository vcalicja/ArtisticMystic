export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-white">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-8">Contact</h2>
        <p className="mb-8 text-lg">For commissions, inquiries, or exhibitions</p>

        <form 
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-6 text-left"
        >
          {/* Required hidden inputs for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Subject</label>
            <input 
              type="text" 
              name="subject" 
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea 
              name="message" 
              rows={6} 
              required 
              className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-vertical"
            />
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="px-8 py-3 border-2 border-black bg-transparent text-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Optional: Contact info */}
        <div className="mt-12 space-y-2 text-gray-600 text-sm text-center">
          <p>Email: theelementsart@gmail.com</p>
          <p>Location: Vienna, Austria</p>
        </div>
      </div>
    </section>
  );
}
