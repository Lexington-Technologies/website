import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Briefcase } from 'lucide-react';
import { useInView } from './hooks/useInView';

interface CounterProps {
  end: number;
  label: string;
  icon: React.ReactNode;
  duration?: number;
}

function Counter({ end, label, icon, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-xl transform transition-transform duration-300"
    >
      <div className="text-blue-500 mb-4">{icon}</div>
      <div className="text-4xl font-bold text-gray-800 mb-2">{count}+</div>
      <div className="text-gray-600 text-center">{label}</div>
    </motion.div>
  );
}

export function Achievements() {
  const achievements = [
    {
      icon: <Calendar className="w-8 h-8" />,
      end: 10,
      label: 'Years of Excellence',
      duration: 2000,
    },
    {
      icon: <Users className="w-8 h-8" />,
      end: 50,
      label: 'Satisfied Clients',
      duration: 2500,
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      end: 100,
      label: 'Projects Delivered',
      duration: 3000,
    },
    {
      icon: <Award className="w-8 h-8" />,
      end: 25,
      label: 'Industry Awards',
      duration: 2800,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-br from-sky-50 to-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 mb-6">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the milestones and accolades we’ve earned through years of dedication to excellence and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <Counter
              key={index}
              end={achievement.end}
              label={achievement.label}
              icon={achievement.icon}
              duration={achievement.duration}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Achievements;