"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import SectorsSection from "@/components/sections/SectorsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import OfficesSection from "@/components/sections/OfficesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import AIAssistant from "@/components/ui/AIAssistant";

const CinematicIntro = dynamic(
  () => import("@/components/intro/CinematicIntro"),
  { ssr: false }
);

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* Cinematic intro overlay */}
      {!introComplete && (
        <CinematicIntro onComplete={() => setIntroComplete(true)} />
      )}

      {/* Main site */}
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <SectorsSection />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <ClientsSection />
        <CertificationsSection />
        <OfficesSection />
        <ContactSection />
      </main>
      <Footer />

      {/* AI Project Assistant */}
      <AIAssistant />
    </>
  );
}
