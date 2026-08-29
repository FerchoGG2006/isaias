import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { MaterialExplorer } from '@/components/sections/MaterialExplorer';
import { TechniquesSection } from '@/components/sections/TechniquesSection';
import { ProductStage } from '@/components/sections/ProductStage';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { QuoteDrawer } from '@/components/quote/QuoteDrawer';
import { AdminModal } from '@/components/admin/AdminModal';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <MarqueeSection />
        <MaterialExplorer />
        <TechniquesSection />
        <ProductStage />
        <CatalogSection />
        <GallerySection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <QuoteDrawer />
      <AdminModal />
    </>
  );
}
