import { motion } from 'framer-motion'
import RegisterForm1 from './login-form/employer-registeration/RegisterForm1';
import RegisterForm2 from './login-form/employer-registeration/RegisterForm2';
import { useState } from 'react';
export default function EmployerRegister() {
    const [handle, setHandle] = useState(true)
    return (
        <motion.div
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: '0vh', }}
            exit={{ transition: { duration: 0.2 } }}
            transition={{ duration: 0.6 }}
            className="lg:bg-slate-100 pb-5">
            <header className='text-center py-6  space-x-10'>
                <button onClick={() => setHandle(true)}>Basic details</button>
                <button onClick={() => setHandle(false)}> Company details</button>
            </header>
            {handle ? <RegisterForm1 /> : <RegisterForm2 />}
        </motion.div >
    )
}