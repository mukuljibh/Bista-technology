import { Helmet } from "react-helmet"
import { useLocation } from "react-router-dom"
import { metaConfig } from "../../config/meta-config/meta.config"

type pageWrapperProps = {
    children: React.ReactNode
}

export default function MetaWrapper({ children }: pageWrapperProps) {
    const location = useLocation()
    const metaTags = metaConfig[location['pathname']]
    return (
        <div>
            <Helmet>
                <title>{metaTags?.title || "Bista Technologies"}</title>
                <meta name="description" content={metaTags?.description || "null"} />
                <meta name="keywords" content={metaTags?.keywords || "null"} />
                <meta name="author" content={metaTags?.author || "null"} />
            </Helmet>
            {children}
        </div>)
}