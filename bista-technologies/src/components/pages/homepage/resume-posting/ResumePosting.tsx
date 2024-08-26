import CountUp from 'react-countup';

export default function ResumePosting({ item }: any) {
    return (
        <div className={`border rounded-xl text-center lg:w-1/4 py-8   transition-all hover:scale-105 hover:${item.styles.hover} ${item.styles?.extras} duration-500 space-y-3`}>
            <div className={`p-2 w-20 h-20 m-auto ${item.styles.imageBG} rounded-full`}>
                <img className=" w-full h-full object-cover" src={item.imgSrc} />
            </div>
            <div className={`lg:text-5xl  text-3xl font-bold ${item.styles.text}`}>
                <CountUp start={0} end={item.counting} duration={5} />+
            </div>
            <h1 className="text-gray-600 text-lg">{item.label}</h1>
        </div>
    )
}