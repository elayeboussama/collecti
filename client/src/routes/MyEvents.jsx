import { Link } from 'react-router-dom'
import EventItem from '../components/EventItem'
import { useOrgDetailsQuery } from '../endpoints/AuthEndpoints'

const MyEvents = () => {

    const id = JSON.parse(localStorage.getItem("user"))._id

    const { data } = useOrgDetailsQuery(id)

    return (
        <div className='w-full max-w-3xl p-4 mx-auto'>
            {data?.organization.events.length > 0 && <table className='w-full text-left rounded-md shadow-md'>
                <thead>
                    <tr>
                        <th className='bg-[#f4f6fa] text-[#58595f] uppercase text-left p-4'>Name</th>
                        <th className='bg-[#f4f6fa] text-[#58595f] uppercase text-left p-4'>Date</th>
                        <th className='bg-[#f4f6fa] text-[#58595f] uppercase text-left p-4'>Status</th>
                        <th className='bg-[#f4f6fa] text-[#58595f] uppercase text-left p-4'>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {data?.organization.events.map((event) => <EventItem key={event} id={event} />)}
                    </tr>
                </tbody>
            </table>}
            {data?.organization.events.length === 0 && <div className='font-semibold text-center'>It looks like you haven't created any events yet. Why not create one now? 🤔 <Link to={'/events/add'} className='link link-primary'>Create Event</Link></div>}
        </div>
    )
}

export default MyEvents