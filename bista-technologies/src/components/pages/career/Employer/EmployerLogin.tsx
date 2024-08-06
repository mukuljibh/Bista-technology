import LoginForm from "./login-form/LoginForm"
export default function EmployerLogin() {
    return (
        <div className="flex justify-center mt-10 space-x-5 ">
            <div className="flex flex-col items-center space-y-2">
                <div className="text-center space-y-2 ">
                    <p className="text-sm font-semibold text-sky-700">BISTA TECHNOLOGIES HIRING SUITE FOR EMPLOYERS</p>
                    <div>
                        <p className="text-3xl text-gray-700">From Campus to Senior Level Hiring</p>
                        <p className="text-gray-500 text-2xl">Bouquet of solutions to meet all your hiring needs</p>
                    </div>

                    <button className="w-3/12 py-1 text-sm text-sky-700 font-semibold border border-blue-700 rounded-sm">Know More</button>
                </div>
                <div className=" max-w-sm">
                    <img src="/loginBanner.png" className="  object-contain" alt="" />
                </div>
            </div>
            <div className="border rounded-lg w-1/4 ">
                <LoginForm />
            </div>
        </div>
    )
}