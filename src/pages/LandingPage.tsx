
import React from 'react';
import HeroSection from '../components/LandingPage/HeroSection';
import ContributorSection from '../components/LandingPage/ContributorSection';
import VisionMissionSection from '../components/LandingPage/VisionMissionSection';
import StatsSection from '../components/LandingPage/StatsSection';
import BeneficiarySection from '../components/LandingPage/BeneficiarySection';
import ActivitiesSection from '../components/LandingPage/ActivitiesSection';
import FooterSection from '../components/LandingPage/FooterSection';


const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ContributorSection />
      <VisionMissionSection />
      <StatsSection />
      <BeneficiarySection />
      <ActivitiesSection />
      <FooterSection />
    </>
  );
};

export default LandingPage;
