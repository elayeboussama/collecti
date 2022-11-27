import cn from "classnames"
import { NavLink } from "react-router-dom"
import { HomeIcon, GlobeAltIcon, CalendarIcon, ArrowRightOnRectangleIcon, UserIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline"
import { useDispatch } from "react-redux";
import { showModal } from "../../features/modalSlice";
import Login from "../Login";
import Register from "../Register";

const Drawer = ({ children }) => {
    const dispatch = useDispatch()
    // dispatch(showModal())

    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col w-full">
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side border-r">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className=" flex bg-base-100 flex-col justify-between w-80">
                        <ul className="menu p-4 w-80 text-base-content">
                            <li><NavLink end to={"/"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><HomeIcon className="h-6 w-6" />Home</NavLink></li>
                            <li><NavLink end to={"/organizations"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><GlobeAltIcon className="h-6 w-6" />Organizations</NavLink></li>
                            <li><NavLink end to={"/events"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><CalendarIcon className="h-6 w-6" />Events</NavLink></li>
                        </ul>
                        <div className="flex flex-row border-t items-center p-4 text-base-content w-full">
                            <ul className="menu p-4 w-80 text-base-content">
                                <label htmlFor="my-modal-4"><li onClick={() => dispatch(showModal(<Login />))}><a><UserIcon className="h-6 w-6" />Login</a></li></label>
                                <label htmlFor="my-modal-4"><li onClick={() => dispatch(showModal(<Register />))}><a><ArrowLeftOnRectangleIcon className="h-6 w-6" />Sign up</a></li></label>
                            </ul>
                        </div>
                        <div className="menu flex flex-row border-t items-center p-4 text-base-content w-full hidden">
                            <div className="avatar">
                                <div className="w-14 rounded-3xl">
                                    <img src="https://placeimg.com/192/192/people" alt="" />
                                </div>
                            </div>
                            <div className="ml-4 leading-5 ">
                                <h2 className="font-bold leading-4">John Doe</h2>
                                <p className="text-sm text-gray-500">john@gmail.com</p>
                            </div>
                            <button className="btn btn-square btn-ghost drawer-button ml-auto"><ArrowRightOnRectangleIcon className="h-6 w-6" /></button>
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