import { motion } from 'framer-motion';
import { ourLeadersAchivement } from './config/ourLeadersconfig';
import MainCard from '../../../../ui/merged_components/service-cards/mainCard/MainCard';
import useObserver from '../../../../shared/hooks/useObserver';
import LeadersCard from './LeadersCard';
export default function OurLeaders() {
    useObserver('our-leaders', 0.4, ['opacity-100', 'gap-x-0'])
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className='bg-slate-50'
        >
            <div className="space-y-10 lg:mb-16">
                <img className="w-full " src="/about-us/our-leaders/1.jpg" />
            </div>

            {ourLeadersAchivement.map(({ heading1, heading2, image, description, cardCss, headingCss }, index) => {
                return (
                    <MainCard
                        key={index}
                        heading1={heading1}
                        heading2={heading2}
                        image={image}
                        description={description}
                        cardCss={cardCss}
                        headingCss={headingCss}
                        observingClass={"our-leaders"}
                    />
                )
            })}
            <LeadersCard />
        </motion.div>
    );
}
