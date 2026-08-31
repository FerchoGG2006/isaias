import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { FeaturedPieceSection } from '@/components/sections/FeaturedPieceSection';
import { TechniquesSection } from '@/components/sections/TechniquesSection';
import { MaterialExplorer } from '@/components/sections/MaterialExplorer';
import { GallerySection } from '@/components/sections/GallerySection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ForTeamsSection } from '@/components/sections/ForTeamsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="min-h-screen bg-[#12151C] text-[#FFFFFF] selection:bg-[#3B82F6] selection:text-[#FFFFFF]">
        {/* 01 · HERO EDITORIAL */}
        <HeroSection />

        {/* 02 · MANIFIESTO DE ESTUDIO */}
        <ManifestoSection />

        {/* 03 · THE COLLECTION (LOOKBOOK) */}
        <CatalogSection />

        {/* 04 · FEATURED PIECE (SILUETA PROTAGONISTA) */}
        <FeaturedPieceSection />

        {/* 05 · TECHNIQUES (PROCESOS TEXTILES) */}
        <TechniquesSection />

        {/* 06 · MATERIALS (FEEL THE MATERIAL 10X) */}
        <MaterialExplorer />

        {/* 07 · LOOKBOOK / PROJECTS (ARCHIVO VISUAL) */}
        <GallerySection />

        {/* 08 · ATELIER (MADE IN VALLEDUPAR) */}
        <AboutSection />

        {/* 09 · FOR TEAMS (PRODUCCIÓN EMPRESARIAL) */}
        <ForTeamsSection />

        {/* 10 · PROCESS (METODOLOGÍA NARRATIVA) */}
        <ProcessSection />

        {/* 11 · FINAL CTA (¿QUÉ VAMOS A CREAR?) */}
        <ContactSection />
      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}



