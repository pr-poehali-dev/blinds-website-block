import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import WorksGallery from '@/components/WorksGallery';
import GalleryReviewsSection from '@/components/GalleryReviewsSection';
import CtaSection from '@/components/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F8] font-sans text-slate-900">
      <HeroSection />
      <WorksGallery />
      <WhyUsSection />
      <GalleryReviewsSection />
      <CtaSection />
    </div>
  );
};

export default Index;
