import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, MessageSquare, User, Mail } from 'lucide-react';

const formContainerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen w-full py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center snap-start bg-gradient-to-tl from-pink-50 via-purple-50 to-blue-50"
    >
      <motion.div 
        className="w-full max-w-2xl"
        variants={formContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Title */}
        <motion.h2 
          variants={formItemVariants}
          className="text-4xl md:text-5xl font-poppins font-semibold text-center mb-4 text-purple-600"
        >
          Let’s Work Together
        </motion.h2>
        <motion.p 
          variants={formItemVariants}
          className="text-lg font-inter text-neutral-700 text-center mb-12"
        >
          Have a story waiting to be told? Reach out and let's craft its aesthetic.
        </motion.p>

        {/* Contact Form - Styled like a note/letter */}
        <motion.form 
          variants={formItemVariants} 
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-2xl space-y-6 border border-purple-100"
          style={{ boxShadow: '0 10px 25px rgba(109, 40, 217, 0.1), 0 0px 10px rgba(109, 40, 217, 0.05)'}} // Custom shadow for 'letter' feel
        >
          {/* Name Input */}
          <motion.div variants={formItemVariants} className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
            <input 
              type="text" 
              name="name" 
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 font-inter bg-transparent border-b-2 border-purple-200 focus:border-pink-500 text-neutral-700 placeholder-neutral-500 focus:outline-none transition-colors duration-300"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div variants={formItemVariants} className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
            <input 
              type="email" 
              name="email" 
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 font-inter bg-transparent border-b-2 border-purple-200 focus:border-pink-500 text-neutral-700 placeholder-neutral-500 focus:outline-none transition-colors duration-300"
            />
          </motion.div>

          {/* Message Textarea */}
          <motion.div variants={formItemVariants} className="relative">
            <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-purple-400" />
            <textarea 
              name="message" 
              id="message"
              placeholder="Your Story / Project Idea"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-3 font-inter bg-transparent border-b-2 border-purple-200 focus:border-pink-500 text-neutral-700 placeholder-neutral-500 focus:outline-none transition-colors duration-300 resize-none"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button 
            variants={formItemVariants}
            type="submit" 
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 font-poppins font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.03, boxShadow: '0px 8px 20px rgba(236, 72, 153, 0.4)'}}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <motion.div 
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  ></motion.div>
                Sending...
              </>
            ) : (
              <>
                Let’s design your story <Send size={18} />
              </>
            )}
          </motion.button>

          {/* Submission Status */}
          {submitStatus === 'success' && (
            <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-center text-green-600 font-inter">Message sent successfully! We'll be in touch.</motion.p>
          )}
          {submitStatus === 'error' && (
            <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-center text-red-500 font-inter">Something went wrong. Please try again.</motion.p>
          )}
        </motion.form>

        {/* Instagram Link */}
        <motion.div variants={formItemVariants} className="text-center mt-12">
          <a 
            href="https://instagram.com/hueneu_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 font-inter text-purple-600 hover:text-pink-500 transition-colors duration-300 group"
          >
            <Instagram size={20} /> 
            <span className="group-hover:underline">@hueneu_ on Instagram</span>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ContactSection;
