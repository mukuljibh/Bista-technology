import { OurStory, Storydetail, Keyheighlights } from './config/OurStory';

export default function OurStoryLine() {
    return (
        <div className="container mx-auto px-4 lg:px-12">
            <div className="bg-white mt-10 text-center p-6 rounded-lg shadow-md mb-10 transition-transform duration-500 transform hover:scale-105">
                <h1 className="font-sans text-5xl font-semibold text-sky-600">
                    Our Story
                </h1>
            </div>

            <div className="max-w-screen-lg mx-auto shadow-lg p-5 sm:p-8 bg-white">
                <div className="rounded-lg overflow-hidden shadow-md flex flex-col max-w-xl mx-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
                    <a href="#">
                        <img 
                            className="w-full h-72 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-105" 
                            src="https://www.bistatechnologies.com/static/ourstory.jpg" 
                            alt="Bista Technologies Image"
                        />
                    </a>
                    
                    <div className="relative px-6 py-4 bg-white shadow-md -mt-4 mx-4 rounded-lg transition-transform duration-300 transform hover:scale-105">
                        <a href="#" className="font-semibold text-lg inline-block hover:text-sky-500 transition-colors duration-300 ease-in-out text-sky-600 mb-2">
                            Bista Technologies
                        </a>
                        <p className="text-gray-500 text-sm">
                            {Storydetail.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-sky-600 to-gray-400 bg-clip-text my-16">
                Our Growth Path
            </div>
            <div className="w-full flex items-center justify-center bg-gradient-to-r from-white-50 to-sky-100 text-sky-700 border border-sky-600 rounded-lg shadow-lg p-6 md:p-10 my-10">
                <p className="text-lg md:text-xl leading-relaxed max-w-4xl text-center font-semibold">
                    {Keyheighlights.description1}
                </p>
            </div>

            <div className="journey relative max-w-5xl mx-auto my-20">
                <div className="timeline-line absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2 z-0"></div>

                {OurStory.map((item, index) => (
                    <div
                        key={index}
                        className={`container1 relative w-full md:w-[48%] bg-white border-t-2 border-t-sky-600 border border-gray-200 mb-10 rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl ${
                            index % 2 === 0 ? 'ml-0' : 'ml-auto'
                        }`}
                    >
                        <div className="text-box">
                            <h2 className="text-sky-600 text-xl font-bold">{item.month}</h2>
                            <small className="text-sky-400">{item.year}</small>
                            <p className="mt-2 text-gray-500">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-full mb-10">
                <img
                    className="object-cover w-full h-64 md:w-64 md:h-full transition-transform duration-300 transform hover:scale-105"
                    src="https://www.bistatechnologies.com/static/key%20highlights.jpg"
                    alt="Key Highlights"
                />
                <div className="flex flex-1 flex-col justify-between p-8 text-gray-800">
                    <h5 className="text-3xl font-semibold text-sky-600 mb-4">
                        {Keyheighlights.heading}
                    </h5>
                    <p className="text-lg leading-relaxed">
                        {Keyheighlights.description}
                    </p>
                </div>
            </div>

        </div>
    );
}
