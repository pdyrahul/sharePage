import React from 'react';
import PhotosCard from '@/components/PhotosCard';
function MyEventPage(props) {
    return (

        <div className="event-body" style={{
            boxShadow: '1px 1px 4px 0px #80808075'
          }}>
            <div className="heading">My Events</div>
            <PhotosCard />
            <PhotosCard />
          </div>


    );
}

export default MyEventPage;