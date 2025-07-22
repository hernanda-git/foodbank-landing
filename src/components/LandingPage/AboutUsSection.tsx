import { motion, easeInOut } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: easeInOut 
    }
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: easeInOut,
      delay: 0.2 
    }
  },
};

const AboutUsSection = () => (
  <section id="about-us" className="min-h-screen bg-slate-100 flex items-center justify-center py-8 px-4">
    <div className="w-full max-w-7xl flex lg:flex-row flex-col gap-8 items-stretch">
      {/* Left Card (3/4 width) */}
      <motion.div
        className="lg:w-3/4 w-full flex flex-col justify-stretch"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-8 md:p-12 h-full flex flex-col">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 font-montserrat">About Us</h2>
          <div className="space-y-4 leading-relaxed text-slate-800 font-medium flex-1">
            <p>
              Established on July 1, 2021, the DMDI Foundation launched its Foodbank initiative at Lot G-24, Ground Floor, Kota Cemerlang Building, Ayer Keroh, Melaka.
            </p>
            <p>
              Since its inception, the DMDI Foundation has received generous contributions in the form of cash and essential goods, which are distributed to those in need. As of June 18, 2025, total donations amounted to RM 529,025.30, benefiting 8,591 individuals.
            </p>
            <p>
              The primary mission of the DMDI Foodbank is to support vulnerable communities, including the underprivileged, persons with disabilities, single mothers, and those with unstable incomes, by alleviating their financial burdens and providing essential daily necessities to sustain their livelihoods.
            </p>
            <p>
              In addition to the Melaka Foodbank, the DMDI Foundation has expanded its efforts, establishing Foodbanks in various states and international DMDI member countries, including Singapore, Thailand, Cambodia, Indonesia, and Canada.
            </p>
            <h3 className="text-2xl font-semibold text-orange-600 mt-6 mb-4 font-montserrat">Misi</h3>
            <p>
              Memupuk Amalan Bersedekah, Semangat Kebersamaan dan Kepedulian Sebagai Simbol Persaudaraan dan Solidariti Sesama Insan.
            </p>
            <h3 className="text-2xl font-semibold text-orange-600 mt-6 mb-4 font-montserrat">Visi</h3>
            <p>
              CARING FOR ALL BUILDING COMMUNITY
            </p>
            <h3 className="text-2xl font-semibold text-orange-600 mt-6 mb-4 font-montserrat">Objektif</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tujuan utama program adalah untuk membantu golongan kurang berkemampuan untuk mendapatkan akses bekalan makanan bagi meringankan kos sara hidup.</li>
              <li>Sebagai platform kepada Masyarakat, Badan Korporat, Kilang dan Syarikat-Syarikat terbesar yang berminat menyalurkan sumbangan terutama dalam bentuk makanan.</li>
              <li>Terdapat beberapa cabaran yang kritikal bagi penyumbang dimana kekurangan sumbangan tidak Konsisten.</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Right Stacked Images (1/4 width) */}
      <motion.div
        className="lg:w-1/4 w-full flex flex-col gap-4 justify-stretch"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative overflow-hidden rounded-xl shadow-lg flex-1">
          <img
            src="/images/photos/photo_1.png"
            alt="Foodbank Initiative"
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-lg flex-1">
          <img
            src="/images/photos/photo_8.png"
            alt="Community Support"
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-lg flex-1">
          <img
            src="/images/photos/photo_9.png"
            alt="Global Outreach"
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutUsSection;