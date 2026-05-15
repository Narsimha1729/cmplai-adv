import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import VisionPillars from "@/components/VisionPillars.jsx";
import Stats from "@/components/Stats.jsx";
import Services from "@/components/Services.jsx";
import ProductFeatures from "@/components/ProductFeatures.jsx";
import WhatSetsUsApart from "@/components/WhatSetsUsApart.jsx";
import Chooseus from "@/components/Chooseus.jsx";
import ChallengesWeAddress from "@/components/Challenges.jsx";
import OurJourney from "@/components/OurJourney.jsx";
import PartnersScroll from "@/components/PartnersScroll.jsx";
import AreYouReady from "@/components/AreYouReady.jsx";
import AboutUs from "@/components/AboutUs.jsx";
import Team from "@/components/Team.jsx";
import ContactSection from "@/components/ContactSection.jsx";
import Footer from "@/components/Footer.jsx";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VisionPillars />
      <Stats />
      <Services />
      <ProductFeatures />
      <WhatSetsUsApart />
      <Chooseus />
      <ChallengesWeAddress />
      <OurJourney />
      <PartnersScroll />
      <AreYouReady />
      <AboutUs />
      <Team />
      <ContactSection />
      <Footer />
    </>
  );
}

