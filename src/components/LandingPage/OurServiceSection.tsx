
import { useRef } from 'react';
import { easeOut, motion, useInView } from 'framer-motion';
import locales from '../../locales/locales.json';

type OurServiceSectionProps = {
  lang?: string;
};

// Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.6
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut
    }
  }
};


interface ServiceItem {
  img: string;
  title: string;
  desc: string;
}

const OurServiceSection: React.FC<OurServiceSectionProps> = ({ lang = 'en' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  // @ts-expect-error: JSON import is not typed, fallback to 'en' if lang missing
  const t = (locales[lang]?.services) || locales['en'].services;
  const serviceList: ServiceItem[] = t.list;

  return (
    <section
      ref={ref}
      className="w-screen px-4 py-12 sm:py-24 bg-white flex justify-center items-center"
    >
      <div className="w-full max-w-6xl flex flex-col sm:flex-row gap-8 px-4 sm:px-0">
        {/* Left Side Text */}
        <div className="w-full sm:w-1/4 flex flex-col justify-start items-start pr-0 sm:pr-6 mb-8 sm:mb-0">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-base sm:text-lg text-gray-600 font-medium"
          >
            {t.desc}
          </motion.p>
        </div>

        {/* Right Side Cards with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12"
        >
          {serviceList.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-gray-100 rounded-lg shadow flex flex-col overflow-hidden h-auto min-h-[240px] sm:min-h-[320px]"
            >
              <div className="w-full flex items-center justify-center aspect-[4/3] bg-gray-300">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="w-full flex flex-col justify-start p-3 sm:p-4 flex-1">
                <h3 className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServiceSection;
