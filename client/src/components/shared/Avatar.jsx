import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import getInitials from "../../utils/getInitials"

const Avatar = ({ src, id }) => {

    const user = useSelector(state => state.auth)

    return (
        <Link to={`/organizations/${id}`} className="avatar placeholder">
            {src ? <div className="w-14 rounded-3xl">
                <img src={src} alt="Organization logo" />
            </div> : <div className="rounded-full w-14 bg-neutral-focus text-neutral-content">
                <span className="text-lg">{getInitials(user.user.name || "")}</span>
            </div>}
        </Link>
    )
}

export default Avatar