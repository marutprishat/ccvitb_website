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
                    imageName="FacultyCoordinator.png"
                    color="#60a5fa"
                    name="Asst. Prof. Nancy Kumari"
                    role="Faculty Coordinator"
                    link="https://in.linkedin.com/in/dr-nancy-kumari "
                />
                <BossCard
                    imageName="President.png"
                    color="#3b82f6"
                    name="Sudhanshu Ranjan"
                    role="President"
                    link="https://www.linkedin.com/in/sudhanshu-ranjan-7a3305216/"
                />
                <BossCard
                    imageName="GenSec.png"
                    // color="#4ade80"
                    color="#ec4899"
                    name="Simran Raj"
                    role="General Secretary"
                    link="https://www.linkedin.com/in/simran-raj-88429a22a/"
                />
            </div>
            <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-16 place-items-center'>

                <div className="w-fit">
                    <UserCard
                        imageName="TechLead.png"
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
                <div className="w-fit">
                    <UserCard
                        imageName="PRLead.png"
                        color="#22c55e"
                        name="Aruj Singhvi"
                        role="PR Lead"
                        link="https://www.linkedin.com/in/aruj-singhvi-730862250/"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="EventLead.png"
                        color="#2dd4bf"
                        name="Vinay Vyas"
                        role="Event Lead"
                        link="https://www.linkedin.com/in/vinay-vyas-338544251/"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="CreativeLead.png"
                        color="#a78bfa"
                        name="Khyati Tiwari"
                        role="Creative Lead"
                        link="https://www.linkedin.com/in/khyati-tiwari-4876b6250/"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="ScribingLead.png"
                        color="#fb923c"
                        name="Sarthak Tiwari"
                        role="Scribing Lead"
                        link="https://www.linkedin.com/in/sarthak-manoj-tiwari-567909250/"
                    />
                </div>
                <div className="w-fit">
                    <UserCard
                        imageName="ResearchLead.png"
                        // color="#ec4899"
                        // color="#4ade80"
                        color="#f87171"
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