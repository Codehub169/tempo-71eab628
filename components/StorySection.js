import { motion } from 'framer-motion';

const StorySection = () => {
  const whoKnewVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.4 }
    }
  };

  const textBlockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section 
      id="story"
      className="min-h-screen bg-opacity-50 py-20 md:py-32 px-6 md:px-8 flex flex-col items-center justify-center snap-start"
    >
      <motion.div 
        className="max-w-3xl text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }} // Trigger when 25% of the section is in view
        transition={{ staggerChildren: 0.25 }}
      >
        <motion.h2 
          variants={textBlockVariants}
          className="text-3xl md:text-4xl font-secondary text-gray-800 mb-6"
        >
          The <span className="text-pink-500 font-semibold">hue</span><span className="text-purple-500 font-semibold">neu</span> Story
        </motion.h2>
        
        <motion.p 
          variants={textBlockVariants}
          className="text-lg md:text-xl font-primary text-gray-700 leading-relaxed"
        >
          At hueneu, we believe in the power of balance. <strong className="font-medium text-pink-500">“Hue”</strong> represents the vibrant bursts of creativity, the unexpected color, the spark that ignites a story. <strong className="font-medium text-purple-500">“Neu”</strong> signifies the grounding neutrality, the calm foundation, the intentional space where ideas can breathe and take shape.
        </motion.p>

        <motion.p 
          variants={textBlockVariants}
          className="text-lg md:text-xl font-primary text-gray-700 leading-relaxed"
        >
          It's this dance between the vivid and the serene that defines our approach. We create designs that are quiet but bold, calm yet mysterious, and always deeply evocative.
        </motion.p>

        <motion.div 
          className="mt-12 inline-block"
          variants={whoKnewVariants} // This will be animated by the parent's whileInView and staggerChildren
        >
          <div className="p-6 md:p-8 bg-white rounded-xl shadow-large transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl md:text-3xl font-secondary text-purple-600">
              And sometimes, it’s that unexpected twist...
            </h3>
            <p className="mt-2 text-5xl md:text-6xl font-bold font-secondary tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 py-1">
              Who Knew?
            </p>
            <p className="mt-3 text-sm text-gray-500">
              (That's the magic we aim for!)
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StorySection;
