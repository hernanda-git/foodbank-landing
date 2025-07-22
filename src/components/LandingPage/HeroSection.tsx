import React from 'react';
import dmdiLogo from '../../assets/images/dmdi_logo.png';

const HeroSection: React.FC = () => (
  <section
    className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 sm:px-12 text-center overflow-hidden"
  >
    {/* Photo Grid Background - Animated */}
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <div
        className="flex h-full animate-photo-scroll"
        style={{ minWidth: '200%', width: 'max-content' }}
      >
        {[...Array(10)].map((_, i) => (
          <img
            key={i}
            src={`/src/assets/images/photos/photo_${i + 1}.png`}
            alt={`Background ${i + 1}`}
            className="w-full h-full object-cover"
            style={{ aspectRatio: '1/1', minWidth: '10vw', maxWidth: '10vw' }}
          />
        ))}
        {/* Duplicate for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <img
            key={`dup-${i}`}
            src={`/src/assets/images/photos/photo_${i + 1}.png`}
            alt={`Background ${i + 1}`}
            className="w-full h-full object-cover"
            style={{ aspectRatio: '1/1', minWidth: '10vw', maxWidth: '10vw' }}
          />
        ))}
      </div>
    </div>

    {/* Frosted Glass Overlay */}
    <div className="absolute inset-0 bg-white/90 backdrop-blur-lg z-10" />

    {/* Content Layer */}
    <div className="relative z-20 max-w-xl mx-auto">
      <div className="flex flex-col items-center mb-2">
        <img
          src={dmdiLogo}
          alt="DMDI Logo"
          className="w-16 h-16 mb-2 object-contain"
          style={{ maxWidth: '64px', maxHeight: '64px' }}
        />
        <div className="text-sm text-gray-600 font-medium">
          Yayasan Dunia Melayu Dunia Islam
        </div>
      </div>

      <h1 className="text-5xl sm:text-6xl text-orange-500 font-extrabold mb-6 font-montserrat drop-shadow-lg">
        Food Bank.
      </h1>

      <p className="mb-10 text-lg sm:text-xl leading-relaxed text-gray-600 font-medium drop-shadow">
        Stand with us to lift the weight off the shoulders of the underprivileged. Your support delivers nourishment, ignites hope, and restores dignity to countless lives.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-5">
        {/* Donate - Primary CTA */}
        <button
          className="px-6 py-2.5 rounded-xl font-semibold text-white text-base flex items-center gap-2
            bg-gradient-to-tr from-orange-500 to-orange-400/90
            backdrop-blur-md border border-white/30 shadow-lg
            transition duration-200 ease-in-out
            hover:shadow-xl hover:brightness-110 hover:cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-offset-2
            active:scale-[0.98] active:brightness-95 active:cursor-pointer"
        >
          <i className="fas fa-hand-holding-heart"></i>
          Donate
        </button>

        {/* More About Us - Secondary CTA */}
        <button
          className="px-6 py-2.5 rounded-xl font-semibold text-gray-600 text-base flex items-center gap-2
            bg-white/40 backdrop-blur-md border border-black/10 shadow-md
            transition duration-200 ease-in-out
            hover:bg-white/60 hover:shadow-xl hover:cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2
            active:scale-[0.98] active:bg-white/70 active:cursor-pointer"
        >
          <i className="fas fa-info-circle"></i>
          More About Us
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;