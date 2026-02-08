import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema } from '@/components/StructuredData';
import heroImage from '@/assets/service-commercial.png';
import { Link } from 'react-router-dom';

const CommercialConstruction = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Commercial Construction Vidarbha — Balaji Design & Construction"
        description="Commercial building construction in Wardha & Vidarbha. Offices, retail, and industrial spaces built with safety and efficiency. Contact Balaji for a project plan."
        canonical="/services/commercial-construction"
      />

      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Commercial Construction', url: '/services/commercial-construction' }]} />
      <ServiceSchema serviceName="Commercial Construction" serviceDescription="Office, retail and industrial construction services in Wardha and Vidarbha." />
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">Commercial Construction</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Commercial Construction in Wardha & Vidarbha</h1>
            <p className="text-muted-foreground text-lg mb-6">We deliver functional, code-compliant commercial buildings designed for performance and durability across Vidarbha.</p>
            <img src={heroImage} alt="Commercial Construction Wardha Vidarbha" className="w-full rounded-lg shadow-lg mb-6 object-contain" />

            <h2 className="text-2xl font-semibold mb-3">Services for Businesses</h2>
            <ul className="list-disc pl-5 mb-6 text-muted-foreground">
              <li>Office buildings and corporate fit-outs</li>
              <li>Retail outlets and showrooms</li>
              <li>Industrial sheds and warehouses</li>
              <li>Commercial renovations and expansions</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Local expertise in Vidarbha</h3>
            <p className="mb-6 text-muted-foreground">Balaji understands local regulations, procurement channels and labor networks across Wardha and the Vidarbha region.</p>

            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary px-6 py-3 bg-primary text-primary-foreground rounded">Request Project Plan</Link>
              <Link to="/services" className="px-6 py-3 border border-border rounded">All Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CommercialConstruction;
