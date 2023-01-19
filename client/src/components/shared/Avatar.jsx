import { Link } from "react-router-dom"

const Avatar = ({ src, id }) => {
    return (
        <Link to={`/organizations/${id}`} className="avatar">
            <div className="w-14 rounded-3xl">
                <img src={src || "https://placeimg.com/192/192/people"} alt="" />
            </div>
        </Link>
    )
}

export default Avatar