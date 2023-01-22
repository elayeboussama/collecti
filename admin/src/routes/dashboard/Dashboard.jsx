import { useDispatch } from "react-redux";
import DashboardTopBar from "./DashboardTopBar";
import { showNotification } from "./headerSlice";
import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
import DashboardStats from "./DashboardStats";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import AmountStats from "./AmountStat";
import PageStats from "./PageStats";
import UserChannels from "./UserChannels";
import DoughnutChart from "./DoughnutChart";
import { useGetAllEventsQuery, useGetOrgnizationsQuery } from "../../endpoints/apiEndpoints";
import { useState } from "react";
import { useEffect } from "react";
const Dashboard = () => {
    const { data: receivedData } = useGetOrgnizationsQuery()


    const approvedorgs = receivedData?.organization.filter(organization => organization.status==="approved")
    const pendingorgs = receivedData?.organization.filter(organization => organization.status==="pending")

    const { data: events ,isSuccess} = useGetAllEventsQuery()
    const approvedevents = events?.event.filter(event => event.status==="approved")
    const pendingevents = events?.event.filter(event => event.status==="pending")
    const edonators=approvedevents?.filter(event => event.donators!=0)
    
    const[donators,setDonators]=useState(0)
    const[raiseMoney, setRaiseMoney]=useState(0)
    useEffect(()=>{
       
      for(let i=0;i<edonators?.length;i++)
      {
     
        setDonators(donators+edonators[i].donators)
        setRaiseMoney(raiseMoney+edonators[i].raisedMoney)
      }
      
    },[isSuccess])

    const statsData = [
        {title : "Approved Organizations", value : approvedorgs?.length, icon : <UserGroupIcon className='w-8 h-8'/>, description : "↗︎ 2300 (22%)"},
        {title : "Pending Organizations", value : pendingorgs?.length, icon : <CreditCardIcon className='w-8 h-8'/>, description : "Current month"},
        {title : "Approved Events", value : approvedevents?.length, icon : <CircleStackIcon className='w-8 h-8'/>, description : "50 in hot leads"},
        {title : "Pending Events", value : pendingevents?.length, icon : <UsersIcon className='w-8 h-8'/>, description : "↙ 300 (18%)"},
    ]
    const dispatch = useDispatch()
    const updateDashboardPeriod = (newRange) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(showNotification({message : `Period updated to ${newRange}`, status : 1}))
    }
    return(
        <div className="pt-3 pl-3 bg-slate-50">
         <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/>
          {/** ---------------------- Different stats content 1 ------------------------- */}

         <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-4 md:grid-cols-2">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>
            {/** ---------------------- Different charts ------------------------- */}
            <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                <LineChart />
                <BarChart approvedorgs={approvedorgs} pendingorgs={pendingorgs}/>
            </div>

             {/** ---------------------- Different stats content 2 ------------------------- */}
        
             <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2">
                <AmountStats donators={donators} raiseMoney={raiseMoney} />
                <PageStats />
            </div>

            {/** ---------------------- User source channels table  ------------------------- */}
        
            <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                <UserChannels />
                <DoughnutChart />
            </div>
        </div>
    )

}
export default Dashboard