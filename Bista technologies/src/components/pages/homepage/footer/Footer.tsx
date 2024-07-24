
export default function Footer() {
    return (
        <footer className="relative bg-gray-700 text-white py-8 mt-8 overflow-hidden">
            <div className=" mx-auto px-4 relative z-10">
                <div className="flex gap-20 flex-wrap">
                    <div >
                        <a href="https://www.bistatechnologies.com/index.html#">
                            <img className='w-36' src="https://www.bistatechnologies.com/static/logo.png" />
                        </a>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Headquarters</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-300">Street: PO Box 20018</a></li>
                            <li><a href="#" className="hover:text-gray-300">City: Dubai</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Career</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-300">Job Posting</a></li>
                            <li><a href="#" className="hover:text-gray-300">Employee Login</a></li>
                            <li><a href="#" className="hover:text-gray-300">Employer Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Solutions</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-300">Staffing Solutions</a></li>
                            <li><a href="#" className="hover:text-gray-300">Lead Generation</a></li>
                            <li><a href="#" className="hover:text-gray-300">Training and Development</a></li>
                            <li><a href="#" className="hover:text-gray-300">Staff Augmentation</a></li>
                            <li><a href="#" className="hover:text-gray-300">Market Research</a></li>

                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Services</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-300">Engineering Staffing</a></li>
                            <li><a href="#" className="hover:text-gray-300">Healthcare Staffing</a></li>
                            <li><a href="#" className="hover:text-gray-300">IT Staffing</a></li>
                            <li><a href="#" className="hover:text-gray-300">Non IT Staffing</a></li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-300">info@bistatechnologies.com</a></li>
                            <li><a href="#" className="hover:text-gray-300">support@bistatechnologies.com</a></li>
                            <li><a href="#" className="hover:text-gray-300">hr@bistatechnologies.com</a></li>
                            <li><a href="#" className="hover:text-gray-300">operations@bistatechnologies.com</a></li>

                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <div className='flex justify-center gap-2'>
                        <p>Call Us at: +91-9808283188</p>
                        <div className='flex'>
                            <a href="https://www.linkedin.com/company/bistatechnologies/">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                    <path d="M3 7l9 6l9 -6" />
                                </svg>
                            </a>
                        </div>

                    </div>
                    <p className="text-sm"> © 2024 Bista Technology. All rights reserved.</p>


                </div>

            </div>


        </footer>
    );
};

