import { Link } from "react-router-dom";

const data = [
    { id: "email", label: "Email ID", placeholder: "Enter registered email ID" },
    { id: "password", label: "Password", placeholder: "Enter password" },
];

export default function LoginForm() {
    return (
        <div>
            <header>
                <h1 className="text-md font-semibold text-center p-3 border-b border-gray-400">Login/Register</h1>
            </header>
            <main className="px-6 py-7">
                <form>
                    <fieldset className="space-y-6">
                        {data.map((item) => (
                            <div className="flex flex-col" key={item.id}>
                                <label htmlFor={item.id}>
                                    {item.label}
                                </label>
                                <input
                                    id={item.id}
                                    name={item.id}
                                    type={item.id === "password" ? "password" : "text"}
                                    placeholder={item.placeholder}
                                    className="focus:border-sky-600 border outline-none resize-none pb-1 pl-3 bg-slate-100 rounded-md h-10"
                                />
                            </div>
                        ))}
                    </fieldset>

                    <div className="text-center space-y-2 mt-6">
                        <p className="text-end text-blue-500 font-semibold">Forgot Password?</p>
                        <button className="transition-all w-full h-12 text-white rounded-lg bg-blue-500 hover:bg-blue-700" type="submit">
                            Log in
                        </button>
                        <p>Or</p>
                        <legend>Don't have a registered email ID?</legend>
                        <button className="transition-all border border-blue-700 w-full h-12 text-blue-500 font-semibold rounded-lg hover:bg-blue-100" type="button">
                            <Link to="/client-registration-form"> Create account</Link>
                        </button>
                    </div>
                </form>
            </main>
        </div>

    );
}
