
import { useState } from "react"
import { Link } from "react-router-dom"
import DonationPopup from "./DonationPopup"
import image from "./rb.jpg"


const EventCard = ({eventTitle, handleShow, handleClick}) => {

    // const[showModal,setShowModal]=useState(false)
    // const handleVisible = () => setShowModal(!showModal)
    return (
        <div className="items-end shadow-xl card w-96 bg-base-100 image-full h-96 ">
            <figure className="h-full"><img src={image} alt="Shoes" /></figure>
              
          
                     <button className="w-2/5 btn btn-primary mb-80 ml-52" onClick={() => handleClick(1)}>
                        Donate
                    </button> 
               
                 
             
            <Link to={`1`}>
            <div className="w-11/12 pt-3 mb-4 ml-4 cursor-pointer card-body bg-slate-50 h-4/6 rounded-2xl">
                <h2 className="card-title text-slate-900">{eventTitle}</h2>
                <div className="organization flex gap-0.5">
                <p className="flex-grow-0 text-slate-300">By  </p>
                <p className="text-slate-400"> Nader ferjani</p>
                </div>
                <span className="border-none badge bg-slate-200 text-slate-400">13, dec, 2022</span>

                <div className="flex gap-1 p-2 border localisation rounded-2xl w-fit">
                <img className="w-8 h-8" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-localization-online-marketing-flaticons-lineal-color-flat-icons.png"/>
                <p className="text-slate-400">ISIMM</p>
                </div>

                <div className="-space-x-6 overflow-visible avatar-group">
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
                    <p className="pt-3 pl-6 text-slate-400">are participating</p>
                    </div>
                                
              
            </div>
            </Link>

           
        </div>
    )
}

export default EventCard