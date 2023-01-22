import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import getInitials from "./utils/getInitials"

const Avatar = ({ src, id }) => {

    // const user = useSelector(state => state.auth)

    return (
        <Link to={`/organizations/${id}`} className="avatar placeholder">
           <div className="w-14 rounded-3xl">
                <img src={src} alt="Organization logo" />
            </div>
        </Link>
    )
}

export default Avatar