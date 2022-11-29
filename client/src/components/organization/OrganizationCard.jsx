import { Link } from "react-router-dom"

const OrganizationCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://media.slidesgo.com/storage/24722876/lung-cancer-awareness-month1663157891.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Organization name
                    <div className="badge badge-secondary">3</div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ipsam error harum distinctio ducimus esse debitis dignissimos cumque iusto cupiditate.</p>
                <div className="flex justify-between items-center">
                    <div className="card-actions">
                        <div className="badge badge-outline">Cancer</div>
                        <div className="badge badge-outline">Health</div>
                    </div>
                    <div>
                        <Link to={`organization/1`}>
                        <button className="link btn-sm hover:text-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationCard