import Image from "next/image";

const AboutUs = (): JSX.Element => {
    return (
        <div id="About" className="mb-16 pt-28">
            <div className="flex flex-col gap-y-10">

                {/* title and paragraph */}
                <div className="flex justify-between flex-wrap gap-4 lg:gap-0">
                    <div className="lg:w-1/2">
                        <div className="w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-[#002b3d] text-[24px] whitespace-nowrap">
                            Who are we?
                        </div>
                        <p className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#015478] text-[63.9px]  leading-[normal]">
                            We are the team of enthusiasts
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex flex-col items-start justify-between gap-4">
                        <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#343434] text-[16px] leading-[28.0px]">
                            We are the Cisco community of enthusiasts, fueled by a passion for innovation and collaboration.
                            Together, we aim to transform networking experiences, driven by curiosity and a shared commitment to
                            pushing technological boundaries.
                        </p>
                        <button className="px-[31.96px] py-[19.97px] bg-[#015478] rounded-[20px] shadow-[4px_10px_20px_#002b3d78] all-[unset] box-border">
                            <div className="w-fit [font-family:'Urbanist-Bold',Helvetica] font-bold text-white text-[20px] text-center leading-[22.0px] whitespace-nowrap">
                                Explore
                            </div>
                            {/* <Image
                                    className="w-[23.97px] h-[23.97px]"
                                    alt="Vuesax linear arrow"
                                    src="/arrow-right.png"
                                    width={24}
                                    height={24}
                                /> */}
                        </button>
                    </div>
                </div>

                {/* 3 cards */}
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-16">

                    {/* 1st card */}
                    <div className="flex flex-col items-center gap-10 sm:w-[500px] pt-[31.96px] pb-[15px] px-[15.98px] border-b-[5.99px] [border-bottom-style:solid] border-[#87da1c]">
                        <Image
                            className="w-[129.82px] h-[129.82px]"
                            alt="Group"
                            src="/icons/group-3512.png"
                            width={130}
                            height={130}
                        />
                        <div className="flex flex-col items-center gap-4">
                            <div className="mt-[-1.00px] mr-[-21.44px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[-0.48px] leading-[normal]">
                                Tech Solutions, Smart Savings
                            </div>
                            <p className="[font-family:'Inter-Light',Helvetica] font-light text-neutral-500 text-[16px] text-justify tracking-[-0.32px] leading-[normal]">
                                Unlock cost-effective networking solutions tailored to your needs, ensuring maximum value for your
                                investment. Our community thrives on efficiency, making every dollar count.
                            </p>
                        </div>
                    </div>

                    {/* 2nd Card */}
                    <div className="flex flex-col items-center gap-10 sm:w-[500px] pt-[31.96px] pb-[23.97px] px-[15.98px] border-b-[5.99px] [border-bottom-style:solid] border-[#87da1c]">
                        <Image
                            className="w-[126.82px] h-[129.82px]"
                            alt="Group"
                            src="/icons/group-3513.png"
                            width={127}
                            height={130}
                        />
                        <div className="flex flex-col items-center gap-4">
                            <div className=" mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[-0.48px] leading-[normal]">
                                Leverage Data Intelligence
                            </div>
                            <p className="[font-family:'Inter-Light',Helvetica] font-light text-neutral-500 text-[16px] text-justify tracking-[-0.32px] leading-[normal]">
                                Dive into analytics-driven insights, transforming raw data into actionable strategies. Stay ahead of
                                the curve with our community&#39;s commitment to harnessing the power of statistics.
                            </p>
                        </div>
                    </div>

                    {/* 3rd Card */}
                    <div className="flex flex-col items-center gap-10 sm:w-[500px] pt-[31.96px] pb-[23.97px] px-[15.98px] bg-white border-b-[5.99px] [border-bottom-style:solid] border-[#87da1c]">
                        <Image
                            className="w-[145.8px] h-[129.82px]"
                            alt="B"
                            src="/icons/b.png"
                            width={146}
                            height={130}
                        />
                        <div className="flex flex-col items-center gap-4">
                            <div className="mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[-0.48px] leading-[normal]">
                                Optimize for Efficiency
                            </div>
                            <p className="[font-family:'Inter-Light',Helvetica] font-light text-neutral-500 text-[16px] text-justify tracking-[-0.32px] leading-[normal]">
                                Embrace streamlined processes and best practices, boosting efficiency across your network
                                infrastructure. Join us in redefining efficiency standards within the dynamic landscape of networking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;