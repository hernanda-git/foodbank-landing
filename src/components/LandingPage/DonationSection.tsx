import React from 'react';
import { motion } from 'framer-motion';

const DonationSection: React.FC = () => {
  return (
    <section id="donation" className="relative w-full py-20 px-6 sm:px-12 bg-gradient-to-br from-white via-orange-50 to-white overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 z-0 bg-white/30 backdrop-blur-sm" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-600 font-montserrat mb-4">
            Support Our Foodbank
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Your contribution helps us provide essential food aid to those in need.
            Every donation — big or small — creates meaningful impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full grid sm:grid-cols-2 gap-8 bg-white/60 p-8 sm:p-10 rounded-2xl shadow-xl backdrop-blur-md border border-white/30"
        >
          {/* Left Side - Bank and Contact */}
          <div className="text-left space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Bank Transfer</h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium">AmBank:</span> 8881002209852 <br />
                <span className="font-medium">Reference:</span> Foodbank Yayasan DMDI
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
              <ul className="text-sm text-gray-600 leading-relaxed">
                <li>📞 Office: (+60) 6-2331212</li>
                <li>📱 Dato' Sabrina: (+60) 19-6216111</li>
                <li>📱 Raziah: (+60) 12-6921760</li>
                <li>📱 Nori: (+60) 17-2337705</li>
              </ul>
            </div>
          </div>

          {/* Right Side - QR Code */}
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            <img
              src="/images/qr_code_duit_now.png"
              alt="DuitNow QR Code"
              className="w-48 h-48 rounded-lg shadow-md"
            />
            <div className="text-sm text-gray-700">
              <p className="font-medium">Scan to Donate</p>
              <p>Reference: <span className="font-semibold">Foodbank DMDI</span></p>
              <p className="text-xs text-gray-500">Powered by DuitNow</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;
