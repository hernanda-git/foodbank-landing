import { easeInOut, motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import locales from '../../locales/locales.json';

type AboutUsSectionProps = {
  lang?: string;
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easeInOut,
            delay: i * 0.2, // Staggered reveal
        },
    }),
};

const imageVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: easeInOut,
            delay: 0.3 + i * 0.2,
        },
    }),
};


const AboutUsSection: React.FC<AboutUsSectionProps> = ({ lang = 'en' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  // @ts-expect-error: JSON import is not typed, fallback to 'en' if lang missing
  const t = (locales[lang]?.about) || locales['en'].about;

  return (
    <section
      ref={ref}
      id="about-us"
      className="min-h-screen bg-slate-100 flex items-center justify-center py-16 px-4"
    >
      <div className="w-full max-w-7xl flex lg:flex-row flex-col gap-8 items-stretch">
        {/* Left Card */}
        <motion.div
          className="lg:w-3/4 w-full flex flex-col justify-stretch"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={cardVariants}
          custom={0}
        >
          <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-8 md:p-12 h-full flex flex-col">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 font-montserrat">
              {t.title}
            </h2>
            <motion.div
              className="space-y-4 leading-relaxed text-slate-800 font-medium flex-1"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              custom={1}
            >
              <p>{t.established}</p>
              <p>{t.contributions}</p>
              <p>{t.impact}</p>
              <p>{t.expansion}</p>

              <h3 className="text-2xl font-semibold text-orange-600 mt-6 mb-4 font-montserrat">
                {t.missionTitle}
              </h3>
              <p>{t.mission}</p>

              <h3 className="text-2xl font-semibold text-orange-600 mt-6 mb-4 font-montserrat">
                {t.visionTitle}
              </h3>
              <p>{t.vision}</p>

              <h3 className="text-2xl font-semibold text-orange-600 mt-6 mb-4 font-montserrat">
                {t.objectivesTitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {t.objectives.map((obj: string, idx: number) => (
                  <li key={idx}>{obj}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Images */}
        <div className="lg:w-1/4 w-full flex flex-col gap-4 justify-stretch">
          {["photo_1.png", "photo_8.png", "photo_9.png"].map((src, i) => (
            <motion.div
              key={src}
              className="relative overflow-hidden rounded-xl shadow-lg flex-1"
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={imageVariants}
              custom={i}
            >
              <img
                src={`/images/photos/${src}`}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
