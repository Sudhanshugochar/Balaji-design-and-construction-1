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
        title="Construction Company in Wardha | Best Builders & Architects Maharashtra"
        description="Balaji Design & Construction - #1 construction company in Wardha, Maharashtra. 6+ years building dreams. Residential & commercial construction, architectural design. 5.0★ rating. Free consultation: +91 86248 38652"
        canonical="/"
        keywords="construction company in Wardha, construction company near me, best builders in Wardha, home builders Wardha Maharashtra, house construction Wardha, commercial builders Wardha, building contractors Wardha, residential construction Wardha, architectural design Wardha, turnkey construction services, civil contractors in Wardha, interior design Wardha, project management Wardha"
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
