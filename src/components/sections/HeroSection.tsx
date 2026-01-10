import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-construction.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex">
      {/* Left Dark Panel */}
      <div className="hidden lg:flex w-1/2 bg-charcoal relative z-10">
        <div className="flex flex-col justify-center px-12 xl:px-20 py-32">
          <div className="max-w-xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-6 animate-fade-in">
              Wardha's Trusted Builder
            </p>
            <h1 className="font-display text-5xl xl:text-7xl text-accent-foreground leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Building Dreams,
              <br />
              Creating{' '}
              <span className="text-primary">Landmarks</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Professional construction & design services in Wardha. With 15+ years of experience,
              we transform your vision into reality with quality craftsmanship and honest work.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button asChild className="btn-primary rounded-none group">
                <Link to="/projects">
                  View Our Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline text-accent-foreground hover:text-foreground rounded-none">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="w-full lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent lg:from-transparent lg:via-transparent lg:to-charcoal/30" />
        </div>

        {/* Mobile Content Overlay */}
        <div className="lg:hidden relative z-10 min-h-screen flex flex-col justify-center px-6 py-32">
          <div className="max-w-xl">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4">
              Wardha's Trusted Builder
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-accent-foreground leading-[1.1] mb-6">
              Building Dreams,
              <br />
              Creating <span className="text-primary">Landmarks</span>
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Professional construction & design services in Wardha. With 15+ years of experience,
              we transform your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="btn-primary rounded-none">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline text-accent-foreground hover:text-foreground rounded-none">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-sm py-6 px-6 lg:px-12 z-20">
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="font-display text-3xl lg:text-4xl text-primary-foreground">5.0</p>
              <p className="text-primary-foreground/80 text-sm">Google Rating</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="font-display text-3xl lg:text-4xl text-primary-foreground">6+</p>
              <p className="text-primary-foreground/80 text-sm">Happy Clients</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="font-display text-3xl lg:text-4xl text-primary-foreground">15+</p>
              <p className="text-primary-foreground/80 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
