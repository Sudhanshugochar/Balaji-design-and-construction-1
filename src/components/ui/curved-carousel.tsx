import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CurvedCarouselProps {
  images: string[];
  className?: string;
}

export default function CurvedCarousel({ images, className }: CurvedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  
  const visibleCount = 7; // Number of visible cards
  const cardWidth = 280;
  const cardGap = 20;
  
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);
    
    // Calculate position along the curve
    const xOffset = diff * (cardWidth * 0.6);
    
    // Y position creates the curve (parabola)
    const yOffset = Math.pow(absDiff, 1.8) * 25;
    
    // Scale decreases as we move away from center
    const scale = Math.max(0.5, 1 - absDiff * 0.12);
    
    // Rotation for 3D effect
    const rotateY = diff * -8;
    
    // Z-index for stacking
    const zIndex = 50 - absDiff;
    
    // Opacity fades out at edges
    const opacity = Math.max(0.3, 1 - absDiff * 0.2);
    
    return {
      x: xOffset,
      y: yOffset,
      scale,
      rotateY,
      zIndex,
      opacity,
    };
  };

  const scrollTo = (index: number) => {
    const newIndex = Math.max(0, Math.min(images.length - 1, index));
    setActiveIndex(newIndex);
  };

  const scrollPrev = () => scrollTo(activeIndex - 1);
  const scrollNext = () => scrollTo(activeIndex + 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') scrollPrev();
      if (e.key === 'ArrowRight') scrollNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <div className={cn('relative w-full', className)}>
      {/* Carousel container */}
      <div 
        ref={containerRef}
        className="relative h-[450px] md:h-[500px] flex items-end justify-center overflow-hidden"
        style={{ perspective: '1200px' }}
      >
        {/* Cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          {images.map((image, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;
            
            // Only render cards within visible range
            if (Math.abs(index - activeIndex) > Math.floor(visibleCount / 2) + 1) {
              return null;
            }
            
            return (
              <motion.div
                key={index}
                className="absolute cursor-pointer"
                style={{
                  width: cardWidth,
                  zIndex: style.zIndex,
                }}
                animate={{
                  x: style.x,
                  y: style.y,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  opacity: style.opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                onClick={() => scrollTo(index)}
                whileHover={isActive ? { scale: style.scale * 1.05 } : {}}
              >
                <div 
                  className={cn(
                    'relative rounded-xl overflow-hidden shadow-2xl transition-shadow duration-300',
                    isActive ? 'ring-2 ring-primary ring-offset-2 ring-offset-background shadow-primary/20' : ''
                  )}
                >
                  <div className="aspect-[3/4] bg-muted">
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Gradient overlay for non-active cards */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-charcoal/30" />
                  )}
                  
                  {/* Active card glow effect */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={activeIndex === 0}
          className="h-12 w-12 rounded-full border-2 border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-30"
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 px-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'transition-all duration-300 rounded-full',
                index === activeIndex 
                  ? 'w-8 h-2 bg-primary' 
                  : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={activeIndex === images.length - 1}
          className="h-12 w-12 rounded-full border-2 border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-30"
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Image counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-muted-foreground">
          <span className="text-primary font-semibold">{activeIndex + 1}</span>
          {' / '}
          {images.length}
        </span>
      </div>
    </div>
  );
}
