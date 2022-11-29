import EventCard from "../components/event/EventCard"
import Tabs from "../components/shared/Tab/Tab"


const Events = () => {
    const tabsTitle=["Computer science", "Robotics", "Cultural"]
    const csEvents=[
        {
            id:1,
            eventTitle: "event1"
        },
        {
            id:2,
            eventTitle: "event2"
        },
        {
            id:3,
            eventTitle: "event3"
        },
        {
            id:4,
            eventTitle: "event4"
        },
    ]
    return (
        <div>
          
           <Tabs 
           tabsTitle={tabsTitle}
           content1={<div className="flex items-center justify-center py-4 sm:p-4 h-full">
             <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-7 h-full">
                        {csEvents.map((csevent,i)=>
                            <EventCard eventTitle={csevent.eventTitle}/>
                            

                            )}
                    </div>
                    </div>}
                    
                        
                    
            content2={
                <EventCard eventTitle="robot event"/>
                    }
            content3={
                <EventCard eventTitle="cultural event"/>
                    }
           />
        </div>
    )
}

export default Events