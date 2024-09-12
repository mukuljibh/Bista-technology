import { motion } from 'framer-motion';
import { StaffAug } from './config/StaffAug';

export default function StaffAugmentation() {
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vw' }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50"
        >
            <div>
                <img className="w-full mt-5 fade-in-up" src="https://www.bistatechnologies.com/static/staffaug(1).jpg" alt="Staff Augmentation Banner" />
            </div>
            <div className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center">
                <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
                    Our Staff Augmentation Solutions
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {StaffAug.map((card, index) => (
                    <motion.div
                        key={index}
                        className={`main-card mx-auto my-8 lg:flex lg:max-w-5xl bg-white shadow-md rounded-lg overflow-hidden hover:bg-sky-50 ${card.cardCss}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            className="lg:w-1/3 w-full object-cover h-64"
                            src={card.imgSrc}
                            alt={card.title}
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="p-6 flex flex-col justify-between h-full">
                            <h2 className={`text-3xl font-semibold ${card.headingCss} mb-4`}>
                                {card.title}
                            </h2>
                            <p className="text-gray-600 text-lg flex-grow">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
