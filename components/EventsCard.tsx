import Image from 'next/image';

interface Props {
    eventTitle: string;
    eventDetails: string;
  }

const EventsCard: React.FC<Props> = ({ eventTitle, eventDetails }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='w-1/3'>
                <Image
                    src="/figures/rocket.png"
                    alt="Album"
                    width={100}
                    height={100}
                />
            </figure>
            <div className="card-body w-2/3">
                <h2 className="card-title">{eventTitle}</h2>
                <p>{eventDetails}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default EventsCard;
