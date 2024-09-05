import NewsLetter from "./newsletter/NewsLetter"
import useObserver from "../../../shared/hooks/useObserver"
import VisionStatementVideo from "./vision-statement-video/VisionStatementVideo"
import MsmeBanner from "./msme-banner/MsmeBanner"
import { hiringData } from "./config/homepage.config"
import { motion } from "framer-motion"
import HiringMetrics from './hiring-metrics/HiringMetrics'
import CoreValuesBanner from "./core-values-banner/CoreValuesBanner"
import OurServices from "./our-services/OurServices"
import QuickServicesBar from "./quick-service-bar/QuickServicesBar"
import TeamBuildingBanner from "./team-building-banner/TeamBuildingBanner"
export default function HomePage() {
    const { isCardVisible: HiringMetricsVisible } = useObserver("hiringMetrics", 0.5, ['opacity-100'])
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
        >
            <VisionStatementVideo />
            <QuickServicesBar />
            <MsmeBanner />
            <OurServices />

            <div className="hiringMetrics z-30 relative lg:py-20 px-5 my-10 lg:flex lg:space-y-0 justify-center gap-10 space-y-10">
                {HiringMetricsVisible && hiringData.map((item, index) => {
                    return (
                        <HiringMetrics item={item} key={index} />
                    )
                })}
            </div>
            <TeamBuildingBanner />
            <CoreValuesBanner />
            <NewsLetter />
        </motion.div >
    )
}