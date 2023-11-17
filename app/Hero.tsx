"use client"

import Image from "next/image";
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <div id="Home" className="relative w-full overflow-hidden pb-10 sm:pb-0">
      <div className="w-full flex justify-around">
        {/* left side texts */}
        <div className="pt-36 sm:pt-0 relative flex flex-col items-start justify-center">
          <div className="absolute -top-10 sm:max-lg:-top-8 -left-28 lg:top-20 lg:-left-20 bg-white w-[300px] h-[300px] rounded-full shadow-[10px_10px_40px_#0f0c291a] -z-10" />
          <Image
            className="absolute top-9 -left-4 sm:max-lg:top-6 lg:top-[7.5rem] sm:-left-4 w-[149px] h-[187px] object-cover"
            alt="Rocket"
            src="/figures/rocket.png"
            width={149}
            height={187}
          />
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#6ebe4a] text-[40px] sm:text-[50px] lg:text-[68px] tracking-[0] leading-normal mb-2">
            DIVE INTO THE <br />
            <span className="bg-[#015478]">WONDERS</span> OF THE <br />
          </p>
          <h1 className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#6ebe4a] text-[40px] sm:text-[50px] lg:text-[68px] tracking-[0] leading-normal mb-2">
            <Typewriter 
              options={{
                strings: ['CONNECTIVITY', 'SECURITY', 'AI SOLUTIONS'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="sm:w-[400px] lg:w-[620px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#00000099] text-[19.2px] tracking-[0] leading-[29px] mb-10">
            Embark on a tech odyssey at Cisco Community, VIT Bhopal. Explore Networking Wonders, connect with experts,
            and shape the future. Join us in shaping tomorrow&#39;s connectivity!
          </p>
          <div className="flex w-[237px] h-[60px] items-center justify-center px-[30px] py-[24px] bg-[#015478] rounded-[20px] shadow-[4px_10px_20px_#002b3d78]">
            <button className="relative w-fit mt-[-1.12px] ml-[-0.22px] mr-[-0.22px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap all-[unset] box-border">
              BROWSE COMMUNITY
            </button>
          </div>
        </div>

        {/* Astronaut Image */}
        <div className="relative w-fit hidden sm:block sm:pb-36">
          <div className="absolute bottom-64 -left-7 w-[100px] h-[100px] rounded-[49.83px/49.88px] rotate-[59.95deg] blur-[20px] [background:linear-gradient(180deg,rgb(110,190,74)_0%,rgb(255,255,255)_100%)] -z-10" />
          <Image
            className="lg:w-[437px] lg:h-[778px] object-cover"
            alt="Astronaut"
            src="/figures/astronaut.png"
            width={863}
            height={854}
          />
        </div>
      </div>

      <div className="hidden lg:block absolute w-[701px] h-[700px] -top-40 -right-80 -z-10">
        <div className="absolute w-[500px] h-[500px] top-0 left-0 bg-white rounded-full shadow-[10px_10px_40px_#0f0c291a]" />

        <div className="absolute w-[80px] h-[80px] bottom-60 left-64 rounded-[39.89px] rotate-[-44.94deg] [background:linear-gradient(180deg,rgb(110,190,74)_0%,rgb(0,43.25,61.62)_100%)]" />

        <div className="absolute w-[200px] h-[200px] bottom-28 left-72 bg-white rounded-full shadow-[10px_10px_40px_#0f0c291a]" />
      </div>


    </div>
  )
}

export default HeroSection
