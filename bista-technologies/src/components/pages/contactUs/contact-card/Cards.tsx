
type data = {
    label: string,
    imageSrc: string,
    text: string[]
}
type cardsProps = {
    data: data[]
}

export default function Cards({ data }: cardsProps) {
    return (
        <div className="flex flex-col items-center bg-gray-100 ">
            <div className="mt-10 rounded-xl pb-20 pt-10 lg:text-md text-sm bg-white shadow-md my-10 w-4/5 space-y-10">
                <h1 className="font-semibold text-2xl text-center">We are here for you</h1>
                <div className="lg:flex lg:space-y-0 lg:pl-0 pl-4 space-y-10 justify-evenly">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className=" flex gap-2 ">
                                <div>
                                    <img src={item.imageSrc} className="lg:w-12 w-10" />
                                </div>
                                <div>
                                    <h1 className="font-semibold text-lg">{item.label}</h1>

                                    {item.text.map((subItems, index) => {
                                        return (
                                            <p key={index} className="hover:text-sky-700 cursor-pointer">{subItems}</p>
                                        )
                                    })}
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}