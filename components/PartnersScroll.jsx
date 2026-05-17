const partners = [
  { src: "/partners/iith.jpg", alt: "IIT Hyderabad", name: "IIT Hyderabad" },
  { src: "/partners/iitmic.jpg", alt: "IITMIC", name: "IITMIC" },
  { src: "/partners/itic.png", alt: "iTIC", name: "iTIC" },
  { src: "/partners/ust.png", alt: "UST", name: "UST" },
  { src: "/partners/amex.png", alt: "Amex", name: "Amex" },
];

export default function PartnersScroll() {
  const track = [...partners, ...partners];

  return (
    <section
      className="w-full bg-[#fafefe] pt-4 pb-16 sm:pb-20 px-4 overflow-hidden"
      id="partners"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p
          className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-4"
          data-aos="fade-up"
        >
          Recognized & Supported By
        </p>
        <h2
          className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Trusted Innovation Ecosystem
        </h2>
        <p
          className="text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Partners and programs that support our mission
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#fafefe] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#fafefe] to-transparent z-10 pointer-events-none" />

        <div className="flex partners-marquee whitespace-nowrap items-center">
          {track.map((partner, index) => (
            <div
              key={`${partner.src}-${index}`}
              className="flex items-center shrink-0 mx-10 sm:mx-12 gap-3 sm:gap-4 whitespace-nowrap"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                width={180}
                height={64}
                decoding="async"
                className="h-16 max-h-[64px] w-auto max-w-[120px] sm:max-w-[180px] object-contain shrink-0"
              />
              <span className="text-gray-600 text-sm sm:text-base font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
