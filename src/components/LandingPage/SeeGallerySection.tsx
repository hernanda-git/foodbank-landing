import React from 'react';
import { easeInOut, motion } from 'framer-motion';
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
    <motion.section
      className="w-screen py-16 px-4 flex flex-col items-center"
      initial={{ opacity: 0.5, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: easeInOut }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-orange-600 mb-3 font-montserrat text-center"
        initial={{ opacity: 0.5, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.1, ease: easeInOut }}
      >
        {t.heading || 'See more activities of us'}
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 mb-8 text-center max-w-2xl"
        initial={{ opacity: 0.5, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.3, ease: easeInOut }}
      >
        {t.subheading || 'Explore our gallery to discover more moments, stories, and the impact we create together.'}
      </motion.p>
      <motion.button
        className="px-8 py-3 rounded-xl font-semibold text-white text-lg bg-gradient-to-tr from-orange-500 to-orange-400/90 shadow-lg hover:brightness-110 transition duration-200 hover:cursor-pointer"
        onClick={() => navigate('/gallery')}
        initial={{ opacity: 0.5, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6, delay: 0.5, ease: easeInOut }}
        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(255,140,0,0.15)' }}
        whileTap={{ scale: 0.98 }}
      >
        {t.button || 'View Gallery'}
      </motion.button>
    </motion.section>
  );
};

export default SeeGallerySection;
