import { Navigate, Outlet } from "react-router"

const ProtectedRoutes = () => {

    const user = localStorage.getItem('user')

    return (
        !user ? <Navigate to="/" /> : <Outlet />

    )
}

export default ProtectedRoutes