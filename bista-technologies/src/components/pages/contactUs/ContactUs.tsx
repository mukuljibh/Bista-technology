import Cards from "./contact-card/Cards"
import ContactForm from "./contact-card/form/ContactForm"
export default function ContactUs() {
    const data = [{ label: "Address", imageSrc: "map-pin.png", text: ["PO box 20018 Dubai"] },
    { label: "Call Us", imageSrc: "phone.png", text: ["+91 9808283188"] },
    { label: "Email", imageSrc: "mail.png", text: ["hr@bistatechnologies.com", "hr@bistatechnologies.com", "hr@bistatechnologies.com", "hr@bistatechnologies.com"] },
    ]
    return (
        <div className="">
            <img className="w-full" src="contact-us.jpg" alt="contact"></img>
            <Cards data={data} />
            <ContactForm />
            <img className="w-full rounded-lg" src="https://www.bistatechnologies.com/static/Banner.gif" />
        </div>
    )
}