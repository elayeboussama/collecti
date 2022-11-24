import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline"
import SearchInput from "./SearchInput"

const Navbar = () => {
    return (
        <div className="flex p-2 justify-between w-full">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button lg:hidden"><Bars3BottomLeftIcon className="h-6 w-6" /></label>

            <SearchInput />
        </div>
    )
}

export default Navbar