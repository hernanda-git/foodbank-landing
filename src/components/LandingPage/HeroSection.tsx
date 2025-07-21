import React from 'react';

const HeroSection: React.FC = () => (
  <section className="relative min-h-[100vh] flex flex-col items-start justify-start px-6 sm:px-12 py-12 text-center overflow-hidden bg-gradient-to-br from-red-50 via-red-50 to-white">

    {/* Content Layer */}
    <div className="relative z-10 max-w-xl mx-auto">
      <div className="text-sm mb-2 text-gray-400 font-medium">
        Yayasan Dunia Melayu Dunia Islam
      </div>

      <h1 className="text-5xl sm:text-6xl text-orange-500 font-extrabold mb-6 font-montserrat drop-shadow-sm">
        Food Bank.
      </h1>

      <p className="mb-10 text-lg sm:text-xl leading-relaxed text-gray-700 font-medium">
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
            hover:shadow-xl hover:brightness-110
            focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:ring-offset-2
            active:scale-[0.98] active:brightness-95"
        >
          <i className="fas fa-hand-holding-heart"></i>
          Donate
        </button>

        {/* More About Us - Secondary CTA */}
        <button
          className="px-6 py-2.5 rounded-xl font-semibold text-gray-800 text-base flex items-center gap-2
            bg-white/40 backdrop-blur-md border border-black/10 shadow-md
            transition duration-200 ease-in-out
            hover:bg-white/60 hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2
            active:scale-[0.98] active:bg-white/70"
        >
          <i className="fas fa-info-circle"></i>
          More About Us
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
