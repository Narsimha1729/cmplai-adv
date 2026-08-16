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
      className="w-full section-elevated pt-8 pb-20 px-4 overflow-hidden border-y border-white/5"
      id="partners"
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <p className="label-caps mb-4" data-aos="fade-up">
          Recognized & Supported By
        </p>
        <h2 className="heading-lg mb-3" data-aos="fade-up" data-aos-delay="100">
          Trusted Innovation Ecosystem
        </h2>
        <p className="text-body max-w-2xl mx-auto text-sm" data-aos="fade-up" data-aos-delay="200">
          Partners and programs that support our mission
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-24 sm:w-32 marquee-fade-l-alt z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 sm:w-32 marquee-fade-r-alt z-10 pointer-events-none" />

        <div className="flex partners-marquee whitespace-nowrap items-center">
          {track.map((partner, index) => (
            <div
              key={`${partner.src}-${index}`}
              className="flex items-center shrink-0 mx-10 sm:mx-14 gap-4 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                width={180}
                height={64}
                decoding="async"
                className="h-12 sm:h-14 w-auto max-w-[140px] sm:max-w-[160px] object-contain shrink-0 brightness-0 invert"
              />
              <span className="text-zinc-500 text-sm font-medium">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
