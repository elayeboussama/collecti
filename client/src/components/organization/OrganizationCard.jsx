import { Link } from "react-router-dom"

const OrganizationCard = ({ organization }) => {

    let logo = organization.logo
    let cover = organization.cover

    if (organization.logo[0] === "u") {
        logo = `http://192.168.56.1:8080/${organization.logo}`
    }

    if (organization.cover[0] === "u") {
        cover = `http://192.168.56.1:8080/${organization.cover}`
    }

    return (
        <div className="shadow-xl card w-96 bg-base-100">
            <figure><img className="object-cover w-full h-56" src={cover} alt="cover" /></figure>
            <div className="card-body">
                <div className="absolute avatar top-40">
                    <div className="w-24 rounded-full ring ring-white">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <h2 className="justify-between card-title">
                    <div>{organization.name}</div>
                    <div className="badge badge-secondary">{organization.events.length}</div>
                </h2>
                <p className="line-clamp-5">{organization.description}</p>
                <div className="flex items-center justify-between">
                    <div className="card-actions">
                        {organization.keywords.map(keyword => (
                            <div key={keyword} className="badge badge-outline">{keyword}</div>
                        ))}
                    </div>
                    <div>
                        <Link to={organization._id}>
                            <button className="link btn-sm hover:text-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationCard