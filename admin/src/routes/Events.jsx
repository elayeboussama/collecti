import { format } from "date-fns"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import Badge from "../components/Badge"
import Table from "../components/Table"
import { useGetAllEventsQuery } from "../endpoints/apiEndpoints"

const Events = () => {
    const { data: events } = useGetAllEventsQuery()
    console.log(events)
    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor is the "key" in the data
                Cell: row => <span className="font-medium">{row.value}</span>
            },
            {
                Header: 'Category',
                accessor: 'category',
            },
            {
                Header: 'Date',
                accessor: 'date',
                Cell: row => format(new Date(row.value), 'PP')
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: row => <Badge status={row.value} />
            },
            {
                Header: 'Link',
                accessor: '_id',
                Cell: row => <Link className="link link-primary link-hover text-[#416c9e] hover:text-[#416c9e] font-semibold" to={`/events/${row.value}`}>View</Link>
            },
        ],
        []
    )
    const data = useMemo(
        () => {
            if (events) {
                return events.event
            } else {
                return []
            }
        }
        ,
        [events]
    )
    if (!events) return <i>Loading...</i>
    return (
        <Table columns={columns} data={data} />
    )
}

export default Events