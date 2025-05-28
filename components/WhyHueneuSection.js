import { motion } from 'framer-motion';
import { Briefcase, Zap, Smile } from 'lucide-react'; // Example icons, replace as needed

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const poeticCopyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3 + 0.5, // Stagger delay after title
      duration: 0.6,
    },
  }),
};

const WhyHueneuSection = () => {
  const poeticLines = [
    "We don’t just design—we decode stories.",
    "Designs that speak quietly but stay with you.",
    "We find the calm in chaos, the hue in neutrality.",
    "Mystery isn't a void, it's an invitation.",
    "Balance isn't static, it's a delicate dance."
  ];

  return (
    <section 
      id="why-hueneu" 
      className="min-h-screen w-full py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center snap-start bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 text-neutral-800"
    >
      <motion.div 
        className="max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-poppins font-semibold mb-8 text-purple-600"
          variants={textVariant}
        >
          Why <span className="text-pink-500">hueneu</span>?
        </motion.h2>

        {/* Poetic Copy */}
        <div className="space-y-6 mb-12">
          {poeticLines.map((line, index) => (
            <motion.p 
              key={index} 
              className="text-xl md:text-2xl font-inter text-neutral-700 leading-relaxed"
              custom={index}
              variants={poeticCopyVariants}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Highlight Cards (Optional - for calm, mystery, balance) */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          variants={textVariant} // Reuse for a subtle fade-in of the group
        >
          {[{
            icon: <Smile size={36} className="text-cyan-500 mb-3" />,
            title: "Calm Approach",
            description: "Thoughtful processes for serene collaborations."
          }, {
            icon: <Zap size={36} className="text-pink-500 mb-3" />,
            title: "Mysterious Spark",
            description: "Unveiling unexpected beauty in every design."
          }, {
            icon: <Briefcase size={36} className="text-purple-500 mb-3" />,
            title: "Balanced Aesthetics",
            description: "Harmonizing creativity with clarity and purpose."
          }].map((item, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              variants={cardVariants}
            >
              {item.icon}
              <h3 className="text-lg font-poppins font-semibold text-purple-600 mb-2">{item.title}</h3>
              <p className="text-sm font-inter text-neutral-600 text-center">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default WhyHueneuSection;
