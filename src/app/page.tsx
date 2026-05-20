'use client';

import { useCallback, useEffect, useState } from 'react';
import CinematicIntro from '@/components/CinematicIntro';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyGCC from '@/components/sections/WhyGCC';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import Footer from '@/components/Footer';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => setShowIntro(false), []);

  // Hard safety escape — intro can never block site for more than 5s
  useEffect(() => {
    const id = setTimeout(() => setShowIntro(false), 5000);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}

      <main>
        <Navbar />
        <Hero />
        <Services />
        <WhyGCC />
        <Testimonials />
        <Team />
        <Footer />
      </main>
    </>
  );
}
