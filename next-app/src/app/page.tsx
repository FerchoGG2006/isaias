import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { MaterialExplorer } from '@/components/sections/MaterialExplorer';
import { ProductStage } from '@/components/sections/ProductStage';
import { EditorialGallery } from '@/components/sections/EditorialGallery';
import { QuoteSection } from '@/components/sections/QuoteSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <MaterialExplorer />
        <ProductStage />
        <EditorialGallery />
        <QuoteSection />
      </main>
    </>
  );
}
