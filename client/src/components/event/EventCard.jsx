import { format } from "date-fns"
import { Link } from "react-router-dom"
import { useOrgDetailsQuery } from "../../endpoints/AuthEndpoints"
import image from "./rb.jpg"


const EventCard = ({ eventTitle, handleShow, handleClick, id , orgId, date, location="not specified", donators}) => {
    
    const { data, isLoading, isSuccess } = useOrgDetailsQuery(orgId)
    // const[showModal,setShowModal]=useState(false)
    // const handleVisible = () => setShowModal(!showModal)
    return (
        <div className="items-end shadow-xl card w-96 bg-base-100 image-full h-96 ">
            <figure className="h-full"><img src={image} alt="Shoes" /></figure>


            <button className="w-2/5 btn btn-primary mb-80 ml-52" onClick={() => handleClick(1)}>
                Donate
            </button>



            <Link to={id}>
                <div className="w-11/12 pt-3 mb-4 ml-4 cursor-pointer card-body bg-slate-50 h-4/6 rounded-2xl">
                    <h2 className="card-title text-slate-900">{eventTitle}</h2>
                    <div className="organization flex gap-0.5">
                        <p className="flex-grow-0 text-slate-300">By  </p>
                        <p className="text-slate-400"> {data?.organization.name}</p>
                    </div>
                    <span className="border-none badge bg-slate-200 text-slate-400">
                        {format(new Date(date), "PPP") ?? "Not specified"}</span>

                    <div className="flex gap-1 p-2 border localisation rounded-2xl w-fit">
                        <img className="w-8 h-8" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-localization-online-marketing-flaticons-lineal-color-flat-icons.png" />
                        <p className="text-slate-400">{location}</p>
                    </div>

                    <div className="-space-x-6 overflow-visible avatar-group">
                        {donators>0 ?
                        donators<2 ?
                        <>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div> 
                          <div className="avatar placeholder">
                          <div className="w-12 bg-neutral-focus text-neutral-content">
                              <span>{donators}</span>
                          </div>

                      </div>
                      <p className="pt-3 pl-6 text-slate-400">are donating</p>
                      </> :
                      donators < 3 ?
                      <>
                       <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                          <div className="w-12 bg-neutral-focus text-neutral-content">
                              <span>{donators}</span>
                          </div>

                      </div>
                      <p className="pt-3 pl-6 text-slate-400">are donating</p>
                      </>
                      :
                      <>
                       <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                         <div className="avatar">
                            <div className="w-12">
                                <img src="https://placeimg.com/192/192/people" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <div className="w-12 bg-neutral-focus text-neutral-content">
                                <span>+{donators-3}</span>
                            </div>

                        </div>
                        <p className="pt-3 pl-6 text-slate-400">are donating</p>
                      </>
                      : "there's no donators"


                        }
                       
                     
                    </div>


                </div>
            </Link>


        </div>
    )
}

export default EventCard