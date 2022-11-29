import OrganizationCard from "../components/OrganizationCard"

const Organizations = () => {
    return (
        <div className="flex items-center justify-center py-4 sm:p-4">
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                <OrganizationCard />
                <OrganizationCard />
                <OrganizationCard />
            </div>
        </div>
    )
}

export default Organizations