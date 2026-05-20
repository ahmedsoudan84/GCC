'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CinematicIntro from '@/components/CinematicIntro';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyGCC from '@/components/sections/WhyGCC';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import Footer from '@/components/Footer';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  // Safety escape — never let the intro block the site for more than 5s
  useEffect(() => {
    const id = setTimeout(() => setIntroComplete(true), 5000);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <CinematicIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <main style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 0.6s ease' }}>
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
