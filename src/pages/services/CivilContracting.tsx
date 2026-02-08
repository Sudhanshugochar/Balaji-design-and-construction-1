import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { ServiceSchema, BreadcrumbSchema, LocalBusinessSchema } from '@/components/StructuredData';
import heroImage from '@/assets/service-structural.png';
import { Link } from 'react-router-dom';

const CivilContracting = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Civil Contracting Vidarbha — Balaji Design & Construction"
        description="Professional civil contracting services in Wardha and Vidarbha. Foundation, structural works and turnkey contracting by experienced engineers. Get a site visit."
        canonical="/services/civil-contracting"
      />

      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Civil Contracting', url: '/services/civil-contracting' }]} />
      <ServiceSchema serviceName="Civil Contracting" serviceDescription="Foundations, structural works and civil contracting across Wardha and Vidarbha." />
      <Header />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">Civil Contracting</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Civil Contracting in Wardha & Vidarbha</h1>
            <p className="text-muted-foreground text-lg mb-6">Comprehensive civil contracting services including foundation, RCC, and structural execution with rigorous quality controls.</p>
            <img src={heroImage} alt="Civil Contracting Wardha Vidarbha" className="w-full rounded-lg shadow-lg mb-6 object-contain" />

            <h2 className="text-2xl font-semibold mb-3">Our Civil Contracting Capabilities</h2>
            <ul className="list-disc pl-5 mb-6 text-muted-foreground">
              <li>Foundation and substructure works</li>
              <li>Reinforced concrete (RCC) and formwork</li>
              <li>Structural repairs and strengthening</li>
              <li>On-site project management and QA/QC</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Regional strength in Vidarbha</h3>
            <p className="mb-6 text-muted-foreground">Balaji maintains strong vendor relationships and local workforce expertise to deliver projects efficiently across Wardha and neighboring districts.</p>

            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary px-6 py-3 bg-primary text-primary-foreground rounded">Request Site Visit</Link>
              <Link to="/services" className="px-6 py-3 border border-border rounded">All Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CivilContracting;
