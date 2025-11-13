import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-6">
              Sanborn Tax Service
            </h1>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
              Sanborn Tax Service has been providing expert guidance in navigating the complexities of the tax code since 1996. Our team utilizes state-of-the-art tax software, ensuring compliance with the latest updates in tax law. All tax returns are meticulously prepared and electronically filed directly from our office.
              </p>
              <p>
              We proudly serve clients across Illinois, specializing in both individual and small business tax preparation. In addition, we offer comprehensive tax planning services and small business consulting to help our clients achieve long-term financial success.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-brand-dark text-brand-light rounded-full hover:opacity-90 transition-opacity font-medium text-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full h-auto aspect-video overflow-hidden">
              <Image
                src="/images/header-1.webp"
                alt="Sanborn Tax Service"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

