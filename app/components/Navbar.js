'use client';
import Image from 'next/image'
import React from 'react'
import Logo from '../../public/assets/images/logo.png'
import Cart from '../../public/assets/images/cart.png'
import User from '../../public/assets/images/user.png'
import Search from '../../public/assets/images/search.png'
import {IoReorderThreeOutline} from "react-icons/io5";
import Link from 'next/link';

export default function Navbar() {
    return (
        <div>
            <div className="bg-hero bg-center bg-cover h-screen bg-[#00000069]"
               >
                <div className="container mx-auto px-1 md:px-5">
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-1 items-center'>
                            <IoReorderThreeOutline className='text-2xl text-white'/>
                            <p className='text-xl font-light text-white'>PRODUCTS</p>
                        </div>
                        <div className='w-[30px] md:w-[100px]'><Image src={Logo}/></div>
                        <div className='flex gap:1 md:gap-3'>
                            <div className='text-white border-r pr-3'>ESPAÑOL</div>
                            <div className='w-75'>
                                <Link href="#"><Image src={Search}/></Link>
                            </div>
                            <div className='w-75'>
                                <Link href="#"><Image src={User}/></Link>
                            </div>
                            <div className='w-75'>
                                <Link href="#"><Image src={Cart}/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
