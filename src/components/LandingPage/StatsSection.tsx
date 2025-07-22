import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
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

const StatsSection: React.FC = () => (
  <section className="w-full py-16 bg-gray-100 flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-8 text-center">Impact Highlights</h2>
    <div className="flex flex-wrap gap-12 justify-center">
      <div className="text-center">
        <AnimatedCounter target={8591} />
        <div className="text-gray-600 mt-1">Beneficiaries</div>
      </div>
      <div className="text-center">
        <AnimatedCounter target={100} />
        <div className="text-gray-600 mt-1">Volunteers</div>
      </div>
      <div className="text-center">
        <AnimatedCounter target={5} />
        <div className="text-gray-600 mt-1">Countries</div>
      </div>
    </div>
  </section>
);

export default StatsSection;
