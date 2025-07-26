import React from 'react';
import { useNavigate } from 'react-router-dom';
import locales from '../../locales/locales.json';

interface SeeGallerySectionProps {
  lang: string;
}

const SeeGallerySection: React.FC<SeeGallerySectionProps> = ({ lang }) => {
  // @ts-expect-error: JSON import is not typed, fallback to 'en' if lang missing
  const t = (locales[lang]?.seeGallery) || locales['en'].seeGallery || {};
  const navigate = useNavigate();

  return (
    <section className="w-full py-16 px-4 flex flex-col items-center bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-3 font-montserrat text-center">
        {t.heading || 'See more activities of us'}
      </h2>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
        {t.subheading || 'Explore our gallery to discover more moments, stories, and the impact we create together.'}
      </p>
      <button
        className="px-8 py-3 rounded-xl font-semibold text-white text-lg bg-gradient-to-tr from-orange-500 to-orange-400/90 shadow-lg hover:brightness-110 transition duration-200 hover:cursor-pointer"
        onClick={() => navigate('/gallery')}
      >
        {t.button || 'View Gallery'}
      </button>
    </section>
  );
};

export default SeeGallerySection;
