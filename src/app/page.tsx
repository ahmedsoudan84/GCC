import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import SectorsSection from "@/components/sections/SectorsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import AboutSection from "@/components/sections/AboutSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import OfficesSection from "@/components/sections/OfficesSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <SectorsSection />
        <ClientsSection />
        <AboutSection />
        <CertificationsSection />
        <OfficesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
