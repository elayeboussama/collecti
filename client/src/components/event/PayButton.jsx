import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { usePaymentMutation, useUpdateEventMutation } from "../../endpoints/AuthEndpoints"
import Button from "../shared/Button"


const PayButton = ({onClose, informations, eventId, prevRaisedMoney, prevDonators }) =>{
  
    const [payment, { isLoading: requestLoading }] = usePaymentMutation()
   
   
    const handleCheckOut = async () =>{
        console.log(informations)
        try {
            const response = await payment({ informations }).unwrap()
          
            if(response.url){
                localStorage.setItem("damount",informations.amount)
                localStorage.setItem('amount', prevRaisedMoney+informations.amount);
                localStorage.setItem('donators', prevDonators+1);
                localStorage.setItem('eventId', eventId);
                localStorage.setItem('donatorEmail', informations.email);

                window.location.href=response.url;
            }
            // dispatch(setContent(<EventCreatedPopUp url={`http://localhost:3000/events/${response.id}`} id={response.id} />))
            // dispatch(openModal())
            // dispatch(setVisible(true))
            // setTimeout(() => {
            //     dispatch(setVisible(false))
            // }, 6000)
        } catch (error) {
            console.error(error)
        }

    }
    return(
        <Button 
        loading={ requestLoading} 
        className="mt-6 border-none btn animated-gradient" 
        onClick={()=>handleCheckOut()}
         >Check out</Button>
        // <button className="w-1/2 mt-6 btn btn-primary" onClick={()=>handleCheckOut()}>Check out</button>
    )
}


export default PayButton;