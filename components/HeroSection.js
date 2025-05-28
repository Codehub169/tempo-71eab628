import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, duration: 0.8 } },
  };

  const logoVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.6, 0.01, -0.05, 0.95], delay: 0.2 } 
    },
  };

  return (
    <motion.section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative snap-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={logoVariants} className="mb-8">
        <Image 
          src="/images/hueneu-logo.svg" 
          alt="hueneu Logo - abstract H and N combined"
          width={200} 
          height={100} 
          priority // Ensures LCP is optimized
        />
      </motion.div>

      <motion.h1 
        variants={itemVariants} 
        className="text-3xl sm:text-4xl md:text-5xl font-secondary text-gray-800 mb-4 leading-tight"
      >
        Where stories find their aesthetic.
      </motion.h1>

      <motion.p 
        variants={itemVariants} 
        className="text-lg md:text-xl font-primary text-gray-600 mb-12 max-w-md mx-auto"
      >
        Designs that whisper loud stories.
      </motion.p>

      <motion.div 
        variants={itemVariants} // Re-using itemVariants for initial appearance
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, -8, 0, -8, 0], // More playful bounce
          transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <a href="#story" aria-label="Scroll to The hueneu Story section">
          <ChevronDown size={36} className="text-purple-500 hover:text-pink-500 transition-colors duration-300" />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
