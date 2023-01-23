import { format } from 'date-fns';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useOrgDetailsQuery, useUpdateStatusMutation } from "../endpoints/apiEndpoints"
import InstagramIcon from '../components/InstagramIcon';
import { toast } from "react-toastify";
import Tabs from '../components/Tab';
import SmallEventCard from '../components/SmallEventCard';
import TeamCard from '../components/TeamCard';
import Actions from '../components/Actions';
// import { SiGmail } from "react-icons/si";


const Organization = () => {
    const { organizationId } = useParams();
    const { data, isLoading } = useOrgDetailsQuery(organizationId)
    console.log(data)

    const [updateStatus] = useUpdateStatusMutation()

    const tabsTitle = ["Description", "Actions plan", "Vision"]
    const eventsList = data?.organization.events;

    const updateStatusHandler = async (status) => {
        if (status === "approve") {
            await updateStatus({ _id: organizationId, status: "approved" })
            toast.success("Organization approved.")
        }
        else if (status === "reject") {
            await updateStatus({ _id: organizationId, status: "rejected" })
            toast.success("Organization rejected.")
        } else {
            return
        }
    }

    return (
        <div>

            {!isLoading ? <div className="flex flex-col justify-center gap-10 px-10 md:flex-row">
                <div className='flex flex-col w-full gap-10 mb-3 left-container'>
                    <div className="flex-initial w-full card glass place-content-center max-h-max">
                        <figure>
                            <div className="flex-col w-full -space-y-28 avatar-group ">
                                <img className='object-cover w-full max-w-10xl h-72' src={data.organization.cover} alt="car!" />
                                <div className="pl-10 border-0 avatar">
                                    <div className="w-48 border-4 rounded-full border-inherit">
                                        <img src={data.organization.logo} />
                                    </div>
                                </div>
                            </div>
                        </figure>
                        <div className="ml-56 -mt-24 card-body ">
                            <div className='flex items-end '>

                                <h2 className="text-3xl card-title">{data.organization.name},
                                </h2>
                                <p className=''>{format(new Date(data.organization.creationDate), "PPP") ?? "Not specified"}</p>
                            </div>
                            <p>{data?.organization.email ?? "email not specified"}</p>
                            <span className="mt-2 text-lg rounded-md badge h-1/5">{data.organization.sector ?? "Not specified"}</span>
                            <div className="flex flex-row gap-10 socail-media">
                                <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">
                                    <a href={data?.organization.socialMedia?.facebook ?? ""} target="_blank">
                                        <BsFacebook className="h-7 w-7 " style={{ color: "#3b5998" }} />
                                    </a>
                                </div>
                                {/* <a href={data?.organization.email?? ""} target="_blank">
                <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">

                  <GmailIcon />
                </div>
                </a> */}
                                <a href={data?.organization.socialMedia?.linkedIn ?? ""} target="_blank">
                                    <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">
                                        <BsLinkedin className="h-7 w-7" style={{ color: "#3b5998" }} />
                                    </div>
                                </a>
                                <a href={data?.organization.socialMedia?.instagram ?? ""} target="_blank">
                                    <div className="grid mt-5 border-2 rounded-md h-9 w-9 border-slate-300 place-content-evenly">

                                        <InstagramIcon className="w-5 h-5" style={{ color: "#3b5998" }} />
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div className='flex justify-end pb-5 pr-5 '>
                            <p className='italic font-bold text-teal-500 '>
                                {data.organization.catchPhrase ?? ""}</p>
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
                <div className="flex flex-col w-5/12 gap-10 right-container">
                    <div className="h-auto card bg-base-100 glass ">
                        <div className="card-body">
                            <h2 className="card-title">Team</h2>
                            <div className="flex-col -space-y-6 avatar-group">
                                <TeamCard name={data.organization.directorName ?? "Not specified"} post="director" />
                                <TeamCard name={data.organization.directorName ?? "Not specified"} post="RH" />
                                <TeamCard name={data.organization.directorName ?? "Not specified"} post="GS" />


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
                    <div className="mb-3 card bg-base-100 glass h-fit ">
                        <div className="gap-4 card-body ">
                            <h2 className="card-title">Events</h2>
                            {eventsList.length > 3 ?
                                eventsList.slice(0, 3).map((event, i) =>
                                    <SmallEventCard key={i} event={event} />
                                ) :
                                eventsList.map((event, i) =>
                                    <SmallEventCard key={i} event={event} />
                                )
                            }


                            <div className="justify-end card-actions">
                                {/* <button className="btn btn-primary">Buy Now</button> */}
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral-focus text-neutral-content btn btn-primary">
                                        <span>{eventsList.length > 3 ? "+" + eventsList.length : eventsList.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Actions id={data?.organization.id} updateStatus={updateStatusHandler} />
            </div> : <i>Loading...</i>}
        </div>

    )
}

export default Organization