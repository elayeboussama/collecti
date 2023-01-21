import { useEffect } from "react"
import { useState } from "react"
import DonationPopup from "../components/event/DonationPopup"
import EventCard from "../components/event/EventCard"
import Tabs from "../components/shared/Tab/Tab"
import { useGetAllEventsQuery, useOrgDetailsQuery } from "../endpoints/AuthEndpoints"


const Events = () => {
    const [eventId, setEventId] = useState();
    const[raisedMoney, setRaisedMoney]=useState(0)
    const[donators, setDonators]=useState(0)
    const [showModal, setShowModal] = useState(false)

    

    const {
        data: events,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllEventsQuery()


    const handleVisible = num => {
        setShowModal(!showModal);


    }

    const [eventsList, setEventsList] = useState([])
const [orgInfo, setOrgInfo]=useState()



    const handleClick = (num, money, donators) => {
        // 👇️ take parameter passed from Child component
        setShowModal(true)
        setEventId(num);
        setRaisedMoney(money);
        setDonators(donators);
    };
    // console.log("hhhh",eventId);
    const tabsTitle = ["Computer science", "Robotics", "Cultural"]


    return (
        <div className="flex justify-center">

            <Tabs
                tabsTitle={tabsTitle}
                content1={<div className="flex items-center justify-center h-full py-4 sm:p-4">

                    {isSuccess ? <div className="grid h-full grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-7">
                        {events.event.map((allevent, i) =>
                            allevent.category === "Computer science" ?
                                <EventCard 
                                eventTitle={allevent.name}
                                orgId={allevent.organization_id}
                                date={allevent.date}
                                 handleClick={()=>handleClick(allevent._id, allevent.raisedMoney, allevent.donators)}
                                 location={allevent.location ?? allevent.location}
                                 donators={allevent.donators}
                                  id={allevent._id}
                                /> : ""

                        )}

                    </div> : <p>error</p>}
                </div>
                }



                content2={
                    <div className="flex items-center justify-center h-full py-4 sm:p-4">

                        {isSuccess ? <div className="grid h-full grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-7">
                            {events.event.map((allevent, i) =>
                                allevent.category === "Robotics" ?
                            
                                    <EventCard 
                                    eventTitle={allevent.name} 
                                    id={allevent._id}
                                    orgId={allevent.organization_id}
                                    date={allevent.date}
                                    location={allevent.location ?? allevent.location}
                                    donators={allevent.donators}
                                    handleClick={()=>handleClick(allevent._id,allevent.raisedMoney, allevent.donators)} 
                                    /> : ""

                            )}

                        </div> : <p>error</p>}

                    </div>
                }
                content3={
                    <div className="flex items-center justify-center h-full py-4 sm:p-4">

                        {isSuccess ? <div className="grid h-full grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-7">
                            {events.event.map((allevent, i) =>
                                allevent.category === "Cultural" ?
                                    <EventCard 
                                    eventTitle={allevent.name} 
                                    orgId={allevent.organization_id}
                                    location={allevent.location ?? allevent.location}
                                    date={allevent.date}
                                    donators={allevent.donators}
                                    handleClick={()=>handleClick(allevent._id, allevent.raisedMoney, allevent.donators)} 
                                    id={allevent._id}
                                    /> : ""

                            )}

                        </div> : <p>error</p>}

                    </div>
                }
            />

            <DonationPopup
                isOpen={showModal}
                onClose={handleVisible} 
                eventId={eventId}
                prevRaisedMoney={raisedMoney}
                prevDonators={donators}/>
               
        </div>
    )
}

export default Events