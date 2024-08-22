import { motion } from 'framer-motion'

export default function MarketResearch() {
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
        >
            <div>
                <img className="w-full mt-5 fade-in-up" src="https://www.bistatechnologies.com/static/mrktrsrch(1).jpg" alt="Lead Generation Banner" />
            </div>
            <div className="bg-white mt-10 text-white p-6 rounded-lg shadow-md mb-4 flex items-center justify-center">
                <h1 className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text fade-in-up">
                    Our Market Research Solutions
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/leadgen(2).jpg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Industry Analysis:</div>
                        <p className="text-gray-700 text-base">
                            We conduct thorough industry analysis to help businesses understand market dynamics, identify opportunities, and stay ahead of competitors. Our reports provide insights into industry trends, market size, and growth potential.                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/mrktrsrch(3).jpg" alt="Market Research" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Competitive Analysis:</div>
                        <p className="text-gray-700 text-base">
                            Our competitive analysis services enable businesses to understand their competition's strengths and weaknesses. We provide detailed competitor profiles, market positioning, and strategic insights to help you develop effective business strategies.                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/mrktrsrch(4).jpeg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Customer Insights:</div>
                        <p className="text-gray-700 text-base">
                            We gather and analyze customer data to provide insights into customer behavior, preferences, and needs. Our customer insights help businesses tailor their products, services, and marketing strategies to better meet their target audience’s demands.                        </p>
                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/mrktrsrch(5).jpg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Market Entry Strategy:</div>
                        <p className="text-gray-700 text-base">
                            Our market entry strategy services help businesses navigate new markets. We provide comprehensive market assessments, entry barriers analysis, and strategic recommendations to ensure a successful market entry.
                        </p>                    </div>
                </div>
                <div className="max-w-md rounded overflow-hidden shadow-lg card fade-in-up">
                    <img className="w-full" src="https://www.bistatechnologies.com/static/mrktrsrch(6).jpeg" alt="B2B Lead Generation" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Product Research:</div>
                        <p className="text-gray-700 text-base">
                            We offer product research services to help businesses develop and refine their product offerings. Our research covers product feasibility, market demand, pricing strategy, and more to ensure your product meets market needs.
                        </p>                    </div>
                </div>
            </div>
        </motion.div>
    );
}
