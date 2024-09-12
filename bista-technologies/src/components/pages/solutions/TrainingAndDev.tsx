import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TrainingandDevelopment } from './config/TrainingandDevelopment';

export default function TrainingAndDev() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trainingDevElement = document.getElementById('training-dev-trigger');
      if (trainingDevElement) {
        const position = window.scrollY + window.innerHeight;
        const triggerPosition = trainingDevElement.offsetTop;
        setInView(position > triggerPosition);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="training-dev-trigger"
      initial={{ translateX: '-100vw' }}
      animate={{ translateX: '0vw' }}
      transition={{ duration: 0.6 }}
      className="bg-slate-50"
    >
      <div className="space-y-10 lg:mb-16">
        <motion.img
          initial={{ opacity: 0, y: '-50px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mt-5"
          src="https://www.bistatechnologies.com/static/14.png"
          alt="Lead Generation Banner"
          width="1920"
          height="600"
        />
        <h1 className="lg:text-4xl text-2xl font-semibold text-center text-gray-700">
          Our Training and Development Solutions
        </h1>
      </div>

      {TrainingandDevelopment.map(({ heading1, image, description, cardCss, headingCss }, index) => (
        <motion.div
          key={index}
          className={`main-card ${cardCss} mx-auto my-8 lg:flex lg:max-w-5xl bg-white shadow-md rounded-lg overflow-hidden`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.4 }}
        >
          <img
            className="lg:w-1/3 w-full object-cover h-64" 
            src={image}
            alt={heading1}
            style={{ objectFit: 'cover' }} 
          />
          <div className="p-6 flex flex-col justify-between h-full">
            <h2 className={`text-3xl font-semibold ${headingCss} mb-4`}>
              {heading1}
            </h2>
            <p className="text-gray-600 text-lg flex-grow">{description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
