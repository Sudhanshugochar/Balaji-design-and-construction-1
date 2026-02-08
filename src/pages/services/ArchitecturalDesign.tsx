import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema } from '@/components/StructuredData';
import heroImage from '@/assets/service-architectural.png';
import { Link } from 'react-router-dom';

const ArchitecturalDesign = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Architectural Design Wardha — Balaji Design & Construction"
        description="Architectural design services in Wardha and Vidarbha. Concept design, 3D visualization and space planning by experienced architects. Book a consultation."
        canonical="/services/architectural-design"
      />

      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Architectural Design', url: '/services/architectural-design' }]} />
      <ServiceSchema serviceName="Architectural Design" serviceDescription="Conceptual and detailed architectural design services in Wardha and Vidarbha." />
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">Architectural Design</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Architectural Design in Wardha</h1>
            <p className="text-muted-foreground text-lg mb-6">Creative, functional architecture for residences and commercial projects across Wardha and Vidarbha.</p>
            <img src={heroImage} alt="Architectural Design Wardha" className="w-full rounded-lg shadow-lg mb-6 object-contain" />

            <h2 className="text-2xl font-semibold mb-3">Design Services</h2>
            <ul className="list-disc pl-5 mb-6 text-muted-foreground">
              <li>Concept sketches and schematic design</li>
              <li>3D modeling, visualization and renderings</li>
              <li>Working drawings and permit documentation</li>
              <li>Consultation for sustainable and cost-effective design</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Local knowledge</h3>
            <p className="mb-6 text-muted-foreground">Our design team blends modern aesthetics with local climate and materials for optimal results in Vidarbha.</p>

            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary px-6 py-3 bg-primary text-primary-foreground rounded">Book Consultation</Link>
              <Link to="/services" className="px-6 py-3 border border-border rounded">All Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ArchitecturalDesign;
