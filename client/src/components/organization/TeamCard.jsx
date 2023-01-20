
const TeamCard = ({name, post})=>{
    return(
        <div className="flex flex-row justify-start gap-6 avatar ">
        <div className="w-20">
          <img src="https://placeimg.com/192/192/people" />
        
        </div>
      
            <p className="pt-3">{name} -{post}</p>
        
               
          
      
        
      </div>
    )
}

export default TeamCard