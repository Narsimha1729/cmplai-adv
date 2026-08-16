const HINDU_BUSINESSLINE_URL =
  "https://www.thehindubusinessline.com/info-tech/ustin-tie-up-to-promote-start-ups-in-healthcare-life-sciences/article70410263.ece";

const awards = [
  {
    id: "meity",
    type: "image",
    src: "/awards/meity.png",
    alt: "MeitY GenAI Grand Challenge — Cmplai presentation",
    title: "India's Top 10 GenAI Startups",
    description:
      "Cmplai was recognized among India's top 10 GenAI startups at an event organized by MeitY, IIT Bombay, and IIT Hyderabad in 2024.",
  },
  {
    id: "vsp",
    type: "image",
    src: "/awards/vsp-award.png",
    alt: "VS Prasad Best Thesis Award at IITH",
    title: "VS Prasad Best Thesis Award",
    description:
      "Received the VS Prasad Best Thesis and Academic Excellence Award at IIT Hyderabad (IITH) during the 17th Foundation Day Excellence Awards 2025.",
  },
  {
    id: "ust-pharma",
    type: "image",
    src: "/awards/ust-pharma.png",
    alt: "UST Pharma 4.0 Pitch to Win",
    title: "Pharma 4.0 — Pitch to Win",
    description:
      "Second runner-up at Pitch to Win: Pharma 4.0 by UST, IITMIC, and Pfizer — with conditional funding support from UST.",
  },
  {
    id: "hindu-businessline",
    type: "article",
    src: "/awards/bl.png",
    alt: "The Hindu BusinessLine coverage of Pitch to Win Pharma 4.0",
    title: "Featured in The Hindu BusinessLine",
    description:
      "LN Infosphere Tech Transformers recognized as second runner-up at the UST–IITMIC Pitch to Win: Pharma 4.0 challenge, with coverage of UST's partnership and startup awards.",
    href: HINDU_BUSINESSLINE_URL,
    linkLabel: "Read article",
  },
  {
    id: "ust-video",
    type: "video",
    src: "/awards/ust_video.mp4",
    poster: "/awards/ust-pharma.png",
    alt: "UST Pitch to Win Pharma 4.0 event video",
    title: "Pitch to Win — Event Highlights",
    description:
      "Highlights from the UST and IITMIC Pharma 4.0 innovation challenge where Cmplai was honored among the top finalists.",
  },
];

function AwardMedia({ award }) {
  if (award.type === "video") {
    return (
      <video
        src={award.src}
        poster={award.poster}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        aria-label={award.alt}
      >
        <track kind="captions" />
      </video>
    );
  }

  return (
    <img
      src={award.src}
      alt={award.alt}
      width={420}
      height={224}
      decoding="async"
      className="h-full w-full object-cover object-center"
    />
  );
}

export default function AwardsRecognitions() {
  const track = [...awards, ...awards];

  return (
    <section
      id="awards"
      className="w-full section-dark py-28 px-4 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto text-center mb-14">
        <p className="label-caps mb-4" data-aos="fade-up">
          Milestones
        </p>
        <h2 className="heading-lg mb-4" data-aos="fade-up" data-aos-delay="100">
          Awards & Recognitions
        </h2>
        <p className="text-body max-w-2xl mx-auto text-sm" data-aos="fade-up" data-aos-delay="200">
          Honored by national institutions and industry leaders for innovation in
          compliance automation
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 marquee-fade-l z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 marquee-fade-r z-10 pointer-events-none" />

        <div className="flex awards-marquee items-stretch gap-8 sm:gap-10 py-2">
          {track.map((award, index) => (
            <article
              key={`${award.id}-${index}`}
              className="flex shrink-0 w-[min(85vw,380px)] sm:w-[420px] flex-col card-dark overflow-hidden"
            >
              <div className="relative h-52 sm:h-56 w-full bg-zinc-900 overflow-hidden">
                <AwardMedia award={award} />
                {award.type === "article" && (
                  <span className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/80 px-3 py-1 text-xs font-medium text-zinc-300">
                    Press
                  </span>
                )}
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                  {award.title}
                </h3>
                <p className="text-body text-sm sm:text-[15px] whitespace-normal flex-1">
                  {award.description}
                </p>
                {award.type === "article" && award.href && (
                  <a
                    href={award.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {award.linkLabel ?? "Read article"} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

