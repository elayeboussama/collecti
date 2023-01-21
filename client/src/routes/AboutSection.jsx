import Stat from "./Stat"

const AboutSection = () =>{
    return(

        <div className="flex flex-col items-center gap-20 py-28">
       
       <div className="flex-col hero-content lg:flex-row pl-44 ">
           <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059440775567519866/undraw_transfer_money_re_6o1h.svg" className="max-w-sm rounded-lg shadow-2xl" />
           <div className='w-11/12 pl-24'>
               <h1 className="text-5xl font-bold">About us!</h1>
               <p className="py-6 "> Our platform is dedicated to supporting 
               university clubs and organizations by providing financial assistance
                for their events and activities. We believe that these clubs play a 
                vital role in fostering a sense of community and personal growth among 
                students, and we want to do our part in helping them thrive. We 
               rely on the generosity of donors like you to help us continue this mission,
                and we are grateful for your support 🥰.</p>

           </div>
           
       </div>
      <Stat/>
   </div>

    )
}

export default AboutSection