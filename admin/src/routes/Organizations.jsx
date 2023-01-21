import { useMemo } from "react"
import Table from "../components/Table"
import { useGetOrgnizationsQuery } from "../endpoints/apiEndpoints"
import { format } from "date-fns"

const Organizations = () => {

    const { data: receivedData } = useGetOrgnizationsQuery()
    console.log(receivedData)

    const columns = useMemo(
        () => [
            {
                Header: 'name',
                accessor: 'name', // accessor is the "key" in the data
            },
            {
                Header: 'email',
                accessor: 'email',
            },
            {
                Header: 'Creatin date',
                accessor: 'creationDate',
                Cell: row => format(new Date(row.value), 'PP')

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