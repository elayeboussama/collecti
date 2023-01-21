import { useSelector } from "react-redux"
import { Navigate } from "react-router"

const ProtectedRoutes = ({ children }) => {

    const user = localStorage.getItem('user')
    const userState = useSelector(state => state.auth)

    return (
        userState.userId || user ? children : <Navigate to="/" replace />

    )
}

export default ProtectedRoutes