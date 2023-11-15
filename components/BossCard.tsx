import Image from "next/image";

interface BossCardProps {
  imageName: string;
  color: string;
  name: string;
  role: string;
}

const BossCard: React.FC<BossCardProps> = ({ imageName, color, name, role }) => {
  const scaleFactor = 1.15;
  return (
    <div className="w-fit">

      {/*border-[${2.5*scaleFactor}px] compiles to border-[2.875px]*/}
      <div 
      className={`aspect-[2/3] border-[${2.5*scaleFactor}px] border-solid border-[${color}] rounded-[22.34px] p-[4px]`}
      style={{height: `${312*scaleFactor}px`}}
      > {/*layer1*/}

        {/*h-[${300*scaleFactor}px] compiles to h-[345px]*/}
        <div className={`relative h-[${300*scaleFactor}px] aspect-[2/3] bg-[${color}] rounded-[15.31px] shadow-[0px_5px_250px_12.5px_${color}]`}> {/*layer 2*/}

          {/*w-[${200*scaleFactor}px] compiles to w-[230px]*/}
          {/*h-[${320*scaleFactor}px] compiles to h-[368px]*/}
          <div 
          className={`absolute bottom-0 rounded-b-[15.31px]`}
          style={{width: `${200*scaleFactor}px`, height: `${320*scaleFactor}px`}}
          >
            <Image
              className="rounded-b-[15.31px] object-cover object-center"
              src={`/images/${imageName}`}
              alt="Profile Image"
              fill={true}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full rounded-[15.31px] bg-gradient-to-b from-transparent to-black" />

          <div className="absolute bottom-2 left-3 text-white">
            <div className="text-base tracking-wide font-bold whitespace-nowrap">
              {name}
            </div>
            <div className="flex items-center w-fit p-1 rounded-full shadow-[0px_1.66px_1.66px_#00000040] backdrop-blur-md backdrop-brightness-[100%] bg-gradient-to-r from-[rgba(29.75,27.89,27.89,0.6)] via-[rgba(29.75,27.89,27.89,0.47)] to-[rgba(29.75,27.89,27.89,0.58)]">
              <Image
                className="w-5 inline-block pr-1"
                alt="TickMark"
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
export default BossCard;