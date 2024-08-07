import { motion } from 'framer-motion'
export default function NonItStaffing() {
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
        >
            welcome to non It staffing
        </motion.div>
    )
}