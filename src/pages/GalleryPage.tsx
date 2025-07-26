
import React from 'react';
import Navbar from '../components/LandingPage/Navbar';
import FooterSection from '../components/LandingPage/FooterSection';
import GallerySection from '../components/Gallery/GallerySection';

const GalleryPage: React.FC = () => {
  // const [lang, setLang] = useState('en');
  const handleLanguageChange = () => {
    // setLang(code);
  };
  return (
    <>
      <Navbar onLanguageChange={handleLanguageChange} />
      <GallerySection />
      <FooterSection/>
    </>
  );
};

export default GalleryPage;
