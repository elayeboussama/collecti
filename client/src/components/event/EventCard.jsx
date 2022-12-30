
import { useState } from "react"
import { Link } from "react-router-dom"
import DonationPopup from "./DonationPopup"
import image from "./rb.jpg"


const EventCard = ({eventTitle, handleShow, handleClick}) => {

    // const[showModal,setShowModal]=useState(false)
    // const handleVisible = () => setShowModal(!showModal)
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full h-96 items-end ">
            <figure className="h-full"><img src={image} alt="Shoes" /></figure>
              
          
                     <button className="btn btn-primary  w-2/5 mb-80 ml-52" onClick={() => handleClick(1)}>
                        Donate
                    </button> 
               
                 
             
            <Link to={`1`}>
            <div className="card-body bg-slate-50 h-4/6 w-11/12 mb-4 ml-4 rounded-2xl pt-3 cursor-pointer">
                <h2 className="card-title text-slate-900">{eventTitle}</h2>
                <div className="organization flex gap-0.5">
                <p className="text-slate-300 flex-grow-0">By  </p>
                <p className="text-slate-400"> Nader ferjani</p>
                </div>
                <span className="badge bg-slate-200 border-none text-slate-400">13, dec, 2022</span>

                <div className="localisation flex gap-1 border rounded-2xl w-fit p-2">
                <img className="w-8 h-8" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-localization-online-marketing-flaticons-lineal-color-flat-icons.png"/>
                <p className="text-slate-400">ISIMM</p>
                </div>

                <div className="avatar-group -space-x-6 overflow-visible">
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
                        <span>+99</span>
                        </div>
                      
                    </div>
                    <p className="text-slate-400 pl-6 pt-3">are participating</p>
                    </div>
                                
              
            </div>
            </Link>

           
        </div>
    )
}

export default EventCard