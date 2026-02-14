import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import SEOHead from '@/components/SEOHead';
import { LocalBusinessSchema, OrganizationSchema, WebsiteSchema } from '@/components/StructuredData';

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Balaji Design & Construction - Best Builders & Architects"
        description="Balaji Design & Construction - Top-rated construction company with 6+ years of experience in residential & commercial construction. 5.0★ Google rating. Call +91 86248 38652."
        canonical="/"
      />
      <LocalBusinessSchema />
      <OrganizationSchema />
      <WebsiteSchema />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
