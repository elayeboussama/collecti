import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, CalendarIcon, Cog6ToothIcon, GlobeAltIcon, HomeIcon, PlusCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../features/authSlice";
import { setContent } from "../../features/modalSlice";
import Login from "../Login";
import Register from "../Register";

const Drawer = ({ children }) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth)

    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col w-full drawer-content ">
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="border-r drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="flex flex-col bg-base-100 w-80">
                        <Link to={"/"} className="w-full border-b">
                            <img className="p-5 w-52" src="https://cdn.discordapp.com/attachments/311564936004370434/1054638152167477298/collecti.svg" alt="logo" />
                        </Link>
                        <ul className="p-4 menu w-80 text-base-content">
                            <label htmlFor="my-drawer-2">
                                <li><NavLink end to={"/"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><HomeIcon className="w-6 h-6" />Home</NavLink></li>
                            </label>
                            <li><NavLink end to={"/organizations"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><GlobeAltIcon className="w-6 h-6" />Organizations</NavLink></li>
                            <li><NavLink end to={"/events"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><CalendarIcon className="w-6 h-6" />Events</NavLink></li>
                            <li><NavLink end to={"/events/add"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><PlusCircleIcon className="w-6 h-6" />Create Event</NavLink></li>
                            <li><NavLink end to={"/organization/edit"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><Cog6ToothIcon className="w-6 h-6" />Settings</NavLink></li>
                        </ul>
                        <div className={cn({ "hidden": user.token, "flex": !user.token, "flex-row items-center w-full mt-auto border-t text-base-content": true })}>
                            <ul className="p-4 menu w-80 text-base-content">
                                <label htmlFor="my-modal-4"><li onClick={() => dispatch(setContent(<Login />))}><span><UserIcon className="w-6 h-6" />Login</span></li></label>
                                <label htmlFor="my-modal-4"><li onClick={() => dispatch(setContent(<Register />))}><span><ArrowLeftOnRectangleIcon className="w-6 h-6" />Sign up</span></li></label>
                            </ul>
                        </div>
                        <div className={cn({ "hidden": !user.token, "flex": user.token, "flex-row items-center w-full p-4 mt-auto border-t menu text-base-content": true })}>
                            <Link to={`/organizations/${user.userId}`} className="avatar">
                                <div className="w-14 rounded-3xl">
                                    <img src={user.user.logo || "https://placeimg.com/192/192/people"} alt="Organization logo" />
                                </div>
                            </Link>
                            <div className="ml-4 leading-5 max-w-[168px]">
                                <h2 className="font-bold leading-4">{user.user.name}</h2>
                                <p className="text-sm text-gray-500 break-words ">{user.user.email}</p>
                            </div>
                            <button onClick={() => dispatch(logout())} className="ml-auto btn btn-square btn-ghost drawer-button"><ArrowRightOnRectangleIcon className="w-6 h-6" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drawer

// TODO: add logo on top of the drawer
// TODO: fix drawer background color and add shadow, remove border