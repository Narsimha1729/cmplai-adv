import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection.jsx";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronRight,
  ClipboardCheck,
  ExternalLink,
  FileCheck2,
  GitPullRequestArrow,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const logos = [
  { name: "IIT Hyderabad", src: "/partners/iith.jpg" },
  { name: "IITM Incubation Cell", src: "/partners/iitmic.jpg" },
  { name: "iTIC", src: "/partners/itic.png" },
  { name: "UST", src: "/partners/ust.png" },
  { name: "American Express", src: "/partners/amex.png" },
];

const capabilities = [
  {
    number: "01",
    icon: Sparkles,
    title: "AI-native authoring",
    text: "Draft compliant SOPs, batch records, and quality documents in the context of your plant and its procedures.",
    features: ["Controlled SOP and batch-record templates", "Context-aware drafting and rewriting", "Structured content ready for review"],
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Continuous validation",
    text: "Check each document against GMP, ISO, and FDA requirements before it reaches your quality team.",
    features: ["Requirement-to-content mapping", "Automated gap and risk detection", "Inline remediation recommendations"],
  },
  {
    number: "03",
    icon: GitPullRequestArrow,
    title: "Controlled workflows",
    text: "Move work through review, approval, versioning, and training with a complete, traceable audit trail.",
    features: ["Configurable review and approval stages", "Version history and accountable ownership", "Role-based tasks and notifications"],
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Always audit-ready",
    text: "Keep evidence, decisions, and supporting records connected so teams can respond to inspections without a document scramble.",
    features: ["Inspection-ready evidence trails", "Fast controlled-record retrieval", "Complete activity and decision history"],
  },
  {
    number: "05",
    icon: BookOpenCheck,
    title: "Pharma intelligence",
    text: "Give every team access to contextual guidance grounded in your procedures and relevant global regulatory frameworks.",
    features: ["GMP, ISO, and FDA-aware assistance", "Answers grounded in approved knowledge", "Regulatory change impact visibility"],
  },
  {
    number: "06",
    icon: SearchCheck,
    title: "Enterprise governance",
    text: "Adopt AI with the controls required for validated environments, sensitive data, and accountable human decision-making.",
    features: ["Permission-aware private knowledge", "Traceable AI actions and sources", "Human approval at critical controls"],
  },
];

const awards = [
  {
    title: "India's Top 10 GenAI Startups",
    detail: "Recognized by MeitY, IIT Bombay, and IIT Hyderabad.",
    image: "/awards/meity.png",
    year: "2024",
  },
  {
    title: "VS Prasad Best Thesis Award",
    detail: "Academic Excellence Award at IIT Hyderabad.",
    image: "/awards/vsp-award.png",
    year: "2025",
  },
  {
    title: "Pharma 4.0 — Pitch to Win",
    detail: "Second runner-up at the UST, IITMIC, and Pfizer challenge.",
    image: "/awards/ust-pharma.png",
    year: "2025",
  },
];

