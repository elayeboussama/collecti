import { useEffect, useState } from "react"
import { useGetAllEventsQuery } from "../endpoints/AuthEndpoints"
import DonationPopup from "../components/event/DonationPopup"
import EventCard from "../components/event/EventCard"
import Tabs from "../components/shared/Tab/Tab"


const Events = () => {
    const [eventId, setEventId] = useState();
    const[showModal,setShowModal]=useState(false)
 
    const{
        data:events,
        isLoading,
        isSuccess, 
        isError,
        error
    }=useGetAllEventsQuery()


    const handleVisible = num =>{ setShowModal(!showModal);
     
        
    }

    const[eventsList, setEventsList]=useState([])
  

    

    const handleClick = num => {
      // 👇️ take parameter passed from Child component
      setShowModal(true)
      setEventId(num);
    };
    // console.log("hhhh",eventId);
    const tabsTitle=["Computer science", "Robotics", "Cultural"]
    
  
    return (
        <div>
          
           <Tabs 
           tabsTitle={tabsTitle}
           content1={<div className="flex items-center justify-center h-full py-4 sm:p-4">
          
                {isSuccess?  <div className="grid h-full grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-7">
                    {events.event.map((csevent,i)=>
                            <EventCard eventTitle={csevent.name} handleClick={handleClick}
                           />)}
                  
                </div>: <p>error</p>}
                       
                    </div>
                  }
                    
                        
                    
            content2={
                <EventCard eventTitle="robot event"/>
                    }
            content3={
                <EventCard eventTitle="cultural event"/>
                    }
           />

        <DonationPopup 
            isOpen={showModal}
            onClose={handleVisible}/>
        </div>
    )
}

export default Events