
export default function NewsLetter() {

    return (
        <div className="relative flex justify-center">
            <img className="w-full rounded-lg" src="https://www.bistatechnologies.com/static/Banner.gif" />
            <div className="absolute lg:top-20  top-2 text-center lg:p-5 p-2 lg:space-y-4 space-y-2  rounded-lg">
                <h1 className="text-slate-800 font-bold lg:text-3xl text-sm ">Subscribe to Bista Technologies Newsletter</h1>
                <p className="lg:text-lg text-slate-500 text-xs">Be the first to learn about updates, new features, and other exciting news! <br />  Type in your email!</p>
                <div className="space-x-5 h-auto w-auto flex relative justify-end">
                    <input className="outline-none p lg:border w-full text-xs pl-5 pr-36 lg:h-12 h-7 rounded-full"
                        placeholder="enter your e-mail"
                    ></input>
                    <button className="absolute bg-sky-700 hover:bg-purple-500 lg:w-32 rounded-full h-full text-white lg:text-sm transition-all duration-300 text-xs font-semibold lg:p-2 p-1">Subscribe</button>
                </div>
            </div>
            {/* <div className="absolute w-full lg:h-56 h-16 md:h-32  bottom-0 flex justify-center ">
                <div className=" w-full  p-64  rounded-t-full bg-gray-100">
                </div>
            </div>*/}

        </div>


    )
}   