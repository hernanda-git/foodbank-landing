
import React from 'react';
import { motion } from 'framer-motion';
import locales from '../../locales/locales.json';


interface DonationSectionProps {
  lang?: string;
}


const DonationSection: React.FC<DonationSectionProps> = ({ lang = 'en' }) => {
  // @ts-expect-error: JSON import is not typed, fallback to 'en' if lang missing
  const t = (locales[lang]?.donation) || locales['en'].donation;
  return (
    <section id="donation" className="relative w-screen min-w-screen py-20 px-6 sm:px-12 overflow-hidden">
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
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            {t.desc}
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
              <h3 className="text-lg font-semibold text-gray-800">{t.bankTitle}</h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium">{t.bankName}:</span> {t.bankAcc} <br />
                <span className="font-medium">{t.bankRefLabel}:</span> {t.bankRef}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">{t.contactTitle}</h3>
              <ul className="text-sm text-gray-600 leading-relaxed">
                {t.contacts.map((c: { label: string; value: string }, i: number) => (
                  <li key={i}>{c.label}: {c.value}</li>
                ))}
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
              <p className="font-medium">{t.qrScan}</p>
              <p>{t.qrRef}: <span className="font-semibold">{t.qrRefValue}</span></p>
              <p className="text-xs text-gray-500">{t.qrPowered}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;
