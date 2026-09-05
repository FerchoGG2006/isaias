import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { TechniquesSection } from '@/components/sections/TechniquesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ForTeamsSection } from '@/components/sections/ForTeamsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="min-h-screen bg-[#12151C] text-[#FFFFFF] selection:bg-[#3B82F6] selection:text-[#FFFFFF]">
        {/* 01 · HERO EDITORIAL */}
        <HeroSection />

        {/* 02 · THE COLLECTION (CATÁLOGO GENERAL) */}
        <CatalogSection />

        {/* 03 · TECHNIQUES (PROCESOS TEXTILES) */}
        <TechniquesSection />

        {/* 04 · LOOKBOOK / PROJECTS (PROYECTOS REALIZADOS) */}
        <GallerySection />

        {/* 06 · TALLER (HECHO EN VALLEDUPAR) */}
        <AboutSection />

        {/* 07 · FOR TEAMS (PRODUCCIÓN EMPRESARIAL) */}
        <ForTeamsSection />

        {/* 08 · PROCESS (CÓMO TRABAJAMOS) */}
        <ProcessSection />

        {/* 09 · FINAL CTA (¿QUÉ VAMOS A CREAR?) */}
        <ContactSection />
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
