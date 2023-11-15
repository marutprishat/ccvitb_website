'use client'
import React, { useState } from 'react'
import UseAnimations from "react-useanimations";
import menu4 from 'react-useanimations/lib/menu4';
import Link from 'next/link';

const MenuButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="">
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <UseAnimations animation={menu4} size={50} strokeColor="black" />
            </div>
            {isMenuOpen &&
                <ul className="w-full grid grid-cols-1 divide-y absolute top-[65px] left-0 opacity-90 [font-family:'Outfit-Regular',Helvetica] leading-loose tracking-wider text-white bg-stone-900 text-[21px] z-50 border-2 border-black">
                    <li className="pl-3 py-1.5"><Link href="" >Home</Link></li>
                    <li className="pl-3 py-1.5"><Link href="#About" >About</Link></li>
                    <li className="pl-3 py-1.5"><Link href="#Timeline" >Timeline</Link></li>
                    <li className="pl-3 py-1.5"><Link href="#Team" >Our Team</Link></li>
                    <li className="pl-3 py-1.5"><Link href="#Contact" >Contact</Link></li>
                </ul>
            }

        </div>
    )
}

export default MenuButton;