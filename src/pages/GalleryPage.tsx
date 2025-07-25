
import React, { useState } from 'react';
import Navbar from '../components/LandingPage/Navbar';
import FooterSection from '../components/LandingPage/FooterSection';
import GallerySection from '../components/Gallery/GallerySection';

const GalleryPage: React.FC = () => {
  const [lang, setLang] = useState('en');
  const handleLanguageChange = (code: string) => {
    setLang(code);
  };
  return (
    <>
      <Navbar onLanguageChange={handleLanguageChange} />
      <GallerySection lang={lang} />
      <FooterSection/>
    </>
  );
};

export default GalleryPage;
