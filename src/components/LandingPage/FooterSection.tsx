import React from 'react';

const FooterSection: React.FC = () => (
  <footer className="w-full py-8 bg-blue-900 text-white flex flex-col items-center">
    <div className="mb-4">Scan the QR code to make a donation:</div>
    <div className="w-24 h-24 bg-white rounded mb-4 flex items-center justify-center">
      {/* QR Code image here */}
      <span className="text-gray-400">QR</span>
    </div>
    <div>Contact: info@foodbank.org</div>
  </footer>
);

export default FooterSection;
