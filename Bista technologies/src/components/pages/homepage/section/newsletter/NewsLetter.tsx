export default function NewsLetter() {
    return (

        <div className="flex justify-center relative mt-10">
            <img className="w-5/6 basis-1/2 h-auto rounded-lg" src="https://www.bistatechnologies.com/static/Banner.gif" />


            <div className="absolute inset-0 flex flex-col justify-center text-lg text-center p-5 space-y-4 bg-opacity-30 bg-white rounded-lg">
                <h1 className="text-indigo-800 lg:text-2xl text-sm font-semibold ">Subscribe to Bista Technologies Newsletter</h1>
                <p className="lg:text-lg text-xs">Be the first to learn about updates, new features, and other exciting news!</p>
                <div className="space-x-5">
                    <input className="outline-none lg:border-2 lg:w-2/6 lg:p-1  rounded-lg"></input>
                    <button className="bg-indigo-700 text-white lg:text-sm  text-xs font-semibold rounded-lg lg:p-2 p-1">Subscribe</button>
                </div>
            </div>

        </div>

    )
}