"use client"
import React from "react";
import Image from "next/image";
import Logo from "../../public/footer/CiscoCommLogo3.png";
import BottomLine from "../../public/footer/Bottom Line.png"
import { Poppins, Roboto } from "next/font/google";
import { useState } from "react";
import Twitter from "./tweet.js";

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            place_icon: true,
        }

    }

    handleChange = (e) => {
        if(e.target.value !== "") {
            this.setState({place_icon: false});
        } else {
            this.setState({place_icon: true});
        }
    }

    render() {
        return (
            <div className="flex flex-col bg-black">
                <div className="h-300px flex flex-row justify-center items-center bg-black mb-10">
                    <div className="w-45 m-5 pb-10 flex flex-col">
                        <Image className="mx-5" src={Logo} width={150} height={150} />
                        <h1 className="mx-5 mt-6 w-22 text-white font-Poppins text-3xl font-bold">Get your career&apos;s inital</h1>
                        <h1 className="mx-5 mb-7 w-22 text-white font-Poppins text-3xl font-bold">boost with our community.</h1>
                        <form className="mx-5">
                            {
                                this.state.place_icon === true ? <svg class="mx-4 my-3 absolute bottom-100 z-100 w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z" />
                                </svg>
                                : null
                            }
                            <input type="email" placeholder="    Enter your email" className="h-10 p-5 w-80 bg-black border rounded-3xl border-white font-Poppins font-thin text-white" onChange={this.handleChange}/>
                            <button className="mx-5 px-5 h-10 rounded-3xl font-Poppins font-bold text-white text-xs bg-gradient-to-b from-gray-700 via-stone-600 to-lime-600" type="submit">Subscribe</button>
                        </form>
                    </div>
                    <Twitter />
                </div>
                <div>
                    <ul className="mx-80 mb-10 flex flex-row justify-between text-white font-Poppins">
                        <li>Features</li>
                        <li>Team Members</li>
                        <li>News & Blogs</li>
                        <li>Careers</li>
                        <li>About Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                    </ul>
                </div>
                <Image src={BottomLine} width={1800} />
            </div>
        )
    }
}

export default Footer;