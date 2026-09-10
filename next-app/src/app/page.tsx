import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { TechniquesSection } from '@/components/sections/TechniquesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ForTeamsSection } from '@/components/sections/ForTeamsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="min-h-screen bg-[#0C0D10] text-[#F4F1EA] selection:bg-[#C8A96E] selection:text-[#0C0D10]">
        {/* 01 · HERO EDITORIAL */}
        <HeroSection />

        {/* 02 · THE COLLECTION (CATÁLOGO GENERAL) */}
        <CatalogSection />

        {/* 03 · TECHNIQUES (PROCESOS TEXTILES) */}
        <TechniquesSection />

        {/* 04 · LOOKBOOK / PROJECTS (PROYECTOS REALIZADOS) */}
        <GallerySection />

        {/* 05 · TALLER & MAQUINARIA INDUSTRIAL (4K HD VIDEO + BORDADO WILCOM) */}
        <AboutSection />

        {/* 06 · FOR TEAMS (PRODUCCIÓN & DOTACIONES EMPRESARIALES) */}
        <ForTeamsSection />

        {/* 07 · FINAL CTA (COTIZACIÓN & ASESORÍA DIRECTA) */}
        <ContactSection />
      </main>
      <Footer />
      <QuoteDrawer />
    </>
  );
}
