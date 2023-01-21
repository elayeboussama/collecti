import { useMemo } from "react"
import Table from "../components/Table"
import { useGetOrgnizationsQuery } from "../endpoints/apiEndpoints"
import { format } from "date-fns"
import { Link } from "react-router-dom"

const Organizations = () => {

    const { data: receivedData } = useGetOrgnizationsQuery()
    console.log(receivedData)

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor is the "key" in the data
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Creation date',
                accessor: 'creationDate',
                Cell: row => format(new Date(row.value), 'PP')
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Link',
                accessor: '_id',
                Cell: row => <Link className="link" to={`/organization/${row.value}`}>Visit</Link>
            },
        ],
        []
    )

    const data = useMemo(
        () => {
            if (receivedData) {
                return receivedData.organization
            } else {
                return []
            }
        }
        ,
        [receivedData]
    )

    if (!receivedData) return <i>Loading...</i>

    return <Table columns={columns} data={data} />
}

export default Organizations