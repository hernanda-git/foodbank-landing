import React from 'react';
import { motion } from 'framer-motion';
import dmdiLogo from '/images/dmdi_logo.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 sm:px-12 text-center overflow-hidden">
      
      {/* Animated Photo Grid Background */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0 overflow-hidden"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <div className="flex h-full animate-photo-scroll" style={{ minWidth: '200%', width: 'max-content' }}>
          {[...Array(10)].map((_, i) => (
            <img
              key={i}
              src={`/images/photos/photo_${i + 1}.png`}
              alt={`Background ${i + 1}`}
              className="w-full h-full object-cover"
              style={{ aspectRatio: '1/1', minWidth: '10vw', maxWidth: '10vw' }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <img
              key={`dup-${i}`}
              src={`/images/photos/photo_${i + 1}.png`}
              alt={`Background ${i + 1}`}
              className="w-full h-full object-cover"
              style={{ aspectRatio: '1/1', minWidth: '10vw', maxWidth: '10vw' }}
            />
          ))}
        </div>
      </motion.div>

      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-lg z-10" />

      {/* Animated Content */}
      <motion.div
        className="relative z-20 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center mb-2">
          <motion.img
            src={dmdiLogo}
            alt="DMDI Logo"
            className="w-16 h-16 mb-2 object-contain"
            style={{ maxWidth: '64px', maxHeight: '64px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />
          <motion.div
            className="text-sm text-gray-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Yayasan Dunia Melayu Dunia Islam
          </motion.div>
        </div>

        <motion.h1
          className="text-5xl sm:text-6xl text-orange-500 font-extrabold mb-6 font-montserrat drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Food Bank
        </motion.h1>

        <motion.p
          className="mb-10 text-lg sm:text-xl leading-relaxed text-slate-800 font-medium drop-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Stand with us to lift the weight off the shoulders of the underprivileged.
          Your support delivers nourishment, ignites hope, and restores dignity to countless lives.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button
            className="px-6 py-2.5 rounded-xl font-semibold text-white text-base flex items-center gap-2
              bg-gradient-to-tr from-orange-500 to-orange-400/90
              backdrop-blur-md border border-white/30 shadow-lg
              transition duration-200 ease-in-out
              hover:shadow-xl hover:brightness-110 hover:cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-offset-2
              active:scale-[0.98] active:brightness-95"
            onClick={() => {
              const el = document.getElementById('donation');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <i className="fas fa-hand-holding-heart"></i>
            Contribute
          </button>

          <button
            className="px-6 py-2.5 rounded-xl font-semibold text-slate-600 text-base flex items-center gap-2
              bg-white/40 backdrop-blur-md border border-black/10 shadow-md
              transition duration-200 ease-in-out
              hover:bg-white/60 hover:shadow-xl hover:cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2
              active:scale-[0.98] active:bg-white/70"
            onClick={() => {
              const el = document.getElementById('about-us');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <i className="fas fa-info-circle"></i>
            More About Us
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
