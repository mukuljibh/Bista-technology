import Cards from "./contact-card/Cards"
import ContactForm from "./contact-card/form/ContactForm"
import { motion } from 'framer-motion'
export default function ContactUs() {
    const data = [{ label: "Address", imageSrc: "map-pin.png", text: ["PO box 20018 Dubai"] },
    { label: "Call Us", imageSrc: "phone.png", text: ["+91 9808283188"] },
    { label: "Email", imageSrc: "mail.png", text: ["hr@bistatechnologies.com", "hr@bistatechnologies.com", "hr@bistatechnologies.com", "hr@bistatechnologies.com"] },
    ]
    return (
        <motion.div className="h-max"
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
        >
            <img className="w-full" src="contact-us.jpg" alt="contact"></img>
            <Cards data={data} />
            <ContactForm />
            <img className="lg:h-[32rem] w-full" src="/banner.gif" />

        </motion.div>
    )
}