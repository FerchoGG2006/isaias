import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { CreateCategoriesSection } from '@/components/sections/CreateCategoriesSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
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
      <main id="top" className="min-h-screen bg-[#070708] text-[#F4F1EA] selection:bg-[#C8A96E] selection:text-[#070708]">
        {/* 01 HERO */}
        <HeroSection />

        {/* 02 THE ATELIER */}
        <MarqueeSection />

        {/* 03 QUÉ QUIERES CREAR */}
        <CreateCategoriesSection />

        {/* 04 THE COLLECTION / 026 */}
        <CatalogSection />

        {/* 05 THE PROCESS OF PRINT */}
        <TechniquesSection />

        {/* 06 FEEL THE MATERIAL */}
        <MaterialExplorer />

        {/* 07 WORK / 026 */}
        <GallerySection />

        {/* 08 MADE IN VALLEDUPAR */}
        <AboutSection />

        {/* 09 FOR TEAMS */}
        <ForTeamsSection />

        {/* 10 FROM IDEA TO PIECE */}
        <ProcessSection />

        {/* 11 CTA FINAL */}
        <ContactSection />
      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}

