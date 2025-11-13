const areas = [
  "Individual Income Taxes",
  "Small Business Taxes and Counseling",
  "Rental Income Taxes",
  "Tax Planning",
];

export default function AreasOfExpertise() {
  return (
    <section className="w-full py-20 bg-brand-dark">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brand-light mb-8 text-center">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {areas.map((area, index) => (
            <div key={index} className="text-center">
              <p className="text-brand-light text-xl">{area}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-6 py-3 border border-brand-light text-brand-light rounded-full hover:opacity-90 transition-opacity font-medium text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

