import { useState } from "react"
export default function LeadersCard() {
    const [hover, setHover] = useState(false)
    return (
        <div className='lg:w-1/5 mx-auto my-20 lg:px-0 px-5 shadow-xl'>
            <div className='relative overflow-hidden flex justify-center ' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img src="/about-us/our-leaders/3.png" className={`transition-transform duration-300 ease-linear ${hover && 'scale-110'}`} />
                <div style={{ backgroundColor: 'rgba(2, 132, 199, 0.7)' }} className={`absolute bottom-0  text-white  ${hover ? 'h-full' : 'h-0'} transition-all ease-in-out  duration-500`}>
                    <div className='p-4'>
                        <p className='text-sm tracking-wide text-justify'>
                            He is the Co-Founder and Managing Director of Bista Technologies Inc.
                            he brings over 9 years of experience in team building, recruitment and staffing,
                            and training and development. His expertise in these areas ensures the development
                            of high-performing teams and the effective implementation of HR strategies.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/vipul-bhatia/"
                            target="_blank"
                            aria-label="Co-founder & Managing Director picture"
                        >
                            <svg className='fill-sky-700  m-auto rounded-md hover:bg-black bg-white p-1' stroke="#FF69B4" xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h1 className='font-bold text-2xl text-slate-800 '>Vipul Bhatia</h1>
                <h2 className=' text-zinc-600 font-semibold'>Co-founder & Managing Director</h2>
            </div>
        </div>
    )
}