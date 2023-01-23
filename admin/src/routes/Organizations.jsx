import { useMemo } from "react"
import Table from "../components/Table"
import { useGetOrgnizationsQuery } from "../endpoints/apiEndpoints"
import { format } from "date-fns"
import { Link } from "react-router-dom"
import Badge from "../components/Badge"
const Organizations = () => {

    const { data: receivedData } = useGetOrgnizationsQuery()

    const columns = useMemo(
        () => [
            {
                Header: 'Organization',
                accessor: 'name', // accessor is the "key" in the data
                Cell: row => <div className="flex items-center space-x-2">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={row.row.original.logo} alt="logo" />
                        </div>
                    </div>
                    <span className="font-medium">{row.value}</span>
                </div>

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
                Cell: row => <Badge status={row.value} />
            },
            {
                Header: 'Link',
                accessor: '_id',
                Cell: row => <Link className="link link-primary link-hover text-[#416c9e] hover:text-[#416c9e] font-semibold" to={`/organization/${row.value}`}>View</Link>
            },
        ],
        []
    )

    const data = useMemo(
        () => {
            if (receivedData) {
                return receivedData.organization.filter(org => org.firstConnection === false)
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