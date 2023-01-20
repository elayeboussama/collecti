import  {BsFacebook, BsLinkedin} from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useOrgDetailsQuery } from '../../endpoints/AuthEndpoints';
import GmailIcon from '../shared/GmailIcon';
import SlackIcon from '../shared/SlackIcon';


import Tabs from '../shared/Tab/Tab';
import SmallEventCard from './SmallEventCard';
import TeamCard from './TeamCard';
// import { SiGmail } from "react-icons/si";


const OrganizationDetails = () => {
  let { organizationId } = useParams();
   const { data, isLoading } = useOrgDetailsQuery(organizationId)
  console.log("rrrrrrrrrr",data)
  const tabsTitle=["Description", "Plan d'action", "Vision"]
  const eventsList=data.organization.events;
    return (
      <div className="flex flex-row justify-center gap-10 px-10">
      <div className='flex flex-col w-2/3 gap-10 left-container'>
        <div className="flex-initial w-full card glass place-content-center max-h-max">
        <figure>
          <div className="flex-col w-full avatar-group -space-y-28 ">
            <img className='w-full max-w-10xl h-72' src={data.organization.cover} alt="car!" />
          <div className="pl-10 border-0 avatar">
            <div className="w-48 border-4 rounded-full border-inherit">
              <img src={data.organization.logo} />
            </div>
          </div>
        </div>
        </figure>
        <div className="ml-56 -mt-24 card-body ">
  
          <h2 className="text-3xl card-title">{data.organization.name}</h2>
          <p >{data.organization.creationDate ?? "Not specified"}</p>
          <span className="mt-2 text-lg rounded-md badge h-1/5">{data.organization.sector ?? "Not specified"}</span>
          <div className="flex flex-row gap-10 socail-media">
            <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">
            <BsFacebook className="h-7 w-7 " style={{color: "#3b5998" }}/>
            </div>
            <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">
            
            <GmailIcon/>
            </div>
           
            <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">
            <BsLinkedin className="h-7 w-7" style={{color: "#3b5998" }}/>
            </div>
            
            <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">
        
              <SlackIcon/>
            </div>
           
          </div>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Learn more!</button>
          </div>
        </div>

      
      </div>

      <div className="w-full body-container glass rounded-2xl ">
      <Tabs 
      tabsTitle={tabsTitle}
      content1={data.organization.description}
      content2={data.organization.planActions ?? "not specified"}
      content3={data.organization.Vision ?? "not specified"}

      />
      </div>  

      </div>
        <div className="flex flex-col w-1/3 gap-10 right-container">
          <div className="h-auto card bg-base-100 glass ">
            <div className="card-body">
              <h2 className="card-title">Team</h2>
              <div className="flex-col -space-y-6 avatar-group">
                <TeamCard name={data.organization.directorName ?? "Not specified"} post="director"/>
                <TeamCard name={data.organization.directorName ?? "Not specified"} post="RH"/>
                <TeamCard name={data.organization.directorName ?? "Not specified"} post="GS"/>
                
          
              </div>
              {/* <div className="justify-end card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> }
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content btn btn-primary">
                    <span>+99</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="card bg-base-100 glass h-2/5 ">
            <div className="gap-4 card-body ">
            <h2 className="card-title">Events</h2>
                {eventsList.map((event) =>
                <SmallEventCard event={event}/>
                )}

                <div className="justify-end card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral-focus text-neutral-content btn btn-primary">
                    <span>{eventsList.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default OrganizationDetails