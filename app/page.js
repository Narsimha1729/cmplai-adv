import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import ProductFeatures from "@/components/ProductFeatures";
import WhatSetsUsApart from '@/components/WhatSetsUsApart';
import Chooseus from '@/components/Chooseus';
import ChallengesWeAddress from "@/components/Challenges";
import OurJourney from '@/components/OurJourney';
import AreYouReady from "@/components/AreYouReady";
import AboutUs from "@/components/AboutUs";
import Team from "@/components/Team";
import ContactSection from '@/components/ContactSection';
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ProductFeatures />
      <WhatSetsUsApart />
      <Chooseus />
      <ChallengesWeAddress />
      <OurJourney />
      <AreYouReady />
      <AboutUs />
      <Team />
      <ContactSection />
      <Footer />
    </>
  );
}

