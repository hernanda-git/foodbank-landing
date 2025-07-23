import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import locales from '../../locales/locales.json';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

interface StatsSectionProps {
  lang?: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix = '+', duration = 3 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString() + suffix);

  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration, ease: 'easeOut' });
    }
  }, [inView, count, target, duration]);

  return (
    <motion.div ref={ref} className="text-3xl font-bold">
      {rounded}
    </motion.div>
  );
};

const StatsSection: React.FC<StatsSectionProps> = ({ lang = 'en' }) => {
  // @ts-expect-error: JSON import is not typed, fallback to 'en' if lang missing
  const t = (locales[lang]?.stats) || locales['en'].stats;
  return (
    <section className="w-full py-16 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">{t.title}</h2>
      <div className="flex flex-wrap gap-12 justify-center">
        <div className="text-center">
          <AnimatedCounter target={t.beneficiariesValue} />
          <div className="text-gray-600 mt-1">{t.beneficiaries}</div>
        </div>
        <div className="text-center">
          <AnimatedCounter target={t.volunteersValue} />
          <div className="text-gray-600 mt-1">{t.volunteers}</div>
        </div>
        <div className="text-center">
          <AnimatedCounter target={t.countriesValue} />
          <div className="text-gray-600 mt-1">{t.countries}</div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
