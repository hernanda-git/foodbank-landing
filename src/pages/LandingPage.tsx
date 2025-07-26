
import React from 'react';
import Navbar from '../components/LandingPage/Navbar';
import HeroSection from '../components/LandingPage/HeroSection';
import ContributorSection from '../components/LandingPage/ContributorSection';
import ImageHorizontalParallaxSection from '../components/LandingPage/ImageHorizontalParallaxSection';
import StatsSection from '../components/LandingPage/StatsSection';
import FooterSection from '../components/LandingPage/FooterSection';
import AboutUsSection from '../components/LandingPage/AboutUsSection';
import OurServiceSection from '../components/LandingPage/OurServiceSection';
import DonationSection from '../components/LandingPage/DonationSection';



import { useState } from 'react';
import SeeGallerySection from '../components/LandingPage/SeeGallerySection';

const LandingPage: React.FC = () => {
  const [lang, setLang] = useState('en');
  const handleLanguageChange = (code: string) => {
    setLang(code);
  };
  return (
    <>
      <Navbar onLanguageChange={handleLanguageChange} />
      <HeroSection lang={lang} />
      <ImageHorizontalParallaxSection />
      <AboutUsSection lang={lang} />
      <OurServiceSection lang={lang} />
      <SeeGallerySection lang={lang} />
      <DonationSection lang={lang} />
      <ContributorSection lang={lang} />
      <StatsSection lang={lang} />
      <FooterSection />
    </>
  );
};

export default LandingPage;
