import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Building2, Paintbrush, Ruler, ArrowRight, CheckCircle, KeyRound, Compass, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '@/assets/hero-construction.jpg';
import serviceResidential from '@/assets/service-residential.png';
import serviceCommercial from '@/assets/service-commercial.png';
import serviceArchitectural from '@/assets/service-architectural.png';
import serviceStructural from '@/assets/service-structural.png';
import serviceDesignPlanning from '@/assets/service-design-planning.png';
import serviceTurnkey from '@/assets/service-turnkey.png';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from '@/components/StructuredData';

const serviceFAQs = [
  {
    question: 'What types of construction services do you offer in Wardha?',
    answer: 'Balaji Design & Constructions offers comprehensive construction services including residential construction (homes, villas, apartments), commercial construction (offices, retail spaces), interior design, architectural design, structural design, and turnkey project solutions in Wardha and surrounding areas of Maharashtra.',
  },
  {
    question: 'How much does home construction cost in Wardha?',
    answer: 'Home construction costs in Wardha vary based on factors like plot size, design complexity, materials, and finishes. We offer free consultations and detailed cost estimates. Contact us at +91 86248 38652 for a personalized quote for your residential project.',
  },
  {
    question: 'Do you provide turnkey construction services?',
    answer: 'Yes, we provide complete turnkey construction services. This means we handle everything from initial design and planning to final construction and handover. You get a single point of contact, quality materials, timely delivery, and post-construction support.',
  },
  {
    question: 'What is your typical construction timeline?',
    answer: 'Construction timelines depend on project scope and complexity. A typical residential home takes 8-12 months, while commercial projects may take 12-18 months. We provide detailed project schedules and ensure timely completion with regular progress updates.',
  },
  {
    question: 'Do you offer architectural and structural design services?',
    answer: 'Yes, we have expert architects and structural engineers who provide comprehensive design services including 3D visualization, structural analysis, RCC design, foundation design, and sustainable building solutions tailored to your requirements and local building codes.',
  },
];

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  slug: string;
  image?: string;
  video?: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: 'Residential Construction',
    shortTitle: 'Residential',
    description: 'Custom homes, villas, and apartments built with precision and care. From foundation to finishing, we deliver your dream home with quality materials and expert craftsmanship.',
    features: ['Custom home design and construction', 'Villa and bungalow projects', 'Apartment building development', 'Home additions and extensions', 'Foundation and structural work'],
    slug: 'residential-construction',
    image: serviceResidential
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    shortTitle: 'Commercial',
    description: 'Office buildings, retail spaces, and commercial complexes designed for functionality and aesthetic appeal. We create spaces that enhance productivity and brand presence.',
    features: ['Office building construction', 'Retail and shopping spaces', 'Industrial facilities', 'Warehouse construction', 'Commercial renovations'],
    slug: 'commercial-construction',
    image: serviceCommercial
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    shortTitle: 'Interior',
    description: 'Transform your spaces with our expert interior design services. We blend modern aesthetics with functional design to create environments that inspire.',
    features: ['Complete interior design solutions', 'Kitchen and bathroom design', 'Living space optimization', 'Custom furniture design', 'Color and material consultation'],
    slug: 'interior-design',
    video: '/videos/service-interior.mp4'
  },
  {
    icon: Ruler,
    title: 'Design & Planning',
    shortTitle: 'Planning',
    description: 'Comprehensive architectural design and planning services to bring your vision to life. From concept to blueprint, we ensure every detail is perfect.',
    features: ['Architectural design', 'Site planning and analysis', '3D visualization and rendering', 'Permit and approval assistance', 'Project management'],
    slug: 'design-planning',
    image: serviceDesignPlanning
  },
  {
    icon: KeyRound,
    title: 'Turnkey Project',
    shortTitle: 'Turnkey',
    description: 'Complete end-to-end project delivery from concept to keys. We handle everything so you can move in hassle-free with zero stress.',
    features: ['Single point of contact for entire project', 'Design to completion management', 'Quality materials and workmanship', 'Timely project delivery', 'Post-construction support and warranty'],
    slug: 'turnkey-project',
    image: serviceTurnkey
  },
  {
    icon: Compass,
    title: 'Structural Design',
    shortTitle: 'Structural',
    description: 'Expert structural engineering and design services ensuring safety, stability, and optimal load distribution for lasting structures.',
    features: ['Structural analysis and calculations', 'RCC design and detailing', 'Steel structure design', 'Foundation design optimization', 'Seismic and wind load analysis'],
    slug: 'structural-design',
    image: serviceStructural
  },
  {
    icon: PenTool,
    title: 'Architectural Design',
    shortTitle: 'Architectural',
    description: 'Creative architectural solutions blending aesthetics with functionality. Unique designs tailored to your vision and lifestyle.',
    features: ['Conceptual design and sketching', '3D modeling and visualization', 'Building elevation design', 'Space planning and layout', 'Sustainable design solutions'],
    slug: 'architectural-design',
    image: serviceArchitectural
  }
];

const Services = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('residential-construction');

  // Handle hash navigation from homepage
  useEffect(() => {
    if (location.hash) {
      const slug = location.hash.replace('#', '');
      const serviceExists = services.find(s => s.slug === slug);
      if (serviceExists) {
        setActiveTab(slug);
      }
    }
  }, [location.hash]);

  const activeService = services.find(s => s.slug === activeTab) || services[0];

  return (
    <main className="min-h-screen">
      <SEOHead 
        title="Construction Services - Residential & Commercial" 
        description="Professional construction services in Wardha: residential homes, commercial buildings, interior design, and architectural planning. Get free quote from Balaji Constructions." 
        canonical="/services" 
      />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]} />
      <ServiceSchema serviceName="Construction Services" serviceDescription="Complete construction services including residential, commercial, interior design and planning in Wardha, Maharashtra." />
      <FAQSchema faqs={serviceFAQs} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Our Services
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-muted-foreground text-lg">
              From initial design to final construction, we offer end-to-end building solutions
              tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs-Based Services Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Navigation */}
            <div className="mb-12 overflow-x-auto scrollbar-hide">
              <TabsList className="inline-flex w-full min-w-max gap-1 bg-transparent p-0 border-b border-border/50">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.slug}
                    value={service.slug}
                    className="group relative flex items-center gap-2 px-4 py-4 text-muted-foreground bg-transparent rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-foreground hover:text-foreground transition-colors duration-200 min-h-[56px]"
                  >
                    <service.icon className="w-4 h-4 shrink-0" />
                    <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">{service.shortTitle}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab Content */}
            {services.map((service) => (
              <TabsContent key={service.slug} value={service.slug} className="mt-0 focus-visible:outline-none">
                <AnimatePresence mode="wait">
                  {activeTab === service.slug && (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
                    >
                      {/* Media Area */}
                      <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-lg bg-muted">
                        {service.video ? (
                          <video
                            src={service.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : service.image ? (
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <service.icon className="w-24 h-24 text-primary/20" />
                          </div>
                        )}
                      </div>

                      {/* Content Area */}
                      <div className="lg:py-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        
                        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                          {service.title}
                        </h2>
                        
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                          {service.description}
                        </p>

                        <ul className="space-y-3 mb-10">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button asChild className="btn-primary rounded-none group">
                          <Link to="/contact">
                            Get a Quote
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;