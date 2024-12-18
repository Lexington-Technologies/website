import { motion } from 'framer-motion';
import { BackgroundSlider } from './BackgroundSlider';

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 relative overflow-hidden"
    >
      <BackgroundSlider />
      
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative ">
        {/* Text Content */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight cursor-default text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
            ...Bridging Ideas, Connecting Solutions
          </h1>
          <p className="text-lg text-gray-200 mb-10 cursor-default leading-relaxed">
            Lexington Technologies is a cutting-edge information technology firm that specializes in delivering innovative solutions to public and private organizations.
          </p>
          
          <div className="flex gap-4 ">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none"
            >
               Our solutions
            </motion.button>
          </div>

          {/* Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-500/30 cursor-pointer rounded-full blur-3xl"
          />
        </motion.div>
        
      </div>

      {/* Background Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </motion.div>
      
    </motion.div>
  );
}

export default Hero;