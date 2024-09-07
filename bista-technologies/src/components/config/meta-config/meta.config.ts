
interface metaConfigProps {
    title: string;
    description: string;
    keywords: string;
    author: string;
}
export const metaConfig: Record<string, metaConfigProps> = {
    //Record<string, MetaConfig> means that the metaConfig object has string keys
    "/": {
        title: "Global Staffing Solution | Bista Technologies Inc",
        description: "Discover Bista Technologies' global staffing solutions, core values, and innovative services for growing businesses, including MSME support and team building",
        keywords: "global staffing solutions, Bista Technologies, MSME support, hiring metrics, core values, team building, business services, recruitment, software services",
        author: "Bista Technologies Inc"
    },
    "/services/engineering-services": {
        title: "Engineering Staffing Solutions",
        description: "Explore Bista Technologies' specialized Engineering Staffing Solutions to scale up your team with flexible, on-demand engineers. Learn about our core values, expert services, and how we can help your business grow.",
        keywords: "Civil engineering staffing services USA, Staffing for engineering project managers USA, Full-time engineering staffing solutions USA, Project-based engineering staffing services, US engineering recruitment, Contract staffing for engineering projects USA, Engineering staffing agencies",
        author: "Bista Technologies Inc"
    },
    "": {
        title: "",
        description: "",
        keywords: "",
        author: ""
    },



}
