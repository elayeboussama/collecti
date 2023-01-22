import { format } from "date-fns"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import Table from "../components/Table"
import { useGetAllEventsQuery, useOrgDetailsQuery } from "../endpoints/apiEndpoints"

const Events = () => {
    const { data: events } = useGetAllEventsQuery()
    console.log(events)
    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor is the "key" in the data
            },
            {
                Header: 'Orgnization',
                accessor: 'organization_id',
            
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
            },
            {
                Header: 'Link',
                accessor: '_id',
                Cell: row => <Link className="link" to={`/events/${row.value}`}>Visit</Link>
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
        <Table columns={columns} data={data}/>
    )
}

export default Events