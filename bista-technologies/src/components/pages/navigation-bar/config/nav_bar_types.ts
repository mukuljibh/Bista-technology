type submenu = {
    text: string
    link: string
}
export type navProps = {
    label: string
    submenu?: submenu[]
    directPath?: string
    toggleAnimation?: () => void
}


