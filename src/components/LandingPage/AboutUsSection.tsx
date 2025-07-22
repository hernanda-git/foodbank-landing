import { easeInOut, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

const AboutUsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

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
                            About Us
                        </h2>
                        <motion.div
                            className="space-y-4 leading-relaxed text-slate-800 font-medium flex-1"
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={cardVariants}
                            custom={1}
                        >
                            <p>
                                Established on July 1, 2021, the DMDI Foundation launched its Foodbank initiative at Lot G-24, Ground Floor, Kota Cemerlang Building, Ayer Keroh, Melaka.
                            </p>
                            <p>
                                Since its inception, the DMDI Foundation has received generous contributions from both corporations and individuals, in the form of monetary donations and essential goods. These resources are distributed directly to those in need.
                            </p>
                            <p>
                                As of June 18, 2025, the Foodbank has successfully collected RM 529,025.30 in total contributions, benefitting 8,591 recipients. The primary mission of the DMDI Foodbank is to support vulnerable communities, including the impoverished, persons with disabilities (OKU), zakat-eligible individuals (Asnaf), single mothers, and those with unstable incomes, by easing their financial burden and ensuring access to daily necessities.
                            </p>
                            <p>
                                In addition to the Melaka Foodbank, the DMDI Foundation has expanded its outreach by establishing food banks across various Malaysian states and DMDI member countries, including Singapore, Thailand, Cambodia, Indonesia, and Canada.
                            </p>


                            <h3 className="text-2xl font-semibold text-orange-600 mt-6 mb-4 font-montserrat">
                                Mission
                            </h3>
                            <p>
                                To foster the spirit of giving, unity, and compassion as symbols of brotherhood and solidarity among people.
                            </p>

                            <h3 className="text-2xl font-semibold text-orange-600 mt-6 mb-4 font-montserrat">
                                Vision
                            </h3>
                            <p>
                                Caring for All, Building Community
                            </p>

                            <h3 className="text-2xl font-semibold text-orange-600 mt-6 mb-4 font-montserrat">
                                Objectives
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>The main goal is to help underprivileged groups gain access to food supplies.</li>
                                <li>To serve as a platform for the community and companies to contribute food.</li>
                                <li>Challenges include inconsistent contributions from donors.</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Images */}
                <div className="lg:w-1/4 w-full flex flex-col gap-4 justify-stretch">
                    {['photo_1.png', 'photo_8.png', 'photo_9.png'].map((src, i) => (
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
