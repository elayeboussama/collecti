import { CalendarIcon, GlobeAltIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import cn from "classnames";
import { Link, NavLink } from "react-router-dom";

const Drawer = ({ children }) => {


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
                                <li><NavLink end to={"/"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><Squares2X2Icon className="w-6 h-6" />Dashboard</NavLink></li>
                            </label>
                            <li><NavLink end to={"/organizations"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><GlobeAltIcon className="w-6 h-6" />Organizations</NavLink></li>
                            <li><NavLink end to={"/events"} className={({ isActive }) => cn({ "bg-primary text-white": isActive })}><CalendarIcon className="w-6 h-6" />Events</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drawer