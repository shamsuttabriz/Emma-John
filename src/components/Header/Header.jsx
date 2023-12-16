import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [navBar, setNavBar] = useState(false);
    return (
        <nav className='bg-slate-900 w-full'>
            <div className='w-10/12 mx-auto flex justify-between items-center py-3'>
                <img className='w-[30%] md:w-auto' src={Logo} alt="Emma-John" />
                <div className='hidden md:block'>
                    <ul className='flex items-center space-x-5'>
                        <li><a className='text-orange-400 duration-200 font-semibold' href="#">Order</a></li>
                        <li><a className='text-slate-100 hover:text-orange-400 duration-200 font-semibold' href="#">Order Review</a></li>
                        <li><a className='text-slate-100 hover:text-orange-400 duration-200 font-semibold' href="#">Manage Order</a></li>
                        <li><a className='text-slate-100 hover:text-orange-400 duration-200 font-semibold' href="#">Login</a></li>
                    </ul>
                </div>
                <div className='block md:hidden'>
                    <div onClick={() => setNavBar(!navBar)} className='pr-3 mr-3 text-orange-400 hover:text-orange-300 cursor-pointer z-10 md:hidden'>
                        {navBar ? <FaTimes size={25} /> : <FaBars size={25} />}
                    </div>
                    {navBar && (
                        <ul className='space-y-5 flex-col justify-center items-center py-5 w-6/12 absolute top-[56px] right-0 h-1/2 bg-slate-900 text-slate-400 border-t-2 border-slate-800 md:hidden shadow-md shadow-slate-600 bg-opacity-90'>
                            <li className='text-xl font-medium cursor-pointer capitalize hover:text-slate-300 text-center'>Order</li>
                            <li className='text-xl font-medium cursor-pointer capitalize hover:text-slate-300 text-center '>Order Review</li>
                            <li className='text-xl font-medium cursor-pointer capitalize hover:text-slate-300 text-center '>Manage Order</li>
                            <li className='text-xl font-medium cursor-pointer capitalize hover:text-slate-300 text-center '>Login</li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header;