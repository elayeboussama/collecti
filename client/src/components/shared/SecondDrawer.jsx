import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import image from "./dropp.png"
import { CalendarIcon, ArrowRightOnRectangleIcon, UserIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline"
import logo from "./collecti2.png"
import HomeIcon from "./accueil.png"
import OrganizationIcon from "./global.png"
import CalenderIcon from "./calendrier.png"

const SecondDrawer = ({ children }) => {
    const dispatch = useDispatch()
    const[open,setOpen]=useState(true)

    return (
        <div className="flex h-screen ">
            <div className={`${open? "w-96" : "w-24"} p-5 pt-8 duration-300 fixed bg-l_blue  h-screen`}>
                <img src={image} alt="Shoes" className={`absolute cursor-pointer -right-5 top-9 w-10 
                ${!open && "rotate-180"} bg-l_blue rounded-full border-4 border-l_blue`}
                onClick={()=> setOpen(!open)}
                />
                 <Link to={"/"} className="flex gap-x-4 items-center w-52">
                    <img className="duration-300" src={logo}alt="logo" />
            
                <h1 className={`text-d_green origin-left text-5xl font-serif font-extrabold duration-300
                ${!open && "scale-0"}`}>
                    collecti</h1>
                </Link>

                <ul className="pt-6 pl-6">
                   
                        <li className="hover:bg-slate-300 rounded-md pb-3 border-b-2 border-d_blue">
                            <NavLink end to={"/"}   className={`flex items-center gap-x-4 p-2` }>
                            <img src={HomeIcon} className="w-6 h-6" />
                            <span className={`${!open && "hidden"} origin-left duration-200 text-2xl pl-6 font-bold text-d_blue`}>Home</span>
                            </NavLink></li>
           
                    <li className="hover:bg-slate-300 rounded-md pb-3 border-b-2 border-d_blue">
                        <NavLink end to={"/organizations"} 
                                className={`flex items-center gap-x-4 p-2` }>
                                <img src={OrganizationIcon} className="w-6 h-6" />
                                <span className={`${!open && "hidden"} origin-left duration-200 text-2xl pl-6 font-bold text-d_blue`}>Organizations</span>
                                
                        </NavLink>
                    </li>
                    <li className="hover:bg-slate-300 rounded-md pb-3 border-b-2 border-d_blue">
                        <NavLink end to={"/events"}  className={`flex items-center gap-x-4 p-2` }>
                        <img src={CalenderIcon} className="w-6 h-6" />
                        <span className={`${!open && "hidden"} origin-left duration-200 text-2xl pl-6 font-bold text-d_blue `}>Events</span></NavLink></li>
                    <li className="hover:bg-slate-300 rounded-md pb-3 border-b-2 border-d_blue"><NavLink end to={"/events/add"}   className={`flex items-center gap-x-4 p-2` }>
                        <img src={CalenderIcon} className="w-6 h-6" />
                        <span className={`${!open && "hidden"} origin-left duration-200 text-2xl pl-6 font-bold text-d_blue `}>Add Event</span></NavLink></li>
                </ul>
            </div>
            <div className={`flex flex-col w-full drawer-content ${open && "ml-72 "} duration-300`}>
                  {/* <!-- Page content here --> */}
                  {children}
            </div>
        </div>
      
       )}

export default SecondDrawer;