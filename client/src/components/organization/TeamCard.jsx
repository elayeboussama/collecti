const TeamCard = ({ name, post }) => {
  return (
    <div className="flex flex-row justify-start ">
      <p className="pt-3">{name} -{post}</p>
    </div>
  )
}

export default TeamCard