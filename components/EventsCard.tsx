import Image from 'next/image';

interface Props {
    eventTitle: string;
    eventDetails: string;
  }

const EventsCard: React.FC<Props> = ({ eventTitle, eventDetails }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className=''>
                <Image
                    src="/figures/astronaut.png"
                    alt="Album"
                    width={200}
                    height={400}
                />
            </figure>
            <div className="card-body">
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
