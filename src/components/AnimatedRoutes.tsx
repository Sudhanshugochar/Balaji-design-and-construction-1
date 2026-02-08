import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Services from '@/pages/Services';
import ResidentialConstruction from '@/pages/services/ResidentialConstruction';
import CommercialConstruction from '@/pages/services/CommercialConstruction';
import ArchitecturalDesign from '@/pages/services/ArchitecturalDesign';
import CivilContracting from '@/pages/services/CivilContracting';
import Contact from '@/pages/Contact';
import Reviews from '@/pages/Reviews';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';
import BlogIndex from '@/pages/blog/Index';
import BlogPost from '@/pages/blog/BlogPost';
import PageTransition from './PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="/services/residential-construction"
          element={
            <PageTransition>
              <ResidentialConstruction />
            </PageTransition>
          }
        />
        <Route
          path="/services/commercial-construction"
          element={
            <PageTransition>
              <CommercialConstruction />
            </PageTransition>
          }
        />
        <Route
          path="/services/architectural-design"
          element={
            <PageTransition>
              <ArchitecturalDesign />
            </PageTransition>
          }
        />
        <Route
          path="/services/civil-contracting"
          element={
            <PageTransition>
              <CivilContracting />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/reviews"
          element={
            <PageTransition>
              <Reviews />
            </PageTransition>
          }
        />
        <Route
          path="/privacy"
          element={
            <PageTransition>
              <Privacy />
            </PageTransition>
          }
        />
        <Route
          path="/terms"
          element={
            <PageTransition>
              <Terms />
            </PageTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <PageTransition>
              <BlogIndex />
            </PageTransition>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <PageTransition>
              <BlogPost />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;