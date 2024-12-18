import { motion } from 'framer-motion';
import ContentCard from '../ContentCard';
// import { Link } from 'react-router-dom';

export function VisMis() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (

 <section id="about">
        <div id="mission">
              <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true,  // Ensures animation triggers only once
        amount: 0.2  // Triggers when 20% of the component is in view
      }}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-blue-50 relative"
      >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ 
            once: true,
            amount: 0.5  // Triggers when half of the header is in view
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
            With a keen focus on leveraging emerging technologies, we provide our clients with unique top-notch solutions tailored to their needs. We transform businesses and government processes into futuristic ecosystems through our expertise.
          </p>
          
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-12 items-center"
        >
          {/* Vision Section */}
          <motion.div 
            variants={cardVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ 
              once: true,
              amount: 0.5  // Triggers when half of the card is in view
            }}
          >
            <ContentCard
              title="Our Vision"
              description="To lead the way in digital transformation through innovative technologies."
              imageSrc="/public/eye.png"
              imageAlt="Vision icon"
              className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
              />
              
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            variants={cardVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ 
              once: true,
              amount: 0.5 
            }}
            >
            <ContentCard
              title="Our Mission"
              description="To become a global leader in driving the future of technological advancement."
              imageSrc="/public/target.png"
              imageAlt="Mission icon"
              className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl md:translate-y-10"
            />
            
          </motion.div>

          {/* Values Section */}
          <motion.div 
            variants={cardVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ 
              once: true,
              amount: 0.5 
            }}
          >
            <ContentCard
              title="Our Values"
              description="Embracing creativity to drive groundbreaking solutions."
              imageSrc="/public/value.png"
              imageAlt="Values icon"
              className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Background Decoration */}
        {/* <div className="flex items-center justify-center py-10 hover:opacity-100 transition-opacity">
          <Link to={'/vision-mission-value'} className="px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition-colors">
            View more
          </Link>
        </div> */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>
      </div>
    </motion.div>
  </div>

  </section>
  );
}

export default VisMis;