import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import imageList from '../../assets/photos.imageList'; // <-- Your list of image URLs

const originalImages = imageList;

const InfiniteThumbnailCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(originalImages.length); // Start in middle loop
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | null>(null);

  // Clone images 3x for infinite loop illusion
  const loopedImages = [...originalImages, ...originalImages, ...originalImages];

  // Set dynamic card width
  useEffect(() => {
    const updateCardWidth = () => {
      const card = trackRef.current?.querySelector('.carousel-card') as HTMLDivElement;
      if (card) {
        setCardWidth(card.offsetWidth + 8); // +8px margin (mx-1)
      }
    };
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused) {
      return;
    }
    autoPlayRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [paused]);

  // Loop reset
  useEffect(() => {
    const len = originalImages.length;
    if (currentIndex >= len * 2) setCurrentIndex(len);
    if (currentIndex <= len - 1) setCurrentIndex(len);
  }, [currentIndex]);

  // Drag swipe handler
  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) setCurrentIndex((prev) => prev + 1);
    else if (info.offset.x > 50) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-100 py-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Carousel track */}
      <motion.div
        className="flex"
        ref={trackRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        animate={{ x: `-${currentIndex * cardWidth}px` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {loopedImages.map((img, idx) => (
          <div
            key={`${img}-${idx}`}
            className="carousel-card mx-1 w-80 flex-shrink-0 pointer-events-none select-none"
          >
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-full h-48 object-cover rounded shadow-md"
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>

      {/* Controls */}
      <button
        onClick={() => setCurrentIndex((prev) => prev - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-gray-600 p-2 rounded-full shadow hover:bg-gray-100 z-10"
        aria-label="Previous"
      >
        <i className="fas fa-chevron-left text-lg"></i>
      </button>

      <button
        onClick={() => setCurrentIndex((prev) => prev + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-gray-600 p-2 rounded-full shadow hover:bg-gray-100 z-10"
        aria-label="Next"
      >
        <i className="fas fa-chevron-right text-lg"></i>
      </button>
    </div>
  );
};

export default InfiniteThumbnailCarousel;
