import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { InfiniteImageTicker } from '@/components/ui/InfiniteImageTicker';
import { TechniquesSection } from '@/components/sections/TechniquesSection';
import { FullWidthShowcaseBanner } from '@/components/sections/FullWidthShowcaseBanner';
import { GallerySection } from '@/components/sections/GallerySection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { AdminModal } from '@/components/admin/AdminModal';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <MarqueeSection />
        <InfiniteImageTicker />
        <TechniquesSection />
        <FullWidthShowcaseBanner />
        <GallerySection />
        <CatalogSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
      <AdminModal />
    </>
  );
}
