export default function RegisterForm() {
    const data = [
        { id: "username", label: "Username", placeholder: "Enter username" },
        { id: "email", label: "Email ID", placeholder: "Enter registered email ID" },
        { id: "password", label: "Password", placeholder: "Enter password" },
    ];
    return (
        <main className='lg:w-2/5 w-4/5 rounded-lg shadow-md lg:px-24 py-10 px-9 bg-white mx-auto '>
            <header className='text-center'>
                <img src="https://static.naukimg.com/s/5/117/i/company_details.6aa48034192ad663f96c.png" className="mx-auto" />
                <p className='lg:text-sm text-xs'>We use this information to know about the company you’re hiring for and to generate an invoice</p>
            </header>
            <form>
                <fieldset className="space-y-6">
                    {data.map((item) => {
                        return (
                            <div>
                                <label>{item.label}</label>
                                <input
                                    id={item.id}
                                    name={item.id}
                                    placeholder={item.placeholder}
                                    type={item.id === "password" ? "password" : "text"}
                                    className="focus:border-sky-600 border border-gray-300 w-full outline-none resize-none pb-1 pl-3 bg-slate-100 rounded-md h-10" />

                            </div>
                        )
                    })}
                </fieldset>
                <section className='w-full h-32'>
                </section>
                <button className="transition-all  w-full h-12 text-white rounded-lg bg-blue-500 hover:bg-blue-700" type="submit">
                    Continue
                </button>
            </form>
        </main>
    )
}