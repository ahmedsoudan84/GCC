import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyGCC from '@/components/sections/WhyGCC';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyGCC />
      <Testimonials />
      <Team />
      <Footer />
    </main>
  );
}
