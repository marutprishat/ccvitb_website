'use client';

import { useState } from 'react';
import EventsCard from '@/components/EventsCard';
import Timeline from '@/components/Timeline'

interface Event {
    title: string;
    date: string;
    details: string;
    image: string
}
const EventsTimeline = () => {
    const events: Event[] = [
        {
            title: "Community Establishment",
            date: "Sept. 15, 2023",
            details: "The Cisco Community fosters a vibrant learning ecosystem, connecting students to the tech industry. Offering insights into networks, software, and Cisco products, it cultivates a rich environment for skill development. Students access exclusive resources, workshops, and certifications, immersing themselves in Cisco's unique culture. Connecting like-minded peers, it's a gateway to explore and thrive in the world of technology.",
            image: "/images/CCVITBLogo.png"
        },
        {
            title: "First Recruitment",
            date: "Sept. 20, 2023",
            details: "The Cisco Community is a vibrant hub dedicated to uniting students with Cisco's groundbreaking technologies. Dive into technical workshops, campus events, and engaging experiences. Explore Cisco's innovative products, immerse in our unique culture, and gain insights into cutting-edge technologies. Our goal is to offer enriching events, fostering understanding and equipping you with valuable knowledge for a promising future in Cisco's evolving tech landscape.",
            image: "/events/Recruitment.jpg"
        },
        {
            title: "Community Inauguration",
            date: "Jan. 31st, 2024",
            details: "We are thrilled to announce the inauguration of the CISCO Community (a vibrant community of students and passionate individuals that are committed to promoting teamwork and exchanging knowledge), and it is our pleasure to extend a warm invitation to you to join us for this significant occasion. The ceremony will feature esteemed speaker Mr. Mahendra Singh Kushwah, shedding light on the community's goals and networking prospects for students and industry professionals. This event marks the commencement of a productive space, fostering innovation and connectivity within the realm of technology.",
            image: "/events/Inaugration.png"
        },
    ];
    const [selectedEvent, setSelectedEvent] = useState({ title: events[events.length - 1].title, details: events[events.length - 1].details, image: events[events.length-1].image });
    return (
        <div id='Timeline' className='w-full flex flex-col items-center justify-center  mb-16'>
            <h1 className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#005071] text-[68.8px] text-center tracking-[0] leading-[normal] whitespace-nowrap" >Timeline</h1 >

            <p className="mt-3 [font-family:'Inter-Regular',Helvetica] font-normal text-[#00000087] dark:text-[#a6adbb] text-[25px] text-center tracking-[0] leading-[normal]">Here are all past, ongoing and upcoming events organized by <br /> our club in offline and online mode.</p>

            <div className="overflow-auto sm:max-w-[60%] max-h-[400px] p-3 mt-10">
                <Timeline eventList={events} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent}/>
            </div>
            <div className='sm:max-w-[60%] mt-10'>
                <EventsCard eventTitle={selectedEvent.title} eventDetails={selectedEvent.details} eventImage={selectedEvent.image} />
            </div>

        </div >
    )
}

export default EventsTimeline;
