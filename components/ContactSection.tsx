import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Sanborn Tax Service
            </h2>
            <div className="space-y-3 text-lg">
              <p>805 W. Jackson St.<br />Suite 303<br />Morton, IL 61550</p>
              <p className="mt-4">
                <a href="tel:3098392676" className="font-bold hover:underline">(309) 839-2676</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-brand-dark mb-6">
              Get in Touch
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

