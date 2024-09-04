import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LeadGeneration() {
  const [inView, setInView] = useState(false);

  // Check if the component is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const leadGenElement = document.getElementById('lead-gen-trigger');
      
      // Check if the element exists
      if (leadGenElement) {
        const position = window.scrollY + window.innerHeight;
        const triggerPosition = leadGenElement.offsetTop;

        if (position > triggerPosition) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="lead-gen-trigger"
      className="lead-generation-container"
    >
      <div>
        <motion.img
          initial={{ opacity: 0, y: '-50px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full mt-5 fade-in-up"
          src="https://www.bistatechnologies.com/static/leadgen(1).jpg"
          alt="Lead Generation Banner"
        />
      </div>
      <motion.div
        className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
          Our Lead Generation Solutions
        </h1>
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6 lg:justify-center lg:w-full">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up lg:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-b-2 border-transparent hover:border-sky-900"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
            transition={{ duration: 0.6, delay: 0.5 + index  }}
          >
            <img className="w-full" src={`https://www.bistatechnologies.com/static/leadgen(${index + 2}).jpg`} alt={`Lead Generation ${index + 1}`} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {index === 0 ? 'B2B Lead Generation:' : index === 1 ? 'Market Research:' : 'B2B Lead Generation:'}
              </div>
              <p className="text-gray-700 text-base">
                {index === 0
                  ? 'We provide targeted B2B lead generation services to help businesses identify and connect with potential clients and partners. Our strategic approach ensures high-quality leads that align with your business objectives.'
                  : index === 1
                  ? 'Our team conducts in-depth market research to identify emerging trends, potential markets, and key decision-makers. This data-driven approach helps us generate leads that are more likely to convert into valuable business opportunities.'
                  : 'We provide targeted B2B lead generation services to help businesses identify and connect with potential clients and partners. Our strategic approach ensures high-quality leads that align with your business objectives.'}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
