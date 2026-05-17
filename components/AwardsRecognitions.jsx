const awards = [
  {
    src: "/awards/meity.png",
    alt: "MeitY GenAI Grand Challenge — Cmplai presentation",
    title: "India's Top 10 GenAI Startups",
    description:
      "Cmplai was recognized among India's top 10 GenAI startups at an event organized by MeitY, IIT Bombay, and IIT Hyderabad in 2024.",
  },
  {
    src: "/awards/vsp-award.png",
    alt: "VS Prasad Best Thesis Award at IITH",
    title: "VS Prasad Best Thesis Award",
    description:
      "Received the VS Prasad Best Thesis and Academic Excellence Award at IIT Hyderabad (IITH) during the 17th Foundation Day Excellence Awards 2025.",
  },
  {
    src: "/awards/ust-pharma.png",
    alt: "UST Pharma 4.0 Pitch to Win",
    title: "Pharma 4.0 — Pitch to Win",
    description:
      "Winner at the Pharma 4.0 event organized by UST, IITMIC, and Pfizer — celebrating innovation in pharmaceutical compliance and automation.",
  },
];

export default function AwardsRecognitions() {
  const track = [...awards, ...awards];

  return (
    <section
      id="awards"
      className="w-full bg-gradient-to-b from-[#f1fcfc] to-white py-24 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-14">
        <p
          className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-4"
          data-aos="fade-up"
        >
          Milestones
        </p>
        <h2
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Awards & Recognitions
        </h2>
        <p
          className="text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Honored by national institutions and industry leaders for innovation in
          compliance automation
        </p>
        <div className="mt-4 h-1 w-20 bg-teal-400 mx-auto rounded-full" />
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#f1fcfc] via-[#f1fcfc]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

        <div className="flex awards-marquee items-stretch gap-8 sm:gap-10 py-2">
          {track.map((award, index) => (
            <article
              key={`${award.src}-${index}`}
              className="flex shrink-0 w-[min(85vw,380px)] sm:w-[420px] flex-col rounded-2xl border border-teal-100 bg-white shadow-md hover:shadow-xl hover:border-teal-300/70 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-52 sm:h-56 w-full bg-gray-100 overflow-hidden">
                <img
                  src={award.src}
                  alt={award.alt}
                  width={420}
                  height={224}
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-teal-700 mb-2 leading-snug">
                  {award.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed whitespace-normal">
                  {award.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
