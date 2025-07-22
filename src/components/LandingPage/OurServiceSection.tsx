import { useRef } from 'react';
import { easeOut, motion, useInView } from 'framer-motion';

const services = [
  {
    img: '/images/photos/photo_3.png',
    title: 'Rumah Amal Lot G-18',
    desc: '500 Penerima Bantuan Khas Foodbank DMDI di Rumah Amal Lot G-18, Bangunan Kota Cmerlang, Ayer Keroh.'
  },
  {
    img: '/images/photos/1.png',
    title: 'Program Sumbangan Bakul Ramadhan',
    desc: 'Sumbangan dari Speedmart 99 di Bangunan Kota Cemerlang, Ayer Keroh. Untuk sambutan Aidil-fitri.'
  },
  {
    img: '/images/photos/4.png',
    title: 'Sumbangan Pasca Banjir',
    desc: 'Bantuan darurat berupa makanan, kebutuhan pokok, dan dukungan moral bagi korban banjir untuk membantu mereka bangkit kembali.'
  },
  {
    img: '/images/photos/8.png',
    title: 'Food Bank DMDI Negeri Johor',
    desc: 'Program distribusi makanan oleh DMDI Negeri Johor untuk membantu keluarga kurang mampu dan memastikan akses pangan yang layak bagi masyarakat yang membutuhkan.'
  }
];

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

const OurServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="w-full py-12 sm:py-24 bg-white flex justify-center items-center"
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
            Our Activities
          </motion.h2>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-base sm:text-lg text-gray-600 font-medium"
          >
            Helping families thrive through our foodbank and charitable services.
          </motion.p>
        </div>

        {/* Right Side Cards with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12"
        >
          {services.map((service, idx) => (
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
