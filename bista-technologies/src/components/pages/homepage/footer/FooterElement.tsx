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
            <div className="lg:space-y-5 space-y-3 text-sm text-gray-600 ">
                {submenu?.map((menu, index) => {
                    return <p key={index}>{menu.text}</p>
                })}
            </div>
        </div>
    )
}