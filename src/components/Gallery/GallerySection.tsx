import { easeInOut, motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Animation variants for the heading
const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeInOut },
  },
};

// Animation variants for the paragraph
const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeInOut, delay: 0.2 },
  },
};

// Animation variants for the divider
const dividerVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.6, ease: easeInOut, delay: 0.4 },
  },
};

// Animation variants for the back button
const buttonVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeInOut, delay: 0.6 },
  },
 
};

const galleryGroups = [
  {
    name: 'Ziarah_Kasih_2_Buah_Rumah_Kg_Paya_Ikan',
    title: 'Ziarah Kasih: Kg Paya Ikan',
    description: 'A heartfelt journey through the vibrant community of Kg Paya Ikan, capturing moments of connection and care.',
    images: [
      'DSC04994.jpg', 'DSC04996.jpg', 'DSC04997.jpg', 'DSC04998.jpg', 'DSC05001.jpg', 'DSC05002.jpg', 'DSC05003.jpg', 'DSC05007.jpg',
      'DSC05009.jpg', 'DSC05010.jpg', 'DSC05011.jpg', 'DSC05013.jpg', 'DSC05016.jpg', 'DSC05019.jpg', 'DSC05020.jpg', 'DSC05022.jpg',
      'DSC05024.jpg', 'DSC05025.jpg', 'DSC05028.jpg', 'DSC05029.jpg', 'DSC05030.jpg', 'DSC05031.jpg', 'DSC05035.jpg', 'DSC05039.jpg',
      'DSC05044.jpg', 'DSC05049.jpg', 'DSC05051.jpg', 'DSC05055.jpg'
    ]
  },
  {
    name: 'Ziarah_Kasih_Bukit_Katil_Indah_Kg_Bukit_Pau',
    title: 'Ziarah Kasih: Bukit Katil Indah & Kg Bukit Pau',
    description: 'Moments of compassion and community spirit in the serene settings of Bukit Katil Indah and Kg Bukit Pau.',
    images: [
      'DSC01296.jpg', 'DSC01299.jpg', 'DSC01302.jpg', 'DSC01304.jpg', 'DSC01306.jpg', 'DSC01308.jpg', 'DSC01310.jpg', 'DSC01320.jpg',
      'DSC01322.jpg', 'DSC01324.jpg', 'DSC01329.jpg', 'DSC01331.jpg', 'DSC01334.jpg', 'DSC01337.jpg', 'DSC01339.jpg', 'DSC01341.jpg',
      'DSC01342.jpg', 'DSC01343.jpg', 'DSC01349.jpg', 'DSC01352.jpg', 'DSC01355.jpg', 'DSC01357.jpg', 'DSC01361.jpg', 'DSC01362.jpg',
      'DSC01363.jpg', 'DSC01365.jpg', 'DSC01369.jpg', 'DSC01370.jpg'
    ]
  },
  {
    name: 'Ziarah_Kasih_Bukit_Piatu',
    title: 'Ziarah Kasih: Bukit Piatu',
    description: 'A visual narrative of unity and kindness in the heart of Bukit Piatu.',
    images: [
      'DSC02657.jpg', 'DSC02658.jpg', 'DSC02659.jpg', 'DSC02661.jpg', 'DSC02664.jpg', 'DSC02666.jpg', 'DSC02668.jpg', 'DSC02671.jpg',
      'DSC02674.jpg', 'DSC02676.jpg', 'DSC02677.jpg', 'DSC02679.jpg', 'DSC02681.jpg', 'DSC02683.jpg', 'DSC02685.jpg', 'DSC02687.jpg',
      'DSC02689.jpg', 'DSC02692.jpg', 'DSC02693.jpg', 'DSC02696.jpg', 'DSC02698.jpg', 'DSC02700.jpg', 'DSC02702.jpg', 'DSC02704.jpg',
      'DSC02706.jpg', 'DSC02708.jpg', 'DSC02710.jpg', 'DSC02711.jpg', 'DSC02714.jpg'
    ]
  },
  {
    name: 'Ziarah_Kasih_Bukit_Piatu_Kg_Enam_Tmn_RB',
    title: 'Ziarah Kasih: Bukit Piatu & Kg Enam Tmn RB',
    description: 'Exploring the warmth and togetherness of Bukit Piatu and Kg Enam Tmn RB communities.',
    images: [
      'DSC08821.jpg', 'DSC08823.jpg', 'DSC08825.jpg', 'DSC08826.jpg', 'DSC08828.jpg', 'DSC08830.jpg', 'DSC08834.jpg', 'DSC08837.jpg',
      'DSC08841.jpg', 'DSC08843.jpg', 'DSC08845.jpg', 'DSC08847.jpg', 'DSC08851.jpg', 'DSC08853.jpg', 'DSC08856.jpg', 'DSC08860.jpg',
      'DSC08861.jpg', 'DSC08864.jpg', 'DSC08866.jpg', 'DSC08868.jpg', 'DSC08872.jpg', 'DSC08874.jpg', 'DSC08878.jpg', 'DSC08880.jpg',
      'DSC08882.jpg', 'DSC08885.jpg', 'DSC08887.jpg', 'DSC08888.jpg', 'DSC08890.jpg', 'DSC08893.jpg', 'DSC08896.jpg', 'DSC08899.jpg',
      'DSC08902.jpg', 'DSC08906.jpg'
    ]
  },
  {
    name: 'Ziarah_Kasih_Kg_Bukit_Katil',
    title: 'Ziarah Kasih: Kg Bukit Katil',
    description: 'A glimpse into the shared moments of care and camaraderie in Kg Bukit Katil.',
    images: [
      'DSC03332.jpg', 'DSC03333.jpg', 'DSC03336.jpg', 'DSC03339.jpg', 'DSC03341.jpg', 'DSC03343.jpg', 'DSC03345.jpg', 'DSC03347.jpg',
      'DSC03348.jpg', 'DSC03350.jpg', 'DSC03352.jpg', 'DSC03354.jpg', 'DSC03356.jpg', 'DSC03358.jpg', 'DSC03360.jpg'
    ]
  }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GallerySection = ({ lang = 'en' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          ref={ref}
          className="text-center my-16 pointer-events-none"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h1
            className="text-5xl sm:text-6xl text-orange-500 font-extrabold mb-6 font-montserrat drop-shadow-lg"
            variants={headingVariants}
          >
            Our Gallery Showcase
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={paragraphVariants}
          >
            A curated collection of moments capturing the essence of compassion, community, and connection across various Ziarah Kasih initiatives.
          </motion.p>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full mx-auto mt-6"
            variants={dividerVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="flex items-center mb-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-orange-500 transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            style={{ textDecoration: 'none' }}
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back
          </a>
        </motion.div>

        <div className="space-y-24">
          {galleryGroups.map((group) => (
            <div key={group.name} className="relative">
              <div className="bg-white shadow-2xl rounded-xl p-8 transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-semibold mb-4 text-gray-700 pointer-events-none">{group.title}</h2>
                <p className="text-orange-400 mb-8 pointer-events-none">{group.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {group.images.map((filename, i) => (
                    <div key={filename} className="relative aspect-square overflow-hidden rounded-lg group bg-gray-200">
                      <img
                        src={`/images/recently_added/${group.name}/${filename}`}
                        alt={`${group.title} - Image ${i + 1}`}
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center mt-8">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-orange-500 transition-all duration-300 ease-in-out bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            style={{ textDecoration: 'none' }}
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
