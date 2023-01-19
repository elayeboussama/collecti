import { useSelector } from "react-redux"
import { Navigate } from "react-router"

const ProtectedRoutes = ({ children }) => {

    const user = useSelector(state => state.auth)

    return (
        !user.userId ? <Navigate to="/" replace /> : children

    )
}

export default ProtectedRoutes