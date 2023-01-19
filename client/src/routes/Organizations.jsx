import OrganizationCard from "../components/organization/OrganizationCard"
import { useGetOrgnizationsQuery } from "../endpoints/AuthEndpoints"

const Organizations = () => {

    const { data, isLoading } = useGetOrgnizationsQuery()

    const filteredData = data?.organization.filter(organization => organization.firstConnection === false)
    console.log(filteredData)

    return (
        <div className="flex items-center justify-center py-4 sm:p-4">
            {!isLoading ? <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                {
                    filteredData && filteredData.length === 0 ? <i>No organizations found</i> :
                        filteredData?.map(organization => (
                            <OrganizationCard key={organization._id} organization={organization} />
                        ))
                }
            </div> : <i>Loading...</i>}
        </div>
    )
}

export default Organizations