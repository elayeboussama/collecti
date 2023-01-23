import { format } from "date-fns"
import { useState } from "react"
import { useEffect } from "react"
import { useGetDonationsQuery } from "../../endpoints/apiEndpoints"
import TitleCard from "./TitleCard"



const UserChannels = ()=>{
    function formatDate(date) {
        const newDate = new Date(date);
        const currentMonth = newDate.getMonth();
        const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
        const currentDate = newDate.getDate();
        const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
        return `${newDate.getFullYear()}-${Number(monthString) + 1}-${currentDate}`;
      }
    const { data: receivedData } = useGetDonationsQuery()
    const[tab, setTab]=useState([])
    useEffect(()=>{
        for (let j=receivedData?.donates.length-1; j>=0; j--){
           tab.push(receivedData.donates[j])

        }
    },[receivedData])
    console.log("sseees",tab)
   
    const userSourceData = [
       
        {source : tab[0]?.email, count : tab[0]?.amount, date : tab[0]?.date},
        {source : tab[1]?.email, count : tab[1]?.amount, date : tab[1]?.date},
        {source : tab[2]?.email, count : tab[2]?.amount, date : tab[2]?.date},
        {source : tab[3]?.email, count : tab[3]?.amount, date : tab[3]?.date},
        {source : tab[4]?.email, count : tab[4]?.amount, date : tab[4]?.date},

       
    ]
    return(
        <TitleCard title={"User Signup Source"}>
             {/** Table Data */}
             <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th className="normal-case">Email</th>
                        <th className="normal-case">Amount</th>
                        <th className="normal-case">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((u, k) => {
                                return(
                                    <tr key={k}>
                                        <th>{k+1}</th>
                                        <td>{u.source}</td>
                                        <td>{u.count}</td>
                                        <td>{`${formatDate(new Date(u.date))}`}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default UserChannels