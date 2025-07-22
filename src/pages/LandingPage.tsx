
import React from 'react';
import HeroSection from '../components/LandingPage/HeroSection';
import ContributorSection from '../components/LandingPage/ContributorSection';
import ImageHorizontalParallaxSection from '../components/LandingPage/ImageHorizontalParallaxSection';
import StatsSection from '../components/LandingPage/StatsSection';
import FooterSection from '../components/LandingPage/FooterSection';
import AboutUsSection from '../components/LandingPage/AboutUsSection';
import OurServiceSection from '../components/LandingPage/OurServiceSection';
import DonationSection from '../components/LandingPage/DonationSection';


const LandingPage: React.FC = () => {
  return (
    <>
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
