import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema } from '@/components/StructuredData';
import heroImage from '@/assets/service-residential.png';
import { Link } from 'react-router-dom';

const ResidentialConstruction = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Residential Construction Vidarbha — Balaji Design & Construction"
        description="Expert residential construction in Wardha & Vidarbha. Balaji Design & Construction delivers custom homes, villas, and apartments with 6+ years' experience. Free quote."
        canonical="/services/residential-construction"
      />

      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Residential Construction', url: '/services/residential-construction' }]} />
      <ServiceSchema serviceName="Residential Construction" serviceDescription="Custom homes, villas and apartment construction in Wardha and Vidarbha." />
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">Residential Construction</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Residential Construction in Wardha & Vidarbha</h1>
            <p className="text-muted-foreground text-lg mb-6">We design and build durable, beautiful homes across Wardha and Vidarbha — from foundations to finishes.</p>
            <img src={heroImage} alt="Residential Construction Wardha Vidarbha" className="w-full rounded-lg shadow-lg mb-6 object-contain" />

            <h2 className="text-2xl font-semibold mb-3">Our Residential Services</h2>
            <ul className="list-disc pl-5 mb-6 text-muted-foreground">
              <li>Custom homes and villas in Wardha</li>
              <li>Apartments and multi-family residential projects</li>
              <li>Extensions, renovations and finishing works</li>
              <li>Structural, MEP coordination and quality control</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Why choose Balaji in Vidarbha</h3>
            <p className="mb-6 text-muted-foreground">Local expertise, transparent pricing, and 6+ years of delivering on-time projects with trusted materials and craftsmen.</p>

            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary px-6 py-3 bg-primary text-primary-foreground rounded">Get a Quote</Link>
              <Link to="/services" className="px-6 py-3 border border-border rounded">All Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ResidentialConstruction;
