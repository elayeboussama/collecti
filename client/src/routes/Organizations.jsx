import OrganizationCard from "../components/organization/OrganizationCard"

const Organizations = () => {
    return (
        <div className="flex gap-2 flex-wrap">
            <OrganizationCard />
            <OrganizationCard />
            <OrganizationCard />
        </div>
    )
}

export default Organizations