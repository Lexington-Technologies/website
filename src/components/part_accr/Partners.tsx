import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Partners() {
  const partners = [
    { name: 'CMD', image: '/accr/CMD.png' },
    { name: 'CPN', image: '/accr/CPN.png' },
    { name: 'ICDL', image: '/accr/ICDL.png' },
    { name: 'NCA', image: '/accr/NCA.png' },
    { name: 'img', image: '/part/NARC.png' },
    { name: 'NITDA', image: '/accr/NITDA.png' },
    { name: 'ABU', image: '/part/ABU.png' },
    { name: 'AMCON', image: '/part/AMCON.png' },
    { name: 'ATBU', image: '/part/ATBU.png' },
    { name: 'CBN', image: '/part/CBN.png' },
  ];

  // Double the partners array for seamless looping
  const doubledPartners = [...partners, ...partners];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="partners">
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-serif font-medium text-sky-500 mb-4">
            Partnerships & Accreditations
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={scrollRef}
          className="flex items-center gap-12 overflow-hidden whitespace-nowrap"
          style={{ scrollBehavior: 'smooth' }}
        >
          {doubledPartners.map((partner, index) => (
            <motion.img
              key={`${partner.name}-${index}`}
              src={partner.image}
              alt={partner.name}
              className="h-20 shrink-0"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>

        <div className="flex items-center justify-center py-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={'/partnerships-and-accreditation'}
              className="px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition-colors shadow-lg"
            >
              View All
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </div>
  );
}

export default Partners;
