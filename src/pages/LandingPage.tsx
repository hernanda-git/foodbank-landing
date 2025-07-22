
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


const LandingPage: React.FC = () => {
  // Placeholder for language change handler
  const handleLanguageChange = () => {
    // Implement localization logic here if needed
  };
  return (
    <>
      <Navbar onLanguageChange={handleLanguageChange} />
      <HeroSection />
      <ImageHorizontalParallaxSection />
      <AboutUsSection />
      <OurServiceSection />
      <DonationSection />
      <ContributorSection />
      <StatsSection />
      <FooterSection />
    </>
  );
};

export default LandingPage;
