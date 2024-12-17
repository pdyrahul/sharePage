'use client'
import EventCard from '../EventCard';

const events = [
  { id: 1, title: 'Masterclass-Currency', date: '2024-03-16', time: '07:00 AM', host: 'Aneema Agarwal', location: 'Rawalpindi, Pakistan', price: '$109.5' },
  { id: 2, title: 'Masterclass-Currency', date: '2024-03-17', time: '08:00 AM', host: 'Shoaib Khan', location: 'Lahore, Pakistan', price: '$200.5' },
  { id: 3, title: 'Masterclass-Currency', date: '2024-03-18', time: '09:00 AM', host: 'Ali Ahmed', location: 'Karachi, Pakistan', price: '$300.5' },
  { id: 4, title: 'Masterclass-Currency', date: '2024-03-16', time: '07:00 AM', host: 'Aneema Agarwal', location: 'Rawalpindi, Pakistan', price: '$109.5' },
  { id: 5, title: 'Masterclass-Currency', date: '2024-03-17', time: '08:00 AM', host: 'Shoaib Khan', location: 'Lahore, Pakistan', price: '$200.5' },
  { id: 6, title: 'Masterclass-Currency', date: '2024-03-18', time: '09:00 AM', host: 'Ali Ahmed', location: 'Karachi, Pakistan', price: '$300.5' }
];

const Events = () => {
    return (
      <div>
        <div className="slider" id="carousel">
          <div className="event-list" style={{ gridTemplateColumns: 'repeat(6, auto)' }}>
            {events.map((event) => (
              <EventCard key={event.id} id={event.id}
               title={event.title} 
               date={event.date} 
               time={event.time} 
               host={event.host} 
               location={event.location}
               price={event.price} />
            ))}
          </div>
        </div>
      </div>
    );
  }
export default Events;