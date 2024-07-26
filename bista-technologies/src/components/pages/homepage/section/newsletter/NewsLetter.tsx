export default function NewsLetter() {
    return (

        <div className="flex justify-center  mt-10 ">
            <div className="relative flex justify-center items-center w-11/12   ">
                <img className=" w-full basis-1/2 h-auto rounded-lg" src="https://www.bistatechnologies.com/static/Banner.gif" />
                <div className="absolute inset-0 flex flex-col justify-start text-center p-5 space-y-4  rounded-lg">
                    <h1 className="text-slate-800 font-bold lg:text-3xl text-sm ">Subscribe to Bista Technologies Newsletter</h1>
                    <p className="lg:text-lg text-slate-500 text-xs">Be the first to learn about updates, new features, and other exciting news!</p>
                    <div className="space-x-5 ">
                        <input className="outline-none lg:border-2 lg:w-2/6 w-2/6 lg:h-12 h-7 lg:p-1  rounded-full"></input>
                        <button className="bg-sky-700 hover:bg-purple-500 lg:w-32 rounded-full h-full text-white lg:text-sm  text-xs font-semibold lg:p-2 p-1">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

    )
}   