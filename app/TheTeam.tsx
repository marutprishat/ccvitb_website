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
        <div id="Team" className="w-full mb-16 px-4">
            <div className="w-full text-center mb-20">
                <div className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#005071] text-[68.8px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    The Team
                </div>
                <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#00000087] dark:text-[#a6adbb] text-[25px] text-center tracking-[0] leading-[normal]">
                    Here is our great team that makes everything related to this community possible.
                </p>
            </div>
            <div className="w-full flex flex-row justify-evenly flex-wrap gap-y-16 mb-12">
                <BossCard
                    imageName="FacultyCoordinator2ndCropped.png"
                    color="#60a5fa"
                    name="Asst. Prof. Nancy Kumari"
                    role="Faculty Coordinator"
                    link="https://in.linkedin.com/in/dr-nancy-kumari "
                />
                <BossCard
                    imageName="PresidentImage.png"
                    color="#3b82f6"
                    name="Sudhanshu Ranjan"
                    role="President"
                    link="https://www.linkedin.com/in/sudhanshu-ranjan-7a3305216/"
                />
            </div>
            <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 place-items-center'>

                <div className="w-fit">
                    <UserCard
                        imageName="TechLeadCropped.png"
                        color="#06b6d4"
                        name="Rishav Kumar"
                        role="Tech Lead"
                        link="https://www.linkedin.com/in/rissshaaav/"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="HRLead.png"
                        color="#facc15"
                        name="Vanshika Tiwari"
                        role="HR Lead"
                        link="https://www.linkedin.com/in/vanshika-tiwari-79a019222/"
                    />
                </div>
                {/* <div className="w-fit">
                    <UserCard
                        imageName="PRLeadCropped.png"
                        color="#22c55e"
                        name="Ayushi Agarwal"
                        role="PR Lead"
                    />
                </div> */}
                {/* <div className="w-fit">
                    <UserCard
                        imageName="EventLead.png"
                        color="#2dd4bf"
                        name="Sneha Prasad"
                        role="Event Lead"
                    />
                </div> */}
                <div className="w-fit">
                    <UserCard
                        imageName="CreativeLead.png"
                        color="#a78bfa"
                        name="Khyati Tiwari"
                        role="Creative Lead"
                        link="https://www.linkedin.com/in/khyati-tiwari-4876b6250/"
                    />
                </div>
                {/* <div className="w-fit">
                    <UserCard
                        imageName="ScribingLeadCropped.png"
                        color="#fb923c"
                        name="Ayush Bhatt"
                        role="Scribing Lead"
                    />
                </div> */}
                <div className="w-fit">
                    <UserCard
                        imageName="ResearchLead2ndCropped.png"
                        color="#ec4899"
                        name="Aksh Raizada"
                        role="Research Lead"
                        link="https://www.linkedin.com/in/aksh-raizada/"
                    />
                </div>
            </div>
        </div>
    );
};
export default TheTeam;