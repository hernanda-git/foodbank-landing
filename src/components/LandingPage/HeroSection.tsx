import React from 'react';


const HeroSection: React.FC = () => (
  <section className="min-h-[100vh] flex flex-col items-center justify-center px-12 py-12 text-center">
    <div className="max-w-2xl mx-auto">
      <div className="text-sm mb-4 text-gray-600">
        Yayasan Dunia Melayu Dunia Islam
      </div>
      <h1 className="text-5xl font-extrabold mb-8 font-montserrat">
        Food Bank
      </h1>
      <div className="mb-8 text-xl leading-snug">
        Stand with us to lift the weight off the shoulders<br />
        of the underprivileged. Your support delivers nourishment,<br />
        ignites hope, and restores dignity to countless lives.
      </div>
      <div className="flex gap-6 justify-center">
        <button className="px-8 py-2 border-2 border-black text-lg rounded transition hover:bg-black hover:text-white flex items-center gap-1 cursor-pointer">
          <i className="fas fa-hand-holding-heart"></i>
          Donate
        </button>
        <button className="px-8 py-2 border-2 border-black text-lg rounded transition hover:bg-black hover:text-white flex items-center gap-1 cursor-pointer">
          <i className="fas fa-info-circle"></i>
          More About Us
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
