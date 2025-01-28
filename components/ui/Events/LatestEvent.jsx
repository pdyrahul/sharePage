
import { useQuery } from 'react-query'
import { getRequest } from 'lib/api'
import { Loading } from 'components/ui/common/Loading'
import LatestEventCard from './LatestEventCard'


export default function LatestEvent() {
    const result = useQuery({
        queryKey: ['latestEvents'],
        queryFn: () => getRequest('/latest-events', { limit: 2 }),
    });

    return (
        <>
            {result.isLoading && <Loading />}

            {result.isError && (
                <div className="alert alert-danger" role="alert">
                    {result.error.message}
                </div>
            )}

            {result.isSuccess && (
                <div>
                    <h2>Latest Events</h2>
                    <ul>
                        {result.data.data.map((event) => (
                            <LatestEventCard key={event.id} event={event} />
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}
