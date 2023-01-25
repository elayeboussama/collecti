import OrganizationCard from "../components/organization/OrganizationCard"
import { useGetOrgnizationsQuery } from "../endpoints/AuthEndpoints"

const Organizations = () => {

    const { data, isLoading } = useGetOrgnizationsQuery()

    const filteredData = data?.organization.filter(organization => organization.firstConnection === false && organization.status === "approved")

    return (
        <div>
            <div className="flex items-center justify-center py-4 sm:p-4">
                {/* <img className="w-32 h-32" src="http://192.168.56.1:8080/uploads/2023-01-21T10-30-23.172Z-blend-blue-yellow.png" alt="ho" /> */}
                {!isLoading ? <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                    {
                        filteredData && filteredData.length === 0 ? <i>No organizations found</i> :
                            filteredData?.map(organization => (
                                <OrganizationCard key={organization._id} organization={organization} />
                            ))
                    }
                </div> : <i>Loading...</i>}
            </div>
        </div>
    )
}

export default Organizations