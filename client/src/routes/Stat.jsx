import { useEffect, useState } from "react"
import { useGetAllEventsQuery, useGetOrgnizationsQuery } from "../endpoints/AuthEndpoints"
import org from "./org.svg"

const Stat =()=>{
    const { data: receivedData } = useGetOrgnizationsQuery()
  

    const approvedorgs = receivedData?.organization.filter(organization => organization.status==="approved")
  

    const { data: events ,isSuccess} = useGetAllEventsQuery()
    const approvedevents = events?.event.filter(event => event.status==="approved")

    const edonators=approvedevents?.filter(event => event.donators!=0)
    const[raiseMoney, setRaiseMoney]=useState(0)
    useEffect(()=>{
       
      for(let i=0;i<edonators?.length;i++)
      {
     
        
        setRaiseMoney(raiseMoney+edonators[i].raisedMoney)
      }
      
    },[isSuccess])
    
    return(
        <div className="w-4/5 gap-48 stats">
                   
        <div className="stat">
            <div className="stat-figure text-primary">
                <img src={org} className="w-12 h-12"/>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> */}
            </div>
            <div className="stat-title">Total Organizations</div>
            <div className="stat-value text-primary">{approvedorgs?.length}</div>
            {/* <div className="stat-desc">21% more than last month</div> */}
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Total Events</div>
            <div className="stat-value text-secondary">{approvedevents?.length}</div>
            {/* <div className="stat-desc">21% more than last month</div> */}
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary">
            {/* <div className="avatar online">
                <div className="w-16 rounded-full">
                <img src="https://placeimg.com/128/128/people" />
                </div>
            </div> */}
            </div>
            <div className="stat-title">Donations</div>
            <div className="stat-value">{"$"+raiseMoney}</div>
            {/* <div className="stat-desc text-secondary">31 tasks remaining</div> */}
        </div>
        
        </div>

    )
}

export default Stat