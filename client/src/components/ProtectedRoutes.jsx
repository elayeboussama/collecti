import { Navigate } from "react-router"

const ProtectedRoutes = ({ children }) => {

    const user = localStorage.getItem('user')

    return (
        !user ? <Navigate to="/" replace /> : children

    )
}

export default ProtectedRoutes