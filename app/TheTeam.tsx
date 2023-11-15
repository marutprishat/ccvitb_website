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
                <div className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#015478] text-[68.8px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    The Team
                </div>
                <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#00000087] text-[25px] text-center tracking-[0] leading-[normal]">
                    Here is our great team that makes everything related to this community possible.
                </p>
            </div>
            <div className="w-full flex flex-row justify-evenly flex-wrap gap-y-16 mb-12">
                <BossCard
                    imageName="FacultyCoordinatorImage.png"
                    color="#ff4c65"
                    name="Nancy Kumari"
                    role="Faculty Coordinator"
                />
                <BossCard
                    imageName="PresidentImageCropped.png"
                    color="#2563eb"
                    name="Sudhanshu Ranjan"
                    role="President"
                />
            </div>
            <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 place-items-center'>
                <div className="w-fit">
                    <UserCard
                        imageName="PRLead2ndCropped.png"
                        color="#22c55e"
                        name="Ayushi Agarwal"
                        role="PR Lead"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="HRLeadCropped.png"
                        color="#fbbf24"
                        name="Vanshika Tiwari"
                        role="HR Lead"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="TechLeadCropped.png"
                        color="#06b6d4"
                        name="Rishav Kumar"
                        role="Tech Lead"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="ResearchLeadCropped.png"
                        color="#ec4899"
                        name="Aksh Raizada"
                        role="Research Lead"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="ScribingLeadCropped.png"
                        color="#fb923c"
                        name="Ayush Bhatt"
                        role="Scribing Lead"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="CreativeLeadCropped.png"
                        color="#a78bfa"
                        name="Khyati Tiwari"
                        role="Creative Lead"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="EventLead2ndCropped.png"
                        color="#2dd4bf"
                        name="Sneha Prasad"
                        role="Event Lead"
                    />
                </div>
            </div>
        </div>
    );
};
export default TheTeam;