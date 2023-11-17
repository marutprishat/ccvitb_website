import MenuButton from "@/components/MenuButton";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="sticky top-0 w-full px-2 sm:px-8 py-2 sm:py-4 z-50 bg-gradient-to-r from-[#6ebf49] to-[#00bcea] to-[70%] sm:to-[50%]">
            <div className="w-full flex items-center justify-between gap-x-10 backdrop-blur-md">
                <div className="w-[120px] h-[50px] sm:w-[176px] sm:h-[50px]">
                    <Image
                        className="object-contain"
                        alt="Image"
                        src="/images/CCVITBLogo.png"
                        width={120}
                        height={50}
                    />
                </div>
                {/* <Image
                    className="hidden sm:block object-contain"
                    alt="Line"
                    src="/line-13.png"
                    width={1}
                    height={41}
                /> */}
                <div className="hidden sm:flex items-center gap-x-8 opacity-50 [font-family:'Outfit-Regular',Helvetica] font-normal text-[#002b3d] text-[21px] text-center tracking-[0] leading-[normal]">
                    <div><Link href="" >Home</Link></div>
                    <div><Link href="#About" >About Us</Link></div>
                    <div><Link href="#Timeline" >Timeline</Link></div>
                    <div><Link href="#Team" >Our Team</Link></div>
                    <div><Link href="#Contact" >Contact</Link></div>
                </div>
                <div className="block sm:hidden">
                    <MenuButton />
                </div>
            </div>
        </div>
    )
}

export default Navbar
