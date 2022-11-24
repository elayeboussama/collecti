import OrganizationCard from "../components/organization/OrganizationCard"

const Organizations = () => {
    return (
        <div className="w-full ">
            <div className="mx-auto gap-2 flex-wrap flex w-auto">
                <OrganizationCard />
                <OrganizationCard />
                <OrganizationCard />
            </div>
        </div>
    )
}

export default Organizations