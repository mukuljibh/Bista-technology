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

  const leadGenData = [
    {
      title: 'B2B Lead Generation:',
      description:
        'We provide targeted B2B lead generation services to help businesses identify and connect with potential clients and partners. Our strategic approach ensures high-quality leads that align with your business objectives.',
      imgSrc: 'https://www.bistatechnologies.com/static/leadgen(2).jpg',
    },
    {
      title: 'Market Research:',
      description:
        'Our team conducts in-depth market research to identify emerging trends, potential markets, and key decision-makers. This data-driven approach helps us generate leads that are more likely to convert into valuable business opportunities.',
      imgSrc: 'https://www.bistatechnologies.com/static/leadgen(3).jpg',
    },
    {
      title: 'Digital Marketing Campaigns:',
      description:
        'Leveraging the latest digital marketing techniques, we create and execute campaigns designed to attract and engage potential leads. From SEO to social media marketing, our strategies drive traffic and generate high-quality leads.',
      imgSrc: 'https://www.bistatechnologies.com/static/leadgen(4).jpg',
    },
    {
      title: 'Database Management:',
      description:
        'We manage and maintain comprehensive databases of potential leads, ensuring that your sales team has access to up-to-date information and valuable insights. Our database management services help streamline the lead generation process and improve conversion rates.',
      imgSrc: 'https://www.bistatechnologies.com/static/leadgen(5).jpg',
    },
  ];

  return (
    <motion.div
      id="lead-gen-trigger"
      className="lead-generation-container"
    >
      <div>
        <motion.img
          initial={{ opacity: 0, y: '-50px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mt-5 fade-in-up"
          src="https://www.bistatechnologies.com/static/leadgen(1).jpg"
          alt="Lead Generation Banner"
        />
      </div>
      <motion.div
        className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
          Our Lead Generation Solutions
        </h1>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-6">
        {leadGenData.map((item, index) => (
          <motion.div
            key={index}
            className="max-w-md rounded overflow-hidden shadow-lg card lg:w-1/3 transform transition-transform duration-300 hover:shadow-xl border-b-2 border-transparent hover:border-sky-900 bg-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
            transition={{ duration: 0.4 }} // Shortened transition duration
            whileTap={{ scale: 0.95 }} // Add tapping animation here
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)', backgroundColor: '#f0f4ff' }} // Add hover effect here
          >
            <img className="w-full" src={item.imgSrc} alt={item.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
