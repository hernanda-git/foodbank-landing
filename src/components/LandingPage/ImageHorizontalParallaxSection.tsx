import React, { useEffect, useRef } from 'react';

const row1Images = Array.from({ length: 10 }, (_, i) => `/src/assets/images/photos/photo_${i + 1}.png`);
const row2Images = Array.from({ length: 11 }, (_, i) => `/src/assets/images/photos/${i + 1}.png`);

interface ImageRowProps {
  images: string[];
  reverse?: boolean;
}

const ImageRow: React.FC<ImageRowProps> = ({ images, reverse = false }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const extendedImages = [...images, ...images]; // for seamless loop

  useEffect(() => {
    const row = rowRef.current;
    const container = containerRef.current;
    if (!row || !container) return;

    let scrollY = window.scrollY;
    const initialOffset = (reverse ? -0.5 : -0.5) * container.offsetWidth;
    let translateX = initialOffset;
    const speed = 0.15 * (reverse ? -1 : 1);

    const updateScroll = () => {
      const deltaY = window.scrollY - scrollY;
      scrollY = window.scrollY;
      translateX += deltaY * speed;

      // Get total width of one image set
      const totalWidth = row.scrollWidth / 2;

      // Create infinite loop
      if (Math.abs(translateX - initialOffset) >= totalWidth) {
        translateX = initialOffset + ((translateX - initialOffset) % totalWidth);
      }

      row.style.transform = `translate3d(${translateX}px, 0, 0)`;

      requestAnimationFrame(updateScroll);
    };

    const frame = requestAnimationFrame(updateScroll);
    return () => cancelAnimationFrame(frame);
  }, [images, reverse]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div
        ref={rowRef}
        className="flex flex-nowrap will-change-transform"
      >
        {extendedImages.map((src, i) => (
          <span
            key={`${src}-${i}`}
            className="inline-block w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 m-2 flex-shrink-0 relative"
          >
            <img
              src={src}
              alt={`Photo ${i % images.length}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

const ImageHorizontalParallaxSection: React.FC = () => {
  return (
    <section className="relative bg-white h-100 flex items-center justify-center">
      <div className="absolute my-4 inset-0 z-0 pointer-events-none overflow-hidden flex flex-col items-center">
        <ImageRow images={row1Images} />
        <ImageRow images={row2Images} reverse />
      </div>
    </section>
  );
};

export default ImageHorizontalParallaxSection;
