import UserCard from "../components/UserCard";
import BossCard from "../components/BossCard";

{/* <UserCard
        imageName="myPicCropped.png"   <----- just enter the name of pic (must be in public/images folder)
        color="#06b6d4"     <----- border and background color (yes they're gonna be same)
        name="Rishav Kumar"     <----- name of the person
        role="Tech Lead"        <----- his position in the community
/> */}
// BossCard & UserCard are almost same except they just BossCard is bigger

const TheTeam = (): JSX.Element => {
    return (
        <div className=" w-full">
            <div className="w-full text-center mb-12">
                <div className="  [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#015478] text-[68.8px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    The Team
                </div>
                <p className="  h-[36px] top-[125px] left-[364px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#00000087] text-[25px] text-center tracking-[0] leading-[normal]">
                    Here is our great team that makes everything related to this community possible.
                </p>
            </div>
            <div className="w-full flex flex-row justify-evenly flex-wrap gap-10">
                <BossCard
                    imageSrc="/FacultyCoordinatorImage.png"
                    color="#ff4c65"
                    name="Nancy Kumari"
                    role="Faculty Coordinator"
                />
                <BossCard
                    imageSrc="PresidentImageCropped.png"
                    color="#2563eb"
                    name="Sudhanshu Ranjan"
                    role="President"
                />
            </div>
            <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 place-items-center'>
                <div className="w-fit">
                    <UserCard
                        imageName="PresidentImage.png"
                        color="#22c55e"
                        name="Ayushi Agarwal"
                        role="PR Lead"
                    />
                </div>
                {/* <div className="w-fit">
                    <UserCard
                        imageName="/VicePresidentImage.png"
                        // gradientSrc="/VicePresidentImageGradient.png"
                        color="#10b981"
                        name="Aruj Singhvi"
                        role="PR Co-Lead"
                    />
                </div> */}
                <div className="w-fit">
                    <UserCard
                        imageName="HRLeadCropped.png"
                        // gradientSrc="/TechLeadImageGradient.png"
                        color="#fbbf24"
                        name="Vanshika Tiwari"
                        role="HR Lead"
                    />
                </div>
                {/* <div className="w-fit">
                    <UserCard
                        imageName="/TechCoLeadImage.png"
                        // gradientSrc="/TechCoLeadImageGradient.png"
                        color="#facc15"
                        name="Kittu Priya"
                        role="HR Co-Lead"
                    />
                </div> */}
                <div className="w-fit">
                    <UserCard
                        imageName="TechLeadCropped.png"
                        // gradientSrc="/TechCoLeadImageGradient.png"
                        color="#06b6d4"
                        name="Rishav Kumar"
                        role="Tech Lead"
                    />
                </div>
                {/* <div className="w-fit">
                    <UserCard
                        imageName="/TechCoLeadImage.png"
                        // gradientSrc="/TechCoLeadImageGradient.png"
                        color="#0ea5e9"
                        name="Ketan Sharma"
                        role="Tech Co-Lead"
                    />
                </div> */}
                <div className="w-fit">
                    <UserCard
                        imageName="TechCoLeadImage.png"
                        // gradientSrc="/TechCoLeadImageGradient.png"
                        color="#ec4899"
                        name="Aksh Raizada"
                        role="Research Lead"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="TechCoLeadImage.png"
                        // gradientSrc="/TechCoLeadImageGradient.png"
                        color="#fb923c"
                        name="Ayush Bhatt"
                        role="Scribing Lead"
                    />
                </div>
                {/* <div className="w-fit">
                    <UserCard
                        imageName="/TechCoLeadImage.png"
                        // gradientSrc="/TechCoLeadImageGradient.png"
                        color="#f97316"
                        name="Ishika Wadagbalkar"
                        role="Scribbing Co-Lead"
                    />
                </div> */}
                <div className="w-fit">
                    <UserCard
                        imageName="TechCoLeadImage.png"
                        // gradientSrc="/TechCoLeadImageGradient.png"
                        color="#a78bfa"
                        name="Khyati Tiwari"
                        role="Creative Lead"
                    />
                </div>
                {/* <div className="w-fit">
                    <UserCard
                        imageName="/TechCoLeadImage.png"
                        // gradientSrc="/TechCoLeadImageGradient.png"
                        color="#c084fc"
                        name="Bhavyansh Jain"
                        role="Creative Co-Lead"
                    />
                </div> */}
                <div className="w-fit">
                    <UserCard
                        imageName="TechCoLeadImage.png"
                        // gradientSrc="/TechCoLeadImageGradient.png"
                        color="#2dd4bf"
                        name="Sneha Prasad"
                        role="Event Lead"
                    />
                </div>
                {/* <div className="w-fit">
                    <UserCard
                        imageName="/TechCoLeadImage.png"
                        // gradientSrc="/TechCoLeadImageGradient.png"
                        color="#14b8a6"
                        name="Vinay Vyas"
                        role="Event Co-Lead"
                    />
                </div> */}
            </div>
        </div>
    );
};
export default TheTeam;