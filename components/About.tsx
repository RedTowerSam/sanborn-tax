import Image from "next/image";

export default function About() {
  return (
    <section className="w-full py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden">
              <Image
                src="/images/Mark_Sanborn.webp"
                alt="Mark Sanborn"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-brand-dark mb-6">
              About Mark Sanborn
            </h3>
            <p className="text-lg leading-relaxed">
            Mark Sanborn has been offering expert tax preparation and financial services since 1996. With nearly three decades of experience, Mark specializes in helping individuals and small businesses navigate complex tax regulations. His firm, Sanborn Tax Service, is known for providing personalized tax planning, preparation, and business consulting, leveraging cutting-edge tax software and up-to-date knowledge of current tax laws to deliver accurate, reliable results for clients across Illinois.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

