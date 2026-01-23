import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface StickyBlurRevealProps {
  text: string;
  className?: string;
  fontSize?: string;
  lineHeight?: number;
  fullRevealDistance?: number;
  initialBlur?: number;
  initialOpacity?: number;
  letterSpacing?: number;
}

export const StickyBlurReveal = ({
  text,
  className,
  fontSize = '1rem',
  lineHeight = 1.6,
  fullRevealDistance = 800,
  initialBlur = 4,
  initialOpacity = 0.1,
  letterSpacing = 0,
}: StickyBlurRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = (text || '').split(' ');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let startPosition = 0;
    let endPosition = 0;
    let containerHeight = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const rect = entry.boundingClientRect;
          startPosition = window.scrollY + rect.top;
          containerHeight = rect.height;
          endPosition = startPosition + fullRevealDistance;
          handleScroll();
        } else {
          setIsVisible(false);
        }
      },
      { threshold: [0] }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementTop = rect.top;
      const visibleHeight = viewportHeight - elementTop;
      const progress = (visibleHeight - containerHeight) / (fullRevealDistance - containerHeight);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [fullRevealDistance]);

  return (
    <div
      ref={containerRef}
      className={cn('w-full', className)}
      style={{
        fontSize,
        lineHeight,
        letterSpacing: `${letterSpacing}px`,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-out',
      }}
    >
      {words.map((word, index) => {
        const wordProgress = (scrollProgress - index / words.length) * words.length;
        const progress = Math.max(0, Math.min(1, wordProgress));
        const blurAmount = initialBlur * (1 - progress);
        const opacity = initialOpacity + (1 - initialOpacity) * progress;

        return (
          <span
            key={index}
            className="inline-block mr-[0.25em]"
            style={{
              filter: `blur(${blurAmount}px)`,
              opacity,
              transition: 'filter 0.15s ease-out, opacity 0.15s ease-out',
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default StickyBlurReveal;
