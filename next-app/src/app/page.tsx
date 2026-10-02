import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { AboutSection } from '@/components/sections/AboutSection';
// import { SuccessStoriesSection } from '@/components/sections/SuccessStoriesSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="min-h-screen bg-[#FFFFFF] text-[#0F172A] selection:bg-[#00AFEF] selection:text-[#FFFFFF]">
        {/* 01 · HERO EDITORIAL (CTA & PROMESA ABOVE THE FOLD) */}
        <HeroSection />

        {/* 02 · CATÁLOGO DE COLECCIÓN */}
        <CatalogSection />

        {/* 03 · TALLER & PRODUCCIÓN TEXTIL (VIDEO & WILCOM) */}
        <AboutSection />

        {/* 04 · PRUEBA SOCIAL & CASOS DE ÉXITO (Preservado en código, oculto del landing) */}
        {/* <SuccessStoriesSection /> */}

        {/* 05 · PREGUNTAS FRECUENTES (DERRIBO DE OBJECIONES) */}
        <FaqSection />

        {/* 06 · ASESORÍA Y COTIZACIÓN FORMAL */}
        <ContactSection />
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
