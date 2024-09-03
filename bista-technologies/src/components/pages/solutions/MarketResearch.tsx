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
        initial={{ scale: 0, rotate: 90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center"
      >
        <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
          Our Lead Generation Solutions
        </h1>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8">
        {[
          {
            title: 'B2B Lead Generation',
            img: 'https://www.bistatechnologies.com/static/leadgen(2).jpg',
            description: 'We provide targeted B2B lead generation services to help businesses identify and connect with potential clients and partners. Our strategic approach ensures high-quality leads that align with your business objectives.'
          },
          {
            title: 'Market Research',
            img: 'https://www.bistatechnologies.com/static/leadgen(4).jpg',
            description: 'Our team conducts in-depth market research to identify emerging trends, potential markets, and key decision-makers. This data-driven approach helps us generate leads that are more likely to convert into valuable business opportunities.'
          },
          {
            title: 'Lead Qualification',
            img: 'https://www.bistatechnologies.com/static/leadgen(2).jpg',
            description: 'We assess leads based on specific criteria to ensure that your sales team focuses on the most promising prospects, saving time and resources.'
          }
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0, y: 20 }} // Start slightly smaller and below
            animate={{ scale: 1, opacity: 1, y: 0 }} // End at normal size and position
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }} // Staggered delay based on index
            className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up"
          >
            <img className="w-full" src={card.img} alt={card.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}:</div>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: '-100%', rotate: 360 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="design-icon-container flex justify-center mt-10"
      >
        <svg
          className="text-blue-500 text-4xl"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M13.379 15.433a3.75 3.75 0 01-1.982 2.276C11.169 17.75 9.5 17.75 7.5 17.75a3.75 3.75 0 01-3.75-3.75v-7.5C3.75 6.25 5.379 4.667 7.5 4.667c1.931 0 3.75 1.58 3.75 3.75v7.5zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
