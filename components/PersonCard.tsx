import Image from "next/image";

interface PersonCardProps {
  imageSrc: string;
  gradientSrc: string;
  color: string;
  name: string;
  role: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ imageSrc, gradientSrc, color, name, role }) => {
  return (
    <div className="w-[206px] h-[298px]">
      <div className="relative w-[202px] h-[298px]">

        {/* div below is responsible for border */}
        <div className={`absolute w-[202px] h-[280px] top-[18px] left-0 rounded-[22.34px] border-[2.48px] border-solid border-[${color}]`} />

        {/* just below is the div responsible for background blur */}
        <div className={`absolute w-[190px] h-[269px] top-[24px] left-[6px] bg-[${color}] rounded-[15.31px] shadow-[0px_4px_200px_10px_${color}]`} />
        <Image
          className="object-cover absolute w-[190px] h-[293px] top-0 left-[6px] rounded-b-[17px]"
          alt="Image here"
          src={`/images/${imageSrc}`}
          width={190}
          height={293}
        />
        {/* <Image
          className="w-[190px] h-[293px] top-0 left-[6px] absolute mix-blend-hard-light"
          alt="Image gradient"
          src={gradientSrc}
          width={190}
          height={293}
        /> */}

        {/* div just below provides lower image gradient */}
        <div className="absolute w-[190px] h-[269px] top-[24px] left-[6px] rounded-[15.31px] bg-gradient-to-b from-transparent from-25% to-black" />

        <div className="absolute w-[67px] h-[20px] top-[32px] left-[11px] rounded-[16.97px] shadow-[0px_1.66px_1.66px_#00000040] backdrop-blur-md backdrop-brightness-[100%] bg-gradient-to-r from-[rgba(29.75,27.89,27.89,0.6)] via-[rgba(29.75,27.89,27.89,0.47)] to-[rgba(29.75,27.89,27.89,0.58)]">
          <div className="relative w-[12px] h-[13px] top-[4px] left-[4px]">
            <Image
              className="absolute w-[12px] h-[12px] top-0 left-0"
              alt="Group"
              src="/images/Tick.png"
              width={12}
              height={12}
            />
            <div className="absolute w-max h-[13px] top-0 left-[16px] font-semibold text-white text-[7.9px] tracking-[0] leading-[12.4px] ]">
              {role}
            </div>
          </div>
        </div>

        <div className="h-[14px] bottom-[23px] left-[21px] text-[13.4px] tracking-[-0.22px] leading-[13.4px] absolute font-bold text-white whitespace-nowrap">
          {name}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
