
type CardsProps = {
    heading: string
    description: string
    imgSrc: string
}
/*<div className="border-2 relative border-red-700 w-72 h-72 ">
                <div className="border-2 absolute w-full bottom-0 h-32  transition-all	 border-black">

                </div>
            </div> */
export default function ServiceCards({ heading, description, imgSrc }: CardsProps) {
    return (

        <div className="border-2 relative border-indigo-700 rounded-lg w-72 shadow-2xl " >

            <div className="p-5">
                <div className="flex justify-center " >

                    <img className="lg:w-36 w-28 border-solid border-2 border-black rounded-full" src={imgSrc} />
                </div>
                <div >
                    <h1 className="lg:text-2xl  text-xl font-semibold pt-3 text-center">{heading}</h1>
                    <p className="lg:text-lg text-center text-md pt-2">{description}</p>
                </div>
            </div>

        </div>
    )
}