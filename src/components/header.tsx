'use client'
import React, { useState } from 'react'
import Link from 'next/link'
const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <header className='flex justify-between flex-row bg-teal-500 min-w-full text-white py-4 px-4 md:px-8 items-center'>
                <Link href='/'> <h1 className='text-xl md:text-2xl font-semibold mr-6 md:ml-6 text-center'>Random Posts Generator</h1></Link>
                <div className='w-[25%] hidden md:flex'>
                    <ul className='flex-row flex gap-x-6 '>
                        <li><Link href="/" referrerPolicy="no-referrer" >Home</Link></li>
                        <li><Link href="/about" referrerPolicy='no-referrer'>About</Link></li>
                        <li><Link href="/contact" referrerPolicy='no-referrer'>Contact</Link></li>

                    </ul>
                </div>
                <img src="/menu.png" alt="logo" className='flex lg:hidden w-6 h-6 lg:w-16 lg:h-16' onClick={() => { setIsOpen(!isOpen) }} />

                <div className='gap-2 hidden lg:flex '>
                    <span > <button className='bg-white text-teal-500 px-4 py-2 rounded-lg'
                    >Sign in</button></span>
                    <span > <button className='bg-white text-teal-500 px-4 py-2 rounded-lg'>Sign up</button></span>
                </div>



            </header>
            {isOpen && <div className="w-full bg-teal-500">
                <ul className='flex flex-col px-4 text-white gap-y-2 items-center sm:items-end '>
                    <li className='flex sm:hidden'><Link href="/" referrerPolicy="no-referrer" >Home</Link></li>
                    <li className='flex sm:hidden'><Link href="/about" referrerPolicy='no-referrer'>About</Link></li>
                    <li className='flex sm:hidden'><Link href="/contact" referrerPolicy='no-referrer'>Contact</Link></li>

                    <button className='bg-white text-teal-500 px-4 py-2 rounded-lg mb-2 '

                    >Sign in</button>
                    <button className='bg-white text-teal-500 px-4 py-2 rounded-lg mb-2 '  >Sign up</button>

                </ul>

            </div >}

        </>
    )
}

export default Header