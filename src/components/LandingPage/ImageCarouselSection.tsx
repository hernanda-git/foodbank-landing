import { useState, useRef, useEffect } from 'react';
import imageList from '../../assets/photos.imageList';

// Use the dynamically generated image list
const images = imageList;

const ImageCarousel: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  const timeoutRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const imageCount = images.length;

  // Auto-play logic with cleanup
  useEffect(() => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageCount);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [imageCount]);

  // Swipe gesture support
  useEffect(() => {
    const ref = carouselRef.current;
    if (!ref) return;
    let startX = 0;
    let isDragging = false;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;
      if (Math.abs(diff) > 50) {
        setCurrent((prev) => (diff > 0 ? (prev + 1) % imageCount : (prev - 1 + imageCount) % imageCount));
        isDragging = false;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    ref.addEventListener('touchstart', onTouchStart);
    ref.addEventListener('touchmove', onTouchMove);
    ref.addEventListener('touchend', onTouchEnd);
    return () => {
      ref.removeEventListener('touchstart', onTouchStart);
      ref.removeEventListener('touchmove', onTouchMove);
      ref.removeEventListener('touchend', onTouchEnd);
    };
  }, [imageCount]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrent((prev) => (prev - 1 + imageCount) % imageCount);
      } else if (e.key === 'ArrowRight') {
        setCurrent((prev) => (prev + 1) % imageCount);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [imageCount]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageCount);
    }, 5000);
  };

  // Handle image loading errors
  const handleImageError = (index: number) => {
    setImageError((prev) => ({ ...prev, [index]: true }));
    // Log error for debugging
    console.error(`Image not found:`, images[index]);
  };

  return (
    <section className="min-h-screen min-w-full flex items-center bg-slate-100 justify-center">
      <div
        ref={carouselRef}
        className="relative min-h-screen min-w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Full-screen image carousel"
        role="region"
      >
        {/* Images */}
        <div className="relative w-full h-screen">
          {/* Black mask overlay */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10" />
          <img
            key={images[current]}
            src={imageError[current]
              ? 'https://via.placeholder.com/800x600?text=Image+Not+Found'
              : images[current]}
            alt={`Slide ${current + 1}`}
            loading="lazy"
            onError={() => handleImageError(current)}
            className="absolute inset-0 w-full h-full object-cover object-top z-0 bg-slate-100"
            draggable={false}
          />
        </div>

        {/* Previous Button */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={() => setCurrent((prev) => (prev - 1 + imageCount) % imageCount)}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={() => setCurrent((prev) => (prev + 1) % imageCount)}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;