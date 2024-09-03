import { motion } from 'framer-motion';

export default function LeadGeneration() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
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
        initial={{ opacity: 0, y: '-50px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center"
      >
        <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
          Our Lead Generation Solutions
        </h1>
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-6 lg:justify-center lg:w-full">
        <motion.div
          initial={{ opacity: 0, x: '-100px' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up lg:w-1/3"
        >
          <img className="w-full" src="https://www.bistatechnologies.com/static/leadgen(2).jpg" alt="B2B Lead Generation" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">B2B Lead Generation:</div>
            <p className="text-gray-700 text-base">
              We provide targeted B2B lead generation services to help businesses identify and connect with potential clients and partners. Our strategic approach ensures high-quality leads that align with your business objectives.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: '100px' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up lg:w-1/3"
        >
          <img className="w-full" src="https://www.bistatechnologies.com/static/leadgen(4).jpg" alt="Market Research" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Market Research:</div>
            <p className="text-gray-700 text-base">
              Our team conducts in-depth market research to identify emerging trends, potential markets, and key decision-makers. This data-driven approach helps us generate leads that are more likely to convert into valuable business opportunities.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '100px' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up lg:w-1/3"
        >
          <img className="w-full" src="https://www.bistatechnologies.com/static/leadgen(2).jpg" alt="B2B Lead Generation" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">B2B Lead Generation:</div>
            <p className="text-gray-700 text-base">
              We provide targeted B2B lead generation services to help businesses identify and connect with potential clients and partners. Our strategic approach ensures high-quality leads that align with your business objectives.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
