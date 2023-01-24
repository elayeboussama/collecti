import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { useGetEventQuery } from '../endpoints/AuthEndpoints'
import Badge from './Badge'

const EventItem = ({ id }) => {

    const { data } = useGetEventQuery(id)

    console.log(data)

    return (
        <>
            <td className='p-4 font-medium'>{data?.event.name}</td>
            <td className='p-4'>{data && format(new Date(data?.event.date), "PP")}</td>
            <td className='p-4'> <Badge status={data?.event.status} /></td>
            <td className='p-4'><Link className="link link-primary link-hover text-[#416c9e] hover:text-[#416c9e] font-semibold" to={`/events/${id}`}>View</Link></td>
        </>
    )
}

export default EventItem