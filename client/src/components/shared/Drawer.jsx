import cn from "classnames"
import { Link, NavLink } from "react-router-dom"
import { HomeIcon, GlobeAltIcon, CalendarIcon, ArrowRightOnRectangleIcon, UserIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline"
import { useDispatch } from "react-redux";
import { setContent } from "../../features/modalSlice";
import Login from "../Login";
import Register from "../Register";

const Drawer = ({ children }) => {
    const dispatch = useDispatch()

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
                            <li><NavLink end to={"/events/add"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><CalendarIcon className="w-6 h-6" />Add Event</NavLink></li>
                        </ul>
                        <div className="flex flex-row items-center w-full mt-auto border-t text-base-content ">
                            <ul className="p-4 menu w-80 text-base-content">
                                <label htmlFor="my-modal-4"><li onClick={() => dispatch(setContent(<Login />))}><span><UserIcon className="w-6 h-6" />Login</span></li></label>
                                <label htmlFor="my-modal-4"><li onClick={() => dispatch(setContent(<Register />))}><span><ArrowLeftOnRectangleIcon className="w-6 h-6" />Sign up</span></li></label>
                            </ul>
                        </div>
                        <div className="flex flex-row items-center hidden w-full p-4 mt-auto border-t menu text-base-content">
                            <div className="avatar">
                                <div className="w-14 rounded-3xl">
                                    <img src="https://placeimg.com/192/192/people" alt="" />
                                </div>
                            </div>
                            <div className="ml-4 leading-5 ">
                                <h2 className="font-bold leading-4">John Doe</h2>
                                <p className="text-sm text-gray-500">john@gmail.com</p>
                            </div>
                            <button className="ml-auto btn btn-square btn-ghost drawer-button"><ArrowRightOnRectangleIcon className="w-6 h-6" /></button>
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