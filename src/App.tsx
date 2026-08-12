import { useEffect, useState } from 'react';
import { LangProvider } from '@/hooks/useLang';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Tiers from '@/components/Tiers';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BootLoader from '@/components/BootLoader';

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    document.body.style.overflow = booting ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [booting]);

  return (
    <LangProvider>
      <BootLoader onDone={() => setBooting(false)} />
      <div
        className={`relative min-h-screen overflow-x-hidden transition-opacity duration-700 ${
          booting ? 'pointer-events-none invisible opacity-0' : 'opacity-100'
        }`}
      >
        <Background />
        <Navbar />
        <main>
          <Hero />
          <Tiers />
          <Process />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
