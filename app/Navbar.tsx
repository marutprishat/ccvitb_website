'use client';

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

const Navbar3 = () => {
    // const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    // const handleToggle = (e:any) => {
    //     if(e.target.checked){
    //         setTheme("dark");
    //     } else{
    //         setTheme("light");
    //     }
    // };
    // useEffect(()=>{
    //     localStorage.setItem("theme", theme);
    //     const localTheme = localStorage.getItem("theme");
    //     document.querySelector("html")?.setAttribute("data-theme", localTheme);
    // }, [theme]);

    return (
        <div className="fixed top-0 left-0 z-10 navbar bg-base-100 bg-gradient-to-r from-[#00bcea] to-[#6ebf49] dark:text-[#a6adbb]">
            <div className="navbar-start">

                {/* belowe div contains menu button icon and drop-down menu visible only on small and medium screens */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden dark:text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a>Item 1</a></li> */}
                        <li>
                            <a>Sections</a>
                            <ul className="p-2">
                                <li><Link href='#Home'>Home</Link></li>
                                <li><Link href='#About'>About</Link></li>
                                <li><Link href='#Timeline'>Timeline</Link></li>
                                <li><Link href='#Team'>Team</Link></li>
                                <li><Link href='#Contact'>Contact</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a>Social Media</a>
                            <ul className="p-2">
                                <li>
                                    <a href='https://www.instagram.com/ciscovitb/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' target="_blank">
                                        <Image
                                            src='/icons/instagram.svg'
                                            alt="insta"
                                            height={20}
                                            width={20}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <Link href="https://x.com/CiscoVitB?s=20" target="_blank">
                                        <Image
                                            src='/icons/twitter.svg'
                                            alt="insta"
                                            height={20}
                                            width={20}
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.linkedin.com/company/cisco-vit-bhopal/' target="_blank">
                                        <Image
                                            src='/icons/linkedin.svg'
                                            alt="linkedin"
                                            height={20}
                                            width={20}
                                        />
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href='#' target="_blank">
                                        <Image
                                            src='/icons/youtube.svg'
                                            alt="insta"
                                            height={20}
                                            width={20}
                                        />
                                    </Link>
                                </li> */}
                            </ul>
                        </li>
                        <li><a>Community</a></li>
                    </ul>
                </div>

                {/* CCVITB logo */}
                <Link href='' className="btn btn-ghost text-xl">
                    <Image
                        className=""
                        src='/images/CCVITBLogo.png'
                        alt="CCVITB logo"
                        width={90}
                        height={45}
                    />
                </Link>
            </div>

            {/* center buttons for large screens */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Item 1</a></li> */}
                    <li tabIndex={0}>
                        <details>
                            <summary className="dark:text-black">Sections</summary>
                            <ul className="p-2">
                                <li><Link href='#Home'>Home</Link></li>
                                <li><Link href='#About'>About</Link></li>
                                <li><Link href='#Timeline'>Timeline</Link></li>
                                <li><Link href='#Team'>Team</Link></li>
                                <li><Link href='#Contact'>Contact</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={1}>
                        <details>
                            <summary className="dark:text-black">Social Media</summary>
                            <ul className="p-2">
                                <li>
                                    <a href='https://www.instagram.com/ciscovitb/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' target="_blank">
                                        <Image
                                            src='/icons/instagram.svg'
                                            alt="insta"
                                            height={20}
                                            width={20}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <Link href="https://x.com/CiscoVitB?s=20" target="_blank">
                                        <Image
                                            src='/icons/twitter.svg'
                                            alt="insta"
                                            height={20}
                                            width={20}
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://www.linkedin.com/company/cisco-vit-bhopal/' target="_blank">
                                        <Image
                                            src='/icons/linkedin.svg'
                                            alt="insta"
                                            height={20}
                                            width={20}
                                        />
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href='#' target="_blank">
                                        <Image
                                            src='/icons/youtube.svg'
                                            alt="insta"
                                            height={20}
                                            width={20}
                                        />
                                    </Link>
                                </li> */}
                            </ul>
                        </details>
                    </li>
                    <li><a className="dark:text-black">Community</a></li>
                </ul>
            </div>

            {/* theme toggle button */}
            <div className="navbar-end">
                {/* <label className="cursor-pointer grid place-items-center">
                    <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label> */}
            </div>
        </div>
    )
}

export default Navbar3
