const TeamCard = ({ name, post }) => {
  return (
    <div className="flex flex-row justify-start gap-6 avatar ">
      <p className="pt-3">{name} -{post}</p>
    </div>
  )
}

export default TeamCard