import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import projectResidential1 from '@/assets/project-residential-1.png';
import projectCommercial1 from '@/assets/project-commercial-1.png';
import projectResidential2 from '@/assets/project-residential-2.png';
import heroImage from '@/assets/hero-construction.jpg';
import SEOHead from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { FadeInUp } from '@/components/ui/motion';

const projects = [
  {
    id: 1,
    title: 'Planning',
    category: 'Residential',
    image: projectResidential1,
  },
  {
    id: 2,
    title: 'Exterior design',
    category: 'Residential',
    image: projectCommercial1,
  },
  {
    id: 3,
    title: 'Interior design',
    category: 'Residential',
    image: projectResidential2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Projects = () => {
  return (
    <main className="min-h-screen">
      <SEOHead
        title="Our Projects - Construction Portfolio"
        description="View our completed construction projects in Wardha: residential villas, commercial buildings, apartments, and bungalows. Quality craftsmanship by Balaji Constructions."
        canonical="/projects"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="max-w-3xl">
              <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
                Our Portfolio
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground mb-6">
                Featured Projects
              </h1>
              <p className="text-muted-foreground text-lg">
                Explore our portfolio of completed projects showcasing our commitment to quality and
                innovative design solutions.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Animated Image Grid Gallery */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden bg-muted aspect-[4/3]"
              >
                <motion.img
                  src={project.image}
                  alt={`${project.title} - ${project.category} construction project in Wardha by Balaji Constructions`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
                  initial={{ y: 10, opacity: 0.9 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-primary text-sm uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl lg:text-3xl text-accent-foreground">
                    {project.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
