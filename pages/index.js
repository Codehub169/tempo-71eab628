import Head from 'next/head';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import ServicesSection from '../components/ServicesSection';
// Import other sections once they are created
// import WhyHueneuSection from '../components/WhyHueneuSection';
// import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>hueneu - Where stories find their aesthetic.</title>
        <meta name="description" content="hueneu is a graphic design studio. Designs that whisper loud stories." />
        <link rel="icon" href="/favicon.ico" /> {/* Assuming a favicon might be added later */}
      </Head>

      {/* Main container with the specified background gradient */}
      <main className="font-primary bg-gradient-to-br from-[#fefefe] via-[#fdf4ff] to-[#f0f9ff] min-h-screen overflow-x-hidden text-gray-700">
        <HeroSection />
        <StorySection />
        <ServicesSection />
        {/* Placeholder for WhyHueneuSection - to be implemented in a future batch */}
        <section id="why-hueneu" className="min-h-[60vh] py-16 md:py-24 px-8 flex flex-col items-center justify-center snap-start">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-secondary text-gray-800 mb-6">Why hueneu?</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Content for this section is coming soon. We'll share more about our emotional brand pitch and why our calm, mysterious, and balanced approach makes a difference.
            </p>
          </div>
        </section>
        
        {/* Placeholder for ContactSection - to be implemented in a future batch */}
        <section id="contact" className="min-h-[70vh] py-16 md:py-24 px-8 bg-gray-100 flex flex-col items-center justify-center snap-start">
          <div className="max-w-xl text-center">
            <h2 className="text-3xl md:text-4xl font-secondary text-gray-800 mb-6">Let’s Work Together</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Our contact form, styled like a friendly note, will be available here soon. Get ready to design your story with us!
            </p>
            <p className="text-md text-purple-600">Instagram: @hueneu_</p>
          </div>
        </section>
      </main>
    </>
  );
}
