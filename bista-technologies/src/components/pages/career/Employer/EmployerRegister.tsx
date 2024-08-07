import { motion } from 'framer-motion'
export default function EmployerRegister() {

    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}

            className="h-screen lg:bg-slate-100 ">
            <div className="flex justify-center gap-20 lg:pt-20 ">
                <div className="self-center space-y-4 lg:block hidden">
                    <h1 className="text-5xl font-semibold">Find & hire the <br />right talent with us</h1>
                    <h1>Trusted by 9 Cr+ candidates | 5 Lakh+ employers </h1>
                    <div className="max-w-xs">
                        <img className="w-2/3 h-full object-cover " src="https://static.naukimg.com/s/5/117/i/five-people.31225a6fa508252883ae.png" />
                    </div>
                </div>
                <div className="bg-white space-y-4 px-5 py-12 rounded-xl">
                    <h1 className="text-2xl font-semibold w-full">Continue with mobile</h1>
                    <form>
                        <h1>Mobile number</h1>
                        <input className="pl-3 w-full h-8 rounded-lg outline-none border border-slate-700"></input>
                    </form>
                    <h1>I agree to the Privacy Policy and Terms & Conditions</h1>
                    <button className="text-white h-12 rounded-lg w-full bg-blue-600">Send OTP</button>
                </div>
            </div>
        </motion.div>
    )
}