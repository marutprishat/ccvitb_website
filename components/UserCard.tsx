import Image from "next/image";
import Link from "next/link";

interface UserCardProps {
    imageName: string;
    color: string;
    name: string;
    role: string;
    link: string; // linkedin link
}

const UserCard: React.FC<UserCardProps> = ({ imageName, color, name, role, link }) => {
    return (
        <div className="w-fit">
            <div className={`aspect-[2/3] h-[312px] border-[2.5px] border-solid rounded-[22.34px] p-[4px]`} style={{borderColor: `${color}`}}> {/*layer1*/}
                <div className={`relative h-[300px] aspect-[2/3]  rounded-[15.31px]`} style={{backgroundColor: `${color}`, boxShadow: `0px 5px 250px 12.5px ${color}`}}> {/*layer 2*/}
                    <div className="absolute bottom-0 rounded-b-[15.31px] w-[200px] h-[320px]">
                        <Image
                            className="rounded-b-[15.31px] object-cover object-center"
                            src={`/coreMembers/${imageName}`}
                            alt="Profile Image"
                            fill={true}
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-[15.31px] bg-gradient-to-b from-transparent to-black" />

                    <div className="absolute bottom-2 left-3 text-white">
                        <div className="text-base tracking-wide font-bold whitespace-nowrap">
                            <Link href={`${link}`} target="_blank">{name}</Link>
                        </div>
                        <div className="flex items-center w-fit p-1 rounded-full shadow-[0px_1.66px_1.66px_#00000040] backdrop-blur-md backdrop-brightness-[100%] bg-gradient-to-r from-[rgba(29.75,27.89,27.89,0.6)] via-[rgba(29.75,27.89,27.89,0.47)] to-[rgba(29.75,27.89,27.89,0.58)]">
                            <Image
                                className="w-5 inline-block pr-1"
                                alt="Group"
                                src="/images/Tick.png"
                                width={18}      /*width & height are required but gets over-written by property in className*/
                                height={18}
                            />
                            <div className="inline-block text-white text-[9px] tracking-wide leading-loose font-semibold">
                                {role}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UserCard;