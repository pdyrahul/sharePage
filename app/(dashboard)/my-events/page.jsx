
export const metadata = {
    title: 'My Events',
    description: 'My Events',
    auth: true
};
function MyEventPage() {
    return (

        <div className="event-body" style={{ boxShadow: '1px 1px 4px 0px #80808075' }}>
            <div className="heading">My Events</div>
        </div>


    );
}

export default MyEventPage;