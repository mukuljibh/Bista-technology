const mainCardsConfig = [
    {
        heading1: "Engineering Expertise",
        heading2: "Industry Expertise",
        image: { imageSrc: "/services/eng-services/2.webp", alt: "Industry Expertise logo" },
        description: "With extensive experience across various engineering sectors, we specialize in providing talent for civil, mechanical, electrical, and software engineering. Our deep industry knowledge ensures that we understand the unique requirements of each field, allowing us to match you with professionals who bring both technical expertise and practical experience. Whether your projects involve infrastructure development, complex machinery, electrical systems, or cutting-edge software solutions, we deliver candidates who are well-versed in their respective domains and equipped to drive your engineering initiatives forward.",
        cardCss: "lg:flex bg-slate-50", headingCss: "text-sky-600 bg-sky-100"
    },
    {
        heading1: "Dynamic Staffing",
        heading2: "Contract Staffing",
        image: { imageSrc: "/services/eng-services/3.webp", alt: "contract staffing logo" },
        description: "Our contract staffing services provide skilled engineers with the opportunity to work on diverse projects across the country. This flexible approach not only addresses your company's critical staffing needs but also offers engineers valuable professional experiences. By engaging with our contract staffing solutions, companies can efficiently manage project demands and scale their teams as needed, while engineers gain exposure to a variety of industries and work environments. This dynamic staffing model ensures that both your organization and the engineers benefit from a tailored, responsive approach to workforce management.",
        cardCss: "lg:flex flex-row-reverse bg-purple-50", headingCss: "text-orange-500 bg-orange-200"
    },
    {
        heading1: "Project Leadership",
        heading2: "Project Management",
        image: { imageSrc: "/services/eng-services/4.webp", alt: "project management logo" },
        description: " Our project management services are designed to ensure that your engineering projects are executed efficiently, completed on time, and stay within budget. We provide experienced and skilled project managers who excel in leading teams, coordinating resources, and navigating project challenges. Our project managers bring a wealth of experience to guide your projects from inception to completion, applying proven methodologies and industry best practices to achieve your goals. By leveraging our project management expertise, you gain a strategic partner committed to delivering successful project outcomes and maximizing your investment",
        cardCss: "lg:flex bg-slate-50", headingCss: "text-green-600 bg-green-100"
    },
]

const cardsConfig = [
    {
        heading: "Expertise", description: "Years of experience in the healthcare staffing industry.", image: { imageSrc: "/services/eng-services/5.webp", alt: "expertise logo" },
        css: "border-2 hover:border-gray-400", animationTime: 0
    },
    {
        heading: "Quality Assurance", description: "Rigorous screening process for the best candidates.", image: { imageSrc: "/services/eng-services/6.webp", alt: "QA logo" },
        css: "border-2 hover:border-green-700", animationTime: 200
    },
    {
        heading: "Personalized Service", description: "Understanding your specific needs to find the right match.", image: { imageSrc: "/services/eng-services/7.webp", alt: "personalized service logo" },
        css: "border-2 hover:border-sky-700", animationTime: 300
    },
    {
        heading: "24/7 Support", description: "Available around the clock for any staffing emergencies.", image: { imageSrc: "/services/eng-services/8.webp", alt: "support logo" },
        css: `border-2 hover:border-orange-600`, animationTime: 400
    }
]
export { mainCardsConfig, cardsConfig }