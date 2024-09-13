import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { StaffingSolution } from './config/Staffingsolution';

export default function StaffingSolutions() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const staffingElement = document.getElementById('staffing-solutions-trigger');
      if (staffingElement) {
        const position = window.scrollY + window.innerHeight;
        const triggerPosition = staffingElement.offsetTop;
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
      id="staffing-solutions-trigger"
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
          src="https://www.bistatechnologies.com/static/staffsol(1).jpg"
          alt="Staffing Solutions Banner"
          width="1920"
          height="600"
        />
        <div className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center">
                <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
                    Our Staffing Solutions
                </h1>
            </div>
      </div>

      {StaffingSolution.map(({ title, description, image, cardCss, headingCss }, index) => (
        <motion.div
          key={index}
          className={`main-card ${cardCss} mx-auto my-8 lg:flex lg:max-w-5xl bg-white  hover:bg-sky-50 shadow-md rounded-lg overflow-hidden`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.4 }}
        >
          <img
            className="lg:w-1/3 w-full object-cover h-64" 
            src={image}
            alt={title}
            style={{ objectFit: 'cover' }} 
          />

          <div className="p-6 flex flex-col justify-between h-full">
            <h2 className={`text-3xl font-semibold ${headingCss} mb-4`}>
              {title}
            </h2>
            <p className="text-gray-600 text-lg flex-grow">{description}</p>
          </div>
        </motion.div>
      ))}
            <img className="lg:h-[32rem] w-full" src="/banner.gif" />
    </motion.div>
  );
}
