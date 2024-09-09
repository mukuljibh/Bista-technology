import { Link } from "react-router-dom"
type submenu = {
    text: string
    link: string
}
type FooterElementsProps = {
    label: string
    submenu?: submenu[]
}

export default function FooterElement({ label, submenu }: FooterElementsProps) {
    return (
        <div className="space-y-5 mt-10">
            <h1 className="font-semibold text-lg">{label}</h1>
            <div className="text-sm text-gray-600 lg:space-y-5 space-y-3">
                {submenu?.map((menu, index) => {
                    return (
                        <div key={index} className="hover:text-sky-600">
                            <Link to={menu.link} >{menu.text}</Link>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}