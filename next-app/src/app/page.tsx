import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { CreateCategoriesSection } from '@/components/sections/CreateCategoriesSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { MaterialExplorer } from '@/components/sections/MaterialExplorer';
import { TechniquesSection } from '@/components/sections/TechniquesSection';
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
        {/* INICIO */}
        <HeroSection />

        {/* CINTA DE OFICIO & MANIFIESTO */}
        <MarqueeSection />

        {/* 01 · LÍNEAS DE CREACIÓN */}
        <CreateCategoriesSection />

        {/* 02 · CATÁLOGO & SILUETAS */}
        <CatalogSection />

        {/* 03 · MATERIA PRIMA (10X) */}
        <MaterialExplorer />

        {/* 04 · FIJACIÓN INDUSTRIAL & TÉCNICAS */}
        <TechniquesSection />

        {/* 05 · ARCHIVO DE PROYECTOS */}
        <GallerySection />

        {/* 06 · RAÍZ & TALLER EN VALLEDUPAR */}
        <AboutSection />

        {/* 07 · PRODUCCIÓN EN VOLUMEN & EMPRESAS */}
        <ForTeamsSection />

        {/* 08 · METODOLOGÍA & FLUJO */}
        <ProcessSection />

        {/* 09 · CONTACTO & COTIZACIÓN */}
        <ContactSection />
      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}


