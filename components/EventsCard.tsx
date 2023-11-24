import Image from 'next/image';

interface Props {
    eventTitle: string;
    eventDetails: string;
}

const EventsCard: React.FC<Props> = ({ eventTitle, eventDetails }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='lg:w-1/3'>
                <Image
                    src="/figures/rocket.png"
                    alt="Album"
                    width={100}
                    height={100}
                />
            </figure>
            <div className="card-body lg:w-2/3">
                <h2 className="card-title">{eventTitle}</h2>
                <p>{eventDetails}</p>
                <div className="card-actions justify-end">
                    <button className="px-[31.96px] py-[19.97px] bg-[#015478] rounded-[20px] shadow-[4px_10px_20px_#002b3d78] all-[unset] box-border text-white text-[20px] text-center leading-[22.0px] whitespace-nowrap">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default EventsCard;