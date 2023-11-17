import Image from "next/image"

const Contact = () => {
    return (
        <div id="Contact" className="mr-5 relative flex justify-center flex-wrap sm:flex-nowrap gap-4 sm:gap-8">
            <div className="mx-10 relative w-full sm:w-1/2 overflow-hidden flex flex-col justify-between pb-2">
                <div className="text-[46.42px]">Let&apos;s Get In <span className="font-bold text-[#015578]">Touch!</span></div>

                <p className="text-[15.47px] mb-4 max-w-[300px]">Have a question or need assistance? Reach out to us via email, phone, or the contact form here. We&apos;re eager to hear from you.</p>

                <div className="mb-4">
                    <Image
                        className="rounded-3xs w-[416px] h-[174px] object-cover"
                        alt=""
                        src="/icons/maps@2x.png"
                        height={174}
                        width={416}
                    />
                </div>

                <div>
                    <div className="mb-4">
                        <Image
                            className="inline-block mr-3"
                            src="/icons/location-icon.svg"
                            alt="location-pin icon"
                            width={22}
                            height={17.6}
                        />
                        <div className="inline-block">
                            VIT Bhopal, MP, INDIA
                        </div>
                    </div>

                    <div className="mb-4">
                        <Image
                            className="inline-block mr-3"
                            src="/icons/phone-icon.svg"
                            alt="phone icon"
                            width={22}
                            height={22}
                        />
                        <div className="inline-block">
                            +91 9619033713
                        </div>
                    </div>

                    <div className="mb-4">
                        <Image
                            className="inline-block mr-3"
                            src="/icons/email-icon.svg"
                            alt="email icon"
                            width={22}
                            height={22}
                        />
                        <div className="inline-block">
                            cisco@vitbhopal.ac.in
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-evenly sm:justify-start gap-10">
                        <Image
                            className="w-[18.8px] h-[18.8px]"
                            alt=""
                            src="/icons/instagram.svg"
                            width={18.8}
                            height={18.8}
                        />
                        <Image
                            className="w-[20.9px] h-[17px]"
                            alt=""
                            src="/icons/twitter.svg"
                            width={20.9}
                            height={17}
                        />
                        <Image
                            className="w-5 h-5"
                            alt=""
                            src="/icons/facebook.svg"
                            width={5}
                            height={5}
                        />
                        <Image
                            className="w-5 h-3.5"
                            alt=""
                            src="/icons/youtube.svg"
                            width={5}
                            height={3.5}
                        />
                    </div>
                </div>
                <div className="absolute bottom-[-280px] right-0 bg-[#87db1c] opacity-[15%] w-[573px] h-[573px] rounded-full -z-10" />
            </div>

            <div className="hidden lg:block -z-1 absolute left-[25%] bottom-[40px] bg-[#015578] h-[70px] w-[400px] opacity-[15%] rounded-[102px] -rotate-[30deg] -translate-y-36 " />
            <div className="hidden lg:block -z-1 absolute left-[26%] bottom-[10px] bg-[#015578] h-[70px] w-[400px] opacity-[15%] rounded-[102px] -rotate-[30deg] -translate-y-20 " />

            <div className="w-full sm:w-1/2 bg-[#bdeb82] rounded-t-[48.35px] p-12 lg:px-36">
                <div className="h-full w-full flex flex-col items-center justify-between">
                    {/* Full Name */}
                    <label className="block w-full font-semibold">
                        Full Name:<br />
                        <input
                            type="text"
                            className="px-4 font-normal w-full h-10 rounded-[48.35px] box-border border-[1px] border-solid border-black"
                            placeholder="Full Name"
                        />
                    </label>

                    {/* Email */}
                    <label className="block w-full mt-7 font-semibold">
                        Email:<br />
                        <input
                            type="email"
                            className="px-4 font-normal w-full h-10 rounded-[48.35px] box-border border-[1px] border-solid border-black"
                            placeholder="Email"
                        />
                    </label>

                    {/* Message */}
                    <label className="block w-full mt-7 font-semibold">
                        Message:<br />
                        <textarea className="px-4 font-normal w-full h-36 rounded-[19.34px] bg-cornflowerblue box-border border-[1px] border-solid border-black" placeholder="Type your message" />
                    </label>

                    {/* Submit Btn */}
                    <button type="submit" className="w-2/5 h-10 mt-7 block place-self-end rounded-[11.61px] bg-black text-white box-border font-medium">
                        <span className="font-medium">Submit</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
