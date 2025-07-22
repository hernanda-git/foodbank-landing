import React from 'react';
import { motion } from 'framer-motion';

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-orange-700 text-white px-6 py-10 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        {/* Left Column - Contact Info */}
        <div className="space-y-4 flex flex-col h-full">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <address className="not-italic text-sm leading-relaxed">
            Lot G-24, Aras Bawah, Jalan KC 1,<br />
            Bangunan Kota Cemerlang,<br />
            75450, Melaka, Malaysia<br />
            <br />
            <span className="block">Tel: +6 06-2331221</span>
            <span className="block">Fax: +6 06-2331221</span>
            <span className="block">Email: <a href="mailto:yayasandmdi@gmail.com" className="underline">yayasandmdi@gmail.com</a></span>
          </address>
        </div>

        {/* Right Column - Google Maps */}
        <div className="w-full flex flex-col h-full">
          <iframe
            title="Yayasan DMDI Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15946.738779186002!2d102.28384072813294!3d2.27097863556108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1e56ccac2566b%3A0xae4a3b65fd4bdd57!2sYayasan%20DMDI!5e0!3m2!1sen!2sid!4v1753211547737!5m2!1sen!2sid"
            className="w-full h-full rounded-md shadow-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>

      {/* Optional Footer Bottom Text */}
      <div className="mt-10 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Yayasan DMDI. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
