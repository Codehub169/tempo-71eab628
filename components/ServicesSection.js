import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    icon: '/images/icon-branding.svg',
    name: 'Branding',
    description: 'Crafting identities that tell your unique story.',
  },
  {
    icon: '/images/icon-packaging.svg',
    name: 'Packaging',
    description: 'Packaging, but make it poetic (and practical!).',
  },
  {
    icon: '/images/icon-social-media.svg',
    name: 'Social Media',
    description: 'Curating digital narratives that captivate & connect.',
  },
  {
    icon: '/images/icon-stationery.svg',
    name: 'Stationery',
    description: 'Tangible touches that leave a lasting impression.',
  },
  {
    icon: '/images/icon-coffee-table-books.svg',
    name: 'Coffee Table Books',
    description: 'Designing beautiful keepsakes for cherished stories.',
  },
  {
    icon: '/images/icon-creative-projects.svg',
    name: 'Creative Projects',
    description: 'Exploring unique ventures with heart & imagination.',
  },
];

const ServicesSection = () => {
  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section 
      id="services"
      className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 snap-start"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-secondary text-gray-800 mb-4"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          What We Do
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mb-12 md:mb-16 max-w-2xl mx-auto"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }} // Slight delay for paragraph
        >
          We weave stories into visuals, crafting experiences that resonate. Here’s how we can help bring your narrative to life:
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={sectionContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of grid is visible
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              className="bg-white p-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 ease-out flex flex-col items-center text-center group transform hover:scale-[1.03]"
              variants={cardVariants}
            >
              <div className="mb-5 p-3 bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 rounded-full group-hover:scale-110 transition-transform duration-300 ease-in-out">
                <Image 
                  src={service.icon} 
                  alt={`${service.name} icon - line visual`}
                  width={48} 
                  height={48}
                  className="opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-xl font-secondary text-gray-800 mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 font-primary leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
