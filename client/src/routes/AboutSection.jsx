import Stat from "./Stat"

const AboutSection = () =>{
    return(

        <div className="flex flex-col items-center gap-20 py-28">
       
       <div className="flex-col hero-content lg:flex-row pl-44 ">
           <img src="https://cdn.discordapp.com/attachments/311564936004370434/1059440775567519866/undraw_transfer_money_re_6o1h.svg" className="max-w-sm rounded-lg shadow-2xl" />
           <div className='w-11/12 pl-24'>
               <h1 className="text-5xl font-bold">About us!</h1>
               <p className="py-6 ">Provident cupiditate voluptatem et in.
                Quaerat fugiat ut assumenda excepturi exercitationem quasi.
                 In deleniti eaque aut repudiandae et a id nisi.</p>

           </div>
           
       </div>
      <Stat/>
   </div>

    )
}

export default AboutSection