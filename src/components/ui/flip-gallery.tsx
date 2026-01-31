import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  title: string;
  url: string;
}

interface FlipGalleryProps {
  images: GalleryImage[];
}

const FLIP_SPEED = 750;
const flipTiming = { duration: FLIP_SPEED, iterations: 1 };

const flipAnimationTop = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' }
];
const flipAnimationBottom = [
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(0)' }
];

const flipAnimationTopReverse = [
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(0)' }
];
const flipAnimationBottomReverse = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' }
];

export default function FlipGallery({ images }: FlipGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniteRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const setActiveImage = (el: HTMLDivElement, index: number) => {
    el.style.backgroundImage = `url('${images[index].url}')`;
  };

  const setImageTitle = (index: number) => {
    const gallery = containerRef.current;
    if (!gallery) return;
    gallery.setAttribute('data-title', images[index].title);
    gallery.style.setProperty('--title-y', '0');
    gallery.style.setProperty('--title-opacity', '1');
  };

  useEffect(() => {
    if (!containerRef.current) return;
    uniteRef.current = containerRef.current.querySelectorAll('.unite');
    uniteRef.current.forEach((el) => setActiveImage(el, currentIndex));
    setImageTitle(currentIndex);
  }, []);

  const updateGallery = (nextIndex: number, isReverse = false) => {
    const gallery = containerRef.current;
    if (!gallery || !uniteRef.current) return;

    const topAnim = isReverse ? flipAnimationTopReverse : flipAnimationTop;
    const bottomAnim = isReverse ? flipAnimationBottomReverse : flipAnimationBottom;

    gallery.querySelector('.overlay-top')?.animate(topAnim, flipTiming);
    gallery.querySelector('.overlay-bottom')?.animate(bottomAnim, flipTiming);

    gallery.style.setProperty('--title-y', '-1rem');
    gallery.style.setProperty('--title-opacity', '0');
    gallery.setAttribute('data-title', '');

    uniteRef.current.forEach((el, idx) => {
      const delay =
        (isReverse && idx !== 1 && idx !== 2) ||
        (!isReverse && (idx === 1 || idx === 2))
          ? FLIP_SPEED - 200
          : 0;

      setTimeout(() => setActiveImage(el, nextIndex), delay);
    });

    setTimeout(() => setImageTitle(nextIndex), FLIP_SPEED * 0.5);
  };

  const updateIndex = (increment: number) => {
    const newIndex = (currentIndex + increment + images.length) % images.length;
    const isReverse = increment < 0;
    setCurrentIndex(newIndex);
    updateGallery(newIndex, isReverse);
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        id="flip-gallery"
        data-title=""
        className="relative mx-auto grid grid-cols-2 gap-1 w-[200px] h-[333px] sm:w-[300px] sm:h-[500px] after:content-[attr(data-title)] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-4 after:text-white after:text-sm after:font-medium after:tracking-wide after:transition-all after:duration-300"
        style={{
          '--title-y': '0',
          '--title-opacity': '1',
        } as React.CSSProperties}
      >
        <div className="unite top absolute left-0 w-1/2 h-1/2 bg-cover bg-no-repeat" />
        <div className="unite bottom absolute left-0 w-1/2 h-1/2 bg-cover bg-no-repeat" />
        <div className="unite top absolute right-0 w-1/2 h-1/2 bg-cover bg-no-repeat" />
        <div className="unite bottom absolute right-0 w-1/2 h-1/2 bg-cover bg-no-repeat" />

        <div className="overlay-top unite top absolute inset-x-0 h-1/2 bg-cover bg-no-repeat" style={{ backfaceVisibility: 'hidden' }} />
        <div className="overlay-bottom unite bottom absolute inset-x-0 h-1/2 bg-cover bg-no-repeat" style={{ backfaceVisibility: 'hidden' }} />

        <div className="absolute inset-0 flex items-center justify-between px-2 z-10">
          <button
            onClick={() => updateIndex(-1)}
            title="Previous"
            className="text-white opacity-75 hover:opacity-100 hover:scale-125 transition"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => updateIndex(1)}
            title="Next"
            className="text-white opacity-75 hover:opacity-100 hover:scale-125 transition"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      <style>{`
        #flip-gallery > * {
          background-size: 200px 333px;
        }

        @media (min-width: 640px) {
          #flip-gallery > * {
            background-size: 300px 500px;
          }
        }

        .top,
        .overlay-top {
          top: 0;
          transform-origin: bottom;
          background-position: top;
        }

        .bottom,
        .overlay-bottom {
          bottom: 0;
          transform-origin: top;
          background-position: bottom;
        }

        #flip-gallery::after {
          transform: translateY(var(--title-y));
          opacity: var(--title-opacity);
        }
      `}</style>
    </div>
  );
}
