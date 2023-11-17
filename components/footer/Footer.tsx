"use client"

import React from "react";
import Image from "next/image";
import Logo from "../../public/footer/CiscoCommLogo3.png";
import BottomLine from "../../public/footer/Bottom Line.png"
import { Poppins, Roboto } from "next/font/google";
import { useState } from "react";
import Twitter from "./tweet";
import Link from "next/link";

interface Icon {
    show: boolean
}
const initialState = { show: true };
const finalState = { show: true };
const Footer = () => {
    const [place_icon, setPlace_icon] = useState<Icon>(initialState);

    const handleChange = (e: any) => {
        if (e.target.value !== "") {
            setPlace_icon({ show: false });
        } else {
            setPlace_icon({ show: true });
        }
    }
    return (
        <div className="flex flex-col bg-black">
            <div className="h-300px flex flex-col md:flex-row justify-center items-center bg-black mb-10">
                <div className="w-45 m-5 pb-10 flex flex-col">
                    <Image className="mx-5" src={Logo} width={150} height={150} alt="Cisco Community Logo" />
                    <h1 className="mx-5 mt-6 w-22 text-white font-Poppins text-3xl font-bold">Get your career&apos;s initial</h1>
                    <h1 className="mx-5 mb-7 w-22 text-white font-Poppins text-3xl font-bold">boost with our community.</h1>
                    <form className="mx-5">
                        {
                            place_icon.show === true ? <svg className="mx-4 mt-4 absolute bottom-100 z-100 w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z" />
                            </svg>
                                : null
                        }
                        <input type="email" placeholder="    Enter your email" className="h-10 p-5 w-80 bg-black border rounded-3xl border-white font-Poppins font-thin text-white" onChange={handleChange} />
                        <button className="sm:mx-5 my-2 mx-2 px-5 h-10 rounded-3xl font-Poppins font-bold text-white text-xs bg-gradient-to-b from-gray-700 via-stone-600 to-lime-600" type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="mx-5">
                    <Twitter />
                </div>
            </div>
            <ul className="mx-5 mb-10 flex flex-col md:flex-row xl:mx-40 justify-between text-white font-Poppins">
                <li className="mx-5">
                    <Link href={"#"}>Features</Link>
                </li>
                <li className="mx-5">
                    <Link href={"#Team"}>Team Members</Link>
                </li>
                <li className="mx-5">
                    <Link href={"#"}>News & Blogs</Link>
                </li>
                <li className="mx-5">
                    <Link href={"#"}>Careers</Link>
                </li>
                <li className="mx-5">
                    <Link href={"#About"}>About Us</Link>
                </li>
                <li className="mx-5">
                    <Link href={"#"}>Terms</Link>
                </li>
                <li className="mx-5">
                    <Link href={"#"}>Privacy</Link>
                </li>
                <li className="mx-5">
                    <Link href={"#"}>Cookies</Link>
                </li>
            </ul>
            <Image alt="Bottom Line" src={BottomLine} width={1800} />
        </div>
    )
}

export default Footer;