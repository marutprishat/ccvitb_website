import Image from "next/image";

interface BossCardProps {
  imageSrc: string;
  color: string;
  name: string;
  role: string;
}

const BossCard: React.FC<BossCardProps> = ({ imageSrc, color, name, role }) => {
  return (
    <div className="relative w-[252.5px] h-[372.5px] mb-20">

      {/* div below is responsible for border */}
      <div className={`absolute w-[252.5px] h-[350px] top-[22.5px] left-0 rounded-[27.925px] border-[3.1px] border-solid border-[${color}]`} />

      {/* just below is the div responsible for background blur */}
      <div className={`absolute w-[237.5px] h-[336.25px] top-[30px] left-[7.5px] bg-[${color}] rounded-[19.1375px] shadow-[0px_5px_250px_12.5px_${color}]`} />
      <Image
        className="object-cover absolute w-[237.5px] h-[366.25px] top-0 left-[7.5px] rounded-b-[21.25px]"
        alt="Image here"
        src={`/images/${imageSrc}`}
        width={237.5}
        height={366.25}
      />
      
      {/* div just below provides lower image gradient */}
      <div className="absolute w-[237.5px] h-[336.25px] top-[30px] left-[7.5px] rounded-[19.1375px] bg-gradient-to-b from-transparent from-50% to-gray-950" />

      <div className="absolute w-[83.75px] h-[25px] top-[40px] left-[13.75px] rounded-[21.2125px] shadow-[0px_2.075px_2.075px_#00000040] backdrop-blur-md backdrop-brightness-[100%] bg-gradient-to-r from-[rgba(37.1875,34.8625,34.8625,0.6)] via-[rgba(37.1875,34.8625,34.8625,0.47)] to-[rgba(37.1875,34.8625,34.8625,0.58)]">
        <div className="relative w-[15px] h-[16.25px] top-[5px] left-[5px]">
          <Image
            className="absolute w-[15px] h-[15px] top-0 left-0"
            alt="Group"
            src="/images/Tick.png"
            width={15}
            height={15}
          />
          <div className="absolute w-max h-[16.25px] top-0 left-[20px] font-semibold text-white text-[9.875px] tracking-[0] leading-[15.5px]">
            {role}
          </div>
        </div>
      </div>

      <div className="h-[17.5px] bottom-[28.75px] left-[26.25px] text-[16.75px] tracking-[-0.275px] leading-[16.75px] absolute font-bold text-white whitespace-nowrap">
        {name}
      </div>
    </div>
  );
};

export default BossCard;
