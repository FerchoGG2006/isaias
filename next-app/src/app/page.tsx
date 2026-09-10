import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="min-h-screen bg-[#0C0D10] text-[#F4F1EA] selection:bg-[#C8A96E] selection:text-[#0C0D10]">
        {/* 01 · HERO EDITORIAL */}
        <HeroSection />

        {/* 02 · CATÁLOGO DE COLECCIÓN */}
        <CatalogSection />

        {/* 03 · TALLER & PRODUCCIÓN (VIDEO HD + BORDADO WILCOM) */}
        <AboutSection />

        {/* 04 · ASESORÍA Y COTIZACIÓN */}
        <ContactSection />
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
