export default function CoreValuesBanner() {
    return (
        <section className="py-16 flex justify-center bg-slate-50 ">
            <div className=" relative flex justify-center items-center w-11/12">
                <h2 className="absolute w-full py-3 lg:text-5xl bg-green-500 text-md text-center text-white"
                    style={{ backgroundColor: 'rgba(34,197,94,0.6 )', opacity: 1 }}
                    aria-live="polite"
                >
                    CULTURE | INNOVATION | OPPORTUNITY | TRUST
                </h2>
                <img src="https://www.bistatechnologies.com/static/1.webp"
                    className="rounded-lg object-cover lg:h-96 h-42 w-full"
                    width="1200"
                    height="800"
                    alt="core values bannerS"
                />
            </div>
        </section>
    )
}