export default function Home() {
  return (
    <main className="cmplai-site">
      <header className="site-nav">
        <Link className="brand" href="/" aria-label="Cmplai home">
          <Image className="brand-logo" src="/cmplai-logo.png" alt="Cmplai" width={186} height={60} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#architecture">Architecture</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-actions">
          <a className="nav-cta" href="#contact">Book a demo <ArrowRight size={15} /></a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu"><Menu size={20} /></summary>
            <div>
              <a href="#platform">Platform</a>
              <a href="#solutions">Solutions</a>
              <a href="#architecture">Architecture</a>
              <a href="#about">About</a>
              <a href="#contact">Book a demo</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> Enterprise AI for regulated operations</div>
          <h1>Compliance that<br /><em>moves at the speed</em><br />of your operations.</h1>
          <p className="hero-description">
            Cmplai is the AI-native compliance workspace for pharmaceutical and manufacturing teams. Create, validate, and control every regulated document in one intelligent system.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">See Cmplai in action <ArrowRight size={17} /></a>
            <a className="text-link" href="#platform">Explore the platform <ChevronRight size={17} /></a>
          </div>
          <div className="hero-proof">
            <div><strong>3 days</strong><span>from draft to review</span></div>
            <div><strong>24 / 7</strong><span>audit readiness</span></div>
            <div><strong>GMP</strong><span>built into every flow</span></div>
          </div>
        </div>
        <div className="hero-product">
          <div className="hero-robot-wrap">
            <Image
              className="hero-robot"
              src="/cmplai-regtech-robot.png"
              alt="Cmplai AI RegTech assistant for pharmaceutical compliance"
              width={916}
              height={1088}
              priority
            />
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Cmplai partners">
        <p>Built with the support of India&apos;s innovation ecosystem</p>
        <div>{logos.map((logo) => (
          <figure key={logo.name}>
            <Image src={logo.src} alt="" width={86} height={44} />
            <figcaption>{logo.name}</figcaption>
          </figure>
        ))}</div>
      </section>

      <section className="statement-section" id="solutions">
        <div className="section-kicker">A new operating system for compliance</div>
        <h2>Less document chasing.<br />More confidence in every decision.</h2>
        <p>Built for the realities of regulated teams—not retrofitted for them. Cmplai gives quality, operations, and regulatory teams a shared, intelligent source of truth.</p>
        <div className="capability-grid">
          {capabilities.map(({ number, icon: Icon, title, text, features }) => (
            <article key={number} className="capability">
              <div><span>{number}</span><Icon size={21} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {features.map((feature) => (
                  <li key={feature}><Check size={13} /> {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" id="platform">
        <div className="dark-grid" aria-hidden="true" />
        <div className="product-heading">
          <div className="section-kicker light">One system. Every controlled record.</div>
          <h2>From first draft<br />to audit-ready.</h2>
          <p>Bring content, context, and controls together in a workspace your teams will actually want to use.</p>
          <a className="button-light" href="#contact">Request a walkthrough <ArrowRight size={17} /></a>
        </div>
        <div className="product-detail-window">
          <div className="window-bar dark-window-bar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>app.cmplai.com / documents / SOP-042</span>
            <b><i /> AI active</b>
          </div>
          <Image
            src="/platform/editor.png"
            alt="Detailed Cmplai SOP editor with workflow controls, document outline, and AI assistant"
            width={1024}
            height={682}
          />
        </div>
      </section>

      <section className="architecture-section" id="architecture">
        <div className="architecture-copy">
          <div className="section-kicker">Designed for the enterprise</div>
          <h2>Intelligence you can govern.</h2>
          <p>Cmplai puts your policies, procedures, and regulatory knowledge at the center of every AI-assisted decision—so your team stays in control.</p>
          <ul>
            <li><Check size={16} /> Private, permission-aware knowledge layer</li>
            <li><Check size={16} /> Complete traceability for every AI action</li>
            <li><Check size={16} /> Built for validated, compliant environments</li>
          </ul>
        </div>
        <div className="architecture-diagram">
          <div className="architecture-label">CMPLAI INTELLIGENCE LAYER</div>
          <div className="diagram-flow">
            <div className="diagram-source"><Network size={20} /><span>Your controlled knowledge<br /><b>SOPs · Policies · Regulations</b></span></div>
            <div className="flow-line"><i /><i /><i /></div>
            <div className="diagram-core"><span>AI</span><b>Compliance<br />engine</b><small>contextual · traceable · secure</small></div>
            <div className="flow-line"><i /><i /><i /></div>
            <div className="diagram-output"><FileCheck2 size={20} /><span>Verified output<br /><b>Documents · Insights · Decisions</b></span></div>
          </div>
          <div className="diagram-footer"><span><i /> Encrypted data boundary</span><span><i /> Human approval controls</span><span><i /> Audit trail by default</span></div>
        </div>
      </section>

      <section className="metrics-section">
        <div><strong>100,000+</strong><span>hours spent on documentation<br />at a typical plant, every year</span></div>
        <div><strong>3 months → 3 days</strong><span>faster critical workflow<br />turnaround with Cmplai</span></div>
        <div><strong>Always on</strong><span>continuous compliance context<br />for every team</span></div>
      </section>

      <section className="about-section" id="about">
        <div className="about-visual">
          <Image src="/vision/wbm.png" alt="Cmplai pharmaceutical intelligence and compliance architecture" width={1024} height={683} />
          <div><strong>Built for regulated work</strong><span>Pharma expertise meets enterprise AI</span></div>
        </div>
        <div className="about-copy">
          <div className="section-kicker">About Cmplai</div>
          <h2>Transforming compliance through intelligence.</h2>
          <p>Cmplai was founded to change how pharmaceutical and manufacturing companies handle regulated documentation. We combine deep domain expertise with enterprise AI to reduce the time, cost, and risk behind compliance.</p>
          <p>By automating repetitive work while keeping quality teams in control, we help people focus on safer operations, better decisions, and continuous improvement.</p>
          <div className="about-values">
            <div><strong>Domain-first</strong><span>Designed around real GMP workflows</span></div>
            <div><strong>Human-led AI</strong><span>Assistance with accountable approval</span></div>
          </div>
        </div>
      </section>

      <section className="awards-section" id="awards">
        <div className="section-heading">
          <div className="section-kicker light">Recognition</div>
          <h2>Awarded for moving<br />regulated industries forward.</h2>
          <p>Recognized by leading institutions and industry programs for innovation in compliance automation.</p>
        </div>
        <div className="awards-grid">
          {awards.map((award) => (
            <article className="award-card" key={award.title}>
              <div className="award-image">
                <Image src={award.image} alt={award.title} fill sizes="(max-width: 620px) 100vw, 400px" />
              </div>
              <div className="award-copy">
                <span>{award.year}</span>
                <h3>{award.title}</h3>
                <p>{award.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="award-press-link" href="https://www.thehindubusinessline.com/info-tech/ustin-tie-up-to-promote-start-ups-in-healthcare-life-sciences/article70410263.ece" target="_blank" rel="noreferrer">
          Read our feature in The Hindu BusinessLine <ExternalLink size={14} />
        </a>
        <a className="award-press-link" href="/awards/ust_video.mp4" target="_blank" rel="noreferrer">
          Watch Pitch to Win video highlights <ExternalLink size={14} />
        </a>
      </section>

      <ContactSection />

      <section className="closing-section" id="demo">
        <div className="closing-grid" aria-hidden="true" />
        <div className="section-kicker">Ready when you are</div>
        <h2>Put compliance<br /><em>on your side.</em></h2>
        <p>See how Cmplai can help your team move faster without losing control.</p>
        <a className="button-primary" href="mailto:contact@cmplai.com">Book a demo <ArrowRight size={17} /></a>
      </section>

      <footer id="company">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <Image className="brand-logo" src="/cmplai-logo.png" alt="Cmplai" width={186} height={60} />
            </Link>
            <p>AI-native compliance for pharmaceutical and manufacturing operations.</p>
          </div>
          <div className="footer-links">
            <strong>Explore</strong>
            <a href="#platform">Platform</a><a href="#solutions">Solutions</a>
            <a href="#about">About us</a><a href="#awards">Recognition</a>
          </div>
          <address className="footer-contact">
            <strong>Contact</strong>
            <a href="mailto:admin@cmplai.com"><Mail size={15} /> admin@cmplai.com</a>
            <a href="tel:+916301985408"><Phone size={15} /> +91 63019 85408</a>
            <span><MapPin size={15} /> LN Infosphere TechTransformers Pvt Ltd<br />Hyderabad, India</span>
          </address>
        </div>
        <div className="footer-bottom">
          <small>© 2026 LN Infosphere TechTransformers Pvt Ltd. All rights reserved.</small>
          <div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-of-service">Terms</Link><Link href="/cookie-policy">Cookies</Link></div>
        </div>
      </footer>
    </main>
  );
}
