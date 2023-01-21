import { useMemo } from "react"
import Table from "../components/Table"
import { useGetOrgnizationsQuery } from "../endpoints/apiEndpoints"

const Organizations = () => {

    const { data: d } = useGetOrgnizationsQuery()
    console.log(d)

    const data = useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        []
    )

    const columns = useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
        ],
        []
    )

    return <Table columns={columns} data={data} />
}

export default Organizations