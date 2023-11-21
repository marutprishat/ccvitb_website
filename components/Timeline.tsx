//<hr className="bg-[#6ebf49] text-[#6ebf49]"/>  <---- do not delete

export interface Event {
    title: string;
    date?: string;
    details: string;
}

interface TimelineProps {
    eventList: Event[]; // Assuming Event[] is the type of your event list
    selectedEvent: Event | null; // Assuming Event is the type of your selected event
    setSelectedEvent: (event: Event | null) => void; // Function to set the selected event
  }
const Timeline: React.FC<TimelineProps> = ({ eventList, selectedEvent, setSelectedEvent }) => {
    const currentDate: Date = new Date();
    return (
        <div>
            <ul className="timeline timeline-vertical lg:timeline-horizontal">
                {eventList.map((event: Event, index: number) => {
                    const eventDate: Date = event.date ? new Date(event.date) : new Date(); // Provide a default value if event.date is undefined

                    const color: string = currentDate > eventDate ? '#6ebf49' : '';

                    const isEvenIndex: boolean = index % 2 === 0;

                    const dateClass: string = isEvenIndex ? 'timeline-end' : 'timeline-start';
                    const titleClass: string = isEvenIndex ? 'timeline-start' : 'timeline-end';

                    return (
                        <li key={index} onClick={()=>setSelectedEvent(event)}>
                            {index !== 0 && <hr className={`bg-[${color}]`} />}
                            <div className={`${dateClass}`}>{event.date}</div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-[${color}]`}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className={`${titleClass} timeline-box ${selectedEvent?.title===event.title && 'bg-[#00bcea]'}`}>{event.title}</div>
                            {index !== (eventList.length - 1) && <hr className={`bg-[${color}]`} />}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Timeline;