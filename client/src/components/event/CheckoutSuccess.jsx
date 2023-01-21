import { useEffect } from "react"
import { toast } from "react-toastify"
import { useDonateEventMutation } from "../../endpoints/AuthEndpoints"
import image from "./check.gif"

const CheckoutSuccess = () => {
  const [updateEvent] = useDonateEventMutation()

  const handleCheckOut = async () =>{
  const requestObject = {
                        
    _id: localStorage.getItem('eventId'),
    raisedMoney: localStorage.getItem('amount'),
    donators: localStorage.getItem('donators'),
    
}
try {
    console.log(requestObject)
    const response = await updateEvent({ ...requestObject }).unwrap()
    //dispatch(updateCredentials(response.EventUpdated))
    toast.success("Profile updated! You're all set. 🙌")
} catch (error) {
    console.error(error)
}}
useEffect(()=>{
  handleCheckOut()
},[])
  return (
    <div className="min-h-screen mt-0 hero">
      <div className="text-center hero-content">
        <div className="flex flex-col items-center max-w-3xl">
          <div className="flex flex-col items-center justify-between w-full space-y-5 text-center md:flex-row lg:text-left">
            <img
              className="max-w-xs"
              src="https://cdn.discordapp.com/attachments/311564936004370434/1065731563507155005/undraw_super_thank_you_re_f8bo_3.svg"
            />
            <p className="ml-8 place-self-center">Thank you for your generous donation! 🥰
              We confirm that your donation has been received and greatly appreciate your support.</p>


          </div>

          <img className="max-w-xs " src={image} />

        </div>
      </div>
    </div>
  )
}


export default CheckoutSuccess