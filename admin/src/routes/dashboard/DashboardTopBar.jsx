import SelectBox from "./SelectBox"
import ArrowDownTrayIcon  from '@heroicons/react/24/outline/ArrowDownTrayIcon'
import ShareIcon  from '@heroicons/react/24/outline/ShareIcon'
import EnvelopeIcon  from '@heroicons/react/24/outline/EnvelopeIcon'
import EllipsisVerticalIcon  from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import ArrowPathIcon  from '@heroicons/react/24/outline/ArrowPathIcon'

const DashboardTopBar =({updateDashboardPeriod})=>{
    const periodOptions = [
        {name : "Today", value : "TODAY"},
        {name : "Yesterday", value : "YESTERDAY"},
        {name : "This Week", value : "THIS_WEEK"},
        {name : "Last Week", value : "LAST_WEEK"},
        {name : "This Month", value : "THIS_MONTH"},
        {name : "Last Month", value : "LAST_MONTH"},
    ]
    const updateSelectBoxValue = ({updateVar , value}) => {
        updateDashboardPeriod(value)
    }

    return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="">
            <SelectBox 
                options={periodOptions}
                labelTitle="Period"
                placeholder="Select date range"
                containerStyle="w-72"
                labelStyle="hidden"
                defaultValue="TODAY"
                updateFormValue={updateSelectBoxValue}
            />
            </div>
            <div className="text-right ">
                <button className="normal-case btn btn-ghost btn-sm"><ArrowPathIcon className="w-4 mr-2"/>Refresh Data</button>
                <button className="ml-2 normal-case btn btn-ghost btn-sm"><ShareIcon className="w-4 mr-2"/>Share</button>

                <div className="ml-2 dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="normal-case btn btn-ghost btn-sm btn-square "><EllipsisVerticalIcon className="w-5"/></label>
                    <ul tabIndex={0} className="p-2 shadow dropdown-content menu menu-compact bg-base-100 rounded-box w-52">
                        <li><a><EnvelopeIcon className="w-4"/>Email Digests</a></li>
                        <li><a><ArrowDownTrayIcon className="w-4"/>Download</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
    

}
export default DashboardTopBar